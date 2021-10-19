const styles =  {
    ul: {
        listStyleType: 'none',
        overflow: 'hidden',
        textAlign: 'center',
    },
    ulli: {
        display: 'inline-block',
        alignItems: 'center',
        marginLeft: '5px',
        marginRight: '5px',
        lineHeight: '1.5',
        letterSpacing: '1px',
        borderBottom: 'none',
    }
};

function Navbar() {

    const home = "HOME";
    const about = "ABOUT";
    const skills = "SKILLS";
    const portfolio = "PORTFOLIO";
    const contact = "CONTACT";

    return <div class="main_nav">
    <div class="container">
        <div class="mobile-toggle"><span></span> <span></span> <span></span></div>
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