export const siteConfig = {
  name: "Do Nguyen Hoang Minh",
  title: "Développeur logiciel en formation — Alternance BUT2/3",
  description: "Portfolio de Do Nguyen Hoang Minh, étudiant en informatique à Paris-Saclay",
  accentColor: "#043A7E",
  social: {
    email: "https://mail.google.com/mail/?view=cm&to=dohoangminhvn1@gmail.com",
    linkedin: "https://www.linkedin.com/in/do-nguyenhoangminh/",
    github: "https://github.com/dohoangminh11",
  },
  aboutMe:
    "Étudiant en BUT2 Informatique à l'Université Paris-Saclay, je recherche une alternance de 24 mois en développement logiciel et applicatif. À l'aise en Python, C++ et Java, je développe des applications robustes avec un fort intérêt pour l'analyse de données et la résolution de problématiques concrètes. Méthodique et rigoureux, je m'adapte rapidement à un environnement technique exigeant.",
  //availability
  available: {
    available: true,
  },
  skills: ["Python", "Pandas", "Java", "C++", "SQL", "Linux"],
  projects: [
    {
      name: "Analyse de données sur differents footballeurs",
      description:
        "Analyse de l’historique des valeurs de marché de différents footballeurs (Base de donnees de 2004-2025, +53000 joueurs) : classements, évolutions absolues et relatives, valeurs initiale, maximale et récente.",
      link: "https://footballdataviewer.streamlit.app/",
      skills: ["Python", "Pandas", "Matplotlib", "StreamLit", "Analyse de données"],
    },
    {
      name: "Jeu de labyrinthe Python",
      description:
        "Jeu de labyrinthe avec interface graphique Turtle. Modes manuel (contrôles clavier) et automatique via algorithme DFS. Cellules colorées selon leur type (croisement, impasse, entrée, sortie).",
      link: "https://github.com/dohoangminh11/maze-bot-python",
      skills: ["Python", "Algorithmique", "DFS"],
    },
    {
      name: "Jeu 2D en C++",
      description:
        "Moteur de jeu 2D en C++ avec architecture orientée objet, gestion de sprites et animations, détection de collisions et logique d'objets interactifs.",
      link: "https://github.com/dohoangminh11/s102project-cgame",
      skills: ["C++", "POO", "Algorithmique"],
    },
    {
      name: "Base de données relationnelle",
      description:
        "Conception et gestion d'une base de données relationnelle : modélisation UML, schéma SQL complet, requêtes d'exploitation et gestion des contraintes d'intégrité.",
      link: "https://github.com/dohoangminh11",
      skills: ["SQL", "UML", "SQLDeveloper"],
    },
    {
      name: "Administration système UNIX",
      description:
        "Création d'un poste de travail sous UNIX : gestion des profils utilisateurs, droits administrateurs, arborescence de travail sécurisée.",
      link: "https://github.com/dohoangminh11",
      skills: ["Linux", "UNIX", "Administration système"],
    },
  ],
  experience: [
    {
      company: "TechPro.vn",
      title: "Stagiaire développeur full-stack",
      dateRange: "Juin 2026 - Aout 2026",
      bullets: [
        "Développement fullstack avec un stack React (front-end) et C# / .NET + PostgreSQL (back-end), dans un environnement de transformation numérique",
        "Formation et intégration de l'IA dans le workflow de développement (génération de code, revue assistée, automatisation)",
      ],
    },
    {
      company: "McDonalds",
      title: "Équipier polyvalent — temps partiel",
      dateRange: "Août 2025 - Juin 2026",
      bullets: [
        "Gestion simultanée de plusieurs postes en environnement à fort flux",
        "Rigueur, réactivité et respect strict des procédures",
      ],
    },
    {
      company: "Petits Frères des Pauvres",
      title: "Bénévole",
      dateRange: "Décembre 2024",
      bullets: [
        "Participation à la Visite de Noël contre l'isolement des personnes âgées",
        "Contact humain, organisation et animation",
      ],
    },
    {
      company: "Cours particuliers",
      title: "Tuteur",
      dateRange: "2022 - 2024",
      bullets: [
        "Accompagnement d'élèves en difficulté vers le brevet et le baccalauréat",
        "Matières : Mathématiques, Physique, Informatique, Anglais",
        "Adaptation des méthodes pédagogiques selon les profils",
      ],
    },
  ],
  education: [
    {
      school: "IUT d'Orsay — Université Paris-Saclay",
      degree: "BUT Informatique — parcours réalisation d'applications",
      dateRange: "2025 - 2028",
      achievements: [
        "BUT1 obtenu",
        "BUT2 en cours — recherche alternance 24 mois",
      ],
    },
    {
      school: "Université Grenoble Alpes",
      degree: "L1 Mathématiques - Informatique, Parcours International",
      dateRange: "2024 - 2025",
      achievements: [
        "L1 obtenue",
      ],
    },
    {
      school: "LFI Marguerite Duras, Vietnam",
      degree: "Baccalauréat Général",
      dateRange: "2024",
      achievements: [
        "Mention Très Bien",
      ],
    },
  ],
  langages: ["Français — C2", "Anglais — C2 : 8.5/9 IELTS Academic", "Vietnamien — Langue Maternelle", "Espagnol — B1"],
};
