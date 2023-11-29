import {useEffect} from "react"


export const Homepage = () => {

    useEffect(() => {
        document.title = 'Home Page'
    }, [])

    const styleHomepage = {

    }

    return (
        <div style={styleHomepage}>
            <h2>Home page</h2>
            <p>
                React — JavaScript-библиотека с открытым исходным кодом для разработки пользовательских интерфейсов.
                React разрабатывается и поддерживается Facebook, Instagram и сообществом отдельных разработчиков и корпораций.
                React может использоваться для разработки одностраничных и мобильных приложений.
            </p>
            <p>Википедия</p>
        </div>
    )
}
