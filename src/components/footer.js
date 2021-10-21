import { TiSocialLinkedinCircular, TiSocialGithubCircular, TiDocumentText } from 'react-icons/ti';
import resume from '../JacobNordanResume .pdf';

const styles = {
    background:  {
        background: 'linear-gradient(135deg, #bfe990 0%, #5f99e4 100%)',
        height: '15vh',
        textAlign: 'center',
        marginTop: '4%'
    },
    position: {
        alignItems: 'center',
        marginTop: '4%'
    },
    letters: {
        color: 'white',
    },
    icons: {
        fontSize: '300%',
        color: 'white',
    }
}

function Footer() {
    return (
        <div style={styles.background}>
            <div style={styles.position}>
                <br/>
            <div style={styles.icons}>
                <a href="https://www.linkedin.com/in/jacob-nordan/">
                    <TiSocialLinkedinCircular/>
                </a>
                <a href="https://github.com/jnordan132">
                    <TiSocialGithubCircular/>
                </a>
                <a href={resume}>
                    <TiDocumentText/>
                </a>
            </div>
                <p style={styles.letters}>© 2021 Jacob Nordan</p>
            </div>
        </div>
    );
}

export default Footer;