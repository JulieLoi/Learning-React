import { faker } from '@faker-js/faker';
import { Joke } from '../../Types';

const joke1: Joke = {
    id: faker.datatype.uuid(),
    setup: "",
    punchline: "It’s hard to explain puns to kleptomaniacs because they always take things literally.",
    isJoke: false,
    upvotes: 51,
    downvotes: 10
};

const joke2: Joke = {
    id: faker.datatype.uuid(),
    setup: "I got my daughter a fridge for her birthday.",
    punchline: "I can't wait to see her face light up when she opens it.",
    isJoke: true,
    upvotes: 84,
    downvotes: 42
}

const joke3: Joke = {
    id: faker.datatype.uuid(),
    setup: "How did the hacker escape the police?",
    punchline: "He just ransomware!",
    isJoke: true,
    upvotes: 5461,
    downvotes: 453
}

const joke4: Joke = {
    id: faker.datatype.uuid(),
    setup: "Why don't pirates travel on mountain roads?",
    punchline: "Scurvy.",
    isJoke: true,
    upvotes: 874,
    downvotes: 12
}

const joke5: Joke = {
    id: faker.datatype.uuid(),
    setup: "Why do bees stay in the hive in the winter?",
    punchline: "Swarm.",
    isJoke: true,
    upvotes: 784,
    downvotes: 1354
}

const joke6: Joke = {
    id: faker.datatype.uuid(),
    setup: "What's the best thing about Switzerland?",
    punchline: "I don't know, but the flag is a big plus!",
    isJoke: true,
    upvotes: 45,
    downvotes: 12
}

const jokes: Joke[] = [joke1, joke2, joke3, joke4, joke5, joke6]


export default jokes;