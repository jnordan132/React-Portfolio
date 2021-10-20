const styles =  {
    align: {
        textAlign: 'center'
    }
}

function Contact() {
    return (
        <div style={styles.align}>
            <h1>CONTACT</h1>
            <h5>Email</h5>
            <a id="email" href="mailto: jacob.nordan113322@gmail.com">jacob.nordan113322@gmail.com</a>
            <br/>
            <h5>Phone</h5>
            <a id="phone" href="tel:910-620-0143">+1 (910)-620-0143</a>
        </div>
    );
}

export default Contact;