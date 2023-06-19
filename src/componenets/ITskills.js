import React from "react"

export default function ITSkills() {
    return (
        <div className="itskills">
            <div id="pics">
                <img src="resources/HTML5_logo_and_wordmark.svg.png" alt="HTML logo"/>
                <img src="resources/javascript-logo.png" alt="JavaScript logo"/>
                <img src="resources/1631110818-logo-react-js.png" alt="React logo"/>
                <img src="resources/reactrouter.png" alt="React Router logo"/>
                <img src="resources/redux.png" alt="React-Redux logo"/>
            </div>
            <div id="appointmentmaker">
                <h3>
                    <a
                        href="https://clever-mermaid-4b7839.netlify.app"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Contact List and Appointment Maker
                    </a>
                </h3>
                <p>
                    Description:
                    <ul>
                        <li>A single-page-appication
                            which can save customer's contacts and
                            make appointments at restricted time.
                        </li>
                    </ul><br />
                    Skills Used:
                    <ul>
                        <li>HTML form</li>
                        <li>JavaScript</li>
                        <li>JavaScript React library</li>
                        <li>JavaScript React Router library</li>
                    </ul>
                </p>
                <br />
            </div>
            <div id="articlemaker">
                <h3>
                    <a
                        href="https://gleeful-cajeta-975eb7.netlify.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Article Library
                    </a>
                </h3>
                <p>
                    Description:
                    <ul>
                        <li>A single-page-application
                            contains numberous of articles which
                            user can search the article by keywords or
                            sort articles by catagories.
                        </li>
                    </ul><br />
                    Skills Used:
                    <ul>
                        <li>HTML form</li>
                        <li>JavaScript</li>
                        <li>JavaScript React library</li>
                        <li>JavaScript React Router library</li>
                        <li>JavaScript React-Redux library</li>
                    </ul>
                </p>
                <br />
            </div>
            <div id="Quizcard">
                <h3>
                    <a
                        href="https://fabulous-capybara-5f61d7.netlify.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Quiz Revision Cards Creator
                    </a>
                </h3>
                <p>
                    Description:
                    <ul>
                        <li>A single-page-application
                            for user to create quizz revision cards
                            with different topics.
                        </li>
                    </ul><br />
                    Skills Used:
                    <ul>
                        <li>JavaScript</li>
                        <li>JavaScript React library</li>
                        <li>JavaScript React Router library</li>
                        <li>JavaScript React-Redux library</li>
                    </ul>
                </p>
                <br />
            </div>
        </div>
    )
}