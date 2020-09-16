import React from 'react';
import styled from 'styled-components';
import NavBar from '../navbar';
import landingpageHeaderBackground from '../../images/landing-page/landingpageHeaderBackground.png';
import logo from '../../images/landing-page/logo.png';

const Div = styled.div`
    position: absolute;
    width: 100%;
    background-image: url(${landingpageHeaderBackground});
    background-repeat: no-repeat;
    background-size: 100%;
`;

const Content = styled.div`
    margin: auto;
    margin-top: 5%;
    
    width: 50%;
    align-items: center;
    display: flex;
    flex-direction: column;

    img{
        width: 100%;
        
    }

    p{
        margin-top: 5%;
        text-align: center;
        color: white;
        margin-bottom: 25%;

        @media(max-width: 800px){
            width: 30vh;
            font-size: 1.5vh;
        };
    }
    h1{
        font-size: 5vw;
        margin-top: 10%;
        text-align: center;
        color: white;
       
    }
`;

export default function Header(){
    return(
        <Div>
            <NavBar/>
            <Content>
                <img src={logo} alt=""/>
                <h1>Bem Vindo!</h1>
                <p>Esse projeto foi desenvolvido totalmente por acadêmicos de Engenharia de Software e Análise e Desenvolvimento de Sistemas em parceria com acadêmicos de Pedagogia. Espero que você goste!</p>
                
            </Content>
        </Div>
    );
}