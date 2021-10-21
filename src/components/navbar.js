const styles =  {
    mainNav: {
        position: 'fixed',
        top: '0px',
        maxHeight: '50px',
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
        marginLeft: '15px',
        marginRight: '15px',
        lineHeight: '1.5',
        letterSpacing: '1px',
        color: 'white',
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
        <div className="mobile-toggle"><span></span> <span></span> <span></span></div>
        <nav>
            <ul style={styles.ul}>
                <li style={styles.ulli}><a href="#home">{home}</a></li>
                <li style={styles.ulli}><a href="#about">{about}</a></li>
                <li style={styles.ulli}><a href="#skills">{skills}</a></li>
                <li style={styles.ulli}><a href="#portfolio">{portfolio}</a></li>
                <li style={styles.ulli}><a href="#contact">{contact}</a></li>
            </ul>
        </nav>
    </div>
</div>
}

export default Navbar;