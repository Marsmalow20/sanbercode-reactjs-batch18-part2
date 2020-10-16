import React, {useState} from 'react';
import './Nav.css';
import {Link} from "react-router-dom";

const Nav = () => {
    const [darkMode, setdarkMode] = useState(false)

    return (
        <nav className={darkMode ? "dark-mode"  : "light-mode"}>
            <h3>Text Here</h3>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/tugas-9">Tugas 9</Link>
                </li>
                <li>
                    <Link to="/tugas-10">Tugas 10</Link>
                </li>
                <li>
                    <Link to="/tugas-11">Tugas 11</Link>
                </li>
                <li>
                    <Link to="/tugas-12">Tugas 12</Link>
                </li>
                <li>
                    <Link to="/tugas-13">Tugas 13</Link>
                </li>
                <li>
                    <Link to="/tugas-14">Tugas 14</Link>
                </li>
            </ul>
            <div>
                <button onClick={() => setdarkMode(prevMode => !prevMode)}>{darkMode ? "Light Mode"  : "Dark Mode"}</button>
            </div>
        </nav>
    )
}

export default Nav