import React, { useEffect } from "react";
import Header from "./Header";
import ContentList from "./contentList";
import { Outlet, useNavigate } from "react-router-dom";

export default function Root() {
    const navigate = useNavigate();
    useEffect(() => {
        navigate("/intro");
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

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