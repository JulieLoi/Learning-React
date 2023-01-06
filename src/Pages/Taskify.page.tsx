import React, { useState, useReducer, useEffect } from "react";
import { faker } from '@faker-js/faker';
import { DragDropContext, DropResult } from "react-beautiful-dnd";

import InputField from "../components/Taskify/InputField.component";
import TodoList from "../components/Taskify/TodoList.component";
import styles from '../stylesheets/Taskify.module.css';

import { TodoLists } from "../Types";
import { taskifyReducer } from "../Reducers";
import { TaskifyEnum } from "../Enums";

const Taskify = () => {

    // Input Field - Create Todo
    const [todoValue, setTodo] = useState<string>(""); 
    
    // Todo Lists (active, complete)
    let initialState: TodoLists = { active: [], complete: [] };
    if (localStorage.getItem("todoList") !== undefined) {
        initialState = JSON.parse(localStorage.getItem("todoList")!);
    }
    const [todoListsState, todoListsDispatch] = useReducer(taskifyReducer, initialState);

    // Saves Todo Lists
    useEffect(() => {
        localStorage.setItem("todoList", JSON.stringify(todoListsState));
    }, [todoListsState]);
    
    // Draggable State
    const [isDraggable, setIsDraggable] = useState<boolean>(true);      // Allow Dragging

    // Handles Dragging
    const onDragEnd = (result: DropResult) => {
        todoListsDispatch({ type: TaskifyEnum.DragTodo, dragResult: result });
    };

    // Handles Creating a Todo Item
    const createToDoItem = (e: React.FormEvent): void => {
        e.preventDefault();
        if (todoValue) {
            const newToDo = { id: faker.datatype.uuid(), todo: todoValue, isDone: false, isEdit: false };
            todoListsDispatch({ type: TaskifyEnum.AddToDoItem, todoItem: newToDo });
            setTodo("");
        }
    }

    // Taskify Page
    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <div className={styles["taskify-page"]}>
                <span className={styles["heading"]}>Taskify</span>
                <InputField 
                    todo={todoValue}
                    setTodo={setTodo}
                    createToDoItem={createToDoItem}
                    setIsDraggable={setIsDraggable}
                />
                <TodoList 
                    todoLists={todoListsState}
                    todoListsDispatch={todoListsDispatch}
                    isDraggable={isDraggable}
                />
            </div>
        </DragDropContext>
    )
};

export default Taskify;
