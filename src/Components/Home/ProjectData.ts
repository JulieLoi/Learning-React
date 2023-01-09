import { faker } from "@faker-js/faker";
import { HomeCard } from "../../Types";

const reactFactsProject: HomeCard = {
    id: faker.datatype.uuid(),
    image: "https://codegeekz.com/wp-content/uploads/reactjs.png",
    title: "React Facts",
    isSolo: false,
    description: "A static React page that serves as a basic introduction to JSX, custom components, and CSS styling in React.",
    projectLink: "react-facts",
}

const digitalBusinessCardProject: HomeCard = {
    id: faker.datatype.uuid(),
    image: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/7fc1ab122258081.60d5cf6979479.jpg",
    title: "Digital Business Card",
    isSolo: true,
    description: "A simple mockup of a business card using a form to implement information that can be exported as an image.",
    projectLink: "digital-business-card"
}

const jokesProject: HomeCard = {
    id: faker.datatype.uuid(),
    image: "https://t4.ftcdn.net/jpg/01/64/26/17/360_F_164261744_NnHLBEta2yJ4X4X75XjCbRuO1K0CvVZ8.jpg",
    title: "Jokes and Puns",
    isSolo: true,
    description: "A page with preloaded jokes and puns with a filter built with React Bootstrap components.",
    projectLink: "jokes-puns"
}


const airbnbProject: HomeCard = {
    id: faker.datatype.uuid(),
    image: "https://www.dpgo.com/go/wp-content/uploads/2021/04/Airbnb_Experiences__Are_They_the_Future_.png",
    title: "Airbnb Experience",
    isSolo: false,
    description: "A clone of Airbnb Experiences using randomized, fake data to create the `Online Experiences`.",
    projectLink: "airbnb-experiences"
}

const travelJournalProject: HomeCard = {
    id: faker.datatype.uuid(),
    image: "https://i.ytimg.com/vi/-QckkcD_9W8/maxresdefault.jpg",
    title: "Travel Journal",
    isSolo: true,
    description: "A travel journal that contains three travel logs to famous locations around the world.",
    projectLink: "travel-journal"
}

const memeGeneratorProject: HomeCard = {
    id: faker.datatype.uuid(),
    image: "https://wallpaperaccess.com/full/2224555.jpg",
    title: "Meme Generator",
    isSolo: false,
    description: "A simple meme generator that demonstrates the interactive features of React.",
    projectLink: "meme-generator"
}

const notesAppProject: HomeCard = {
    id: faker.datatype.uuid(),
    image: "https://mdg.imgix.net/assets/images/tools/bear.png",
    title: "Markdown Notes",
    isSolo: false,
    description: "A markdown note application that stores notes, which can be used for markdown.",
    projectLink: "notes-app"
}


const tenziesProject: HomeCard = {
    id: faker.datatype.uuid(),
    image: "https://www.ultraboardgames.com/img/slideshow/tenzi.jpg",
    title: "Tenzies",
    isSolo: false,
    description: "A dice game where you attempt to get all ten dice to have the same number in order to win.",
    projectLink: "tenzies"
}


const quizzicalProject: HomeCard = {
    id: faker.datatype.uuid(),
    image: "https://media.istockphoto.com/id/487063216/photo/too-many-questions.jpg?s=170667a&w=0&k=20&c=X4bpDkfeOQbGssJ4IDo38aPs2asgp56202898_hK-vo=",
    title: "Quizzical",
    isSolo: true,
    description: "A trivia quiz with randomized questions of a selected difficulty, category, and type.",
    projectLink: "quizzical/home"
}

const taskifyProject: HomeCard = {
    id: faker.datatype.uuid(),
    image: "https://images.ctfassets.net/rz1oowkt5gyp/1IgVe0tV9yDjWtp68dAZJq/36ca564d33306d407dabe39c33322dd9/TaskManagement-hero.png",
    title: "Taskify",
    isSolo: false,
    description: "A todo list page that where you create tasks that can be marked 'active' or 'incomplete'.",
    projectLink: "taskify"
}


const cards: HomeCard[] = [ 
        reactFactsProject, digitalBusinessCardProject, jokesProject, airbnbProject, travelJournalProject, 
        memeGeneratorProject, notesAppProject, tenziesProject, quizzicalProject, taskifyProject
    ];

export { cards }