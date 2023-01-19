import { NavLink, Route, Routes } from "react-router-dom"

const Information = () => {
    return (
        <>
            <p>
                React — JavaScript-библиотека с открытым исходным кодом для разработки пользовательских интерфейсов. React разрабатывается и поддерживается Facebook, Instagram и сообществом отдельных разработчиков и корпораций. React может использоваться для разработки одностраничных и мобильных приложений. Википедия
            </p>
        </>
    )
}


export const Homepage = () => {
    const styleHomepage = {
       
    }

    return (
        <div style={styleHomepage}>
            <h2>Home page</h2>

            {/* <NavLink to='/info'>more information</NavLink>

            <Routes>
                <Route path='/info' element={Information} />
            </Routes> */}
        </div>
    )
}

