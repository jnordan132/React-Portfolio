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
        width: '10rem',
        fontWeight: '300',
    },
    paragraph: {
        marginLeft: '6%',
        marginRight: '6%',
    },
}

function About() {
    return (
        <div style={styles.align}>
            <br/>
            <h1 style={styles.heading}>About Me</h1>
            <p style={styles.paragraph}>Right off the bat, I fell in love with learning about how and why we write good code. I am extremely passionate about solving problems through code and helping others. I began my career search attending flight school and realized quickly that
                I was more intrigued in the technical analysis of how planes flew, more so than flying planes themselves. This created a spark in me that I never knew I had. I figured out pretty quickly that none of it was possible without programming,
                and that's what pulled me right into the world of code. Very quickly after, I enrolled in the Coding Bootcamp at UNC. I have extremely enjoyed the challenges and growth accompanied by this decision. I have learned more than I ever could
                have imagined. I gained an enormous amount of perspective on what I want to do for the rest of my life as well as how much I can help others.</p>
        </div>
    );
}

export default About;