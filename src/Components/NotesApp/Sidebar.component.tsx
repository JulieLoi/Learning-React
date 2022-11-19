import React, { useEffect, useRef } from 'react';
import NoteItem from './NoteItem.component';

import styles from '../../stylesheets/NotesApp.module.css';
import colorStyles from '../../stylesheets/NotesAppLightDarkMode.module.css';

import { Note, NotesApp } from '../../Types';
import { NotesEnum } from '../../Enums';

interface ISidebarProps {
    state: NotesApp;
    dispatch: React.Dispatch<{ type: NotesEnum; payload?: any; }>;
}

/*
 * Sidebar Component
 * The sidebar contains all the notes in the project.
 * This is where you navigate through all your notes.
 * You can create new notes in the sidebar.
 */
const Sidebar: React.FC<ISidebarProps> = ({ state, dispatch }) => {

    // Handle Input Focus
    const inputRef = useRef<HTMLInputElement>(null);
        useEffect(() => {
            inputRef.current?.focus();
    }, [state.notes]);


    // Sidebar Component
    return (
        <section className={`${styles["section"]} ${styles["pane"]} ${styles["sidebar"]}`}>
            <div className={styles["sidebar__header"]}>
                <div className={styles["sidebar__notes"]}>
                    <h3>Notes</h3>
                    <button className={`${styles["new-note-button"]} ${colorStyles[state.darkMode ? "dm-select" : "lm-select"]}`} 
                        onClick={() => { dispatch({ type: NotesEnum.CreateNote }) }}
                    >
                        +
                    </button>
                </div>
                <div className={colorStyles["toggle"]}>
                    <input type="checkbox" id="toggle" checked={state.darkMode} 
                        onChange={() => dispatch({ type: NotesEnum.ChangeDarkMode })} 
                    />
                    <label htmlFor="toggle" />
                </div>
            </div>
            {state.notes.map((note: Note) => (
                <NoteItem 
                    key={note.id} 
                    note={note}
                    state={state}
                    dispatch={dispatch}
                    inputRef={inputRef}
                />
            ))}
        </section>
    );
};


export default Sidebar;
