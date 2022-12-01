import React, { useRef } from 'react';
import styles from '../../stylesheets/Taskify.module.css';

interface Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    createToDoItem: (e: React.FormEvent) => void;
    setIsDraggable: React.Dispatch<React.SetStateAction<boolean>>;
}

const InputField: React.FC<Props> = ({ todo, setTodo, createToDoItem, setIsDraggable }) => {

    const inputRef = useRef<HTMLInputElement>(null);

    // Create Todo Item Input Field
    return (
        <form className={styles.form} onSubmit={(e) => {
                createToDoItem(e);
                inputRef.current?.blur();
            }
        }>
            <input
                ref={inputRef} placeholder="Enter a task (max characters: 100)"
                className={styles['form__input-box']}
                maxLength={100}
                value={todo} onChange={(e) => setTodo(e.target.value)}
                onFocus={() => setIsDraggable(false)}
                onBlur={() => setIsDraggable(true)}
            />
            <button type="submit" className={styles['form__submit']}>GO</button>
        </form>
    )
}

export default InputField;
