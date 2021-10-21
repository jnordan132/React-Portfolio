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
        width: '8.75rem',
        fontWeight: '300',
    },
    list: {
        listStyleType: 'none'
    }
}

function Skills() {
    return (
        <div style={styles.align}>
            <br/>
            <h1 style={styles.heading}>My Skills</h1>
            <div style={styles.list}>
                <div>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                </div>
                <div>
                    <li>React.JS</li>
                    <li>Node.JS</li>
                    <li>Express.JS</li>
                </div>
                <div>
                    <li>Bootstrap</li>
                    <li>Materialize</li>
                    <li>Jquery</li>
                </div>
                <div>
                    <li>MySQL</li>
                    <li>MongoDB</li>
                    <li>Git</li>
                </div>
            </div>
        </div>
    );
}

export default Skills;