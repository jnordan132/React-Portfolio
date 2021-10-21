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
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/jacob-nordan/" style={{color: 'white'}}>
                    <TiSocialLinkedinCircular/>
                </a>
                <a target="_blank" rel="noreferrer" href="https://www.github.com/jnordan132" style={{color: 'white'}}>
                    <TiSocialGithubCircular/>
                </a>
                <a target="_blank" rel="noreferrer" href={resume} style={{color: 'white'}}>
                    <TiDocumentText/>
                </a>
            </div>
                <p style={styles.letters}>© 2021 Jacob Nordan</p>
            </div>
        </div>
    );
}

export default Footer;