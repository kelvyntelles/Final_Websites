import { CardSelecao } from "../Card";
import { ContainerPage, Content } from "./styles";
import { Column, Notification } from "rbx"
import { ButtonProdutos } from './../ButtonProdutos/index';


export function Selecao() {
    return (
        <ContainerPage>
            <Content>
                <h1>Sua seleção especial</h1>
                <hr />
                <Column.Group className="grupo-produtos">
                    <Column size={3}>
                        <CardSelecao />
                    </Column>
                    <Column size={3}>
                        <CardSelecao />
                    </Column>
                    <Column size={3}>
                        <CardSelecao />
                    </Column>
                    <Column size={3}>
                        <CardSelecao />
                    </Column>
                </Column.Group>
                <Column.Group className="grupo-produtos">
                    <Column size={3}>
                        <CardSelecao />
                    </Column>
                    <Column size={3}>
                        <CardSelecao />
                    </Column>
                    <Column size={3}>
                        <CardSelecao />
                    </Column>
                    <Column size={3}>
                        <CardSelecao />
                    </Column>
                </Column.Group>
                <br />
                <ButtonProdutos />
            </Content>
        </ContainerPage>
    )
}