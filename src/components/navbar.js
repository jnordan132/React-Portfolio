const styles =  {
    mainNav: {
        position: 'fixed',
        top: '-6px',
        maxHeight: '40px',
        zIndex: '999',
        width: '100%',
        background: 'white',
        overflow: 'hidden',
        webkitTransition: 'all 0.3s',
        transition: 'all 0.3s',
        opacity: '100',
        paddingBottom: '10px',
    },
    ul: {
        listStyleType: 'none',
        overflow: 'hidden',
        textAlign: 'center',
    },
    ulli: {
        display: 'inline-block',
        alignItems: 'center',
        marginLeft: '20px',
        marginRight: '20px',
        lineHeight: '1.5',
        letterSpacing: '1px',
        color: 'white',
        textDecoration: 'none'

    }
};

function Navbar() {
    const home = "HOME";
    const about = "ABOUT";
    const skills = "SKILLS";
    const portfolio = "PORTFOLIO";
    const contact = "CONTACT";

    return <div style={styles.mainNav} className="main_nav">
    <div className="container">
        <nav>
            <ul style={styles.ul}>
                <li style={styles.ulli}><a href="#home" style={{ textDecoration: 'none', color: '#5f99e4' }}>{home}</a></li>
                <li style={styles.ulli}><a href="#about" style={{ textDecoration: 'none', color: '#5f99e4' }}>{about}</a></li>
                <li style={styles.ulli}><a href="#skills" style={{ textDecoration: 'none', color: '#5f99e4' }}>{skills}</a></li>
                <li style={styles.ulli}><a href="#portfolio" style={{ textDecoration: 'none', color: '#5f99e4' }}>{portfolio}</a></li>
                <li style={styles.ulli}><a href="#contact" style={{ textDecoration: 'none', color: '#5f99e4' }}>{contact}</a></li>
            </ul>
        </nav>
    </div>
</div>
}

export default Navbar;