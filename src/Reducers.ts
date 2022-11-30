import { faker } from "@faker-js/faker";
import { decode } from "html-entities";
import { BusinessCard, Joke, Note, NotesApp, Tenzies, Quizzical, QuizzicalQuiz, QuizQuestion } from './Types';
import { CardFormEnum, JokeEnum, NotesEnum, TenziesEnum, QuizzicalEnum, QuizEnum } from "./Enums";
var _ = require("underscore");

// Digital Business Card Project
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

// Jokes Project
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

// Notes App Project
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
            return ({ ...state, currentNoteId: action.payload });

        // Change dark mode
        case NotesEnum.ChangeDarkMode:
            return ({ ...state, darkMode: !state.darkMode });

        // Delete a Note (Given the Note ID)
        case NotesEnum.DeleteNote:
            console.log("DELETE NOTE")
            let newID: string =  "";

            // Deleting the only remaining note
            if (state.notes.length === 1) {
                newID = "";
            }
    
            // Deleting Current Note
            else if (state.currentNoteId === action.payload) {
                newID = state.notes.filter(note => note.id !== action.payload)[0].id;
            }

            // Delete Note that is not current note
            else {
                newID = state.currentNoteId;
            }

            return ({...state,
                currentNoteId: newID,
                notes: state.notes.filter(note => note.id !== action.payload),
            });

        // Edits a Note's Title
        case NotesEnum.EditNoteTitle:
            return ({...state,
                notes: state.notes.map(note => note.id === action.payload.noteId ? 
                    { ...note, editTitle: action.payload.noteEdit } : note
                )
            });
        default:
            return state;
    }
}

// Tenzies Project
export const tenziesReducer = (state: Tenzies, action: { type: TenziesEnum, payload?: any }) => {
    switch (action.type) {
        // Rolls 10 New Dice
        case TenziesEnum.NewDice:
            return ({...state,
                dice: [...Array(10)].map(() => ({id: faker.datatype.uuid(), value: Math.ceil(Math.random() * 6), isHeld: false }))
            });

        // Rolls all dice not held
        case TenziesEnum.RollDice:
            return ({...state,
                dice: state.dice.map(die => die.isHeld ? die : { ...die, value: Math.ceil(Math.random() * 6)})
            });
            
        // Changes a Die's isHeld value (boolean)
        case TenziesEnum.HoldDie:
            return ({...state,
                dice: state.dice.map(die => die.id !== action.payload ? die : { ...die, isHeld: !die.isHeld })
            })

        // Change Tenzies (boolean) - true for win
        case TenziesEnum.ChangeTenzies: 
            return { ...state, tenzies: !state.tenzies };
        
        // New Tenzies Game
        case TenziesEnum.NewGame:
            return ({
                dice: [...Array(10)].map(() => ({id: faker.datatype.uuid(), value: Math.ceil(Math.random() * 6), isHeld: false })),
                tenzies: false,
                numRolls: 0,
            });
    
        default: return state;
    }
}

// Quizzical Project
export const quizzicalReducer = (state: Quizzical, action: { type: QuizzicalEnum, payload?: any }) => {
    switch (action.type) {
        case QuizzicalEnum.SetApi:
            const basicAPI = "https://opentdb.com/api.php?";
            const amountAPI = "amount=".concat(state.form.amount);
            const categoryAPI = (state.form.category === "" ? "" : "&category=".concat(state.form.category));
            const difficultyAPI = (state.form.difficulty === "" ? "" : "&difficulty=".concat(state.form.difficulty));
            const typeAPI = (state.form.type === "" ? "" : "&type=".concat(state.form.type));
            const api = basicAPI.concat(amountAPI).concat(categoryAPI).concat(difficultyAPI).concat(typeAPI);
            return ({ ...state, api: api } );
        case QuizzicalEnum.SetFormAmount:
            return ({ ...state, form: { ...state.form, amount: action.payload }});
        case QuizzicalEnum.SetFormCategory: 
            return ({ ...state, form: { ...state.form, category: action.payload }});
        case QuizzicalEnum.SetFormDifficulty:
            return ({ ...state, form: { ...state.form, difficulty: action.payload }});
        case QuizzicalEnum.SetFormType:
            return ({ ...state, form: { ...state.form, type: action.payload }});
    
        default: return state;
    }
}

// Quizzical Quiz Reducer
export const quizReducer = (state: QuizzicalQuiz, 
    action: { type: QuizEnum, database?: QuizQuestion[], id?: string, answer?: string }) => {

    switch (action.type) {
        // Creates Questions from API Database results
        case QuizEnum.SetUp:
            const newQuestions: QuizQuestion[] = action.database!.map((q: QuizQuestion) => (
                {
                    id: faker.datatype.uuid(),
                    ...q,
                    category: decode(q.category),
                    question: decode(q.question),
                    correct_answer: decode(q.correct_answer),
                    incorrect_answers: q.incorrect_answers.map(x => decode(x)),
                    selectedAnswer: "",
                }
            ));
            return { ...state, questions: newQuestions };

        // Changes a Question's Selected Answer Value
        case QuizEnum.SetAnswer:
            const updatedAnswer: QuizQuestion[] = 
                state.questions.map((q: QuizQuestion) => 
                    q.id === action.id! ? { ...q, selectedAnswer: action.answer!} : q
                );
            return { ...state, questions: updatedAnswer };

        // Submit Quiz
        case QuizEnum.SubmitQuiz:
            // Check if all the questiosn were answered
            let missingAnswers: boolean = false ;
            state.questions.forEach((q: QuizQuestion) => {
                if (q.selectedAnswer === "") {
                    missingAnswers = true;
                    return;
                }
            });

            // Check Correct Answers (if all exists)
            if (!missingAnswers) {
                let myCounter = 0;
                state.questions.forEach((q: QuizQuestion) => {
                    if (q.selectedAnswer === "true") myCounter++;
                });
                return { ...state, submittedQuiz: true, failedSubmit: false, numCorrect: myCounter };
            }
            else { return { ...state, failedSubmit: true }; }


        // Set Failed Submit
        case QuizEnum.NewQuiz:
            return { questions: [], submittedQuiz: false, failedSubmit: false, numCorrect: 0 }
        default: return state;
    }
}