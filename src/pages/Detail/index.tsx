import { DetailCardContainer, DetailCardFooter, DetailCardLinks, DetailCardTitle, DetailContentContainer } from "./styles";
import { AnimatedLink } from "../../components/AnimatedLink";
import { IconCalendarDay, IconChevronLeft, IconComment, IconGithub, IconUpRight } from "../../components/Icons";
import { Link, useParams } from "react-router-dom";
import { gitHubApi, GithubIssuesItem } from "../../lib/api";
import { useEffect, useState } from "react";
import Markdown from "react-markdown";

export function Detail() {
    const { number } = useParams()
    const [ issue, setIssue ] = useState<GithubIssuesItem>({} as GithubIssuesItem)

    async function loadIssue() {
        const numberIssue = parseInt(number || '-1')
        if(!numberIssue || numberIssue < 1) {
            throw new Error('Número do issue não informado ou inválido')
        }

        gitHubApi.getIssue(parseInt(number || '-1')).then(respIssue => {
            const newIssue: GithubIssuesItem = {
                number: respIssue.number,
                title: respIssue.title,
                body: respIssue.body,
                created_at: respIssue.created_at,
                user: {login: respIssue.user?.login || ''},
                html_url: respIssue.html_url,
                comments: respIssue.comments
                
            }

            setIssue(newIssue)
        })
    }

    const numberOfComments: string = ((n) => {
        if(n === 0) {
            return 'nenhum comentário'
        }

        if(n === 1) {
            return '1 comentário'
        }

        return `${n} comentários`
    })(issue.comments || 0)

    useEffect(() => {
        loadIssue()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            <DetailCardContainer>
                <DetailCardLinks>
                    <Link to={'..'} >
                        <AnimatedLink>
                            <span>
                                <IconChevronLeft />
                            </span>
                            voltar
                        </AnimatedLink>
                    </Link>

                    <Link to={issue.html_url || '#'} target="_blank">
                        <AnimatedLink>
                            ver no github
                            <span>
                                <IconUpRight />
                            </span>
                        </AnimatedLink>
                    </Link>
                </DetailCardLinks>

                <DetailCardTitle>
                    {issue.title}
                </DetailCardTitle>

                <div>
                    <DetailCardFooter>
                        <li><IconGithub /> <span>{issue.user?.login}</span></li>
                        <li><IconCalendarDay /> <span>{issue.created_at}</span></li>
                        <li><IconComment /> <span>{numberOfComments}</span></li>
                    </DetailCardFooter>
                </div>
            </DetailCardContainer>

            <DetailContentContainer>
                <Markdown>
                    {issue.body}
                </Markdown>
            </DetailContentContainer>
        </>
    )
}