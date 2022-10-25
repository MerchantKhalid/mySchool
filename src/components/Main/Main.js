import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Shared/Footer';
import LeftNav from '../Shared/LeftNav';
import RightNav from '../Shared/RightNav';

const Main = () => {
    return (
        <div>
        <Header />
          <Container>
            <Row>
                <Col lg="2" className='d-none d-lg-block'>
                   <LeftNav />
                </Col>
                <Col lg="7">
                    <Outlet />
                </Col>
                <Col lg="3">
                    <RightNav />
                </Col>
            </Row>
          </Container>
          <Footer />
        </div>
    );
};

export default Main;