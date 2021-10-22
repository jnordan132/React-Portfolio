const styles = {
    background:  {
        background: 'linear-gradient(135deg, #bfe990 0%, #5f99e4 100%)',
        height: '10vh',
        textAlign: 'center',
        marginTop: '4%'
    },
    position: {
        alignItems: 'center',
        marginTop: '4%',
    },
    letters: {
        color: 'white',
    }
}

function Footer() {
    return (
        <div style={styles.background}>
            <div>
                <p style={styles.letters}>© 2021 Jacob Nordan</p>
            </div>
        </div>
    );
}

export default Footer;