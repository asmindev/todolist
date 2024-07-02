import React from "react";
import Sidebar from "./Sidebar";

export default function Wrapper({ children }) {
    return (
        <main className="w-full h-full">
            <div className="w-full h-full flex items-start divide-x">
                <nav className="bg-white w-0 md:w-[23%] h-full sticky left-0 top-0 z-50 overflow-hidden">
                    <Sidebar />
                </nav>
                <section className="flex-1 min-h-screen p-4 flex flex-col justify-between">
                    <div className="flex-1">{children}</div>
                    <footer className="h-16 flex items-center justify-center">
                        <h1 className="text-gray-500 text-sm">
                            Made with <span className="text-red-500">❤</span> by{" "}
                            <a href="#">kelompok 7</a>
                        </h1>
                    </footer>
                </section>
            </div>
        </main>
    );
}
