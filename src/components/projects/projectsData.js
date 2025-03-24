const projects = [
  {
    id: 1,
    title: {
      en: "Elfo",
    es: "Elfo",},
    description: {
      en: "A gift suggestion app. In Elfo, users can upload gifts they've received and categorize them for easy reference. They can create a personalized `My People` library to store favorite recipients and quickly access gift ideas for them. The app features a search function with filters, allowing users to find gift suggestions based on specific traits like age, interests, or relationship. Users can also leave comments on gifts, mark their favorites, and browse through different categories to discover new gift ideas. It’s a tool to organize and find the perfect present, making gift-giving easier and more thoughtful.",
      es: "Una app para recomendación de regalos. En Elfo, los usuarios pueden subir los regalos que han recibido y categorizarlos para tenerlos organizados. Pueden crear una biblioteca personalizada llamada `Mis personas` para guardar a sus destinatarios favoritos y acceder rápidamente a ideas de regalos para ellos. La app tiene una función de búsqueda con filtros, que permite encontrar sugerencias de regalos basadas en características como edad, intereses o relación. Los usuarios también pueden dejar comentarios en los regalos, marcarlos como favoritos y explorar diferentes categorías para descubrir nuevas ideas. Es una herramienta para organizar y encontrar el regalo perfecto, haciendo el proceso de regalar más fácil y reflexivo.",
    },
    technologies: [
      { name: "React", image: "/icons/react.svg" },
      { name: "Vite", image: "/icons/vite.svg" },
      { name: "CSS3", image: "/icons/css3.png" },
      { name: "Node.js", image: "/icons/nodejs.svg" },
      { name: "MongoDB", image: "/icons/mongodb.svg" },
      { name: "Firebase", image: "/icons/firebase.png" },
      { name: "Express", image: "/icons/express.png" },
    ],
    image: "/projects/Elfo/Dashboard.png",
    liveDemo: "https://elfo.netlify.app/",
    github: "https://github.com/Manteca24/front-elfo",
  },
  {
    id: 2,
    title: {en:"Dashboard",es: "Tablero Personal",},
    description: {
      en: "A project dashboard providing insights and data visualization. This tool helps users track progress, manage tasks, and analyze performance metrics efficiently. It includes interactive charts and a user-friendly interface.",
      es: "Un panel de control de proyectos que proporciona información y visualización de datos. Esta herramienta ayuda a los usuarios a hacer un seguimiento del progreso, gestionar tareas y analizar métricas de rendimiento de manera eficiente. Incluye gráficos interactivos y una interfaz fácil de usar.",
    },
    technologies: [
      { name: "JavaScript", image: "/icons/javascript.png" },
      { name: "CSS3", image: "/icons/css3.png" },
    ],
    image: "/projects/Dashboard/dashboard.png",
    liveDemo: "https://manteca24.github.io/project-break-dashboard/",
    github: "https://github.com/Manteca24/project-break-dashboard",
  },
  {
    id: 3,
    title: {en:"Animal Quiz",es:"Reto Animal",},
    description: {
      en: "An educational game app where users can test their knowledge about animals. The app includes a variety of categories like insects, mammals, reptiles, and birds. Users can answer questions, track their scores, and learn fun facts about different animals. The app is built with Node.js, Express, MongoDB, React, and Vite, and the API is built with my own backend.",
      es: "Una app educativa de trivia donde los usuarios pueden poner a prueba su conocimiento sobre animales. La app incluye diversas categorías como insectos, mamíferos, reptiles y aves. Los usuarios pueden responder preguntas, hacer un seguimiento de sus puntuaciones y aprender datos curiosos sobre diferentes animales. El proyecto está construido con Node.js, Express, MongoDB, React y Vite. La API ha sido desarrollada con mi propio backend.",
    },
    technologies: [
      { name: "Node.js", image: "/icons/nodejs.svg" },
      { name: "Express", image: "/icons/express.png" },
      { name: "MongoDB", image: "/icons/mongodb.svg" },
      { name: "React", image: "/icons/react.svg" },
      { name: "Vite", image: "/icons/vite.svg" },
      { name: "CSS3", image: "/icons/css3.png" },

    ],
    image: "/projects/AnimalQuiz/screenshot.png",
    liveDemo: "https://retoanimal.netlify.app/",
    github: "https://github.com/Manteca24/animal-trivia-app",
  },
  {
    id: 4,
    title: {en:"Online Clothing Store",es:"Tienda de Ropa",},
    description: {
      en: "An online clothing store that allows users to browse and filter products. Users can sign up and log in with Firebase authentication, while administrators can add, edit, and delete products from the catalog. The project is built with Node.js, Express, and MongoDB.",
      es: "Una tienda de ropa en línea que permite a los usuarios explorar y filtrar productos. Los usuarios pueden registrarse e iniciar sesión con autenticación de Firebase, mientras que los administradores pueden agregar, editar y eliminar productos del catálogo. El proyecto está construido con Node.js, Express y MongoDB.",
    },
    technologies: [
      { name: "Node.js", image: "/icons/nodejs.svg" },
      { name: "Express", image: "/icons/express.png" },
      { name: "MongoDB", image: "/icons/mongodb.svg" },
      { name: "Firebase", image: "/icons/firebase.png" },
      { name: "Swagger", image: "/icons/swagger.png" },
      { name: "CSS3", image: "/icons/css3.png" },

    ],
    image: "/projects/ClothingStore/Dashboard.png",
    liveDemo: "https://backend-project-break-0n1c.onrender.com/products",
    github: "https://github.com/Manteca24/backend-project-break",
  },
  {
    id: 5,
    title: {en:"Boom",es:"Boom",},
    description: {
      en: "A fun game where you try to guess a random number between 1 and 3 while a countdown of 5 seconds ticks down. If you guess correctly, you save the world! If not, the bomb explodes. The game also fetches a gif from an API to show you the outcome.",
      es: "Un juego divertido donde intentas adivinar un número aleatorio entre 1 y 3 mientras una cuenta atrás de 5 segundos avanza. Si adivinas correctamente, ¡salvas el mundo! Si no, la bomba explota. El juego también obtiene un gif de una API para mostrarte el resultado.",
    },
    technologies: [
      { name: "JavaScript", image: "/icons/javascript.png" },
      { name: "CSS3", image: "/icons/css3.png" },
    ],
    image: "/projects/BombaGame/screenshot.png", 
    liveDemo: "https://manteca24.github.io/boom/", 
    github: "https://github.com/Manteca24/boom",
  },
  {
    id: 6,
    title: {en:"Page-Visits project",es:"Proyecto número de visitas",},
    description: {
      en: "Sometimes I just want to have fun with JS. I built visit counter app that tracks the number of times users visit your page. It uses localStorage to persist the count across sessions. You can reset the counter with a button, and it will show a GIF based on the outcome of the visit count.",
      es: "A veces solo quiero divertirme con JS. Creé una aplicación de contador de visitas que realiza un seguimiento de las veces que los usuarios visitan tu página. Utiliza localStorage para persistir el contador entre sesiones. Puedes reiniciar el contador con un botón, y mostrará un gif según el resultado del contador de visitas.",
    },
    technologies: [
      { name: "JavaScript", image: "/icons/javascript.png" },
      { name: "CSS3", image: "/icons/css3.png" },
      { name: "HTML", image: "/icons/html5.png" },
    ],
    image: "/projects/PagesVisit/screenshot.png",
    liveDemo: "https://manteca24.github.io/pagesvisit/",
    github: "https://github.com/Manteca24/pagesvisit",
  }
  
];

export default projects;
