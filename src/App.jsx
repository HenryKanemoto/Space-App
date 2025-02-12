import styled from "styled-components"
import EstilosGlobais from "./componentes/EstilosGlobais"
import Cabecalho from "./componentes/Cabecalho"
import BarraLateral from "./componentes/BarraLateral"
import Banner from "./componentes/Banner"
import Galeria from "./Galeria"

import fotos from "./fotos.json"
import { useEffect, useState } from "react"
import ModalZoom from "./componentes/ModalZoom"
import Rodape from "./componentes/Rodape"

const Fundogradiente = styled.div`

  background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  width: 100%;
  min-height: 100vh;
`

const AppContainer = styled.div`
  width: 1440px;
  max-width: 100%;
  margin: 0 auto;
`

const MainContainer = styled.main`
  display: flex;
  gap: 24px;
`

const ConteudoGaleria = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`

const App = () => {

  const [fotosGaleria, setFotosGaleria] = useState(fotos)
  const [fotoSelecionada, setFotoSelecionada] = useState(null)
  const [tagSelecionada, setTagSelecionada] = useState(0);
  const [valorInput, setValorInput] = useState('');

  const aoAlternarFavorito = (foto) => {
    if(foto.id === fotoSelecionada?.id){
        setFotoSelecionada({
          ...fotoSelecionada,
          favorita: !fotoSelecionada.favorita
        })
    }

    setFotosGaleria(fotosGaleria.map(fotoGaleria => {
      return {
        ...fotoGaleria,
        favorita: fotoGaleria.id === foto.id ? !fotoGaleria.favorita : fotoGaleria.favorita
      }
    }))
  }

  const aoAlternarTag = () => {
    if(tagSelecionada !== 0){
      const fotosDaTag = fotos.filter(foto => foto.tagId === tagSelecionada)
      setFotosGaleria(fotosDaTag);
    } else{
      setFotosGaleria(fotos)
    }
  }

  const aoPesquisar = () => {
    if(valorInput){
      setFotosGaleria(fotosGaleria.filter(foto => foto.titulo.includes(valorInput)))
    } else {
        aoAlternarTag()
    }
  }

  useEffect(() => {
    aoAlternarTag()
  }, [tagSelecionada])

  useEffect(() => {
    aoPesquisar()
  }, [valorInput])

  return (
    <Fundogradiente>
      <EstilosGlobais />
      <AppContainer>
        <Cabecalho valorInput={valorInput} setValorInput={setValorInput}/>
        <MainContainer>
          <BarraLateral />
          <ConteudoGaleria>
            <Banner />
            <Galeria
              aoFotoSelecionada={foto => setFotoSelecionada(foto)}
              fotos={fotosGaleria}
              aoAlternarFavorito={aoAlternarFavorito}
              tagSelecionada={tagSelecionada}
              aoTagSelecionada={setTagSelecionada}
            />
          </ConteudoGaleria>
        </MainContainer>
      </AppContainer>
      <Rodape />
      <ModalZoom foto={fotoSelecionada} aoAlternarFavorito={aoAlternarFavorito} aoFechar={() => setFotoSelecionada(null)}/>
    </ Fundogradiente>
  )
}

export default App
