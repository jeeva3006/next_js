import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Header from './Header';
import Social from './Social';
import TrendingSideBar from '../layout/TrendingSideBar';
import Footer from './Footer';

const Layout = ({ children }) => {

    return (
        <Container fluid className='p-0'>
            <Row className='w-100 m-0 p-0'>
                <Header />
            </Row>
            <Row className='w-100 jee_content justify-content-evenly m-0'>
                <Col xl={8} lg={8} md={10} sm={10} xs={12}>
                    {children}
                </Col>
                <Col xl={3} lg={3} md={8} sm={12} xs={12}>
                    <Social />
                    <TrendingSideBar />
                </Col>
            </Row>
            <Row className='w-100'>
                <Footer />
            </Row>
        </Container>
    );
};

export default Layout;