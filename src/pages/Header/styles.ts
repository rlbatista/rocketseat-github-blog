import styled from 'styled-components'
import coverSvg from '../../assets/header-cover.svg'

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    height: 18.5rem;
    padding-top: 4.125rem;
    background-image: url(${coverSvg});
    background-repeat: no-repeat;
    background-size: cover;
    object-fit: cover;
`