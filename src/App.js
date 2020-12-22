import React, { useState } from "react";
import { Button, Form, Container, Row, Col } from "react-bootstrap";
import RangeSlider from "react-bootstrap-range-slider";

function Text(props){
    if(props.show)
    {
        return <p>{props.children}</p>
    }
    else return null;
}

function App() {
    const [show, setShow] = useState(false);
    const [value, setValue] = useState(100);
    const [oneChecked, setOneChecked] = useState(false);

    return (
        <div className="App">
            <Button onClick={() => setShow(!show)}>ez</Button>
            <Text show={show}>bruh</Text>
            <Container>
                <Row>
                    {
                        show ? (
                            <Col>Bad</Col>
                        ) : (
                            null
                        )
                    }
                    <Col>1 of 1</Col>
                    <Col>2 of 2</Col>
                    <Col>
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                                <div key="inline-checkbox" className="mb-3">
                                    <Form.Check checked={oneChecked} inline onChange={e => {
                                        setOneChecked(e.target.checked);
                                    }}
                                        label="1" id="inline-check-1" />
                                    <Form.Check inline label="2" id="inline-check-2" />
                                    <Form.Check
                                        inline
                                        disabled
                                        label="3 (disabled)"
                                        id="inline-check-3" />
                                </div>
                            </Form.Group>
                            <Button variant="success">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>
                <Row>
                    <Col>1 of 3</Col>
                    <Col>2 of 3</Col>
                    <Col>3 of 3</Col>
                    <Col>
                        <Form>
                            <Form.Group>
                                <Form.Label>
                                    My Label
                                </Form.Label>
                                <RangeSlider
                                    value={value}
                                    min={100} max={200}
                                    onChange={e => setValue(e.target.value)}
                                />
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
            </Container>
            <p>Slider is at {value}</p>
        </div>
    );
}

export default App;
