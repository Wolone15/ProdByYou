import { spawn } from 'node:child_process';
import { homedir } from 'node:os';
import path from 'node:path';
import { createServer } from './server.mjs';

const host = '127.0.0.1';
const portArgument = process.argv.indexOf('--port');
const requestedPort = portArgument < 0 ? undefined : process.argv[portArgument + 1];
const port = Number(requestedPort ?? process.env.LYES_LOCAL_PORT ?? process.env.PORT ?? 5173);
const url = `http://${host}:${port}`;
const dataDirectory = process.env.LYES_DATA_DIR ?? path.join(
  process.env.LOCALAPPDATA || path.join(homedir(), '.local', 'share'), 'ProdByYou'
);
const server = createServer({ dataDirectory, personal: true });
server.on('error', error => {
  console.error(error.code === 'EADDRINUSE'
    ? `Le port ${port} est déjà utilisé. Si ProdByYou est déjà ouvert, retourne sur ${url}.`
    : `Impossible de démarrer ProdByYou (${error.code ?? error.message}).`);
  process.exitCode = 1;
});
server.listen(port, host, () => {
  console.log(`ProdByYou est ouvert ici : ${url}`);
  console.log('Laisse cette fenêtre ouverte pour utiliser le studio.');
  console.log(`Dossier des sauvegardes : ${dataDirectory}`);
  if (process.platform === 'win32') {
    const browser = spawn('explorer.exe', [url], { stdio: 'ignore', detached: true });
    browser.on('error', () => console.log(`Ouvre ${url} dans ton navigateur.`));
    browser.unref();
  }
});
