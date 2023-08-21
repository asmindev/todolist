import React from "react";

export default function Sidebar() {
    return (
        <div className="h-screen p-4 w-full overflow-hidden">
            <div className="h-full flex flex-col gap-2 divide-y">
                <div className="h-1/5 flex items-center justify-center">
                    <h1 className="relative text-3xl font-bold text-gray-800 underline">
                        Todo App
                    </h1>
                </div>
                <div className="flex-1">
                    <div className="w-full h-full py-4">
                        <button
                            type="button"
                            className="w-full  py-4 rounded-xl border"
                        >
                            Home
                        </button>
                    </div>
                </div>
                <div className="h-[10%]">
                    <div className="w-full h-full flex items-center justify-center">
                        <button
                            type="button"
                            className="py-3 px-6 rounded-xl border"
                        >
                            Footer
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
