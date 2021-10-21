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
        width: '6.75rem',
    },
}

function Work() {
    return (
        <div style={styles.align}>
            <h1 style={styles.heading}>WORK</h1>
        </div>
    );
}

export default Work;