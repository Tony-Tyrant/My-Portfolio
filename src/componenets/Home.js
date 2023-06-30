import React from "react"

export default function Home() {
    return (
        <section id="home">
            <div className="row">
                <div className="col">
                    <div className="rounded-5 bg-success bg-opacity-50 border border-5 border-success">
                        <p className="text-start p-4 fs-5">
                            This responsive web-page is built with
                            <span className="fw-bold"> React.js</span> and <span className="fw-bold">Bootstrap. </span>
                            <br></br>
                            I am a fresh front-end developer. Check this web-page out and find my abilities.
                        </p>
                    </div>
                </div>
            </div>
            <br></br>
            <div className="row">
                <div className="col d-flex justify-content-center">
                    <a
                        href="https://github.com/tony-tyrant/"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Check-out my GitHub page">
                        <img id="social_logo" src="/resources/github-logo.png" alt="My GitHub link" />
                    </a>
                </div>
            </div>
        </section>
    )

}