import { TiSocialLinkedinCircular, TiSocialGithubCircular, TiDocumentText, TiMail} from 'react-icons/ti';
import resume from '../JacobNordanResume .pdf';

const styles =  {
    align: {
        textAlign: 'center'
    },
    heading:  {
        marginLeft: 'auto',
        marginRight: 'auto',
        borderBottom: '2px solid',
        borderImage: 'linear-gradient(135deg, #bfe990 0%, #5f99e4 100%)',
        borderImageSlice: '1',
        width: '11.25rem',
        fontWeight: '500',
    },
    layout: {
        display: 'flex',
        justifyContent: 'space-around',
        marginRight: '40%',
        marginLeft: '40%',
        width: '20%',
    },
}

function Contact() {
    return (
        <div id="contact" style={styles.align}>
            <br/>
                <h1 style={styles.heading}>Contact Me</h1>
            <br/>
                <div style={styles.layout}>
                    <div>
                        <a style={{ textDecoration: 'none', color: '#5f99e4', fontSize: '250%' }} id="email" href="mailto: jacob.nordan113322@gmail.com"><TiMail/></a>
                    </div>
                    <div>
                    <a style={{ textDecoration: 'none', color: '#5f99e4', fontSize: '250%' }} target="_blank" rel="noreferrer" href={resume}><TiDocumentText/></a>
                    </div>
                    <div>
                        <a style={{ textDecoration: 'none', color: '#5f99e4', fontSize: '250%' }} target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/jacob-nordan/"><TiSocialLinkedinCircular/></a>
                    </div>
                    <div>
                        <a style={{ textDecoration: 'none', color: '#5f99e4', fontSize: '250%' }} target="_blank" rel="noreferrer" href="https://www.github.com/jnordan132"><TiSocialGithubCircular/></a>
                    </div>
                </div>
        </div>
    );
}

export default Contact;