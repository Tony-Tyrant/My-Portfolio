import React from "react"

export default function ITSkills() {
    return (
        <section id="itskills">
            <h2 className="my-5 text-uppercase">programming languages & tools</h2>
            <div id="pics" className="d-flex flex-between align-items-center flex-lg-nowrap flex-wrap align-content-around">
                <img className="p-1" src="resources/HTML5_logo_and_wordmark.svg.png" alt="HTML logo" />
                <img className="p-1" src="resources/javascript-logo.png" alt="JavaScript logo" />
                <img className="p-1" src="resources/1631110818-logo-react-js.png" alt="React logo" />
                <img className="p-1" src="resources/reactrouter.png" alt="React Router logo" />
                <img className="p-1" src="resources/redux.png" alt="React-Redux logo" />
                <img className="p-1" src="resources/bootstrap.png" alt="bootstrap logo" />
                <img className="p-1" src="resources/ba8u9otcvrpidtbd94kvclvgb2.png" alt="git logo" />
            </div>

            <h2 className="my-5 pt-5 text-uppercase">project excerises</h2>
            <div className="lead pb-4" id="appointmentmaker">
                <h3>
                    <a
                        href="https://clever-mermaid-4b7839.netlify.app"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Contact List and Appointment Maker">
                        Contact List and Appointment Maker
                    </a>
                </h3>
                <p>
                    <ul>
                        <li>A single-page-appication
                            which can save customer's contacts and
                            make appointments at restricted time.
                        </li>
                    </ul>
                </p>
            </div>
            <div className="lead pb-4" id="articlemaker">
                <h3>
                    <a
                        href="https://gleeful-cajeta-975eb7.netlify.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Article Library">
                        Article Library
                    </a>
                </h3>
                <p>
                    <ul>
                        <li>A single-page-application
                            contains numberous of articles which
                            user can search the article by keywords or
                            sort articles by catagories.
                        </li>
                    </ul>
                </p>

            </div>
            <div className="lead pb-4" id="Quizcard">
                <h3>
                    <a
                        href="https://fabulous-capybara-5f61d7.netlify.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Quiz Revision Cards Creator">
                        Quiz Revision Cards Creator
                    </a>
                </h3>
                <p>
                    <ul>
                        <li>A single-page-application
                            for user to create quizz revision cards
                            with different topics.
                        </li>
                    </ul>
                </p>
            </div>
        </section>
    )
}