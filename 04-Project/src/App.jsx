import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./Layout";

import Home from "./Componenets/Home/Home";
import About from "./Componenets/About/About";
import Contact from "./Componenets/Contact/Contact";
import User from "./Componenets/User/User";
import Github, { githubinfoloader } from "./Componenets/Github/Github";

function App() {
    return (
        <BrowserRouter>
            <Routes>

                <Route path="/" element={<Layout />}>

                    <Route index element={<Home />} />

                    <Route path="about" element={<About />} />

                    <Route path="contact" element={<Contact />} />

                    <Route path="user/:userid" element={<User />} />
                    loader={githubinfoloader}
                    <Route path="github" element={<Github />} />


                </Route>

            </Routes>
        </BrowserRouter>
    );
}

export default App;