import React from 'react';
import { Link } from 'react-router-dom';

const contents = {
  aboutMe: 'ABOUT ME',
  education: 'EDUCATION & CERTIFICATES',
  workExp: 'WORK EXPERIENCE',
  //itSkill: 'IT SKILLS WITH PROJECT EXERCRISE',
  contact: 'CONTACT'
};


export default function ContentList() {
  const list = Object.keys(contents).map(page => {
    return (
      <Link to={"/" + page} id={page} >
        {contents[page]}&emsp;
      </Link>
    )
  });

  return (
    <div className="contentlist">
      {list}
    </div>
  );
}