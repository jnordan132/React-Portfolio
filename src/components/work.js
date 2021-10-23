import Card from 'react-bootstrap/Card';
import feedster from '../feedster.jpg'
import weather from '../Weather.png';
import feedit from '../FEEDIT.png';
import quiz from '../quiz.jpg';
import notes from '../notes.jpg';
import planner from '../planner.jpg';


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
    flexSection:  {
        display:'flex', 
        justifyContent:'space-around', 
        overflow: 'hidden',
        marginLeft: '4%',
        marginRight: '4%',
    }
}

function Work() {
    return (
        <div id="portfolio" style={styles.align}>
            <br/>
            <h1 style={styles.heading}>My Work</h1>
            <br/>
            <div style={styles.flexSection}>
                <div style={{ border: '2px solid black', backgroundColor: 'darkgrey'}}>
                    <Card style={{ width: '35rem' }}>
                        <Card.Img variant="top" src={feedster} style={{ width: '100%', borderBottom: '2px solid black'}} />
                        <Card.Body>
                          <Card.Title><h3 style= {{ color: 'white'}}>Feedster</h3></Card.Title>
                          <Card.Text style={{marginLeft: '7%', marginRight: '7%',color: 'white'}}>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                          </Card.Text>
                        </Card.Body>
                        <Card.Body style={{ display: 'flex', justifyContent: 'space-around', marginRight: '40%', marginLeft: '40%', width: '23%'}}>
                          <Card.Link style={{ textDecoration: 'none',  backgroundColor: '#5f99e4', color: 'white', padding: '5%', borderRadius: '15%'}} target="_blank" href="https://github.com/jnordan132/Feedster">Code</Card.Link>
                          <Card.Link style={{ textDecoration: 'none',  backgroundColor: '#5f99e4', color: 'white', padding: '5%', borderRadius: '15%'}} target="_blank" href="#">Website</Card.Link>
                        </Card.Body>
                        <br/>
                    </Card>
                </div>
                <div style={{ border: '2px solid black', backgroundColor: 'darkgrey'}}>
                    <Card style={{ width: '35rem' }}>
                        <Card.Img variant="top" src={weather} style={{ width: '100%', borderBottom: '2px solid black'}} />
                        <Card.Body>
                          <Card.Title><h3 style= {{ color: 'white'}}>Weather Dashboard</h3></Card.Title>
                          <Card.Text style={{marginLeft: '7%', marginRight: '7%',color: 'white'}}>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                          </Card.Text>
                        </Card.Body>
                        <Card.Body style={{ display: 'flex', justifyContent: 'space-around', marginRight: '40%', marginLeft: '40%', width: '23%'}}>
                          <Card.Link style={{ textDecoration: 'none',  backgroundColor: '#5f99e4', color: 'white', padding: '5%', borderRadius: '15%'}} target="_blank" href="https://github.com/jnordan132/City-Weather-Dashboard">Code</Card.Link>
                          <Card.Link style={{ textDecoration: 'none',  backgroundColor: '#5f99e4', color: 'white', padding: '5%', borderRadius: '15%'}} target="_blank" href="https://jnordan132.github.io/City-Weather-Dashboard/">Website</Card.Link>
                        </Card.Body>
                        <br/>
                    </Card>
                </div>
                <div style={{ border: '2px solid black', backgroundColor: 'darkgrey'}}>
                    <Card style={{ width: '35rem' }}>
                        <Card.Img variant="top" src={feedit} style={{ width: '100%', borderBottom: '2px solid black'}} />
                        <Card.Body>
                          <Card.Title><h3 style= {{ color: 'white'}}>Feedit</h3></Card.Title>
                          <Card.Text style={{marginLeft: '7%', marginRight: '7%',color: 'white'}}>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                          </Card.Text>
                        </Card.Body>
                        <Card.Body style={{ display: 'flex', justifyContent: 'space-around', marginRight: '40%', marginLeft: '40%', width: '23%'}}>
                          <Card.Link style={{ textDecoration: 'none',  backgroundColor: '#5f99e4', color: 'white', padding: '5%', borderRadius: '15%'}} target="_blank" href="https://github.com/jnordan132/FEEDIT">Code</Card.Link>
                          <Card.Link style={{ textDecoration: 'none',  backgroundColor: '#5f99e4', color: 'white', padding: '5%', borderRadius: '15%'}} target="_blank" href="https://jnordan132.github.io/FEEDIT/">Website</Card.Link>
                        </Card.Body>
                        <br/>
                    </Card>
                </div>
            </div>
            <br/>
            <br/>
            <div style={styles.flexSection}>
                <div style={{ border: '2px solid black', backgroundColor: 'darkgrey'}}>
                    <Card style={{ width: '35rem' }}>
                        <Card.Img variant="top" src={planner} style={{ width: '100%', borderBottom: '2px solid black'}} />
                        <Card.Body>
                          <Card.Title><h3 style= {{ color: 'white'}}>Day Planner</h3></Card.Title>
                          <Card.Text style={{marginLeft: '7%', marginRight: '7%', color: 'white'}}>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                          </Card.Text>
                        </Card.Body>
                        <Card.Body style={{ display: 'flex', justifyContent: 'space-around', marginRight: '40%', marginLeft: '40%', width: '23%'}}>
                          <Card.Link style={{ textDecoration: 'none',  backgroundColor: '#5f99e4', color: 'white', padding: '5%', borderRadius: '15%'}} target="_blank" href="https://github.com/jnordan132/Feedster">Code</Card.Link>
                          <Card.Link style={{ textDecoration: 'none',  backgroundColor: '#5f99e4', color: 'white', padding: '5%', borderRadius: '15%'}} target="_blank" href="#">Website</Card.Link>
                        </Card.Body>
                        <br/>
                    </Card>
                </div>
                <div style={{ border: '2px solid black', backgroundColor: 'darkgrey'}}>
                    <Card style={{ width: '35rem' }}>
                        <Card.Img variant="top" src={quiz} style={{ width: '100%', borderBottom: '2px solid black'}} />
                        <Card.Body>
                          <Card.Title><h3 style= {{ color: 'white'}}>JavaScript Quiz</h3></Card.Title>
                          <Card.Text style={{marginLeft: '7%', marginRight: '7%', color: 'white'}}>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                          </Card.Text>
                        </Card.Body>
                        <Card.Body style={{ display: 'flex', justifyContent: 'space-around', marginRight: '40%', marginLeft: '40%', width: '23%'}}>
                          <Card.Link style={{ textDecoration: 'none',  backgroundColor: '#5f99e4', color: 'white', padding: '5%', borderRadius: '15%'}} target="_blank" href="https://github.com/jnordan132/City-Weather-Dashboard">Code</Card.Link>
                          <Card.Link style={{ textDecoration: 'none',  backgroundColor: '#5f99e4', color: 'white', padding: '5%', borderRadius: '15%'}} target="_blank" href="https://jnordan132.github.io/City-Weather-Dashboard/">Website</Card.Link>
                        </Card.Body>
                        <br/>
                    </Card>
                </div>
                <div style={{ border: '2px solid black', backgroundColor: 'darkgrey'}}>
                    <Card style={{ width: '35rem' }}>
                        <Card.Img variant="top" src={notes} style={{ width: '100%', borderBottom: '2px solid black'}} />
                        <Card.Body>
                          <Card.Title><h3 style= {{ color: 'white'}}>Note Taker</h3></Card.Title>
                          <Card.Text style={{marginLeft: '7%', marginRight: '7%', color: 'white'}}>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                          </Card.Text>
                        </Card.Body>
                        <Card.Body style={{ display: 'flex', justifyContent: 'space-around', marginRight: '40%', marginLeft: '40%', width: '23%'}}>
                          <Card.Link style={{ textDecoration: 'none',  backgroundColor: '#5f99e4', color: 'white', padding: '5%', borderRadius: '15%'}} target="_blank" href="https://github.com/jnordan132/FEEDIT">Code</Card.Link>
                          <Card.Link style={{ textDecoration: 'none', backgroundColor: '#5f99e4',  color: 'white', padding: '5%', borderRadius: '15%'}} target="_blank" href="https://jnordan132.github.io/FEEDIT/">Website</Card.Link>
                        </Card.Body>
                        <br/>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default Work;