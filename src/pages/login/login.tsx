import React, {FC, useEffect} from 'react';
import {Button, Col, Form, FormGroup, Input, Label} from 'reactstrap';
import {FormattedMessage} from "react-intl";
import {connect} from "react-redux";
import {fetchUser} from "./actions";
import {getError, getIsFetching, getLoaded, getUserData} from "./selectors";

type Props = typeof mapStateToProps & typeof mapDispatchToProps;

const mapStateToProps = {
  userData: getUserData,
  isFetching: getIsFetching,
  isLoaded: getLoaded,
  errors: getError,
};

const mapDispatchToProps = {
  fetchUser: fetchUser,
};

const Login: FC<Props> = ({fetchUser, userData, isFetching, isLoaded, errors}) => {
  
  useEffect(() => {
    fetchUser();
  });  
  
  useEffect(() => {
    if(userData.isLoggedIn) {
      alert("You are logged in")
    } else {
      alert("You are logged in")
    }
  }, [userData]);
  
  return (
    <div>
      <h2><FormattedMessage id="login.title"/></h2>
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

export default  connect(mapStateToProps, mapDispatchToProps)(Login);
