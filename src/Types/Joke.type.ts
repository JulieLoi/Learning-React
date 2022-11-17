type JokeType = {
    id: string;
    setup?: string;
    punchline: string;
    isJoke: boolean;
    upvotes: number;
    downvotes: number;
}

export default JokeType;