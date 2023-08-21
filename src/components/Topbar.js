"use client";
import React, { useContext } from "react";
import { TaskContext } from "./TaskContext";
const BadgeNotification = () => {
    const { task } = useContext(TaskContext);
    return (
        <div className="">
            <span className="text-sm text-gray-400">Task</span>
            <span className="ml-1 text-sm text-gray-400">{task.length}</span>
        </div>
    );
};
export default function Topbar() {
    return (
        <div className="w-full md:w-1/2 mx-auto bg-gradient-to-tr from-white/50 shadow-md shadow-gray-100 border-gray-200 to-white/80 p-4 rounded-xl">
            <div className="w-full flex justify-between items-center">
                <div className="w-1/2">
                    <h1 className="text-2xl font-bold text-gray-700">Todo</h1>
                </div>
                <div className="relative w-1/2 flex justify-end">
                    <BadgeNotification />
                </div>
            </div>
        </div>
    );
}
