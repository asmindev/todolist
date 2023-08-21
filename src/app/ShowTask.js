"use client";
import React, { useContext, useEffect } from "react";
import Card from "@/components/Card";
import { motion, AnimatePresence, Reorder } from "framer-motion";
import Filter from "./Filter";

import { TaskContext } from "@/components/TaskContext";
const TaskWrapper = () => {
    const { setTask, task, sort } = useContext(TaskContext);
    useEffect(() => {
        if (sort === "older") {
            task.sort((a, b) => a.id - b.id);
        } else if (sort === "newer") {
            task.sort((a, b) => b.id - a.id);
        }
        console.log({ task, sort });
    }, [task, sort]);
    return (
        <>
            <div className="w-full">
                <Filter />
            </div>
            <Reorder.Group
                axis="y"
                values={sort === "custom" ? task : []}
                onReorder={sort === "custom" ? setTask : () => {}}
            >
                <div className="w-full grid grid-cols-1 gap-4">
                    <AnimatePresence>
                        {task.map((task, index) => (
                            <Reorder.Item key={task.id} value={task}>
                                <motion.div
                                    layoutId={index}
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                >
                                    <Card {...task} />
                                </motion.div>
                            </Reorder.Item>
                        ))}
                    </AnimatePresence>
                </div>
            </Reorder.Group>
        </>
    );
};

export default function ShowTask() {
    return <TaskWrapper />;
}
