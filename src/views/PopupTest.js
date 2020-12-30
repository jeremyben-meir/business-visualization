import React, { useState, useEffect } from "react";
import Popup from 'react-animated-popup'
import {
    ThemeProvider,
    Div,
    Row,
    Col, Container } from "atomize";

const theme = {
    grid: {
        containerWidth: {
            xs: "540px",
            sm: "720px",
            md: "960px",
            lg: "1156px",
            xl: "1156px"
        },

        gutterWidth: "15px",
    }, 
    fontFamily: {
        primary: "roboto",
    },
    textColor: 'white'
};
      

export default function Map() {
    const [visible, setVisible] = useState(false)
    const handleClick = () => {
        setVisible(!visible)
    }
    return (
        <div>
            {/* <button onClick={handleClick}>click me</button>
            <Popup visible={visible} onClose={() => setVisible(false)}>
                <p>I am a popup!</p>
            </Popup> */}
            <ThemeProvider theme={theme}>
                <Div  m={{ xs: '1rem', md: '4rem' }}>
                <Row>
                    <Col size={4}>
                        <Div textColor="white"  justify="center" align="center"  bg="warning800" h="3rem" rounded="md">hi</Div>
                    </Col>
                    <Col size={5}>
                        <Div textColor="white"  justify="center" align="center"  bg="warning800" h="3rem" rounded="md">hi</Div>
                    </Col>
                </Row>
                </Div>
            </ThemeProvider>
        </div>
    );
}
