import styled from "styled-components"

const FigureEstilizada = styled.figure`
    display: flex;
    flex-direction: column;
    width: ${(props) => (props.$expandida ? '520px' : '460px')};
    height:${(props) => (props.$expandida ? '472px' : '336px')};
    width: 100%;
    margin: 0;
`

const DescricaoEstilizada = styled.figcaption`
    background-color: #001634;
    color: #fff;
    padding: 24px 16px;
    border-radius: 0 0 16px 16px;
`

const FooterEstilizado = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;

    p{
        margin: 0;
    }
`

const FotoTituloEstilizado = styled.h3`
    margin: 0;
`

const BotaoEstilizado = styled.button`
    background-color: transparent;
    border: none;
    margin: 0 12px;
`
const FotoEstlizada = styled.img`
    border-radius: 16px 16px 0 0;
`

const Imagem = ({foto, expandida,aoZoom, exibirExpandir = true, aoAlternarFavorito}) => {

    const iconeFavorito = foto.favorita ? '/icones/favorito-ativo.png' : '/icones/favorito.png';

    return(
        <FigureEstilizada $expandida={expandida}>
            <FotoEstlizada  src={foto.path} alt={foto.titulo}/>
            <DescricaoEstilizada>
                <FotoTituloEstilizado>{foto.titulo}</FotoTituloEstilizado>
                <FooterEstilizado>
                    <p>{foto.fonte}</p>
                    <div>
                    <BotaoEstilizado onClick={() => aoAlternarFavorito(foto)}><img src={iconeFavorito} alt="Favoritar" /></BotaoEstilizado>
                    {exibirExpandir &&
                        <BotaoEstilizado onClick={() => aoZoom(foto)}><img src="/icones/expandir.png" alt="Expandir" /></BotaoEstilizado> 
                    }

                    </div>
                </FooterEstilizado>
            </DescricaoEstilizada>
        </FigureEstilizada>
    )
}

export default Imagem