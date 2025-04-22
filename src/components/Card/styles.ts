import styled from "styled-components";

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${props => props.theme.colorBasePost};
    border-radius: 10px;
    padding: 2rem;
    height: 16.25rem;
    border: 2px solid transparent;
    transition: border 0.2s ease;

    &:hover {
        border: 2px solid ${props => props.theme.colorBaseLabel};
    }
`

export const CardHeaderContainer = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-bottom: 1.25rem;

    & h1 {
        font: ${props => props.theme.fontTitleMb};
        color: ${props => props.theme.colorBaseTitle};
    }

    & h2 {
        font: ${props => props.theme.fontTextSr};
        color: ${props => props.theme.colorBaseSpan};
        min-width: 5rem;
        text-align: right;
    }
`

export const CardTextContainer = styled.p`
    font: ${props => props.theme.fontTextMr};
    color: ${props => props.theme.colorBaseText};
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
`