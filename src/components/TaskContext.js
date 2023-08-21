"use client";
import React, { useState, createContext } from "react";
const TaskContext = createContext();

const TaskProvider = ({ children }) => {
    const [task, setTask] = useState([]);
    // older first or newer first
    const [sort, setSort] = useState("older");
    const [update, setUpdate] = useState({});
    return (
        <TaskContext.Provider
            value={{ task, setTask, sort, setSort, update, setUpdate }}
        >
            {children}
        </TaskContext.Provider>
    );
};

export { TaskContext, TaskProvider };
