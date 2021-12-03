import { Header } from "../components/Header"
import { EmailAlgoritmo } from './../components/EmailAlgoritmo/index';
import { Selecao } from './../components/Selecao/index';

export function Home() {
    return (
        <>
            <Header />
            <EmailAlgoritmo />
            <Selecao />
        </>
    )
}