import React, { useState } from 'react';

export default function Education() {
    const [selected, setSelected] = useState('');

    function clickHandle({ target }) {
        if (selected === target.id) {
            setSelected('');
        } else {
            setSelected(target.id);
        }
        // rotateDropdown();
    }

    // function rotateDropdown() {
    //     if(selected) {
    //         document.querySelector("img #"+selected).style.transform = "rotate(180deg)";
    // }}

    return (
        <section id='Education'>
            <h2 className="mt-5 text-uppercase text-decoration-underline">certificates</h2>
            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
            

                <div className="flex-grow-1">
                    <h3 className="mb-0 text-body-secondary" id="bootstrap" onClick={clickHandle}>
                        Certificate of Completion Learn Bootstrap Course&nbsp;
                        <img 
                            style={selected === 'bootstrap' ? {height:"0.7em", rotate: "180deg"} : {height:"0.7em"}} 
                            src="resources/dropdown.png" 
                            alt="dropdown" 
                            onClick={clickHandle}/>
                    </h3>

                    <div className="mb-3 fs-5 ">
                        <a
                            href="http://www.codecademy.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            title="codecademy.com"
                            className='link-secondary text-decoration-none '>

                            Codecademy ↗
                        </a>
                    </div>
                    <img
                        className="w-100"
                        src='/resources/learn_bootstrap.png'
                        alt='Certificate of the completion of a Bootstrap Course in Codecademy'
                        hidden={selected === 'bootstrap' ? false : true} />
                </div>
                <div class="flex-shrink-0"><span class="fs-4">Jun 2023</span></div>
            </div>

            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                <div className="flex-grow-1">
                    <h3 className="mb-0 text-body-secondary" id="frontend" onClick={clickHandle}>
                        Professional Certification Front-End Engineer&nbsp;
                        <img 
                            style={selected === 'frontend' ? {height:"0.7em", rotate: "180deg"} : {height:"0.7em"}} 
                            src="resources/dropdown.png" 
                            alt="dropdown" 
                            onClick={clickHandle}/>
                    </h3>
                    <div className="fs-5 mb-3">
                        <a
                            href="http://www.codecademy.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            title="codecademy.com"
                            className='link-secondary text-decoration-none '>

                            Codecademy ↗
                        </a>
                    </div>
                    <img
                        className="w-100"
                        src='/resources/beginner_of_frontend.png'
                        alt='Certificate of the completion of a Front-End Engineer Course in Codecademy'
                        hidden={selected === 'frontend' ? false : true} />
                </div>
                <div class="flex-shrink-0"><span class="fs-4">Jun 2023</span></div>
            </div>

            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                <div className="flex-grow-1">
                    <h3 className="mb-0 text-body-secondary" id="javascript" onClick={clickHandle}>
                        Certificate of Completion Learn JavaScript Course&nbsp;
                        <img 
                            style={selected === 'javascript' ? {height:"0.7em", rotate: "180deg"} : {height:"0.7em"}} 
                            src="resources/dropdown.png" 
                            alt="dropdown" 
                            onClick={clickHandle}/>
                    </h3>
                    <div className="mb-3 fs-5">
                        <a
                            href="http://www.codecademy.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            title="codecademy.com"
                            className='link-secondary text-decoration-none '>

                            Codecademy ↗
                        </a>
                    </div>
                    <img
                        className="w-100"
                        src='/resources/learn_javascript.png'
                        alt='Certificate of the completion of a JavaScript Course in Codecademy'
                        hidden={selected === 'javascript' ? false : true} />
                </div>
                <div class="flex-shrink-0"><span class="fs-4">Jan 2023</span></div>
            </div>

            <h2 className="mt-5 pt-5 text-uppercase text-decoration-underline">education</h2>
            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                <div className="flex-grow-1">
                    <h3 className="mb-0 text-body-secondary" id="university">
                        Bachelor of Engineering in Building Services Engineering
                    </h3>
                    <div className="mb-3 fs-5">
                        <a
                            href="http://www.polyu.edu.hk/"
                            target="_blank"
                            rel="noopener noreferrer"
                            title="The Hong Kong Polytechnic University (PolyU)"
                            className='link-secondary text-decoration-none '>

                            Hong Kong Polytechnic University ↗
                        </a>
                    </div>
                </div>
                <div class="flex-shrink-0"><span class="fs-4">Oct 2013</span></div>
            </div>
        </section>
    );
}