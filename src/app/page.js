import React from "react";
import Wrapper from "@/components/wrapper";
import Topbar from "@/components/Topbar";
import getTime from "@/services/getTime";
import TaskForm from "./TaskForm";
import ShowTask from "./ShowTask";
import { TaskProvider } from "@/components/TaskContext";

export default function Home() {
    return (
        <Wrapper>
            <TaskProvider>
                <Topbar />
                <div className="w-full h-full mt-12 md:w-1/2 mx-auto">
                    <div className="mb-2 w-full h-full ">
                        <div className="my-4">
                            <h1 className="text-4xl text-gray-600">
                                Write{" "}
                                <span className="font-bold">New Task</span>
                            </h1>
                            <h3 className="text-md text-gray-400">
                                {getTime()}
                            </h3>
                        </div>
                        <TaskForm />
                    </div>
                    <ShowTask />
                </div>
            </TaskProvider>
        </Wrapper>
    );
}
