import { Container, Content } from "./styles";
import { Field, Label, Control, Input, Column, Button } from "rbx";

export function Email() {
    return (
        <Container>
            <Content>
                <p>Quer que seus amigos também ganhem a lista personalizada deles? preencha agora!</p>
                <br />
                <br />
                <form className="formulario">
                    <Field>
                        <Column.Group>
                            <Column size={6}>
                                <Label className="label-email">Nome do seu amigo</Label>
                                <Control>
                                    <Input type="text" />
                                </Control>
                            </Column>
                            <Column size={6}>
                                <Label className="label-email">E-mail:</Label>
                                <Control>
                                    <Input type="text" />
                                </Control>
                            </Column>
                        </Column.Group>
                        <Button className="button-email" color="white">
                            Enviar agora
                        </Button>
                    </Field>
                </form>
            </Content>
        </Container>
    )
}