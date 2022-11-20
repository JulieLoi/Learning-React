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

    let initialState: NotesApp = (localStorage.getItem("notes") === undefined) ? 
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

/*
import './stylesheets/App.css';
import './stylesheets/light-mode.css';
import './stylesheets/trash-icon.css';
import React, {useState, useEffect} from "react";
import Split from "react-split";
import { nanoid } from 'nanoid';

import Sidebar from './components/Sidebar.component';
import Editor from './components/Editor.component';


function App() {

    const [notes, setNotes] = useState(() => JSON.parse(localStorage.getItem("notes")) || []);
    const [currentNoteId, setCurrentNoteId] = useState(() => notes[0] && notes[0].id) || "";
    const [lightMode, setLightMode] = useState(() => (localStorage.getItem("lightMode") === 'false'));

    // Get localStorage of Notes
    useEffect(() => {
      localStorage.setItem("notes", JSON.stringify(notes));
    }, [notes])

    useEffect(() => {
      localStorage.setItem("lightMode", lightMode.toString);
    }, [lightMode])

    // Creates new note as the first note in the array
    function createNewNote() {
      const newNote = {
        id: nanoid(),
        body: "# New Note"
      }
      
      setNotes(prevNotes => [newNote, ...prevNotes]);
      setCurrentNoteId(newNote.id);
    }

    // Update current note text
    // Places the most recently modified note at the top of the array
    function updateNote(text) {
      setNotes(prevNotes => {
        const newNotes = [];
        for (let i = 0; i < prevNotes.length; i++) {
            let prevNote = prevNotes[i];
            if (prevNote.id === currentNoteId) { newNotes.unshift({...prevNote, body: text}) }
            else { newNotes.push(prevNote) }
        }
        return newNotes
      })
    }

    // Find current note
    function findCurrentNote() {
      return notes.find(note => {
          return note.id === currentNoteId
      }) || notes[0]
    }

    // Delete Note
    function deleteNote(event, noteId) {
      event.stopPropagation()
      setNotes(oldNotes => oldNotes.filter(note => note.id !== noteId))
    }

    // Change Light Mode
    function changeLightMode() {
      setLightMode(prevMode => !prevMode);
    }

    // App Component
    return (
      <main className={`${lightMode ? "light-mode" : "dark-mode"}`}>
        {
          notes.length > 0 ?
          <Split
            sizes={[30, 70]}
            direction="horizontal"
            className='split'
          >
            <Sidebar 
              notes={notes}
              currentNote={findCurrentNote()}
              setCurrentNoteId={setCurrentNoteId}
              newNote={createNewNote}
              deleteNote={deleteNote}
              lightMode={lightMode}
              changeLightMode={changeLightMode}
            />
            {
              currentNoteId && notes.length > 0 &&
              <Editor 
                currentNote={findCurrentNote()}
                updateNote={updateNote}
                lightMode={lightMode}
              />
            }
          </Split>

          :

          <div className={`no-notes ${lightMode ? "no-notes-lm" : "no-notes-dm"}`}>
            <h1>You have no notes</h1>
            <button 
              className={`create-note-button ${lightMode ? "selected-lm" : "selected-dm"}`} 
              onClick={createNewNote}>Create New Note
            </button>
          </div>
        }
      </main>
    );
}

export default App;
*/