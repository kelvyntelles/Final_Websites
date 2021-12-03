import { Container, Content } from "./styles";
import { Email } from './../Email/index';

export function EmailNovidade() {
    return (
        <Container>
            <Content>
                <h1>Compartilhe a novidade</h1>
                <hr />
                <Email />
            </Content>
        </Container>
    )
}