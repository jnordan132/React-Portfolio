import { Link } from 'react-scroll';

const styles =  {
    mainNav: {
        position: 'fixed',
        top: '-6px',
        maxHeight: '40px',
        zIndex: '999',
        width: '100%',
        background: 'white',
        overflow: 'hidden',
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
        marginLeft: '1.25rem',
        marginRight: '1.25rem',
        lineHeight: '1.5%',
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

    return <div style={styles.mainNav} id="main_nav">
    <div id="container">
        <nav>
            <ul  style={styles.ul}>
                <li style={styles.ulli}><a href="home" style={{ textDecoration: 'none' }}><Link to="home" spy={true} smooth={true} style={{ color: '#5f99e4' }}>{home}</Link></a></li>
                <li style={styles.ulli}><a href="about" style={{ textDecoration: 'none' }}><Link to="about" spy={true} smooth={true} style={{ color: '#5f99e4' }}>{about}</Link></a></li>
                <li style={styles.ulli}><a href="skills" style={{ textDecoration: 'none' }}><Link to="skills" spy={true} smooth={true} style={{ color: '#5f99e4' }}>{skills}</Link></a></li>
                <li style={styles.ulli}><a href="portfolio" style={{ textDecoration: 'none' }}><Link to="portfolio" spy={true} smooth={true} style={{ color: '#5f99e4' }}>{portfolio}</Link></a></li>
                <li style={styles.ulli}><a href="contact" style={{ textDecoration: 'none' }}><Link to="contact" spy={true} smooth={true} style={{ color: '#5f99e4' }}>{contact}</Link></a></li>
            </ul>
        </nav>
    </div>
</div>
}

export default Navbar;