import pictureOfMe from '../IMG_me.jpg';

const styles = {
    img: {
        width: '300',
        height: '320',
        borderRadius: '50%',
        verticalAlign: 'center',
        border: '0',
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    background:  {
        background: 'linear-gradient(135deg, #bfe990 0%, #5f99e4 100%)',
        height: '100vh',
    },
};

function Header() {

    return  (
    <div style={styles.background}>
        <div>
            
                <img style={styles.img} src={pictureOfMe} width="300" height="320" alt="me"/>
            
        </div>
    </div>
    );
}

export default Header;