import styled from "styled-components"
import tags from "./tags.json"

const TagContainer = styled.div`
    display: flex;
    gap: 32px;
    margin: 56px 0 40px 0;
    align-items: center;
`
const BotaoContainer = styled.section`
    display: flex;
    gap: 24px;
`

const TextoEstilizado = styled.p`
    color: #D9D9D9;
    font-size: 24px;
    padding-right: 24px;
`

const TagBotao = styled.button`
    color: #fff;
    background-color: #44566E;
    font-size: 24px;
    padding: 8px 8px;
    border-radius: 8px;
    border-color: ${props => props.$ativo ? '#C98CF1' : 'transparent'};
`

const Tags = ({tagSelecionada, aoTagSelecionada}) => {
    return (
        <TagContainer>
            <TextoEstilizado>Busque por tags:</TextoEstilizado>
            <BotaoContainer>
                    {tags.map(tag => <TagBotao 
                        $ativo={tag.id === tagSelecionada ? true : false} 
                        key={tag.id}
                        onClick={() => aoTagSelecionada(tag.id)}
                        >
                            {tag.titulo}
                    </TagBotao>)}
            </BotaoContainer>
        </TagContainer>
    )
}

export default Tags
