import styled from "styled-components"
import Titulo from "../componentes/Titulo"
import Populares from "./Populares"
import Tags from "./Tags"
import Imagem from "./Imagem"

const GaleriaContainer = styled.div`
    display: flex;
    gap: 24px;
`

const SecaoFluida = styled.section`
    flex-grow: 1;
`

const ListaFotosEstilizada = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 24px;
    grid-row-gap: 24px;
    margin-top: 24px;
`

const Galeria = ({ fotos = [], aoFotoSelecionada, aoAlternarFavorito, tagSelecionada, aoTagSelecionada }) => {
    return (
        <>
            <Tags tagSelecionada={tagSelecionada} aoTagSelecionada={aoTagSelecionada}/>
            <GaleriaContainer>
                <SecaoFluida>
                    <Titulo>Navegue pela nossa galeria</Titulo>
                    <ListaFotosEstilizada>
                        {fotos.map(foto =>
                            <li key={foto.id}>
                                <Imagem 
                                    foto={foto} 
                                    aoZoom={aoFotoSelecionada}
                                    aoAlternarFavorito={aoAlternarFavorito}
                                />
                            </li>)}
                    </ListaFotosEstilizada>
                </SecaoFluida>
                <Populares fotos={fotos}/>

            </GaleriaContainer>
        </>
    )
}

export default Galeria