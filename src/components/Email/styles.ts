import styled from "styled-components";

export const Container = styled.div`
    margin: 0 auto;
    max-width: 100%;
    background: #FFFFFF;
`

export const Content = styled.div`
    max-width: 1120px;
    margin: 2rem auto;
    padding: 1rem 1rem 2rem;
    color: #888888;

    p {
        font: normal normal normal 18px Helvetica Neue;
        letter-spacing: 0px;
        color: #888888;
        opacity: 1;
    }

    .formulario {
        text-align: center;
        padding: 0 4rem 0 4rem;

        .label-email{
            font: normal normal normal 18px Helvetica Neue;
            letter-spacing: 0px;
            color: #888888;
            opacity: 1;
            text-align: left;
        }

        .button-email {
            padding: 0 4rem 0 4rem;
            border: 1px solid #707070;
            font: normal normal normal 18px Helvetica Neue;
        }
    }
`