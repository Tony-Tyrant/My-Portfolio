import React, { useEffect } from "react";
import Header from "./Header";
import ContentList from "./contentList";
import { Outlet, useNavigate } from "react-router-dom";

export default function Root() {
    useEffect(() => {
        const navigate = useNavigate();
        navigate("/intro");
    }, [])

    return (
        <>
            <Header />
            <main>
                <nav>
                    <ContentList />
                </nav>
                <div className="content">
                    <Outlet />
                </div>
            </main>
        </>
    )
}