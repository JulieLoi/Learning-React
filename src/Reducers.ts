import { CardFormEnum, JokeEnum } from "./Enums";
import JokeType from "./Types/Joke.type";

var _ = require("underscore");


export const cardFormReducer = (state: object, action: { type: CardFormEnum; payload: string; }) => {
    switch (action.type) {
        case CardFormEnum.Image:           return {...state, image: action.payload}
        case CardFormEnum.Name:            return {...state, name: action.payload}
        case CardFormEnum.JobPosition:     return {...state, jobPosition: action.payload}
        case CardFormEnum.PersonalLink:    return {...state, personalLink: action.payload}
        case CardFormEnum.EmailLink:       return {...state, emailLink: action.payload}
        case CardFormEnum.LinkedInLink:    return {...state, linkedInLink: action.payload}
        case CardFormEnum.AboutText:       return {...state, aboutText: action.payload}
        case CardFormEnum.InterestsText:   return {...state, interestsText: action.payload}
        case CardFormEnum.TwitterLink:     return {...state, twitterLink: action.payload}
        case CardFormEnum.FacebookLink:    return {...state, facebookLink: action.payload}
        case CardFormEnum.InstagramLink:   return {...state, instagramLink: action.payload}
        case CardFormEnum.GithubLink:      return {...state, githubLink: action.payload}
        default:    return state;
    }
}

export const jokeReducer = (state: JokeType[], action: { type: JokeEnum; payload?: JokeType[]; }) => {
    switch (action.type) {
        case JokeEnum.BestRated:
            const percentages = (state.map(joke => {
                return joke.upvotes / (joke.upvotes + joke.downvotes);
            })).sort().reverse();

            return (
                percentages.map(percent => {
                    return state.find(joke => (joke.upvotes / (joke.upvotes + joke.downvotes)) === percent)
                })
            );
        case JokeEnum.MostUpvotes:      return _.sortBy( state, 'upvotes').reverse();
        case JokeEnum.LeastUpvotes:     return _.sortBy( state, 'upvotes');
        case JokeEnum.MostDownvotes:    return _.sortBy( state, 'downvotes').reverse();
        case JokeEnum.LeastDownvotes:   return _.sortBy( state, 'downvotes');
        case JokeEnum.JokesOnly:        return _.filter( action.payload, (joke: JokeType) => joke.isJoke );
        case JokeEnum.PunsOnly:         return _.filter( action.payload, (joke: JokeType) => !joke.isJoke );
        case JokeEnum.ClearFilter:      return action.payload;
        default:    return state;
    }
}