"use client";
import React, { useState, useContext } from "react";
import { TaskContext } from "@/components/TaskContext";
import { AnimatePresence, motion } from "framer-motion";
const Tooltip = ({ setShow }) => {
    const { sort, setSort, setTask } = useContext(TaskContext);
    const sorting = () => {
        if (sort === "older") {
            setSort("newer");
        } else {
            setSort("older");
        }
        setShow(false);
    };
    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="relative w-full px-4 rounded-xl bg-gradient-to-tr from-white/50 to-white/80 border backdrop-blur"
        >
            <div className="w-full divide-y">
                <button
                    onClick={sorting}
                    type="button"
                    className="w-full py-4 flex gap-2 items-center"
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
                            d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5"
                        />
                    </svg>
                    <span className="text-sm text-gray-500">
                        {sort === "older" ? "Newer" : "Older"}
                    </span>
                </button>
                <button
                    onClick={() => {
                        setShow(false);
                        setSort("custom");
                    }}
                    type="button"
                    className="w-full py-4 flex gap-2 items-center"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-auto text-purple-600"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                        />
                    </svg>

                    <span className="text-sm text-gray-500">Custom</span>
                </button>
                <button
                    onClick={() => {
                        setShow(false);
                        setTask([]);
                    }}
                    type="button"
                    className="w-full py-4 flex gap-2 items-center"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-auto text-red-600"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                        />
                    </svg>

                    <span className="text-sm text-gray-500">
                        Clear All Task
                    </span>
                </button>
            </div>
        </motion.div>
    );
};

export default function Filter() {
    const [show, setShow] = useState(false);
    const { sort, setSort } = useContext(TaskContext);
    return (
        <div className="relative w-full bg-white rounded-xl px-4 py-3 my-3">
            <div className="w-full flex justify-between items-center">
                <div className="flex-1">
                    <h1 className="text-xl text-gray-600">Filter</h1>
                </div>
                {sort === "custom" ? (
                    <button
                        onClick={() => setSort("Done")}
                        type="button"
                        className="bg-purple-50 text-sm py-1 px-2 rounded-xl text-purple-600 border border-purple-200"
                    >
                        Done
                    </button>
                ) : (
                    <motion.button
                        whileTap={{ scale: 0.9 }}
                        type="button"
                        className="w-6"
                        onClick={() => setShow(!show)}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-full h-auto text-gray-600"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 13.5V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 9.75V10.5"
                            />
                        </svg>
                    </motion.button>
                )}
            </div>
            <div className="absolute z-10 w-full left-0 translate-y-4">
                <AnimatePresence>
                    {show && <Tooltip setShow={setShow} />}
                </AnimatePresence>
            </div>
        </div>
    );
}
