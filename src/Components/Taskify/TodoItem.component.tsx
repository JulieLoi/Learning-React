import React, { useState } from "react";
import { Draggable, DropResult } from "react-beautiful-dnd";
import { Todo } from "../../Types";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { IoMdCloseCircleOutline, IoMdCheckmarkCircleOutline } from "react-icons/io";
import styles from "../../stylesheets/Taskify.module.css";
import { TaskifyEnum } from "../../Enums";

interface Props {
    index: number
    todo: Todo;

    todoListsDispatch: React.Dispatch<{
        type: TaskifyEnum;
        todoItem?: Todo | undefined;
        newTodoText?: string;
        dragResult?: DropResult
    }>;

    isDraggable: boolean;
    inputRef: React.RefObject<HTMLInputElement>;
}

const TodoItem: React.FC<Props> = ({ index, todo, todoListsDispatch, isDraggable, inputRef }) => {

    // Handle Todo Item Edit 
    const [editTodoValue, setEditTodo] = useState<string>(todo.todo);

    // Handle Edit for Active Todo Item
    const handleEdit = () => {
        todoListsDispatch({ type: TaskifyEnum.SetEdit, todoItem: todo, newTodoText: editTodoValue });
    }

    // Submit Edited Todo
    const submitEdit = (e: React.FormEvent) => {
        e.preventDefault();
        todoListsDispatch({ type: TaskifyEnum.SetEdit, todoItem: todo, newTodoText: editTodoValue });
    }

    // Todo Item Component
    return (
        <Draggable draggableId={todo.id} index={index} isDragDisabled={!isDraggable}>
            {(provided, snapshot) => (     
                
                <form 
                    className={
                        `${isDraggable ? styles["list__item"] : styles["list__item-no-hover"]} 
                        ${snapshot.isDragging ? styles["drag__list-item"] : ""}`
                    } 
                    onSubmit={(e: React.FormEvent<HTMLFormElement>) => submitEdit(e)}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                >
                    <div>
                        {todo.isEdit ?
                            <input 
                                ref={inputRef}
                                maxLength={100}
                                value={editTodoValue} onChange={e => setEditTodo(e.target.value)}
                                className={`${styles["list__item-text"]} ${styles["list__item-edit"]}`}
                                onSubmit={(e: React.FormEvent<HTMLInputElement>) => submitEdit(e)}
                                onBlur={(e: React.FocusEvent<HTMLInputElement, Element>) => submitEdit(e)}
                            />
                            :
                            <span 
                                className={styles["list__item-text"]} 
                                onClick={(e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => { if (e.detail === 2) handleEdit() } }
                            >
                                {todo.isDone ? <s>{todo.todo}</s> : todo.todo}
                            </span>
                        }
                        <div className={styles["icon-list"]}>
                            <span className={styles.icon} onClick={handleEdit}>
                                <AiFillEdit />
                            </span>
                            <span className={styles.icon} 
                                onClick={() => todoListsDispatch({ type: TaskifyEnum.DeleteTodo, todoItem: todo })}
                            >
                                <AiFillDelete />
                            </span>
                            <span className={styles.icon} 
                                onClick={ () => todoListsDispatch({ type: TaskifyEnum.SetDone, todoItem: todo }) }
                            >
                                {todo.isDone ? <IoMdCloseCircleOutline /> : <IoMdCheckmarkCircleOutline />}
                            </span>
                        </div>    
                    </div>
                </form>  
            )}
        </Draggable>
    )
}



export default TodoItem;