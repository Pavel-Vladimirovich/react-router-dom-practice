export const Aboutpage = () => {

    const styleAboutpage = {
        padding: '5px',
        marginTop: '70px',
        // textAlign: 'center',
    }
    const styleLink = {
        textDecoration: 'none',
        color: 'black',
    }

    return (
        <div style={styleAboutpage}>
            <h2>About page</h2>
            <span>Call us </span>
            <a style={styleLink} href="tel:+123456">+375291234567</a>
        </div>
    )
}