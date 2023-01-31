import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

type PostsType = {
    id: string,
    name: string,
    username: string,
    email: string,
    address: {
        city: string,
        street: string,
        zipcode: string
    }
}

export const Aboutpage = () => {

    const styleLink = {
        textDecoration: 'none',
        color: 'black',
    }


    const [posts, setPosts] = useState<any>()

    console.log(posts)
    const [resources, setResources] = useState<string>('')

    useEffect(() => {
        document.title = !resources ? 'About Us Page' : resources
        console.log('render')
        fetch(`https://jsonplaceholder.typicode.com/${resources}/1`)
            .then(response => response.json())
            .then(json => setPosts(json))
    }, [resources])

    

    return (
        <div>
            <div>
                <button onClick={() => { setResources('todos') }}>get todos</button>
                <button onClick={() => { setResources('posts') }}>posts</button>
                <button onClick={() => { setResources('users') }}>users</button>
            </div>
            <p>{
              
            }</p>
            <h2>About page</h2>
            <span>Call us </span>
            <a style={styleLink} href="tel:+123456">+375291234567</a>
        </div>
    )
}