import { Link, Outlet, Route, Routes } from "react-router-dom"
import { Family } from "./Family"
import { Healthy } from "./Healthy"
import { Nature } from "./Nature"
import { Technology } from "./Technology"

export const Blogpage = () => {

    const styleBlogpage = {
       
    }

    return (
        <div style={styleBlogpage}>
            <h2>Blog page</h2>
            <ul>
                <li><Link to={'nature'}>Nature</Link></li>
                <li><Link to={'technology'}>Information technology (IT)</Link></li>
                <li><Link to={'healthy'}>Healthy</Link></li>
                <li><Link to={'family'}>Family</Link></li>
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