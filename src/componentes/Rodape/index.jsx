import styled from "styled-components"

const RodapeEstilizado = styled.footer`
    box-sizing: border-box;
    display: flex;
    width: 100vw;
    padding: 18px 24px;
    justify-content: space-between;
    background: #04244F;
`

const ParagrafoEstilizado = styled.p`
    color: #fff;
    font-size: 24px;
`

const ContainerImagem = styled.div`
    display: flex;
    gap: 36px;
    a {
        align-self: center;
    }
`

const Rodape = () => {
    return(
        <RodapeEstilizado>
            <ContainerImagem>
                <a href="#"><img src="/imagens/sociais/facebook.svg" alt="Facebook" /></a>
                <a href="#"><img src="/imagens/sociais/instagram.svg" alt="Instagram" /></a>
                <a href="#"><img src="/imagens/sociais/twitter.svg" alt="Twitter" /></a>
            </ContainerImagem>
            <ParagrafoEstilizado>
                Desenvolvido por Alura e Henry K.
            </ParagrafoEstilizado>
        </RodapeEstilizado>
    )
}

export default Rodape