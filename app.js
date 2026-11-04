// Dates : premier commit de l’historique Git local, et non date de clonage.
const projects = [
 {name:'Formation TST',repo:'formation-tst',url:'https://gitlab.com/tcd-web/formation-tst/-/tree/better-stagiaire',demo:'https://portfolio.sunitro.de/formation-tst/',previewKey:'formation-tst',date:'2023-01',dateLabel:'Réalisé en ',category:'Web',tags:['Angular','NestJS','TypeScript','Excel'],color:'blue'},
 {name:'SSP Planning — PA/PD',repo:'ssp-planning',sourceAvailable:false,demo:'https://planning.sunitro.de/',date:'2026-09-11',dateLabel:'Mis en ligne le ',category:'Web',tags:['JavaScript','LocalStorage','PDF'],description:'Planifier les permanences PA/PD selon les disponibilités et congés, équilibrer les affectations et exporter le planning en PDF. Les données restent dans le navigateur.',visual:'letters',label:'ORGANISER LES PERMANENCES',symbol:'PA / PD',color:'green'},
 {name:'Artanime',repo:'SiteArtanime',url:'https://github.com/Sunitro23/SiteArtanime',demo:'https://artanime.sunitro.de/',date:'2022-05-31',category:'Web',tags:['PHP','MariaDB','CSS'],description:'Un site associatif pour présenter les activités artistiques, les événements et les intervenants, avec un espace d’administration du contenu.',visual:'fashion',label:'SITE ASSOCIATIF',symbol:'Artanime',color:'violet'},
 {name:'Gilbert Immo',repo:'Kerrad_Masse_Vandervorst',url:'https://github.com/LaelV/Kerrad_Masse_Vandervorst',demo:'https://immo.sunitro.de/',date:'2022-02-21',category:'Web',tags:['HTML','CSS','JavaScript'],description:'Un site d’agence immobilière avec un catalogue d’appartements, maisons, immeubles, locaux commerciaux et terrains, ainsi que des fiches exportables en PDF.',visual:'shop',label:'CATALOGUE IMMOBILIER',symbol:'Immo.',color:'sand'},
 {name:'Sheet — Gestionnaire JDR',repo:'dnd-manager',demo:'https://sheet.sunitro.de/',date:'2026-07-29',category:'Web',tags:['Python','Flask','SQLite'],description:'Un gestionnaire de personnages et de campagnes de jeu de rôle, avec des fiches et des outils pour suivre les aventures.',visual:'api',label:'FICHES PERSONNAGES & CAMPAGNES',symbol:'D20',color:'violet'},
 {name:'Salle de jeux',repo:'card-game',demo:'https://games.sunitro.de/',date:'2026-04-21',category:'Web',tags:['React','Node.js','Socket.IO'],description:'Duel de cartes, Awalé et Twenty One : trois jeux à deux, dans des salons multijoueurs avec spectateurs.',visual:'cards',label:'JEUX MULTIJOUEURS EN TEMPS RÉEL',symbol:'♠',color:'violet'},
 {name:'PMI Letters',repo:'pmi-letters',demo:'https://pmi.sunitro.de/',date:'2026-04-09',category:'Web',tags:['JavaScript','Excel','Word'],description:'Transformer un fichier Excel et un modèle Word en courriers personnalisés, directement dans le navigateur.',visual:'letters',label:'PUBLIPOSTAGE EXCEL VERS WORD',symbol:'Aa',color:'blue'},
 {name:'Airneis — Boutique',repo:'angular-airneis',demo:'https://airneis.sunitro.de/',date:'2024-05-13',category:'Web',tags:['Angular','TypeScript','API REST'],description:'Une boutique de mobilier en ligne, connectée à une API pour parcourir les produits et leurs catégories.',visual:'shop',label:'BOUTIQUE DE MOBILIER',symbol:'airneis.',color:'sand'},
 {name:'Django Movie',repo:'django-movie',demo:'https://django.sunitro.de/',date:'2024-04-05',category:'Web',tags:['Python','Django','OMDb'],description:'Rechercher des films et parcourir une collection dans une application web connectée à OMDb.',visual:'movie',label:'RECHERCHE DE FILMS',symbol:'▶',color:'red'},
 {name:'Airneis — API',repo:'flask-api-python',url:'https://gitlab.com/Sunitro23/flask-api-python',date:'2024-02-21',category:'Backend',tags:['Python','Flask','JWT'],description:'Le backend du catalogue Airneis : produits, catégories et authentification pour alimenter la boutique.',visual:'api',label:'API DE CATALOGUE & AUTHENTIFICATION',symbol:'{ api }',color:'green'},
 {name:'Chic et Choc',repo:'template',demo:'https://template.sunitro.de/',date:'2023-10-19',category:'Web',tags:['HTML','CSS','JavaScript'],description:'Une interface de boutique de vêtements et accessoires, avec navigation par collections.',visual:'fashion',label:'BOUTIQUE DE VÊTEMENTS',symbol:'CHIC & CHOC',color:'sand'},
 {name:'Pépépital — Gestion',repo:'Symfony_Pepepital',demo:'https://pepepital.sunitro.de/gestion/',previewKey:'pepepital-gestion',date:'2023-03-07',category:'Web',tags:['PHP','Symfony','SQL'],description:'Une application de gestion hospitalière avec des espaces dédiés aux médecins et aux assistants.',visual:'health',label:'GESTION DES RENDEZ-VOUS',symbol:'✚',color:'blue'},
 {name:'Pépépital — Rendez-vous',repo:'Pepeflutter',demo:'https://pepepital.sunitro.de/patient/',previewKey:'pepepital-patient',url:'https://github.com/Basile-Mercado/Pepeflutter',date:'2023-02-28',category:'Mobile',tags:['Flutter','Dart'],description:'Le volet mobile de Pépépital, consacré aux rendez-vous des patients.',visual:'mobile',label:'APPLICATION PATIENT',symbol:'✚',color:'violet'},
 {name:'Pépépital — Consultations',repo:'slam2023_pepepital_consult',demo:'https://pepepital.sunitro.de/consultations/',previewKey:'pepepital-consultations',date:'2022-12-02',category:'Web',tags:['PHP','Symfony','SQL'],description:'Le module de consultations du projet hospitalier Pépépital, développé avec Symfony.',visual:'health',label:'CONSULTATIONS & TRAITEMENTS',symbol:'✚',color:'green'},
 {name:'Pépépital — Restauration',repo:'AP_Pepepital',demo:'https://pepepital.sunitro.de/restauration/',previewKey:'pepepital-restauration',previewLabels:{desktop:'Cuisine',mobile:'Repas du service'},url:'https://github.com/Basile-Mercado/AP_Pepepital',date:'2022-09-13',category:'Desktop',tags:['Java','SQL'],description:'Une application Java dédiée à la gestion de la restauration dans un établissement hospitalier.',visual:'desktop',label:'GESTION DES REPAS',symbol:'☕',color:'red'}
];
const projectDetails = {
 "formation-tst": ["Application de gestion des formations en Angular et NestJS : formateurs, stagiaires, sessions et modules, avec export Excel.", ["Consultation et gestion des formateurs, sessions, modules et formations ; suivi des stagiaires inscrits.", "Export Excel de synthèse des formations. Démonstration publique : identifiant demo, mot de passe demo."], ["Interface Angular Material et services TypeScript reliés à une API REST NestJS, structurée en modules métier.", "Données fictives conservées en mémoire sur le serveur et partagées entre visiteurs ; elles sont réinitialisées au redémarrage. La connexion de démonstration est gérée côté navigateur."]],
  "ssp-planning": [
    "Planificateur JavaScript de permanences PA/PD : disponibilités, congés, quotas et répartition des affectations, avec sauvegarde locale et export PDF.",
    [
      "Paramétrage des agents, disponibilités par semaine paire ou impaire, congés et affectations manuelles.",
      "Génération du planning, indicateurs de répartition, alertes et export mensuel en PDF."
    ],
    [
      "Le moteur filtre les agents éligibles puis les classe par un score pondérant les quotas, l’équilibre PA/PD et les jours déjà attribués. Il signale les affectations impossibles et les dépassements de quota.",
      "L’état est sérialisé en JSON dans LocalStorage. Un import/export JSON permet de sauvegarder ou de transférer les données."
    ]
  ],
  "SiteArtanime": [
    "Site associatif en PHP et MariaDB : activités, cours et événements alimentés par une base relationnelle, avec administration du contenu.",
    [
      "Consultation des activités, cours, événements, animateurs et membres du conseil d’administration.",
      "Espace administrateur pour ajouter du contenu et ses illustrations."
    ],
    [
      "Les pages sont rendues côté serveur en PHP. Les fonctions d’accès aux données utilisent PDO et des requêtes SQL avec paramètres.",
      "Les jointures relient les cours aux activités et animateurs, ainsi que les activités et événements à leurs images."
    ]
  ],
  "Kerrad_Masse_Vandervorst": [
    "Catalogue immobilier statique en HTML, CSS et Bootstrap, avec fiches par type de bien et génération de PDF dans le navigateur.",
    [
      "Navigation entre appartements, maisons, immeubles, locaux commerciaux et terrains.",
      "Consultation de fiches illustrées et téléchargement de leur version PDF."
    ],
    [
      "Le catalogue repose sur des pages HTML et des composants Bootstrap, avec JavaScript pour les interactions.",
      "La bibliothèque html2pdf transforme le contenu d’une fiche en document téléchargeable côté navigateur. Les annonces sont intégrées aux pages HTML."
    ]
  ],
  "dnd-manager": [
    "Gestionnaire de personnages JDR en Python, Flask et SQLite : fiches, inventaire, progression et outils de maître de jeu.",
    [
      "Création et suivi des personnages, de leur santé, de leur inventaire et de leur progression.",
      "Outils de maître de jeu pour gérer les personnages, les voies et les capacités."
    ],
    [
      "Le backend Flask est organisé en modules fonctionnels. La santé et la progression séparent règles métier, services applicatifs et accès à SQLite.",
      "Une API expose des données de personnages avec contrôle d’accès. Des tests couvrent notamment les règles, la persistance, l’inventaire et les sauvegardes."
    ]
  ],
  "card-game": [
    "Trois jeux multijoueurs en React et Node.js, synchronisés avec Socket.IO : salons, spectateurs, règles côté serveur et reprise de session.",
    [
      "Salons accueillant jusqu’à huit personnes, avec deux joueurs par partie et les autres en spectateurs.",
      "Duel de cartes, Awalé et Twenty One, avec choix de l’adversaire, revanche et retour au salon."
    ],
    [
      "Le serveur valide les actions et les tours, applique un moteur de règles par jeu et diffuse un état adapté à chaque participant pour préserver les informations privées.",
      "Un jeton conservé dans sessionStorage permet de reprendre sa place pendant 30 secondes après une coupure. Les parties restent en mémoire serveur. Des tests couvrent règles, confidentialité et reconnexion."
    ]
  ],
  "pmi-letters": [
    "Outil de publipostage en JavaScript : lecture d’Excel et fusion d’un modèle Word en un DOCX unique, directement dans le navigateur.",
    [
      "Import d’un fichier Excel et d’un modèle Word, sélection de la semaine et préparation des courriers.",
      "Génération d’un document unique, avec une lettre par page et le détail des lignes ignorées."
    ],
    [
      "SheetJS lit le classeur et ses dates. PizZip ouvre le DOCX pour remplacer les champs dans le XML et assembler les lettres en conservant la mise en forme du modèle.",
      "Le traitement vérifie les champs obligatoires du modèle et les données d’entrée. Les fichiers sont traités côté navigateur ; le dépôt comprend aussi une version Electron."
    ]
  ],
  "angular-airneis": [
    "Catalogue de mobilier en Angular et TypeScript, connecté à une API REST pour charger les produits et leurs catégories.",
    [
      "Affichage d’un catalogue de mobilier et de ses catégories dans une interface à composants.",
      "Chargement des produits depuis le backend Airneis avec les options de recherche du catalogue."
    ],
    [
      "Des services Angular injectables centralisent les appels HTTP. ProductService transmet les options de pagination, tri et filtrage au point d’entrée /api/products/options.",
      "Les modèles TypeScript décrivent les produits et réponses paginées. Le projet utilise Angular Material et un module d’authentification chargé via le routeur."
    ]
  ],
  "django-movie": [
    "Application Django de recherche de films : consultation de la base locale, récupération depuis OMDb et stockage via l’ORM.",
    [
      "Recherche par titre et consultation des affiches, synopsis, années et genres.",
      "Page d’accueil présentant les derniers films enregistrés dans la base."
    ],
    [
      "Le service cherche d’abord les titres dans la base. En l’absence de résultat local, il interroge OMDb et enregistre les films récupérés.",
      "Les modèles Movie et Genre sont reliés en plusieurs-à-plusieurs par l’ORM Django. Les vues traitent les formulaires et rendent les templates HTML."
    ]
  ],
  "flask-api-python": [
    "API de commerce en Python et Flask : catalogue filtrable et paginé, données relationnelles avec SQLAlchemy et authentification JWT.",
    [
      "Gestion des produits, catégories, utilisateurs, paniers et commandes.",
      "Recherche de produits avec filtres de prix et de catégorie, tri et pagination."
    ],
    [
      "Flask-RESTX structure les ressources HTTP et les schémas de réponse. Les routes délèguent les opérations à des services utilisant SQLAlchemy.",
      "L’authentification repose sur JWT. Les écritures du catalogue sont réservées aux administrateurs ; des tests vérifient ces restrictions et l’accès public au catalogue."
    ]
  ],
  "template": [
    "Prototype de boutique en HTML, CSS et JavaScript : pages de collection, fiche produit, panier et formulaires.",
    [
      "Parcours de présentation d’une boutique de vêtements, avec pages produit, panier, connexion et inscription.",
      "Pages complémentaires de présentation, recrutement et erreurs."
    ],
    [
      "L’interface est composée de pages HTML partageant une feuille de styles et des scripts JavaScript, notamment pour les contrôles de champs.",
      "Ce projet porte sur l’intégration de l’interface : les écrans de panier et de connexion sont des maquettes, sans backend de commande ou de paiement."
    ]
  ],
  "Symfony_Pepepital": [
    "Application Symfony de gestion des rendez-vous hospitaliers, avec espaces médecin, assistant et patient et persistance Doctrine.",
    [
      "Consultation et modification des rendez-vous et de leur statut selon l’espace utilisateur.",
      "Saisie des indisponibilités des médecins et prise de rendez-vous côté patient."
    ],
    [
      "Les contrôleurs Symfony traitent les demandes, les formulaires structurent la saisie et les vues sont rendues avec Twig.",
      "Doctrine relie utilisateurs, patients, médecins, rendez-vous et indisponibilités dans une base relationnelle. Le projet fournit aussi les ressources API utilisées par le client patient."
    ]
  ],
  "Pepeflutter": [
    "Client patient Flutter et Dart connecté au backend Pépépital : connexion, consultation et prise de rendez-vous par API HTTP.",
    [
      "Connexion du patient, consultation de ses rendez-vous et accès à son profil.",
      "Formulaire de prise de rendez-vous et démonstration accessible en version web."
    ],
    [
      "Le client utilise le package HTTP pour communiquer avec l’API et traite les réponses JSON. La connexion récupère un jeton JWT auprès du backend.",
      "Le chargement des rendez-vous est asynchrone et présenté avec FutureBuilder. Les écrans et la fonction d’accès à l’API sont séparés dans le projet Dart."
    ]
  ],
  "slam2023_pepepital_consult": [
    "Module Symfony de suivi des consultations et traitements, avec formulaires métier et modèle relationnel géré par Doctrine.",
    [
      "Gestion des consultations et des traitements associés au parcours de soin.",
      "Gestion du référentiel de médicaments, de leurs indications et effets secondaires."
    ],
    [
      "L’application suit une organisation en contrôleurs, formulaires, entités et repositories. Doctrine assure l’accès aux données, Twig le rendu des pages.",
      "Le modèle relie consultations, patients, médecins, traitements et médicaments. Bootstrap et Webpack Encore sont utilisés pour l’interface et ses ressources."
    ]
  ],
  "AP_Pepepital": [
    "Application de bureau Java Swing pour gérer les repas hospitaliers, avec accès SQL via JDBC et classes DAO.",
    [
      "Choix des repas associés aux séjours et consultation des repas d’un service.",
      "Vues de cuisine, historique et gestion du personnel dans des fenêtres dédiées."
    ],
    [
      "L’interface utilise Java Swing. Les classes DAO exécutent les requêtes JDBC et reconstruisent les objets métier à partir des données relationnelles.",
      "Les repas sont reliés aux séjours, patients, chambres et services. La démonstration web donne accès à l’application de bureau à distance."
    ]
  ]
};
const projectContributions = {
 'ssp-planning': ['Créé dans le cadre de mon service civique à la MNS de Wattrelos pour planifier les permanences des assistants sociaux en tenant compte des congés, du télétravail et des indisponibilités.'],
 'pmi-letters': ['Créé dans le cadre de mon service civique à la MNS de Wattrelos pour générer les courriers et documents utilisés chaque semaine par le service PMI.'],
 'SiteArtanime': ['Site réalisé en autonomie pendant mon stage de mai à juin 2022, de la maquette à la mise en ligne. Suivi des tâches avec Trello et présentation hebdomadaire à l’association.']
};
projects.forEach(project => {
 const [description, features, implementation] = projectDetails[project.repo];
 Object.assign(project, { description, features, implementation });
});
let filter = 'Tous';
const list = document.querySelector('#project-list');
const frenchProjects = projects.map(project => ({...project}));
function dateFormat(value, compact = false) { return new Intl.DateTimeFormat(language === 'en' ? 'en-GB' : 'fr-FR',{...(compact ? {month:'short'} : {...(value.length === 7 ? {} : {day:'numeric'}),month:'long'}),year:'numeric',timeZone:'UTC'}).format(new Date(value)); }
const featuredRepos = ['card-game', 'ssp-planning', 'pmi-letters'];
function projectCard(p, compact = false, index = 0) {
 const card = document.createElement('article');
 const dateDescription = `${p.dateLabel ? t(p.dateLabel) : (language === 'en' ? 'First commit on ' : 'Premier commit le ')}${dateFormat(p.date)}`;
 card.className = compact ? 'project-row' : `project-card featured-card ${index === 0 ? 'featured-lead' : ''}`;
 const capture = p.demo ? `assets/previews/${p.previewKey || new URL(p.demo).hostname.split('.')[0]}-desktop.png?v=3` : null;
 const art = capture ? `<img src="${capture}" alt="" loading="lazy" decoding="async" width="1365" height="900">` : '<div class="api-art" aria-hidden="true"><span>REST API</span><code>GET /products<br>POST /auth/login<br>JSON · JWT · SQL</code></div>';
 card.innerHTML = `<div class="project-visual ${p.color}">${art}</div><div class="card-body"><div class="project-meta"><span>${p.category}</span><time class="project-date" datetime="${p.date}" title="${dateDescription}" aria-label="${dateDescription}"><svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><rect x="3" y="5" width="18" height="16" rx="3"/><path d="M7 3v4m10-4v4M3 11h18"/></svg><span>${dateFormat(p.date, true)}</span></time></div><h3><button type="button" class="card-preview-trigger" data-preview="${p.repo}" aria-haspopup="dialog" aria-label="${language === 'en' ? 'View details for' : 'Voir les détails de'} ${p.name}">${p.name}<span aria-hidden="true">↗</span></button></h3><p>${p.description}</p><div class="tags">${p.tags.map(t=>`<span>${t}</span>`).join('')}</div><span class="card-detail-hint" aria-hidden="true">${t('Détails du projet ↗')}</span></div>`;
 return card;
}
function render(){
 const sort = document.querySelector('#sort').value;
 const selected = projects.filter(p=>filter==='Tous'||p.category===filter).sort((a,b)=> (sort === 'asc' ? 1 : -1)*a.date.localeCompare(b.date));
 document.querySelector('#count').textContent = `${selected.length} ${t('projet')}${selected.length>1?'s':''}`;
 list.replaceChildren();
 const isSelection = filter === 'Tous' && sort === 'selection';
 if (isSelection) {
  const grid = document.createElement('div'); grid.className = 'featured-grid';
  featuredRepos.forEach((repo, index)=>grid.append(projectCard(projects.find(p=>p.repo===repo),false,index)));
  list.append(grid);
  const remaining = selected.filter(p=>!featuredRepos.includes(p.repo));
  const archive = document.createElement('section'); archive.className = 'project-archive';
  archive.setAttribute('aria-labelledby', 'other-projects-heading');
  const summary = document.createElement('h3'); summary.id = 'other-projects-heading'; summary.innerHTML = `${t('Autres projets')} <span>${remaining.length} ${t('réalisations')}</span>`;
  archive.append(summary);
  const rows = document.createElement('div'); rows.className = 'project-rows';
  remaining.forEach(p=>rows.append(projectCard(p,true)));archive.append(rows);list.append(archive);
 } else {
  const rows = document.createElement('div');rows.className = 'project-rows';selected.forEach(p=>rows.append(projectCard(p,true)));list.append(rows);
 }
}
document.querySelectorAll('[data-filter]').forEach(button=>button.addEventListener('click',()=>{filter=button.dataset.filter;document.querySelectorAll('[data-filter]').forEach(b=>{b.classList.toggle('active',b===button);b.setAttribute('aria-pressed',String(b===button));});render();}));
document.querySelector('#sort').addEventListener('change',render);

const preview = document.querySelector('#project-preview');
const previewImage = document.querySelector('#preview-image');
const previewModes = [...document.querySelectorAll('[data-preview-mode]')];
let previewProject = null;
let previewMode = 'desktop';
let previewTrigger = null;
function showCapture(mode) {
 if (!previewProject?.demo) return;
 previewMode = mode;
 const host = new URL(previewProject.demo).hostname.split('.')[0];
 document.querySelector('#preview-stage').scrollTop = 0;
 previewImage.src = `assets/previews/${previewProject.previewKey || host}-${mode}.png?v=3`;
 document.querySelector('#preview-full-image').href = previewImage.src;
 const captureName = host === 'planning' ? (language === 'en' ? 'SSP Planning — demo data' : 'SSP Planning — données de démonstration') : host === 'games' ? (language === 'en' ? 'Twenty One — game in progress' : 'Twenty One — partie en cours') : host === 'sheet' ? `${language === 'en' ? 'Character sheet' : 'Fiche personnage'} — ${mode === 'desktop' ? 'Avesdios' : 'Fangorn'}` : previewProject.name;
 const viewLabel = t(previewProject.previewLabels?.[mode] || (mode === 'desktop' ? 'version ordinateur' : 'version mobile'));
 previewImage.alt = `${language === 'en' ? 'Screenshot of' : 'Capture de'} ${captureName} — ${viewLabel}`;
 document.querySelector('#preview-stage').dataset.mode = previewProject.previewLabels ? 'desktop' : mode;
 document.querySelector('#preview-caption').textContent = `${captureName} · ${viewLabel} · ${t('septembre 2026')}`;
 document.querySelector('#preview-error').hidden = true;
 previewImage.hidden = false;
 previewModes.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.previewMode === mode)));
}
function openProject(button) {
 if (!button) return;
 previewProject = projects.find(project => project.repo === (button.dataset.preview || button.dataset.careerProject));
 if (!previewProject) return;
 previewTrigger = button;
 document.querySelector('#preview-title').textContent = previewProject.name;
 document.querySelector('#preview-description').textContent = previewProject.description;
 const visit = document.querySelector('#preview-visit');
 visit.hidden = !previewProject.demo;
 if (previewProject.demo) visit.href = previewProject.demo;
 else visit.removeAttribute('href');
 const source = document.querySelector('#preview-source');
 source.hidden = previewProject.sourceAvailable === false;
 source.href = previewProject.url || 'https://github.com/Sunitro23/' + previewProject.repo;
 const detail = document.querySelector('#preview-details');
 detail.replaceChildren();
 const sections = [['Fonctionnalités', previewProject.features], ['Réalisation technique', previewProject.implementation]];
 if (projectContributions[previewProject.repo]) sections.unshift(['Contexte et contribution', projectContributions[previewProject.repo]]);
 for (const [title, items] of sections) {
  const section = document.createElement('section');
  const heading = document.createElement('h3'); heading.textContent = t(title); section.append(heading);
  const ul = document.createElement('ul');
  items.forEach(text => { const li = document.createElement('li'); li.textContent = t(text); ul.append(li); });
  section.append(ul); detail.append(section);
 }
 const tags = document.querySelector('#preview-tags'); tags.replaceChildren();
 previewProject.tags.forEach(text => { const tag = document.createElement('span'); tag.textContent = text; tags.append(tag); });
 document.querySelector('#preview-capture').hidden = !previewProject.demo;
 visit.setAttribute('aria-label', language === 'en' ? `Open ${previewProject.name} in a new tab` : `Ouvrir ${previewProject.name} dans un nouvel onglet`);
 document.querySelector('#preview-domain').textContent = previewProject.demo ? new URL(previewProject.demo).hostname : '';
 document.querySelector('#preview-caption').textContent = '';
 previewModes.forEach(button => { button.textContent = t(previewProject.previewLabels?.[button.dataset.previewMode] || (button.dataset.previewMode === 'desktop' ? 'Ordinateur' : 'Mobile')); });
 if (previewProject.demo) showCapture('desktop');
 preview.showModal();
 preview.scrollTop = 0;
 document.body.classList.add('preview-open');
}
list.addEventListener('click', event => openProject(event.target.closest('[data-preview]')));
document.querySelectorAll('[data-career-project]').forEach(button => button.addEventListener('click', () => openProject(button)));
previewModes.forEach(button => button.addEventListener('click', () => showCapture(button.dataset.previewMode)));
previewImage.addEventListener('error', () => { previewImage.hidden = true; document.querySelector('#preview-error').hidden = false; });
document.querySelector('#preview-close').addEventListener('click', () => preview.close());
let backdropStart = false;
preview.addEventListener('pointerdown', event => { backdropStart = event.target === preview; });
preview.addEventListener('click', event => { if (backdropStart && event.target === preview) preview.close(); backdropStart = false; });
preview.addEventListener('close', () => { document.body.classList.remove('preview-open'); previewTrigger?.focus(); });
preview.addEventListener('keydown', event => {
 if (event.target.matches('[data-preview-mode]') && (event.key === 'ArrowRight' || event.key === 'ArrowLeft')) {
  event.preventDefault(); showCapture(previewMode === 'desktop' ? 'mobile' : 'desktop');
 }
});

function applyLanguage() {
 translatePage();
 projects.forEach((project, index) => {
  Object.assign(project, frenchProjects[index]);
  if (language === 'en') {
   const [name, description, features, implementation] = englishProjects[project.repo];
   Object.assign(project, {name, description, features, implementation});
  }
 });
 render();
}
document.querySelector('#language').addEventListener('change', event => {
 language = event.target.value === 'en' ? 'en' : 'fr';
 try { localStorage.setItem('portfolio-language', language); } catch {}
 applyLanguage();
});
applyLanguage();
