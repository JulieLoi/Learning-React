import { faker } from "@faker-js/faker";
import { HomeCard } from "../../Types";

const reactFactsProject: HomeCard = {
    id: faker.datatype.uuid(),
    image: "https://codegeekz.com/wp-content/uploads/reactjs.png",
    title: "React Facts",
    description: "A static example page that is used as a basic understanding of React. MENTION ALL I HAVE LEARNED FROM THIS PROJECT",
    projectLink: "/reactfacts",
}

const digitalBusinessCardProject: HomeCard = {
    id: faker.datatype.uuid(),
    image: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/7fc1ab122258081.60d5cf6979479.jpg",
    title: "Digital Business Card",
    description: "A simple mockup of a business card that uses a form. Save the business card as a png image",
    projectLink: "/digitalbusinesscard"
}


const jokesProject: HomeCard = {
    id: faker.datatype.uuid(),
    image: "https://t4.ftcdn.net/jpg/01/64/26/17/360_F_164261744_NnHLBEta2yJ4X4X75XjCbRuO1K0CvVZ8.jpg",
    title: "Jokes and Puns",
    description: " USES BOOTSTRAP CARDS...",
    projectLink: "/jokes"
}


const airbnbProject: HomeCard = {
    id: faker.datatype.uuid(),
    image: "https://www.dpgo.com/go/wp-content/uploads/2021/04/Airbnb_Experiences__Are_They_the_Future_.png",
    title: "Airbnb Experience",
    description: "AIRBNB PROJECT DESCRIPTION. Uses a custom card component",
    projectLink: "/airbnb"
}


const travelJournalProject: HomeCard = {
    id: faker.datatype.uuid(),
    image: "https://i.ytimg.com/vi/-QckkcD_9W8/maxresdefault.jpg",
    title: "Travel Journal",
    description: "uses a custom card component",
    projectLink: "/traveljournal"
}


const memeGeneratorProject: HomeCard = {
    id: faker.datatype.uuid(),
    image: "https://wallpaperaccess.com/full/2224555.jpg",
    title: "Meme Generator",
    description: "MEME GENERATOR PROJECT DESCRIPTION",
    projectLink: "/memegenerator"
}


const notesAppProject: HomeCard = {
    id: faker.datatype.uuid(),
    image: "https://mdg.imgix.net/assets/images/tools/bear.png",
    title: "Markdown Notes",
    description: "Notes app that can turn notes into a markdown...",
    projectLink: "/notesapp"
}


const tenziesProject: HomeCard = {
    id: faker.datatype.uuid(),
    image: "https://www.ultraboardgames.com/img/slideshow/tenzi.jpg",
    title: "Tenzies",
    description: "TENZIES PROJECT DESCRIPTION",
    projectLink: "/tenzies"
}


const quizzicalProject: HomeCard = {
    id: faker.datatype.uuid(),
    image: "https://media.istockphoto.com/id/487063216/photo/too-many-questions.jpg?s=170667a&w=0&k=20&c=X4bpDkfeOQbGssJ4IDo38aPs2asgp56202898_hK-vo=",
    title: "Quizzical",
    description: "QUIZZICAL PROJECT DESCRIPTION",
    projectLink: "/quizzical/home"
}


const cards: HomeCard[] = [ 
        reactFactsProject, digitalBusinessCardProject, jokesProject, airbnbProject, travelJournalProject,
        memeGeneratorProject, notesAppProject, tenziesProject, quizzicalProject
    ];

export { cards }