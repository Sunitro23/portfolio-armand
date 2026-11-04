# Portfolio Armand Massé

Site statique en français, sans compilation. Fichiers principaux : `index.html`, `style.css`, `app.js`. Le CV original est servi depuis `assets/documents/CV_Armand.pdf`.

## Structure et présentation

Accueil, projets, parcours professionnel et formation, compétences, centres d’intérêt, contact. La présentation utilise une palette bleu nuit et violette, avec un panneau clair pour distinguer la formation de la chronologie professionnelle.

Les trois projets mis en avant sont définis dans `featuredRepos` : Salle de jeux, SSP Planning et PMI Letters. Les onze autres sont affichés directement dans « Autres projets », sans accordéon. Les filtres et les tris chronologiques affichent directement les résultats. L’accueil conserve le portrait devant un disque violet et un petit bloc de code. Les cartes utilisent les captures réelles des applications, chargées à la demande. L’API sans capture dispose d’un visuel textuel.

Chaque projet ouvre une fiche avec fonctionnalités, réalisation technique, technologies et liens vers le code ou l’application selon disponibilité. Les descriptions enrichies sont dans `projectDetails` et les contributions documentées dans `projectContributions`. Les captures sont limitées à 300 px de hauteur, 230 px sur mobile, et peuvent être ouvertes en grand.

## Sources

Les descriptions techniques sont fondées sur les sources locales des quatorze projets. Les expériences, formations, langues et informations pratiques proviennent du CV fourni. Les dates des projets correspondent au premier commit disponible, sauf SSP Planning dont la date de mise en ligne est indiquée. Aucun dépôt source n’est renseigné pour SSP Planning.

Les captures Pépépital utilisent des comptes fictifs ; aucun identifiant n’est inclus dans le portfolio. La restauration est une application Java de bureau accessible à distance. Les captures Sheet présentent les fiches publiques Avesdios et Fangorn ; Salle de jeux montre une partie de démonstration Twenty One.

## Exécution et publication

Ouvrir `index.html` ou servir ce dossier avec `python3 -m http.server 8090 --bind 127.0.0.1`. Polices Google Fonts avec polices système de secours.

Publication : `docker compose up -d --build`. Le reverse proxy utilise `http://portfolio:80` sur `proxy-network` ; aucun port public supplémentaire.

## Vérifications de la refonte

Navigation et affichage contrôlés dans Chromium à 1440, 768, 390 et 320 px : ordre des sections, quatorze fiches, filtres, tri, ouverture/fermeture au clavier et retour du focus. Chargement de toutes les captures et proportions du portrait vérifiés. Les popups et le téléchargement du CV sont conservés.
