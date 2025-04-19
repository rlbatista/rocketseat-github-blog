import styled from "styled-components";

export const HomeContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
`
export const Avatar = styled.img`
    max-width: 9.25rem;
    max-height: 9.25rem;
    width: 9.25rem;
    height: 9.25rem;
    border-radius: 8px;
`

export const TextContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`
export const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.5rem;
`

export const HeaderText = styled.h1`
    font: ${props => props.theme.fontTitleLb};
`

export const DescriptionText = styled.p`
    margin-bottom: 1.5rem;
    font: ${props => props.theme.fontTextMr};
    color: ${props => props.theme.colorBaseText};
`

export const SocialFooter = styled.ul`
    display: flex;
    gap: 1.5rem;

    & li {
        display: flex;
        gap: 0.5rem;
    }
`

export const SearchHeaderContainer = styled.div`
    width: 100%;
    margin-bottom: 3rem;

    & div {
        display: flex;
        align-items: center;
        justify-content: space-between;

        & h2 {
            font: ${props => props.theme.fontTitleSb};
            color: ${props => props.theme.colorBaseSubtitle};
        }

        & span {
            font: ${props => props.theme.fontTextSr};
            color: ${props => props.theme.colorBaseSpan};
        }
    }

    & input {
        width: 100%;
        padding: 1rem;
        border: 1px solid ${props => props.theme.colorBaseBorder};
        border-radius: 6px;
        background-color: ${props => props.theme.colorBaseInput};
        box-sizing: border-box;
        margin-top: 0.75rem;

        &::placeholder {
            color: ${props => props.theme.colorBaseLabel};
        }

        &:focus {
            border-color: ${props => props.theme.colorBlue};
        }
    }
`

export const PostContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(26rem, 1fr));
    gap: 2rem;
`