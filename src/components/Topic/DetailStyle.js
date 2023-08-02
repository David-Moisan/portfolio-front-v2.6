import styled from 'styled-components'
import colors from '../../utils/color'

export const DetailWrapper = styled.main`
    margin: 3rem;
    margin-bottom: 6.26rem;
    min-height: calc(100vh - 7.81rem);
    padding: 1.25rem;
    border-radius: 10px;
    background: ${colors.backgroundHover};

    @media (max-width: 768px) {
        margin-top: 50px;
    }
`
export const DetailContent = styled.section`
    margin-bottom: 6.26rem;
    position: relative;

    & > div {
        background-color: ${colors.blue};
        padding: 2rem;
        border-radius: 2rem;
        margin-bottom: 50px;
    }
`

export const DetailHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;

    & > h1 {
        margin: 0px;
        line-height: 70px;
        font-size: 1.8rem;
    }
`

export const DetailLink = styled.div`
    display: flex;
    align-items: center;
    margin: 0;
    & > a {
        color: ${colors.text};
        cursor: pointer;
        padding: 0.89rem;
        margin: 0;
    }
`

export const DetailInfo = styled.section`
    margin-bottom: 4.38rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    @media (max-width: 960px) {
        grid-template-columns: 1fr;
    }

    @media (min-width: 960px) and (max-width: 1000px) {
        grid-template-columns: 0.6fr 1fr;
    }
`

export const DetailTitle = styled.h1`
    font-size: 2rem;
`

export const DetailSubtitle = styled.h3`
    font-size: 1.61rem;
    margin: 1.1rem 0;
`

export const DetailText = styled.p`
    line-height: 1.618;
    padding-top: 1.618rem;
    padding-right: 5.618rem;
`

export const DetailFooter = styled.footer`
    padding-top: 1rem;
    padding-bottom: 1rem;
    margin-top: 1.618rem;
    margin-bottom: 1.618rem;    
`

export const DetailFooterLink = styled.ul`
    padding: 0.5rem 1rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding-left: 0;
    list-style: none;
`

export const DetailFooterLinkButton = styled.a`
    padding: 1rem 0.5rem;
    display: block;
    text-decoration: none;
    font-size: 1.618rem;
    color: ${colors.text};
    transition: color .15s ease-in-out, background-color .15s ease-in-out;

    & > :hover {
        color: ${colors.blueLight};
    }
`
//Le content nécessite plusieurs règles de style sans pouvoir accéder directement
// via le styled-components donc faire un fichier indépendant CSS

export const ResponsiveYouTubeContainer = styled.div`
    position: relative;
    overflow: hidden;
    max-width: 100%;
    width: 100%;

    & > iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

`

export const ResponsiveImage = styled.img`
    width: 100%;
    margin: 0.618rem 0;

    @media (min-width: 768px) {
        width: 50%;
    }

    @media (min-width: 1024px) {
        width: 40%;
    }
`

export const DetailImageWrapper = styled.div`
    position: relative;
    padding-top: 56.25%;
    background-color: linear-gradient(
        134deg,
        ${colors.background} 0%,
        ${colors.backgroundHover}
    );
    border-radius: 10px;

    & > img {
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        border: 0px;
    }
`

export const BackBtn = styled.div`
    display: flex;
    align-items: center;
    margin: 1.25rem 3rem;
    font-size: 1.6rem;
    & > a {
        color: ${colors.blueLight};
    }
    & > a:hover {
        color: ${colors.blue};
        text-decoration: underline;
        transition: all 0.21s ease-in-out;
    }
`
