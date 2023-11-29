import {NavLink} from "react-router-dom";
import {useEffect} from "react";

export const AboutPage = () => {

    useEffect(() => {
        document.title = 'About Page'
    }, [])

    const style = {
        textDecoration: 'none',
        color: 'black',
    }

    return (
        <div>
            <h2>About page</h2>
            <span>Call us: </span>
            <a style={style} href="tel:+123456">+375291234567</a>
            <br/>
            <NavLink to={'/'}>Home page</NavLink>
        </div>
    )
}