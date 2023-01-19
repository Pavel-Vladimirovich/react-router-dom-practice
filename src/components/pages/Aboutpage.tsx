import { useState, useEffect } from "react"
import { Link } from "react-router-dom"



export const Aboutpage = () => {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setPosts(data))
    })
    console.log(posts)
    const styleLink = {
        textDecoration: 'none',
        color: 'black',
    }

    return (
        <div>
            <div>
                {
                    posts.map(post => (
                        <Link key={post} to={`/aboutpage/${post}`}>
                            <li>{post}</li>
                        </Link>
                    ))
                }
            </div>

            <h2>About page</h2>
            <span>Call us </span>
            <a style={styleLink} href="tel:+123456">+375291234567</a>
        </div>
    )
}