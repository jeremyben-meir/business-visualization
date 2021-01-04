import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import {Form, Button} from 'react-bootstrap';

export class HomeForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handlePasswordChange = this.handlePasswordChange.bind(this)
        this.state = {
            location: ""
        }
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.PushMap(this.state.location)
    }

    handlePasswordChange(e){
        e.preventDefault();
        // console.log(e.target.value)
        this.setState({location:e.target.value})
    }

    render() {
      
        return (
            <StyledHomeForm>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group >
                        <Form.Label>location</Form.Label>
                        <Form.Control onChange={this.handlePasswordChange} type="text" placeholder="Enter location" />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    {/* <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group> */}

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>


                </Form>
            </StyledHomeForm>
        );
    }
  }

const StyledHomeForm = styled.div`
  position: fixed;
  margin-top: 100px;
  margin-bottom: 100px;
  margin-right: 150px;
  margin-left: 80px;
  width: 40%;
  text-align: center;
  display: inline-block;
  font-weight: bolder;
  background: transparent;
  z-index: 1000;
`;