import { Card, Container, Content, Image, Media, Title, Button } from "rbx"
import { ContainerCard } from "./styles"

export function CardSelecao() {
    return (
        <ContainerCard>
            <Card>
                    <Card.Image>
                        <Image.Container size="1by1">
                            <Image src="https://bulma.io/images/placeholders/1280x960.png" />
                        </Image.Container>
                    </Card.Image>
                    <Card.Content>
                        <Content>
                            <h4 className="titulo">Nome do Produto</h4>
                            <p className="texto-card">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
                                iaculis mauris.
                            </p>
                            <p className="texto-card">De: R$23,99</p>
                            <h3 className="preco">Por: R$19,99</h3>
                            <p className="texto-card">ou 2x de R$9,99</p>
                        </Content>
                        <Button className="button-card" color="white">
                            Comprar
                        </Button>
                    </Card.Content>
            </Card>
        </ContainerCard>
    )
}