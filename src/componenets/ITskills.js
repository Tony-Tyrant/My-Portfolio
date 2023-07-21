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

            <h2 className="mt-5 pt-5 mb-3 text-uppercase text-decoration-underline fw-bold">personal project</h2>
            <div className="lead pb-4">
                <h4>
                    <a
                        href="https://4-6-coffee-timer.netlify.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-decoration-none text-body-secondary"
                        title="4:6 Coffee Brewing System Timer">
                        4:6 Coffee Brewing System Timer&nbsp;
                    </a>
                    <img 
                            src="resources/link_symbol.png" 
                            alt="link"
                            style={{height: "0.7em"}}/>
                </h4>
                <p>
                    <ul>
                        <li>A web application for calculating the formular of brewing a cup of coffee as well as providing relevant timer.</li>
                        <li>Using HTML form and React-Redux to collect and manage user inputs.</li>
                        <li>Appling Bootstrap to achieve responsive design.</li>
                        <li>Transmiting variables to multi-component by React Context hooks.</li>
                        <li>Controlling the timer with the help of React useEffect and useState hooks.</li>
                    </ul>
                </p>
            </div>
            <div className="lead pb-4">
                <h4>
                    <a
                        href="https://pharmacistsconnect.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-decoration-none text-body-secondary"
                        title="4:6 Coffee Brewing System Timer">
                        Pharmacists Connect&nbsp;
                    </a>
                    <img 
                            src="resources/link_symbol.png" 
                            alt="link"
                            style={{height: "0.7em"}}/>
                </h4>
                <p>
                    <ul>
                        <li>A web showing where to look for a registered pharmacist.</li>
                        <li>Fetching pharmacy data from Strapi Headless CMS.</li>
                        <li>Locating the connected pharmacist with Google Map React API.</li>
                    </ul>
                </p>
            </div>
        </section>
    )
}