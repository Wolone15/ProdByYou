# ProdByYou

ProdByYou est un studio de production musicale en français. Préserve l’interface noire et rouge, les contrôles rectangulaires et les libellés simples.

- Lance l’atelier local avec `node local.mjs` (Node.js 20 ou plus récent). Le mode atelier sans compte doit rester limité à l’ordinateur qui le lance. La version hébergée utilise `node server.mjs` et des comptes séparés.
- Le code du navigateur est dans `src/`. Le catalogue est dans `src/model.js` et `src/instruments.js`, l’assistant Élan dans `src/composer.js`, `src/assistant.js` et `src/arrangement.js`.
- Préserve les identifiants des instruments et l’import des projets `.lyes`. Vérifie les changements avec `npm test`.
- Élan utilise actuellement des règles de composition. Pour la séparation audio, consulte `SEPARATION-AUDIO.md`. Des guitares déjà mixées peuvent rester groupées.
- Ne mets aucune clé Supabase dans le dépôt ni dans le code du navigateur. Les variables nécessaires à l’hébergement sont `SUPABASE_URL` et `SUPABASE_SERVICE_KEY`.
