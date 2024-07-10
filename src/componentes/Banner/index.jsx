import styled from "styled-components"
import banner from "./banner.png"

const TituloEstilizado = styled.h2`
    display: flex;
    width: 33%;
    color: #E0E3EC;
    font-size: 40px;
    padding: 64px;
    box-sizing: border-box;
    margin: 0;
`
const BannerEstilizado = styled.figure`
    display: flex;
    align-items: center;
    background-image: url(${banner});
    background-repeat: no-repeat;
    background-size: cover;
    max-width: 100%;
    height: 328px;
    border-radius: 16px;
    flex-grow: 1;
    margin: 0;
`

const Banner = () => {
    return (
        <BannerEstilizado>
            <TituloEstilizado>
                A galeria mais completa de fotos do espaço!
            </TituloEstilizado>
        </BannerEstilizado>
    )
}

export default Banner