import { faker } from '@faker-js/faker';
import { Joke } from '../../Types';
var _ = require("underscore");

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

const joke7: Joke = {
    id: faker.datatype.uuid(),
    setup: "Why did Adele cross the road?",
    punchline: "To say hello from the other side.",
    isJoke: true,
    upvotes: 424,
    downvotes: 123
}

const joke8: Joke = {
    id: faker.datatype.uuid(),
    setup: "",
    punchline: "Time flies like an arrow. Fruit flies like a banana.",
    isJoke: false,
    upvotes: 678,
    downvotes: 83
}

const joke9: Joke = {
    id: faker.datatype.uuid(),
    setup: "",
    punchline: "To the guy who invented zero, thanks for nothing.",
    isJoke: false,
    upvotes: 57,
    downvotes: 978
}

const joke10: Joke = {
    id: faker.datatype.uuid(),
    setup: "",
    punchline: "Geology rocks but Geography is where it’s at!",
    isJoke: false,
    upvotes: 7821,
    downvotes: 3478
}

const joke11: Joke = {
    id: faker.datatype.uuid(),
    setup: "What was Forrest Gump’s email password?",
    punchline: "1forrest1",
    isJoke: true,
    upvotes: 4789,
    downvotes: 453
}

const joke12: Joke = {
    id: faker.datatype.uuid(),
    setup: "What was Forrest Gump’s email password?",
    punchline: "1forrest1",
    isJoke: true,
    upvotes: 4574,
    downvotes: 5445
}

const joke13: Joke = {
    id: faker.datatype.uuid(),
    setup: "Did you hear about the restaurant on the moon?",
    punchline: "I heard the food was good but it had no atmosphere.",
    isJoke: true,
    upvotes: 7,
    downvotes: 9
}

const joke14: Joke = {
    id: faker.datatype.uuid(),
    setup: "Can February March?",
    punchline: "No, but April May.",
    isJoke: true,
    upvotes: 713,
    downvotes: 412
}

const joke15: Joke = {
    id: faker.datatype.uuid(),
    setup: "Need an ark to save two of every animal?",
    punchline: "I noah guy.",
    isJoke: true,
    upvotes: 151,
    downvotes: 9942
}

const joke16: Joke = {
    id: faker.datatype.uuid(),
    setup: "",
    punchline: "I don’t trust stairs because they’re always up to something.",
    isJoke: false,
    upvotes: 74,
    downvotes: 1547
}
 
const joke17: Joke = {
    id: faker.datatype.uuid(),
    setup: "",
    punchline: "Smaller babies may be delivered by stork but the heavier ones need a crane.",
    isJoke: false,
    upvotes: 451,
    downvotes: 4
}

const joke18: Joke = {
    id: faker.datatype.uuid(),
    setup: "Why was Dumbo sad?",
    punchline: "He felt irrelephant.",
    isJoke: true,
    upvotes: 9641,
    downvotes: 7451
}

const joke19: Joke = {
    id: faker.datatype.uuid(),
    setup: "A man sued an airline company after it lost his luggage.",
    punchline: "Sadly, he lost his case.",
    isJoke: true,
    upvotes: 111,
    downvotes: 973
}

const joke20: Joke = {
    id: faker.datatype.uuid(),
    setup: "",
    punchline: "My friend drove his expensive car into a tree and found out how his Mercedes bends.",
    isJoke: false,
    upvotes: 138,
    downvotes: 975
}

const jokes: Joke[] = _.shuffle(
    [
        joke1, joke2, joke3, joke4, joke5, joke6, joke7, joke8, joke9, joke10,
        joke11, joke12, joke13, joke14, joke15, joke16, joke17, joke18, joke19, joke20
    ]);


export default jokes;