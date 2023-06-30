import React from 'react';
import { Link } from 'react-router-dom';

const contents = {
  //home: 'HOME',
  aboutMe: 'ABOUT ME',
  education: 'EDUCATION & CERTIFICATES',
  //workExp: 'WORK EXPERIENCE',
  itSkills: 'SKILLS & PROJECT EXERCRISES',
  //contact: 'CONTACT'
};


export default function ContentList({ click, className, currentPage }) {
  const list = Object.keys(contents).map(page => {
    const active = '/'+ page === currentPage? "active" : ""
    return (
      <li className="nav-item" onClick={click}>
        <Link
          to={"/" + page}
          id={page}
          className={className + " " + active}>

          {contents[page]}&emsp;

        </Link>
      </li>
    )
  });

  return (
    <>
      {list}
    </>
  );
}
