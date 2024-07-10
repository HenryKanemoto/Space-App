import styled from "styled-components"
import search from "./search.png"
import { useState } from "react"


const ContainerCampo = styled.div`
    position: relative;
    img {
        position: absolute;
        top: 10px;
        right: 10px;
        width: 38px;
        height: 38px;
    }
`

const InputPesquisa = styled.input`
    background-color: transparent;
    border: 2px solid #C98CF1;
    border-radius: 8px;
    background-image: search;
    height: 48px;
    width: 602px;
    padding: 4px ;
    color: #fff;
    font-size: 18px;
    line-height: 20px;
`

const CampoTexto =  ({valorInput, setValorInput}) => {

    return(
        <ContainerCampo>
                <InputPesquisa 
                placeholder="O que você procura?"
                value={valorInput}
                onChange={e => setValorInput(e.target.value)}
                />
                <img src={search} alt="Símbolo de busca"/>
        </ ContainerCampo>

    )
}

export default CampoTexto