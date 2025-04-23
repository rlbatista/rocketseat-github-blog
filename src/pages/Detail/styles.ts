import styled from "styled-components";

export const DetailCardContainer = styled.div`
    width: 100%;
    height: 10.5rem;
    padding: 2rem;
    background-color: ${props => props.theme.colorBaseProfile};
    border-radius: 10px;
    margin-top: -10%;
    box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
`

export const DetailCardLinks = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const DetailCardTitle = styled.p`
    font: ${props => props.theme.fontTitleLb};
    color: ${props => props.theme.colorBaseTitle};
    margin: 1.25rem 0 1rem;
`

export const DetailCardFooter = styled.ul`
    display: flex;
    gap: 1.5rem;

    & li {
        display: flex;
        gap: 0.5rem;
    }
`

export const DetailContentContainer = styled.div`
    width: 100%;
    padding: 2.5rem 2rem;
`