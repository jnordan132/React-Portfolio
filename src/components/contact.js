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
        fontWeight: '300',
    },
}

function Contact() {
    return (
        <div style={styles.align}>
            <br/>
            <h1 style={styles.heading}>Contact Me</h1>
            <br/>
            <div>
                <h3>Email</h3>
                <h4><a style={{ textDecoration: 'none', color: '#5f99e4' }} id="email" href="mailto: jacob.nordan113322@gmail.com">jacob.nordan113322@gmail.com</a></h4>
                <h3>Phone</h3>
                <h4><a style={{ textDecoration: 'none', color: '#5f99e4' }} id="phone" href="tel:910-620-0143">+1 (910)-620-0143</a></h4>
            </div>
        </div>
    );
}

export default Contact;