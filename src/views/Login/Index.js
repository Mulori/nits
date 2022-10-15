import React from 'react';
import { Button, FormGroup, Input, Form, Label, } from 'reactstrap';
import './styles.css';
import Logo from '../../assets/images/nits-dark.png'

function Login() {
    return (
        <div className='div-container-main'>
            <div className='div-space'>

            </div>
            <div className='div-form-login'>
                <img className='img-logo' src={Logo} />
                <FormLogin />
            </div>
        </div>
    )
}

function FormLogin() {
    return (
        <div className='div-form-components'>
            <Form>
                <FormGroup floating>
                    <Input
                        id="Email"
                        name="email"
                        placeholder="E-mail"
                        type="email"
                        className='input'
                    />
                    <Label for="Email">
                        E-mail
                    </Label>
                </FormGroup>
                {' '}
                <FormGroup floating>
                    <Input
                        id="Password"
                        name="password"
                        placeholder="Password"
                        type="password"
                        className='input'
                    />
                    <Label for="Password">
                        Senha
                    </Label>
                </FormGroup>
                {' '}
                <Button outline color='light' className='button'>
                    Acessar
                </Button>                
                <Button color='light' className='button'>
                    Cadastre-se
                </Button>
            </Form>
        </div>
    );
}

export default Login;