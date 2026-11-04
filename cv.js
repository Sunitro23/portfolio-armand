// One-page CV based on CV_Armand_Masse_Java_Angular.pdf and the translated portfolio.
function buildCvDocument(doc) {
 const en = language === 'en';
 const copy = en ? {
  title: 'JUNIOR JAVA / ANGULAR DEVELOPER',
  application: 'Application to Sopra Steria • Defence & Security • Lille',
  summary: 'Junior developer with a bachelor’s degree, a year of work-study experience at Inetum and two development internships. Since completing my work-study placement in September 2024, I have continued developing personal projects and tools used at MNS. I want to strengthen my Java/Spring and Angular skills within an experienced team, bringing a service-oriented approach and experience building applications for real needs.',
  headings: ['PROFILE', 'TECHNICAL SKILLS', 'EXPERIENCE', 'PROJECTS AND CURRENT PRACTICE', 'EDUCATION AND LANGUAGES'],
  jobs: [
   'Digital support adviser / Civic service • MNS in Wattrelos | Dec 2025 – present',
   'AI / Full-stack Developer • Inetum, Lille | Sep 2023 – Sep 2024 • Work-study placement',
   'Angular Developer • TCD Web | Jan – Feb 2023 • Internship',
   'PHP Developer • Artanime | May – Jun 2022 • Internship'
  ],
  projects: [
   ['Game Room', 'https://games.sunitro.de/', 'React, Node.js, Socket.IO — Real-time multiplayer application with server-side rule validation and session recovery.'],
   ['Sheet – RPG Manager', 'https://sheet.sunitro.de/', 'Python, Flask, SQLite — Character, inventory and progression management, separating business rules from data access.']
  ],
  bachelor: 'Bachelor’s degree in Information Systems Administration',
  bachelorDetail: 'DevOps coursework: deployment, automation, maintenance and continuous integration.',
  bts: 'BTS SIO, software development specialisation',
  awarded: 'Awarded',
  languages: 'French: native • English: B2'
 } : {
  title: 'DÉVELOPPEUR JAVA / ANGULAR JUNIOR',
  application: 'Candidature Sopra Steria • Défense & Sécurité • Lille',
  summary: 'Développeur junior diplômé bac+3, avec une année d’alternance chez Inetum et deux stages en développement. Depuis la fin de mon alternance en septembre 2024, je poursuis ma pratique à travers des projets personnels et des outils utilisés à la MNS. Je souhaite consolider mes compétences Java/Spring et Angular au sein d’une équipe expérimentée, en apportant mon sens du service et mon expérience d’applications répondant à des besoins concrets.',
  headings: ['PROFIL', 'COMPÉTENCES TECHNIQUES', 'EXPÉRIENCES', 'PROJETS ET PRATIQUE ACTUELLE', 'FORMATION ET LANGUES'],
  jobs: [
   'Conseiller numérique / Service civique • MNS de Wattrelos | Déc. 2025 – en cours',
   'Développeur IA / Fullstack • Inetum, Lille | Sept. 2023 – sept. 2024 • Alternance',
   'Développeur Angular • TCD Web | Janv. – févr. 2023 • Stage',
   'Développeur PHP • Artanime | Mai – juin 2022 • Stage'
  ],
  projects: [
   ['Salle de jeux', 'https://games.sunitro.de/', 'React, Node.js, Socket.IO — Application multijoueur en temps réel, règles validées côté serveur et reprise de session.'],
   ['Sheet – Gestionnaire JDR', 'https://sheet.sunitro.de/', 'Python, Flask, SQLite — Gestion de personnages, inventaires et progression, avec séparation des règles métier et de l’accès aux données.']
  ],
  bachelor: 'Bachelor Administrateur des systèmes d’information',
  bachelorDetail: 'Enseignements DevOps : déploiement, automatisation, maintenance et intégration continue.',
  bts: 'BTS SIO, option SLAM',
  awarded: 'Obtenu',
  languages: 'Français langue maternelle • Anglais B2'
 };
 doc.documentElement.lang = language;
 doc.title = `Armand_Masse_CV_${language.toUpperCase()}`;
 const charset = doc.createElement('meta'); charset.charset = 'utf-8'; doc.head.append(charset);
 const viewport = doc.createElement('meta'); viewport.name = 'viewport'; viewport.content = 'width=device-width, initial-scale=1'; doc.head.append(viewport);
 const style = doc.createElement('style');
 style.textContent = `
 *{box-sizing:border-box}
 body{margin:0;color:#111;background:#eceef2;font:9.1pt/1.24 'DejaVu Sans',Arial,sans-serif}
 main{max-width:210mm;margin:24px auto;padding:14mm 15mm;background:#fff}
 header{margin-bottom:10px}h1{font-size:24pt;line-height:1.05;letter-spacing:.5pt;margin:0;color:#19394d}
 .headline{font-size:13pt;line-height:1.15;font-weight:700;color:#19394d;margin:1px 0 3px}
 .contact{font-size:8.5pt;line-height:1.35}
 h2{font-size:10.3pt;line-height:1.2;color:#19394d;margin:10px 0 4px;padding-bottom:5px;border-bottom:.6pt solid #9db5c7;break-after:avoid}
 h3{font-size:9.1pt;line-height:1.25;margin:7px 0 3px;break-after:avoid}
 p{margin:2px 0}ul{list-style:none;padding:0;margin:0}li{margin:3px 0}li::before{content:'• ';}
 a{color:#087398;text-decoration:underline;text-underline-offset:1px}
 article{break-inside:avoid}.skills,.education,.projects{font-size:8.55pt;line-height:1.25}.projects p{margin:4px 0}.education p{margin:3px 0}
 @page{size:A4;margin:14mm 15mm}
 @media print{body{background:white}main{margin:0;padding:0;max-width:none}p,li{orphans:2;widows:2}}
 @media screen and (max-width:600px){main{padding:20px;margin:10px}}
 `;
 doc.head.append(style);
 function el(tag, text, parent) {
  const node = doc.createElement(tag);
  if (text) node.textContent = text;
  if (parent) parent.append(node);
  return node;
 }
 function link(text, href, parent) { const node = el('a',text,parent); node.href = href; return node; }
 const main = el('main','',doc.body);
 const header = el('header','',main);
 el('h1','ARMAND MASSÉ',header);
 el('p',copy.title,header).className='headline';
 const contact=el('div','',header);contact.className='contact';
 el('p',copy.application,contact);
 const details=el('p','',contact);
 link('armand.masse23@gmail.com','mailto:armand.masse23@gmail.com',details);
 details.append(doc.createTextNode(` | 07 82 35 24 35 | ${document.querySelector('.contact-facts dd').textContent}`));
 el('p',en ? 'Available immediately • Driving licence, own vehicle • On-site / hybrid' : 'Disponible immédiatement • Permis B, véhiculé • Présentiel / hybride',contact);
 const links=el('p','',contact);
 link(en ? 'Portfolio and demos' : 'Portfolio et démonstrations','https://portfolio.sunitro.de/',links);
 links.append(doc.createTextNode(' | '));link('GitHub','https://github.com/Sunitro23',links);
 el('h2',copy.headings[0],main);el('p',copy.summary,main);
 el('h2',copy.headings[1],main);
 const skills=el('div','',main);skills.className='skills';
 document.querySelectorAll('.capability-grid article').forEach(item=>{
  const body=item.querySelector('p').cloneNode(true);
  body.querySelectorAll('br').forEach(br=>br.replaceWith(' · '));
  const line=el('p','',skills);el('strong',item.querySelector('h3').textContent+' ',line);
  line.append(doc.createTextNode(body.textContent));
 });
 el('h2',copy.headings[2],main);
 document.querySelectorAll('.career-entry').forEach((item,index)=>{
  const article=el('article','',main);el('h3',copy.jobs[index],article);
  const ul=el('ul','',article);
  item.querySelectorAll('.career-body > p:not(.career-tech)').forEach(p=>{
   const li=el('li',p.textContent,ul);
   const highlights=[['SSP Planning','https://planning.sunitro.de/'],['PMI Letters','https://pmi.sunitro.de/'],['Formation TST','https://portfolio.sunitro.de/formation-tst/'],['Artanime','https://artanime.sunitro.de/']];
   for (const [name,url] of highlights) {
    if (!li.textContent.includes(name)) continue;
    const parts=li.textContent.split(name);li.replaceChildren(doc.createTextNode(parts[0]));link(name,url,li);li.append(doc.createTextNode(parts.slice(1).join(name)));break;
   }
  });
 });
 el('h2',copy.headings[3],main);
 const projects=el('div','',main);projects.className='projects';
 copy.projects.forEach(([name,url,description])=>{
  const p=el('p','',projects);link(name,url,el('strong','',p));p.append(doc.createTextNode(' • '+description));
 });
 el('p',document.querySelectorAll('.portfolio-intro')[1].textContent,projects);
 el('h2',copy.headings[4],main);
 const education=el('div','',main);education.className='education';
 let line=el('p','',education);el('strong',copy.bachelor,line);line.append(doc.createTextNode(` • JUNIA XP | 2024 • ${copy.awarded}`));
 el('p',copy.bachelorDetail,education);
 line=el('p','',education);el('strong',copy.bts,line);line.append(doc.createTextNode(` • Saint-Rémi, Roubaix | 2023 • ${copy.awarded}`));
 el('p',copy.languages,education);
}

document.querySelector('#generate-cv').addEventListener('click', () => {
 const link = document.createElement('a');
 link.href = `assets/documents/CV_Armand_${language}.pdf?v=5`;
 link.download = `Armand_Masse_CV_${language.toUpperCase()}.pdf`;
 document.body.append(link);
 link.click();
 link.remove();
});
