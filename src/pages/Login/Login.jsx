import React from "react";
import { Button, Container, Form } from "react-bootstrap";

const Login = () => {

    const btnLoginClick = (event) => {
      event.preventDefault();
      // dispatch?
      // navigate('/');
    };

    return (
        <div className="login-page">
            <Container className="login-page-box">
                <h1 className="text-white">영화, 시리즈 등을 무제한으로</h1>
                <p className="text-white">어디서나 자유롭게 시청하세요. 해지는 언제든 가능합니다.</p>

                <div>
                    <h3 className="text-white">시청할 준비가 되셨나요? 멤버십을 등록하거나 재시작하려면 이메일 주소를 입력하세요.</h3>
                    <div>
                        <Form onSubmit={btnLoginClick}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="email" placeholder="이메일 주소"/>
                                <Button className="btn-danger" type="submit">
                                    시작하기 >
                                </Button>
                            </Form.Group>
                        </Form>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Login