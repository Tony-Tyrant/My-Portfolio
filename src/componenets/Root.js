import React, { useEffect } from "react";
import Header from "./Header";
import ContentList from "./contentList";
import { Outlet, useNavigate } from "react-router-dom";
import { Link, useLocation } from 'react-router-dom';

export default function Root() {
    const navigate = useNavigate();
    useEffect(() => {
        navigate("/home");
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    function clickHandle() {
        const navbarToggler = document.body.querySelector('.navbar-toggler');
        if (window.getComputedStyle(navbarToggler).display !== 'none') {
            navbarToggler.click()
        }
    }

    let page = useLocation()

    return (
        <>
            <nav className="navbar navbar-expand-lg col-lg-3 mr-lg-0 bg-success navbar-light fixed-top" >
                <div className="container-fluid d-flex flex-lg-column ">
                    <Link className="navbar-brand w-50 d-flex flex-center m-0" to="/home" id="home">
                        <img
                            src="resources/tony_logo_1.jpeg"
                            alt="Tony Ho Logo - back to homepage"
                            id="tony-logo"
                            className="w-75 mt-lg-3 d-none d-lg-block" />

                        <img
                            src="resources/tony_logo_1.jpeg"
                            alt="Tony Ho Logo - back to homepage"
                            id="tony-logo"
                            className="d-lg-none"
                            style={{height: "3rem"}} />

                    </Link>
                    <button
                        className="navbar-toggler bg-light"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation">

                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse pt-lg-5" id="navbarSupportedContent" >
                        <ul className='navbar-nav nav-underline me-auto d-flex flex-column' >
                            <ContentList
                                click={clickHandle}
                                className={"nav-link text-light fw-bold fs-6 p-0 my-3 fs-4"}
                                currentPage={page.pathname} />
                        </ul>
                    </div>
                </div>
            </nav >


            <main className="container-fluid mt-5 mt-lg-3 pt-lg-0 pt-5 h-100">
                <div className="row">
                    <div className="col offset-lg-3">
                        <Header />
                    </div>
                </div>

                <div className="row h-100">
                    <div className="col-lg-3 d-none d-lg-block bg-success"></div>
                    <div className="col-lg-9 px-3 px-md-5">
                        <Outlet />
                    </div>
                </div>
            </main>
        </>
    )
}