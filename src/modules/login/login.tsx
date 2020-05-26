import React from 'react';
import {Button, Form, FormGroup, Label, Input, Col} from 'reactstrap';

const Login = () => {
    return (
        <div>
            <h2>Sign In</h2>
            <Form className="form">
                <Col>
                    <FormGroup>
                        <Label>Email</Label>
                        <Input
                            type="email"
                            name="email"
                            id="exampleEmail"
                            placeholder="myemail@email.com"
                        />
                    </FormGroup>
                </Col>
                <Col>
                    <FormGroup>
                        <Label for="examplePassword">Password</Label>
                        <Input
                            type="password"
                            name="password"
                            id="examplePassword"
                            placeholder="********"
                        />
                    </FormGroup>
                </Col>
                <Button>Submit</Button>
            </Form>
        </div>
    );
}

export default Login;