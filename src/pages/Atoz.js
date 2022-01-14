// Code written by Therese Bruzell
// Page for a-z
// Imports
import React from 'react'
import FetchAll from '../components/fetchers/FetchAll'
import Sidebar from '../components/layout/Sidebar'
import { Route, Routes } from 'react-router-dom';
import FetchCat from '../components/fetchers/FetchCat';

// Exporting page
export default function Atoz(props) {
    return (
        <main>
            <h2>A to Z</h2>
            <div className='flex atozflex'>
                <div>
                    {/* Routes for categories and non cat page */}
                    <Routes>
                        <Route path="/" element={<FetchAll ></FetchAll>} />
                        <Route path="/warrior" element={<FetchCat category="Warrior" />} />
                        <Route path="/regent" element={<FetchCat category="Regent" />} />
                        <Route path="/scientist" element={<FetchCat category="Scientist" />} />
                        <Route path="/artist" element={<FetchCat category="Artist" />} />
                        <Route path="/activist" element={<FetchCat category="Activist" />} />
                        <Route path="/philosopher" element={<FetchCat category="Philosopher" />} />
                        <Route path="/other" element={<FetchCat category="Other" />} />
                    </Routes>
                </div>
                <Sidebar></Sidebar>
            </div>
        </main>
    )
}
