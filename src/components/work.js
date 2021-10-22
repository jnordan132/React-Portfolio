import Card from 'react-bootstrap/Card';
import feedster from '../feedster.jpg'


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
        width: '9rem',
        fontWeight: '500',
    },
}

function Work() {
    return (
        <div style={styles.align}>
            <br/>
            <h1 style={styles.heading}>My Work</h1>
            <br/>
            <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={feedster} style={{ marginLeft: '10%', width: '200%'}} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </Card.Text>
                </Card.Body>
                <Card.Body>
                  <Card.Link href="#">Card Link</Card.Link>
                  <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
            </Card>
            </div>
        </div>
    );
}

export default Work;