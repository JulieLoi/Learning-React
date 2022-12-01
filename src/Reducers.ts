import { faker } from "@faker-js/faker";
import { decode } from "html-entities";
import { DropResult } from "react-beautiful-dnd";
import { BusinessCard, Joke, Note, NotesApp, Tenzies, Quizzical, QuizzicalQuiz, QuizQuestion, Todo, TodoLists } from './Types';
import { CardFormEnum, JokeEnum, NotesEnum, TenziesEnum, QuizzicalEnum, QuizEnum, TaskifyEnum } from "./Enums";
var _ = require("underscore");

// Digital Business Card Project
export const cardFormReducer = (state: BusinessCard, action: { type: CardFormEnum; payload?: string; formData?: BusinessCard }) => {
    switch (action.type) {
        case CardFormEnum.Image:           return {...state, info: {...state.info, image: action.payload!}}
        case CardFormEnum.Name:            return {...state, info: {...state.info, name: action.payload!}}
        case CardFormEnum.JobPosition:     return {...state, info: {...state.info, jobPosition: action.payload!}}
        case CardFormEnum.PersonalLink:    return {...state, info: {...state.info, personalLink: action.payload!}}
        case CardFormEnum.EmailLink:       return {...state, info: {...state.info, emailLink: action.payload!}}
        case CardFormEnum.LinkedInLink:    return {...state, info: {...state.info, linkedInLink: action.payload!}}
        case CardFormEnum.AboutText:       return {...state, desc: {...state.desc, aboutText: action.payload!}}
        case CardFormEnum.InterestsText:   return {...state, desc: {...state.desc, interestsText: action.payload!}}
        case CardFormEnum.TwitterLink:     return {...state, footer: {...state.footer, twitterLink: action.payload!}}
        case CardFormEnum.FacebookLink:    return {...state, footer: {...state.footer, facebookLink: action.payload!}}
        case CardFormEnum.InstagramLink:   return {...state, footer: {...state.footer, instagramLink: action.payload!}}
        case CardFormEnum.GithubLink:      return {...state, footer: {...state.footer, githubLink: action.payload!}}
        case CardFormEnum.ResetCard:       
            return {
                info: {
                    image: "",
                    name: "",
                    jobPosition: "",
                    personalLink: "",
                    emailLink: "https://gmail.google.com/inbox/",
                    linkedInLink: "https://www.linkedin.com/",
                },
                desc: {
                    aboutText: "",
                    interestsText: "",
                },
                footer: {
                    twitterLink: "https://twitter.com",
                    facebookLink: "http://facebook.com",
                    instagramLink: "https://instagram.com",
                    githubLink: "https://github.com",
                },
            }
        case CardFormEnum.FillCard: return action.formData!;
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

export const taskifyReducer = (state: TodoLists, 
    action: { type: TaskifyEnum, todoItem?: Todo, newTodoText?: string, dragResult?: DropResult } ) => {
    
    // Some Todo Item Values
    const todoID: string | undefined = action.todoItem?.id;
    const todoDone: boolean | undefined = action.todoItem?.isDone;
    const todoEdit: boolean | undefined = action.todoItem?.isEdit;

    // New State
    let newTodoLists: TodoLists = {
        active: [],
        complete: [],
    }

    switch (action.type) {
        // Adds created ToDo Item to active list
        case TaskifyEnum.AddToDoItem:
            return {...state, active: [...state.active, action.todoItem!] };

        // Sets "isEdit" property of a Todo Item
        case TaskifyEnum.SetEdit:
            let newActiveEdit: Todo[] = [];

            // Active Todo Item -- Turn on Edit Mode
            if (!todoDone && !todoEdit) {
                newActiveEdit = state.active.map(todo => todo.id === todoID ? { ...todo, isEdit: true } : todo );
            }
            // Complete Todo Item
            else if (action.todoItem!.isDone) {
                alert("You cannot edit a completed task item!");
                return state;
            }
            // Active Todo Item -- Turn off Edit Mode, Update Todo Text
            else {
                newActiveEdit = state.active.map(todo => todo.id === todoID ? 
                        { ...todo, todo: action.newTodoText!, isEdit: false } 
                        :
                        todo 
                    );
            }

            return {...state, active: newActiveEdit};

        // Change Todo Item "isDone" property
        case TaskifyEnum.SetDone:
            let transferredTodo: Todo = {...action.todoItem!, isDone: !todoDone};
            

            // Completed Todo --> Active
            if (todoDone) {
                newTodoLists.complete = state.complete.filter(todo => todo.id !== todoID);
                newTodoLists.active = state.active;
                newTodoLists.active.push(transferredTodo);
            }

            // Active Todo --> Complete
            else {
                newTodoLists.active = state.active.filter(todo => todo.id !== todoID);
                newTodoLists.complete = state.complete;
                newTodoLists.complete.push(transferredTodo);
            }

            return newTodoLists;

        // Delete Todo item
        case TaskifyEnum.DeleteTodo:
            if (todoDone) { return {...state, complete: state.complete.filter(todo => todo.id !== todoID) } }
            else { return {...state, active: state.active.filter(todo => todo.id !== todoID) } }


        // Drag Todo Items
        case TaskifyEnum.DragTodo:
            const { source, destination } = action.dragResult!;

            // No Destination
            if (!destination) { return state; }

            // Drag Same List
            if (source.droppableId === destination!.droppableId) {
                if (source.droppableId === 'active-list') {
                    let todoSource: Todo = state.active[source.index];
                    let newList: Todo[] = state.active.filter(todo => todo.id !== todoSource.id);
                    newList.splice(destination.index, 0, todoSource);
                    return {...state, active: newList }
                }
                else {
                    let todoSource: Todo = state.complete[source.index];
                    let newList: Todo[] = state.complete.filter(todo => todo.id !== todoSource.id);
                    newList.splice(destination.index, 0, todoSource);
                    return {...state, complete: newList }
                }
            }

            // Drag Transfer Lists
            else {
                // Active --> Complete
                if (source.droppableId === 'active-list') {
                    let todoSource: Todo = state.active[source.index];
                    todoSource.isDone = !todoSource.isDone;
                    newTodoLists.active = state.active.filter(todo => todo.id !== todoSource.id);
                    newTodoLists.complete = state.complete;
                    newTodoLists.complete.splice(destination.index, 0, todoSource);
                    
                }

                // Complete --> Active
                else {
                    let todoSource: Todo = state.complete[source.index];
                    todoSource.isDone = !todoSource.isDone;
                    newTodoLists.complete = state.complete.filter(todo => todo.id !== todoSource.id);
                    newTodoLists.active = state.active;
                    newTodoLists.active.splice(destination.index, 0, todoSource);
                }
                return newTodoLists;

            }

        default: return state;
    }
}