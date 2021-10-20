import pictureOfMe from '../IMG_me.jpg';

const styles = {
    img: {
        width: '300px',
        height: '320px',
        borderRadius: '50%',
        verticalAlign: 'center',
        border: '0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    background:  {
        background: 'linear-gradient(135deg, #bfe990 0%, #5f99e4 100%)',
        height: '100vh',
    },
    letters: {
        color: 'white',
        font: '',
        textAlign: 'center',
    }
};

function Header() {
    const name = "JACOB NORDAN";
    const occupation = "FULLSTACK WEB DEVELOPMENT"
    return  (
    <div style={styles.background}>
        <div>
            <img style={styles.img} src={pictureOfMe} width="300" height="320" alt="me"/>
        </div>
        <h1 style={styles.letters}>{name}</h1>
        <h5 style={styles.letters}>{occupation}</h5>
    </div>
    );
}

export default Header;