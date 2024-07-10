import styled from "styled-components";
import Imagem from "../../Galeria/Imagem";

const Overlay = styled.div`
    background-color: rgba(0, 0, 0, .7);
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
`


const Dialog = styled.dialog`
    display: flex;
    position: fixed;
    top: 294px;
    background-color: transparent;
    border: none;
    width: auto;
    height: auto;
`

const BotaoFechar = styled.button`
    color: #fff;
    font-size: 24px;
    background-color: transparent;
    border: none;
    position: relative;
    top: 24px;
    right: 42px;
`

const ModalZoom = ({foto, aoAlternarFavorito, aoFechar}) => {
    return(
        <>
            {foto && 
                <>
                <Overlay />
                <Dialog open={!!foto} onClose={aoFechar}>
                    <Imagem foto={foto} expandida={true} exibirExpandir={false} aoAlternarFavorito={aoAlternarFavorito}/>
                    <form method="dialog">
                        <BotaoFechar formMethod="dialog"><img src="/icones/fechar.png" alt="Fechar imagem" /></BotaoFechar>
                    </form>
                </Dialog>
                </>            
                }

        </>
    )
}

export default ModalZoom;