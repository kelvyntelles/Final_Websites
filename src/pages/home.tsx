import { Header } from "../components/Header"
import { EmailAlgoritmo } from './../components/EmailAlgoritmo/index';
import { Selecao } from './../components/Selecao/index';
import { EmailNovidade } from './../components/EmailNovidade/index';

export function Home() {
    return (
        <>
            <Header />
            <EmailAlgoritmo />
            <Selecao />
            <EmailNovidade />
        </>
    )
}