import { useEffect, useReducer } from "react";
import Split from "react-split";

import Sidebar from "../components/NotesApp/Sidebar.component";
import Editor from "../components/NotesApp/Editor.component";

import styles from "../stylesheets/NotesApp.module.css";
import colorStyles from "../stylesheets/NotesAppLightDarkMode.module.css";

import { NotesApp } from "../Types";
import { NotesEnum } from "../Enums";
import { notesReducer } from "../Reducers";


const NotesAppPage = () => {

    // Notes App State
    let initialState: NotesApp = (localStorage.getItem("notes") !== undefined 
        && JSON.parse(localStorage.getItem("notes")!).length !== 0 ) ? 
        {
            notes: JSON.parse(localStorage.getItem("notes")!),
            currentNoteId: JSON.parse(localStorage.getItem("notes")!)[0].id,
            darkMode: localStorage.getItem("darkMode") === 'true'
        } 
        :
        {
            notes: [],
            currentNoteId: "",
            darkMode: localStorage.getItem("darkMode") === 'true'
        } 
    const [state, dispatch] = useReducer(notesReducer, initialState);
    
    // Stores Dark Mode Setting
    useEffect(() => {
        localStorage.setItem("darkMode", state.darkMode.toString());
    }, [state.darkMode])
  
    // Set localStorage of Notes
    useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(state.notes));
    }, [state.notes]);

    // Notes App Page
    return (
        <main className={`${styles["notes-app-page"]} ${state.darkMode ? colorStyles["dm"] : colorStyles["lm"]}`}>
            {state.notes.length > 0 ?
                <Split 
                    sizes={[30, 70]}
                    direction="horizontal"
                    style={{ display: "flex", height: "100%" }}
                >
                    <Sidebar 
                        state={state}
                        dispatch={dispatch}
                    />
                    <Editor 
                        state={state}
                        dispatch={dispatch}
                    />
                </Split>
                :
                <div className={`${styles['no-notes']} 
                    ${colorStyles[state.darkMode ? "dm-no-notes" : "lm-no-notes"]}`}
                >
                    <div className={`${styles["no-notes__container"]} 
                        ${colorStyles[state.darkMode ? "dm-container" : "lm-container"]}`}
                    >
                        <h1 className={`${styles['no-notes__title']}`}>You have no notes...</h1>
                        <button onClick={() => { dispatch({ type: NotesEnum.CreateNote }) }} 
                            className={`${styles["create-note-button"]} 
                            ${colorStyles[state.darkMode ? "dm-select" : "lm-select"]}`} 
                        >
                            Create New Note
                        </button>
                    </div>
                </div>
            }
            
        </main>
    );
};

export default NotesAppPage;
