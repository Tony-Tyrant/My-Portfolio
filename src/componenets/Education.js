import React, { useState } from 'react';

export default function Education() {
    const [selected, setSelected] = useState('');

    function clickHandle({ target }) {
        if (selected === target.id) {
            setSelected('')
        } else {
            setSelected(target.id);
        }
    }

    return (
        <div className='Education'>
            <h3 id="frontend" onClick={clickHandle}>
                Professional Certification
                <br />
                Front-End Engineer
                <br/>
                Codecademy
                <br/>
                (2023)
            </h3>
            <img
                src='/resources/beginner_of_frontend.png'
                alt='Certificate of the completion of a Front-End Engineer Course in Codecademy'
                hidden={selected === 'frontend' ? false : true}
            />
            <br/>

            <h3 id="javascript" onClick={clickHandle}>
                Certificate of Completion
                <br />
                Learn JavaScript Course
                <br/>
                Codecademy
                <br/>
                (2023)
            </h3>
            <img
                src='/resources/learn_javascript.png'
                alt='Certificate of the completion of a JavaScript Course in Codecademy'
                hidden={selected === 'javascript' ? false : true}
            />
            <br/>

            <h3 id="university">
                Bachelor of Engineering in 
                <br/>
                Building Services Engineering
                <br />
                Hong Kong Polytechnic University
                <br/>
                (2013)
            </h3>

        </div>
    );
}