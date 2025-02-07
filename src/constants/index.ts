export const recentFolders = [
    "CAN 2024",
    "Documents",
    "Indépendance 2023",
    "Ordres de Missions",
    "Pétanque 2023",
    "Planning Activités 2023",
    "Plan de communication",
    "Rapports",
    "Team Building Nov 2023",
    "Village Africa", 
    "Youth African Forum...",   
    
  ];

  export const equipes =[
    { name:"Géneral", total:26},
    { name:"Sécrétariat", total:3},
    { name:"Cabinet du Ministre", total:6},
    { name:"Commissions de contôle", total:10},
    { name:"Directions des Systèmes d'informations", total:10},
    { name:"Comptes Bloqués", total:4},

  ]

 export const recentDocuments = [
    { name: "Document09.pdf", type: "pdf", author: "Maulidya L.", date: "26 Jan 2024 - 14h15", size: "234 KB", starred: false },
    { name: "Ordre de Mission Rafidou.docx", type: "docx", author: "Maulidya L.", date: "26 Jan 2024 - 14h15", size: "234 KB", starred: false },
    { name: "Rapport_Annuel_2023_Ministère......", type: "pdf", author: "Maulidya L.", date: "26 Jan 2024 - 14h15", size: "234 KB", starred: false },
    { name: "Document01.pdf", type: "pdf", author: "Maulidya L.", date: "26 Jan 2024 - 14h15", size: "234 KB", starred: false },
  { name: "Document02.pdf", type: "pdf", author: "Maulidya L.", date: "26 Jan 2024 - 14h15", size: "234 KB", starred: true },
  { name: "Document03.pdf", type: "pdf", author: "Maulidya L.", date: "26 Jan 2024 - 14h15", size: "234 KB", starred: false },
  { name: "Document04.pdf", type: "pdf", author: "Maulidya L.", date: "26 Jan 2024 - 14h15", size: "234 KB", starred: false },
  { name: "Document05.pdf", type: "pdf", author: "Maulidya L.", date: "26 Jan 2024 - 14h15", size: "234 KB", starred: true },
  { name: "Document06.pdf", type: "pdf", author: "Maulidya L.", date: "26 Jan 2024 - 14h15", size: "234 KB", starred: false },
  { name: "Document07.pdf", type: "pdf", author: "Maulidya L.", date: "26 Jan 2024 - 14h15", size: "234 KB", starred: false },
  { name: "Document08.pdf", type: "pdf", author: "Maulidya L.", date: "26 Jan 2024 - 14h15", size: "234 KB", starred: false },
  { name: "Document09.pdf", type: "pdf", author: "Maulidya L.", date: "26 Jan 2024 - 14h15", size: "234 KB", starred: true }
    


  ];

 export const users = [
    {  name: "Norman Gordon", email: "norman@example.com", role: "Membre", status: "Actif" },
    {  name: "Fleece Marigold", email: "fleece@example.com", role: "Membre", status: "Inactif" },
    {  name: "Thomas R. Toe", email: "thomas@domain.com", role: "Responsable", status: "Actif" },
    {  name: "Benjamin Evident", email: "benjamin@example.com", role: "Membre", status: "Inactif" },
    {  name: "Niles Peppertrout", email: "niles@site.com", role: "Responsable", status: "Actif" },
    {  name: "Rodney Artichoke", email: "rodney@example.com", role: "Membre", status: "Inactif" },
    { name: "Wisteria Ravenclaw", email: "wisteria@ravenclaw.com", role: "Responsable", status: "Actif" },
    {  name: "Justin Case", email: "justin@yoursite.com", role: "Membre", status: "Actif" },
    { name: "Nathaniel Down", email: "nathaniel@sitename.com", role: "Responsable", status: "Actif" },
    { name: "Parsley Montana", email: "parsley@yourdomain.com", role: "Responsable", status: "Actif" },
    {  name: "Indigo Violet", email: "indigo@example.com", role: "Responsable", status: "Inactif" },
    {  name: "Lance Bogrol", email: "lance@example.com", role: "Responsable", status: "Inactif" },
];

export const organisations = Array.from({ length: 50 }, (_, i) => ({
  name: `Company ${i + 1}`,
  users: (i % 50) + 1, // Nombre aléatoire de users
  admin: `Admin ${i + 1}`,
  email: `admin${i + 1}@example.com`,
  statut: ["Actif", "Bloqué", "Inactif", "En attente"][i % 4], // Statut tournant
}));

