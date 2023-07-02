import React from "react"

export default function ITSkills() {
    return (
        <section id="itskills">
            <h2 className="mt-5 mb-3 text-uppercase text-decoration-underline fw-bold">programming languages & tools</h2>
            <div id="pics" className="d-flex flex-between align-items-center flex-lg-nowrap flex-wrap align-content-around">
                <img className="p-1" src="resources/HTML5_logo_and_wordmark.svg.png" alt="HTML logo" />
                <img className="p-1" src="resources/javascript-logo.png" alt="JavaScript logo" />
                <img className="p-1" src="resources/1631110818-logo-react-js.png" alt="React logo" />
                <img className="p-1" src="resources/reactrouter.png" alt="React Router logo" />
                <img className="p-1" src="resources/redux.png" alt="React-Redux logo" />
                <img className="p-1" src="resources/bootstrap.png" alt="bootstrap logo" />
                <img className="p-1" src="resources/ba8u9otcvrpidtbd94kvclvgb2.png" alt="git logo" />
            </div>

            <h2 className="mt-5 pt-5 mb-3 text-uppercase text-decoration-underline fw-bold">project excerises</h2>
            <div className="lead pb-4" id="appointmentmaker">
                <h4>
                    <a
                        href="https://clever-mermaid-4b7839.netlify.app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-decoration-none text-body-secondary"
                        title="Contact List and Appointment Maker">
                        Contact List and Appointment Maker&nbsp;
                    </a>
                    <img 
                            src="resources/link_symbol.png" 
                            alt="link"
                            style={{height: "0.7em"}}/>
                </h4>
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
                <h4>
                    <a
                        href="https://gleeful-cajeta-975eb7.netlify.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-decoration-none text-body-secondary"
                        title="Article Library">
                        Article Library&nbsp;
                    </a>
                    <img 
                            src="resources/link_symbol.png" 
                            alt="link"
                            style={{height: "0.7em"}}/>
                </h4>
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
                <h4>
                    <a
                        href="https://fabulous-capybara-5f61d7.netlify.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-decoration-none text-body-secondary"
                        title="Quiz Revision Cards Creator">
                        Quiz Revision Cards Creator&nbsp;
                    </a>
                    <img 
                            src="resources/link_symbol.png" 
                            alt="link"
                            style={{height: "0.7em"}}/>
                </h4>
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