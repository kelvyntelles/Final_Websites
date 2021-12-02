import { Container, Content } from "./styles";

export function Header() {
    return (
        <Container>
            <Content>
                <div className="curve-bottom">
                    <p>
                        <h5 className="frase1">Uma selção de produtos</h5>
                        <h1 className="frase2">especial para você</h1>
                        <h6 className="frase3">Todos os produtos desta lista foram selecionados a partir da sua navegação. Aproveite!</h6>
                    </p>
                    <nav>
                        <div>
                            <button type="button" className="button-header">Conheça a Linx</button>
                            <button type="button" className="button-header margin-button">Ajude o algorítmo</button>
                            <button type="button" className="button-header margin-button">Seus Produtos</button>
                            <button type="button" className="button-header margin-button">Compartilhe</button>
                        </div>
                    </nav>
                </div>
                
            </Content>
        </Container>
    )
}