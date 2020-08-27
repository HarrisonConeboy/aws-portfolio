import React from 'react';
import './Intro.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import KBMan from './images/kbman.png';


function Intro() {
    return (
        <Container>
            <Row className="myIntro">
                <Col className="introPara">
                    <p>
                        <span style={{fontSize:'36px'}}>Greetings!</span>
                        <br/>
                        <span style={{fontSize:'28px', paddingLeft:'50px'}}>I'm Harrison Coneboy</span>
                    </p>
                </Col>
                <Col style={{textAlign:'center'}}>
                    <img src={KBMan} alt="Self Portrait" className="kbman"/>
                </Col>
            </Row>
            <Row style={{height:'100vh'}}>
                <Col>
                    Some Stuff
                </Col>
            </Row>
        </Container>
    )
}

export default Intro
