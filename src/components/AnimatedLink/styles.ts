import styled from "styled-components";

export const LinkContainer = styled.div`
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
`