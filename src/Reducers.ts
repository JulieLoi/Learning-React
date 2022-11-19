import { faker } from "@faker-js/faker";
import { BusinessCard, Joke, Note, NotesApp } from './Types';
import { CardFormEnum, JokeEnum, NotesEnum } from "./Enums";
var _ = require("underscore");


export const cardFormReducer = (state: BusinessCard, action: { type: CardFormEnum; payload: string; }) => {
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

export const jokeReducer = (state: Joke[], action: { type: JokeEnum; payload?: Joke[]; }) => {
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
        case JokeEnum.JokesOnly:        return _.filter( action.payload, (joke: Joke) => joke.isJoke );
        case JokeEnum.PunsOnly:         return _.filter( action.payload, (joke: Joke) => !joke.isJoke );
        case JokeEnum.ClearFilter:      return action.payload;
        default:    return state;
    }
}

export const notesReducer = (state: NotesApp, action: { type: NotesEnum; payload?: any }) => {
    switch (action.type) {
        // Set State
        case NotesEnum.SetState: 
            return action.payload;

        // Creates a note
        case NotesEnum.CreateNote:
            const newNote: Note = {
                id: faker.datatype.uuid(),
                title: "Title",
                body: "# New Note",
                editTitle: false,
            }
    
            return ({ ...state, notes: [newNote, ...state.notes], currentNoteId: newNote.id });

        // Updates the current note's title text
        case NotesEnum.UpdateNoteTitle:
            const newNotes1 = [];
            for (let i = 0; i < state.notes.length; i++) {
                let oldNote = state.notes[i];
                if (oldNote.id === state.currentNoteId) { newNotes1.unshift( {...oldNote, title: action.payload} )}
                else { newNotes1.push(oldNote) }
            }

            return ({...state, notes: newNotes1});

        // Updates the current note's body text
        case NotesEnum.UpdateNoteBody:
            const newNotes2 = [];
            for (let i = 0; i < state.notes.length; i++) {
                let oldNote = state.notes[i];
                if (oldNote.id === state.currentNoteId) { newNotes2.unshift( {...oldNote, body: action.payload} )}
                else { newNotes2.push(oldNote) }
            }

            return ({...state, notes: newNotes2});

        // Updates the current, selected note
        case NotesEnum.UpdateCurrentNoteId:
            return ({
                ...state,
                currentNoteId: action.payload
            })

        // Change dark mode
        case NotesEnum.ChangeDarkMode:
            return ({ ...state, darkMode: !state.darkMode });

        // Delete a Note (Given the Note ID)
        case NotesEnum.DeleteNote:
            return ({
                ...state,
                currentNoteId: state.notes[1].id,
                notes: state.notes.filter(note => note.id !== action.payload),
            })


        case NotesEnum.EditNoteTitle:
            //setNotes(prev => prev.map(note => note.id === note.id ? { ...note, editTitle: true }: note))

            return ({
                ...state,
                notes: state.notes.map(note => note.id === action.payload.noteId ? 
                        { ...note, editTitle: action.payload.noteEdit } : note
                    )
            });
        default:
            return state;
    }
}
