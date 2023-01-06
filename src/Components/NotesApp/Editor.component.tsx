import React from 'react';
import MDEditor from '@uiw/react-md-editor';
import rehypeSanitize from "rehype-sanitize";

import styles from '../../stylesheets/NotesApp.module.css';
import { Note, NotesApp } from '../../Types';
import { NotesEnum } from '../../Enums';

interface IEditorProps {
    state: NotesApp;
    dispatch: React.Dispatch<{ type: NotesEnum; payload?: any; }>;
}

/*
 * Editor Component
 * Creates an editor that allows you to edit a note object
 */
const Editor: React.FC<IEditorProps> = ({ state, dispatch }) => {

    const currentNote: Note = state.notes.find(note => note.id === state.currentNoteId)!;

    // Editor Component
    return (
        <section className={`${styles["section"]} ${styles["pane"]} ${styles["editor"]}`}
            data-color-mode={state.darkMode ? "dark" : "light"}
        >
            <MDEditor    
                value={currentNote.body}
                onChange={(value?: string) => { dispatch({ type: NotesEnum.UpdateNoteBody, payload: value }) }}
                className={styles["mdeditor"]}
                preview={"live"}
                height={"100%"}
                previewOptions={{
                    rehypePlugins: [[rehypeSanitize]],
                }}
               textareaProps={{
                    placeholder: "Please enter Markdown text...",
                }}
            />
        </section>
    );
};

export default Editor;
