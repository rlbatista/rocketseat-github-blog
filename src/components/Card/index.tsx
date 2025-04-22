import { CardContainer, CardHeaderContainer, CardTextContainer } from "./styles";

interface CardProps {
    title: string,
    content: string,
    date: Date
}

export function Card({title, content, date}: CardProps) {
    return (
        <CardContainer>
            <CardHeaderContainer>
                <h1>{title}</h1>
                <h2>{date.toISOString()}</h2>
            </CardHeaderContainer>

            <CardTextContainer>
                {content}
            </CardTextContainer>
        </CardContainer>
    )
}