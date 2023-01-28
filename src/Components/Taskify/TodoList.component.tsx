import React, { useRef, useEffect } from "react";
import { Droppable, DropResult } from "react-beautiful-dnd";
import { Todo, TodoLists } from "../../Types";
import TodoItem from "./TodoItem.component";
import styles from "../../stylesheets/Taskify.module.css";
import { TaskifyEnum } from "../../Enums";

interface Props {
    todoLists: TodoLists;
    todoListsDispatch: React.Dispatch<{
        type: TaskifyEnum;
        todoItem?: Todo | undefined;
        newTodoText?: string;
        dragResult?: DropResult;
    }>;
    isDraggable: boolean;
}

const TodoList: React.FC<Props> = ({ todoLists, todoListsDispatch, isDraggable }) => {

    // Handle Input Focus
    const inputRef = useRef<HTMLInputElement>(null);
    useEffect(() => {
        inputRef.current?.focus();
    }, [todoLists]);

    // Todo Lists (Active vs Completed)
    return (
        <div className={styles.container}>
            <Droppable droppableId="active-list">
                {(provided, snapshot) => (
                    <div 
                        className={`${styles["task-container"]} 
                            ${snapshot.isDraggingOver ? styles["drag__active"] : styles.active}`} 
                        ref={provided.innerRef} 
                        {...provided.droppableProps}
                    >
                        <span className={`${styles["list-heading"]} 
                            ${snapshot.isDraggingOver ? styles["drag__active-lh"] : ""} `}
                        >
                            Active Tasks
                        </span>

                     
                        {todoLists.active.map((item, index) => 
                            <TodoItem 
                                key={item.id}
                                index={index}
                                todo={item} 
                                todoListsDispatch={todoListsDispatch}
                                isDraggable={isDraggable}
                                inputRef={inputRef}
                            />
                        )}
                            
                        
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
            
            <Droppable droppableId="completed-list">
                {(provided, snapshot) => (
                    <div 
                        className={`${styles["task-container"]} 
                            ${snapshot.isDraggingOver ? styles["drag__completed"] : styles.completed} `} 
                        ref={provided.innerRef} 
                        {...provided.droppableProps}
                    >
                        <span className={`${styles["list-heading"]} 
                            ${snapshot.isDraggingOver ? styles["drag__completed-lh"] : ""} `}
                        >
                            Completed Tasks
                        </span>

                        {todoLists.complete.map((item, index) => 
                            <TodoItem 
                                key={item.id}
                                index={index}
                                todo={item} 
                                todoListsDispatch={todoListsDispatch}
                                isDraggable={isDraggable}
                                inputRef={inputRef}
                            />
                        )}

                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
           
        </div>
    )
}


export default TodoList;
