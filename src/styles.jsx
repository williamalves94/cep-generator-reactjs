import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: linear-gradient(#121212, #212b46);
    border: 2px solid white;
    h1{
        font-size: 60px;
        margin-bottom: 20px;
        color: white;
    }
`;

export const DivInput = styled.div`
    input{                
        height: 40px;
        width: 350px;
        border-radius: 10px;
        border: none;
        color: black;
        font-size: 15px;
        font-weight: bold;
        padding: 10px;
        outline: none;
        margin-top: 30px;
    }
`;

export const ButtonSearch = styled.button`
    background-color: #fff;
    margin-top: 40px;
    width: 200px;
    height: 40px;
    border-radius: 10px;
    font-size: 18px;
    border: none;
`;

export const DivMain = styled.div`
    border: 2px solid white;
    margin-top: 30px;
    border-radius: 15px;
    width: 500px;
    height: 300px;
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: white;

    h2{
        margin-top: 30px;
        margin-bottom: 20px;
        font-size: 40px;
        color: #000;
    }

    span{
        color: #000;
        font-size: 20px;
        margin-top: 10px;
    }
`;

