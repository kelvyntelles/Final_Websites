import styled from "styled-components";

export const Container = styled.div`
    margin: 0 auto;
    max-width: 100%;
    background: #707070;
`

export const Content = styled.div`
    max-width: 1120px;
    padding: 3rem 0 3rem 0;
    text-align: center;

    .texto-footer {
        padding-left: 20%;

        p {
            font: normal normal normal 18px Helvetica Neue;
            color: #FFFFFF;
            opacity: 1;
        }
    }

    @media screen and (max-width: 862px) {
        .texto-footer {
            padding-left: 1rem;
        }
    }
`