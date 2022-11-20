/* Airbnb Experience Page */
export type BusinessCard = {
    image: string,
    name: string,
    jobPosition: string,
    personalLink: string,
    emailLink: string,
    linkedInLink: string,
    aboutText: string,
    interestsText: string,
    twitterLink: string,
    facebookLink: string,
    instagramLink: string,
    githubLink: string,
}

export type ExperienceCard = {
    id: string,
    name: string,
    description: string,
    price: number,
    imageUrl: string,
    stats: {
        rating: number,
        reviewCount: number,
    }
    location: string,
    openSpots: number,
}

/* Joke Page */
export type Joke = {
    id: string;
    setup?: string;
    punchline: string;
    isJoke: boolean;
    upvotes: number;
    downvotes: number;
}

/* Travel Journal Page */
export type JournalCard = {
    id: string;
    title: string;
    location: string;
    googleMapsUrl: string;
    startDate: string;
    endDate: string;
    description: string;
    imageUrl: string;
}

/* Meme Generator Page */
export type MemeType = {
    topText: string,
    bottomText:  string,
    imageUrl: string,
}

export type MemeDataType = {
    id: string,
    name: string,
    url: string,
    width: number,
    height: number,
    box_count: number,
}

/* Notes App Page */
export type Note = {
    id: string,
    title: string,
    body: string,
    editTitle: boolean;
}

export type NotesApp = {
    notes: Note[],
    currentNoteId: string,
    darkMode: boolean,
}

/* Tenzies Page */
export type Die = {
    id: string,
    value: number,
    isHeld: boolean
}

export type Tenzies = {
    dice: Die[],
    tenzies: boolean,
}