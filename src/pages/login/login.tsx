import React, {FC, memo, useEffect} from 'react';
import {Button, Col, Form, FormGroup, Input, Label} from 'reactstrap';
import {FormattedMessage} from "react-intl";
import {connect, useDispatch} from "react-redux";
import {RootState} from "../../store/model";
import {getIsFetching, getUser} from "./selectors";
import {fetchUser} from "./actions";

type Props = ReturnType<typeof mapStateToProps>;

const mapStateToProps = (state: RootState) => ({
  userData: getUser(state),
  fetching: getIsFetching(state)
});

const Login: FC<Props> = memo(({userData}) => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchUser());
  }, []);
  
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
});

export default  connect(mapStateToProps)(Login);
