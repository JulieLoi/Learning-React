import React, { useState } from 'react';
import { FiEdit, FiTrash } from 'react-icons/fi';

import { Note, NotesApp } from '../../Types';
import { NotesEnum } from '../../Enums';

import styles from '../../stylesheets/NotesApp.module.css';
import colorStyles from '../../stylesheets/NotesAppLightDarkMode.module.css';

interface INoteItemProps {
    note: Note;
    state: NotesApp;
    dispatch: React.Dispatch<{ type: NotesEnum; payload?: any; }>;
    inputRef: React.RefObject<HTMLInputElement>;
}

const NoteItem: React.FC<INoteItemProps> = ({ note, state, dispatch, inputRef }) => {

    // Edit
    const [editTitle, setEditTitle] = useState<string>(note.title);

    // Handle Title Edit
    const handleEdit = () => {
        if (!note.editTitle) {
            dispatch({ type: NotesEnum.EditNoteTitle, payload: { noteId: note.id, noteEdit: true } });
        }
    }

    // Submit Edited Todo
    const submitEdit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("SUBMIT")
        dispatch({ type: NotesEnum.EditNoteTitle, payload: { noteId: note.id, noteEdit: false } });
        dispatch({ type: NotesEnum.UpdateNoteTitle, payload: editTitle });
    }


    // Note Item Component
    return (
        <div key={note.id}>
            <div className={`${styles["note-element"]} 
                    ${note.id === state.currentNoteId && colorStyles[state.darkMode ? "dm-select" : "lm-select"]}
                `}
                onClick={() => dispatch({ type: NotesEnum.UpdateCurrentNoteId, payload: note.id })}
            >

                {note.editTitle ? 
                    <input 
                        ref={inputRef} maxLength={100}
                        value={editTitle}
                        onChange={e => setEditTitle(e.target.value)}
                        onSubmit={(e) => submitEdit(e)}
                        onBlur={(e) => submitEdit(e)}
                        className={`${styles["note-title"]} ${styles["selected-note"]}
                            ${styles["note-title__input"]} 
                        `}

                    />
                
                : 
                    <h4 className={`${styles["note-title"]} 
                        ${note.id === state.currentNoteId ? styles["selected-note"] : ""}`}
                        onClick={(e) => { if (e.detail === 2) handleEdit() } }
                    >
                        {note.title}
                    </h4>
                }


                <div className={styles["icon-container"]}>
                    <FiEdit className={styles["note-icon"]} 
                        onClick={handleEdit}
                    />
                    <FiTrash className={styles["note-icon"]} 
                        onClick={(event) => {
                            event.stopPropagation();
                            dispatch({ type: NotesEnum.DeleteNote, payload: note.id });
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default NoteItem;
