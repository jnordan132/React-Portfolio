const styles = {
    background:  {
        background: 'linear-gradient(135deg, #bfe990 0%, #5f99e4 100%)',
        height: '15vh',
        textAlign: 'center',
    },
}

function Footer() {
    return (
        <div style={styles.background}>
            <h1>FOOTER</h1>
            <div>
                <p>© 2021 Jacob Nordan</p>
            </div>
        </div>
    );
}

export default Footer;