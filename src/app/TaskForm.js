"use client";
import React, { useRef, useState, useContext, useEffect } from "react";
import { motion } from "framer-motion";
import { TaskContext } from "@/components/TaskContext";
import validateInput from "@/helpers/validateForm";
const TaskWrapper = () => {
    const titleRef = useRef();

    const [error, setError] = useState({});
    const { setTask, sort, update, setUpdate } = useContext(TaskContext);
    const descriptionRef = useRef();
    const onSubmit = (e) => {
        e.preventDefault();
        const title = titleRef.current.value;
        const description = descriptionRef.current.value;
        error && setError({});
        const errors = validateInput(title, description);
        if (Object.keys(errors).length > 0) {
            setError(errors);
            return;
        }
        const date = new Date();
        const timestamp = date.getTime();
        if (update.id) {
            setTask((prev) => {
                const newTask = prev.map((task) => {
                    if (task.id === update.id) {
                        return {
                            ...task,
                            title,
                            description,
                        };
                    }
                    return task;
                });
                return newTask;
            });
            setUpdate({});
            titleRef.current.value = "";
            descriptionRef.current.value = "";
            return;
        }
        const newTask = {
            id: timestamp,
            title,
            description,
            done: false,
            status: "todo",
        };
        setTask((prev) => {
            if (sort === "older") {
                return [newTask, ...prev];
            } else {
                return [...prev, newTask];
            }
        });
        titleRef.current.value = "";
        descriptionRef.current.value = "";
    };
    useEffect(() => {
        if (update.id) {
            titleRef.current.value = update.title;
            descriptionRef.current.value = update.description;
            titleRef.current.focus();
        }
    }, [update]);
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="w-full flex flex-col gap-4"
        >
            <form onSubmit={onSubmit} className="w-full group">
                <div className="overflow-hidden flex flex-col gap-4 bg-gradient-to-tr from-white/50 to-white/80 rounded-xl py-4 px-6">
                    <input
                        ref={titleRef}
                        type="text"
                        placeholder="What's your focus today?"
                        className="bg-transparent w-full focus:outline-none text-lg"
                    />
                    {error.title && (
                        <motion.button
                            type="button"
                            onClick={() => setError({})}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="w-full text-left text-xs text-red-500"
                        >
                            {error.title}
                        </motion.button>
                    )}
                    <input
                        ref={descriptionRef}
                        placeholder="Description"
                        className="bg-transparent w-full focus:outline-none text-sm text-gray-500 font-medium"
                    />
                    {error.description && (
                        <motion.button
                            type="button"
                            onClick={() => setError({})}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="w-full text-left text-xs text-red-500"
                        >
                            {error.description}
                        </motion.button>
                    )}
                </div>
                <button
                    type="submit"
                    className="w-full my-4 py-2 px-4 rounded-xl border border-gray-300 bg-orange-500 text-white"
                >
                    {update.id ? "Update" : "Add"}
                </button>
            </form>
        </motion.div>
    );
};

export default function TaskForm() {
    return <TaskWrapper />;
}
