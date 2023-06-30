import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, useLocation } from 'react-router-dom';
import './App.css';
import Root from './componenets/Root';
import Home from './componenets/Home';
import AboutMe from './componenets/AboutMe';
import WorkExp from './componenets/workExp';
import Education from './componenets/Education';
import ITSkills from './componenets/ITskills';
import Contact from './componenets/Contact';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Root />}>
    <Route path="home" element={<Home />} />
    <Route path="aboutMe" element={<AboutMe />} />
    <Route path="workExp" element={<WorkExp />} />
    <Route path="education" element={<Education />} />
    <Route path="itskills" element={<ITSkills />} />
    <Route path="contact" element={<Contact />} />
  </Route>
))


function App() {

  return (
    <RouterProvider router={router} />
  );
}

export default App;
