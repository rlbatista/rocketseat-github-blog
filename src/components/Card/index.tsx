import { CardContainer, CardHeaderContainer, CardTextContainer } from './styles'
import { formatDistanceToNow, formatRFC7231 } from 'date-fns'
import { ptBR } from 'date-fns/locale/pt-BR'


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
                <h2>
                    <time dateTime={date.toISOString()} 
                          title={formatRFC7231(date)}>
                        {formatDistanceToNow(date, {addSuffix: true, locale: ptBR})}
                    </time>
                </h2>
            </CardHeaderContainer>

            <CardTextContainer>
                {content}
            </CardTextContainer>
        </CardContainer>
    )
}