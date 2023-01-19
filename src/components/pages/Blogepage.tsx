import { NavLink, Outlet, Route, Routes } from "react-router-dom"
import { Family } from "./Family"
import { Healthy } from "./Healthy"
import { Nature } from "./Nature"
import { Technology } from "./Technology"

export const Blogpage = () => {

    const styleBlogpage = {
        padding: '5px',
        marginTop: '70px',
    }

    return (
        <div style={styleBlogpage}>
            <h2>Blog page</h2>
            <ul>
                <li><NavLink to={'nature'}>Nature</NavLink></li>
                <li><NavLink to={'technology'}>Information technology (IT)</NavLink></li>
                <li><NavLink to={'healthy'}>Healthy</NavLink></li>
                <li><NavLink to={'family'}>Family</NavLink></li>
            </ul>
            <Routes>
                <Route path='nature' element={<Nature />} />
                <Route path='technology' element={<Technology />} />
                <Route path='healthy' element={<Healthy />} />
                <Route path='family' element={<Family />} />
            </Routes>
            {/* <Outlet /> */}
        </div>
    )
}