import { Container, Content } from "./styles";
import { Column, Control, Field, Input, Label, Radio, Button } from "rbx";

export function EmailAlgoritmo() {
    return (
        <Container>
            <Content>
                <Column.Group>
                    <Column size={7}>
                        <h3 className="titulo-algoritmo">Ajude o algorítmo a ser mais certeiro</h3>
                        <br />
                        <p className="texto-algoritmo">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur dolorem veritatis saepe eum dolores eaque hic doloremque accusantium accusamus aliquid. Fuga aspernatur accusantium officiis doloremque ab labore, ipsum laborum ratione!
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam eaque ab culpa nobis quam nemo ratione, est provident quos enim iure officiis nam, molestias, labore illo omnis ipsa deserunt. Eligendi.
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam eaque ab culpa nobis quam nemo ratione, est provident quos enim iure officiis nam, molestias, labore illo omnis ipsa deserunt. Eligendi.
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam eaque ab culpa nobis quam nemo ratione, est provident quos enim iure officiis nam, molestias, labore illo omnis ipsa deserunt. Eligendi.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem aliquam eaque sapiente exercitationem voluptatum in nostrum itaque ratione id veniam. Consectetur dolores quaerat adipisci veniam tempora culpa explicabo similique dolorem.
                        <br />
                        <br />
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam eaque ab culpa nobis quam nemo ratione, est provident quos enim iure officiis nam, molestias, labore illo omnis ipsa deserunt. Eligendi.
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam eaque ab culpa nobis quam nemo ratione, est provident quos enim iure officiis nam, molestias, labore illo omnis ipsa deserunt. Eligendi.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis vel vitae, atque excepturi error voluptatem sequi illo, voluptate, quod odit minus? Tempore magni aut, quod fuga consequatur nisi assumenda blanditiis.
                        </p>
                    </Column>
                    <Column size={5}>
                        <form>
                            <Field>
                                <Label className="label-algoritmo">Seu Nome</Label>
                                <Control>
                                    <Input type="text" />
                                </Control>
                                <br />
                                <Label className="label-algoritmo">E-mail</Label>
                                <Control>
                                    <Input type="text" />
                                </Control>
                                <br />
                                <Label className="label-algoritmo">CPF:</Label>
                                <Control>
                                    <Input type="text" />
                                </Control>
                                <br />
                                <Control>
                                    <Label className="label-algoritmo">
                                        <Radio name="sexo" /> Masculino
                                    </Label>
                                    <Label className="label-algoritmo">
                                        <Radio name="sexo" /> Feminino
                                    </Label>
                                </Control>
                                <br />
                                <Button className="button-algoritmo" color="white">
                                    Enviar
                                </Button>
                            </Field>
                        </form>
                    </Column>
                </Column.Group>
            </Content>
        </Container>
    )
}