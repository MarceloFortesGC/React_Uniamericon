import React from 'react';
import styled from 'styled-components';

const Nav = styled.div`
    background: #000000;
    opacity: 0.6;
    position: fixed;
    display:flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    top: 0;
    padding: 1%;

    @media(max-width: 800px){
        flex-wrap: nowrap;
    };

    
`;

const NavA = styled.a`
    text-decoration: none;
    color: #ffffff;
    opacity: 1;
    font-size: 2vh;
    transition: color 0.2s;
    &:hover,&:active{
        opacity: 50%;
    }
    @media(max-width: 800px){
        font-size: 1vh;
    };
`;

export default function NavBar(){
    return(
        <Nav>
            <NavA href="#">Ínicio</NavA>
            <NavA href="#">Instruções</NavA>
            <NavA href="#">Sobre Nós</NavA>
            <NavA href="#">Sobre o TEA</NavA>
            <NavA href="#">Fale Conosco</NavA>
        </Nav>
    );
}