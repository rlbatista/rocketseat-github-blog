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

    & a {
        position: relative;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        text-transform: uppercase;
        font: ${props => props.theme.fontComponentsLinkXSb};
        color: ${props => props.theme.colorBlue};

        & span {
            font-size: 0.5875rem;
            
            & svg {
                color: ${props => props.theme.colorBlue};
            }
        }

        &::after {
            content: '';
            position: absolute;
            left: 50%;
            bottom: 0;
            width: 0;
            height: 2px;
            background-color: ${props => props.theme.colorBlue};
            transition: width 0.3s ease;
            transform: translateX(-50%);
        }

        &:hover::after {
            width: 100%;
        }
    }
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