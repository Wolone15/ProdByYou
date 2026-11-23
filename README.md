# ProdByYou

Studio de production musicale en français. Crée un morceau avec Élan ou une timeline vide, ajoute des instruments, arrange les sections et enregistre tes voix.

## Démarrer en privé

Installe Node.js 20 ou plus récent. Sur Windows, double-clique sur **Lancer ProdByYou.cmd**. Sur macOS ou Linux, lance `node local.mjs`, puis ouvre http://127.0.0.1:5173.

L’atelier s’ouvre sans compte et sauvegarde ses productions sur l’ordinateur. Importe un projet `.lyes` exporté depuis la V2 pour le reprendre dans ProdByYou.

- 67 timbres synthétisés et une bibliothèque filtrable.
- Composition et arrangement avec Élan, enregistrement vocal, exports WAV et MIDI.
- [Séparation de sources](SEPARATION-AUDIO.md) avec Demucs installé sur la machine.

Les tests se lancent avec `npm test`. La version avec comptes, destinée à un hébergement séparé, se lance via `node server.mjs`.
