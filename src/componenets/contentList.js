import React from 'react';
import { Link } from 'react-router-dom';

const contents = {
  //home: 'HOME',
  aboutMe: 'ABOUT ME',
  education: 'EDUCATION & CERTIFICATES',
  //workExp: 'WORK EXPERIENCE',
  itSkills: 'SKILLS & PROJECT',
  //contact: 'CONTACT'
};


export default function ContentList({ click, className, currentPage }) {
  const list = Object.keys(contents).map(page => {
    const active = '/'+ page === currentPage? "active" : "text-opacity-50"
    return (
      <section id="content-list">
      <li className="nav-item" onClick={click}>
        <Link
          to={"/" + page}
          id={page}
          className={className + " " + active}>
          {contents[page]}&emsp;

        </Link>
      </li>
      </section>
    )
  });

  return (
    <>
      {list}
    </>
  );
}
