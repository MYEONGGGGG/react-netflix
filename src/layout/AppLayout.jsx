import React from "react";
import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";

const AppLayout = () => {

    return (
        <div>
            <Navbar expand="lg" className="px-5 bg-black" data-bs-theme="dark">
                <Container fluid>
                    <Navbar.Brand className="me-4">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/400px-Netflix_2015_logo.svg.png"
                            width={93}
                            alt="netflix-logo"/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Link className="text-white me-4 link-offset-2 link-underline link-underline-opacity-0"
                                      to="/">Home</Link>
                            <Link className="text-white me-4 link-offset-2 link-underline link-underline-opacity-0"
                                      to="/movies">Movies</Link>
                        </Nav>

                        <Form className="d-flex me-2">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"/>
                            <Button variant="outline-danger">Search</Button>

                            <Link className="text-white me-4 link-offset-2 link-underline link-underline-opacity-0"
                                  to="/login">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                                     className="ms-3"
                                     width={40}
                                     alt="netflix-profile"/>
                            </Link>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Outlet/>
        </div>
    );
};

export default AppLayout