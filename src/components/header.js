import pictureOfMe from '../IMG_me.jpg';


const styles = {
    background:  {
        background: 'linear-gradient(135deg, #bfe990 0%, #5f99e4 100%)',
        height: '100vh',
    },
    img: {
        width: '300px',
        height: '320px',
        borderRadius: '50%',
        verticalAlign: 'center',
        border: '0',
    },
    imgBox: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '12%'
    },
    letters: {
        color: 'white',
        fontWeight: '300',
        fontSize: '5rem',
        textAlign: 'center',
    },
    lettersTwo: {
        color: 'white',
        fontWeight: '300',
        fontSize: '1.75rem',
        textAlign: 'center',
    },
    align: {
        
    }

};

function Header() {
    const name = "JACOB NORDAN";
    const occupation = "FULLSTACK WEB DEVELOPMENT"
    return  (
    <div>    
        <div style={styles.background}>
            <div>
                <div style={styles.imgBox}>
                    <img style={styles.img} src={pictureOfMe} width="300" height="320" alt="me"/>
                </div>
                <h1 style={styles.letters}>{name}</h1>
                <h2 style={styles.lettersTwo}>{occupation}</h2>
            </div>
        </div>
        <br/>
    </div>
    );
}


export default Header;