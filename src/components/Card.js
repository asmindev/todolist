"use client";
import React, { useState, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TaskContext } from "./TaskContext";

const Tooltip = ({ setShow, id }) => {
    const { setTask, task, setUpdate } = useContext(TaskContext);
    const onDelete = () => {
        const filter = task.filter((e) => e.id !== id);
        setTask(filter);
        setShow(false);
    };
    const markAsDone = () => {
        const filter = task.filter((e) => {
            if (e.id === id) {
                e.done = true;
                e.status = "done";
            }
            return e;
        });
        setTask(filter);
        setShow(false);
    };
    const onUpdate = () => {
        const item = task.filter((e) => e.id === id);
        setUpdate(item[0]);
        setShow(false);
    };
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.1 }}
            className="relative w-full px-4 rounded-xl bg-gradient-to-tr from-white/50 to-white/80 border backdrop-blur"
        >
            <div className="w-4 right-3 top-3 absolute">
                <button type="button" onClick={() => setShow(false)}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-full h-auto"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>
            </div>
            <div className="w-full divide-y">
                <button
                    type="button"
                    onClick={markAsDone}
                    className="w-full py-4 flex gap-2 items-center"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-auto text-purple-400"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>

                    <span className="text-sm text-gray-500">Mark as done</span>
                </button>
                <motion.button
                    type="button"
                    whileTap={{ scale: 0.9 }}
                    onClick={onUpdate}
                    className="py-4 flex gap-2 items-center"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-auto text-emerald-400"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                        />
                    </svg>
                    <span className="text-sm text-gray-500">Edit</span>
                </motion.button>
                <button
                    type="button"
                    onClick={onDelete}
                    className="w-full py-4 flex gap-2 items-center"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-auto text-red-400"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                        />
                    </svg>
                    <span className="text-sm text-gray-500">Delete</span>
                </button>
            </div>
        </motion.div>
    );
};

export default function Card({ title, description, done, id, status }) {
    const { sort } = useContext(TaskContext);
    const [show, setShow] = useState(false);
    const [isDone, setIsDone] = useState(done);
    const [stts, setStatus] = useState(status);

    const changeStatus = () => {
        console.log("kliked", stts);
        if (stts === "todo") {
            setStatus("doing");
        } else if (stts === "doing") {
            setStatus("todo");
            setIsDone(true);
        }
    };
    return (
        <div className="w-full relative">
            <div
                className={`border-2 transition-all duration-200 w-full p-4 flex items-center gap-4 rounded-xl bg-gradient-to-tr from-white/50 to-white/80 backdrop-blur-xl ${
                    show ? "border-orange-200" : "border-transparent"
                }`}
            >
                <>
                    {sort === "custom" ? (
                        <button type="button" className="flex text-gray-300">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
                                />
                            </svg>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="-ml-4 w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
                                />
                            </svg>
                        </button>
                    ) : done ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-5 h-auto text-emerald-400 border-emerald-400 border-2 rounded-full p-[1px]"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4.5 12.75l6 6 9-13.5"
                            />
                        </svg>
                    ) : (
                        <motion.button
                            onClick={changeStatus}
                            type="button"
                            whileTap={{ scale: 0.9 }}
                            className={`w-5 rounded-full relative flex justify-center items-center`}
                        >
                            {stts === "doing" && (
                                <span
                                    className={`animate-ping absolute inline-flex h-5 w-5 rounded-full bg-orange-400 opacity-75`}
                                ></span>
                            )}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                className={`h-auto rounded-full relative border-2 ${
                                    stts === "doing"
                                        ? "w-5 border-orange-400 fill-orange-600"
                                        : "w-full fill-transparent border-gray-400"
                                }
                    transition-all duration-100
                    `}
                            >
                                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"></path>
                            </svg>
                        </motion.button>
                    )}
                </>

                <div className="flex-1 h-full">
                    <h1 className="text-xl font-medium text-gray-600 first-letter:uppercase">
                        {title}
                    </h1>
                    <h1 className="text-sm text-gray-400 first-letter:uppercase">
                        {description}
                    </h1>
                </div>
                <motion.button
                    type="button"
                    className="w-5 h-auto"
                    onClick={() => setShow(!show)}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-auto"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
                        />
                    </svg>
                </motion.button>
            </div>
            <div className="absolute z-10 w-1/2 md:w-1/3 right-0 translate-y-1">
                <AnimatePresence>
                    {show && <Tooltip setShow={setShow} id={id} />}
                </AnimatePresence>
            </div>
        </div>
    );
}
