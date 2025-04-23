import { HeaderCard } from '../../components/HeaderCard'
import { Avatar, DescriptionText, HeaderContainer, HeaderText, HomeContainer, PostContainer, SearchHeaderContainer, SocialFooter, TextContainer } from './styles'
import { IconBuilding, IconGithub, IconUpRight, IconUserGroup } from '../../components/Icons'
import { Link } from 'react-router-dom'
import { AnimatedLink } from '../../components/AnimatedLink'
import { Card } from '../../components/Card'
import { useEffect, useState } from 'react'
import { gitHubApi, GithubIssuesItem, GithubProfile } from '../../lib/api'

export function Home() {
    const [ profile, setProfile ] = useState<GithubProfile>({} as GithubProfile)
    const [ issues, setIssues ] = useState<GithubIssuesItem[]>([] as GithubIssuesItem[])

    async function loadProfile() {
        const profileData = await gitHubApi.getProfile()

        const newGithubProfile = {
            name: profileData.name,
            avatar_url: profileData.avatar_url,
            bio: profileData.bio,
            company: profileData.company,
            created_at: profileData.created_at,
            followers: profileData.followers,
            html_url: profileData.html_url,
            login: profileData.login
        }

        setProfile(newGithubProfile)
    }

    async function loadIssues() {
        const issuesData = await gitHubApi.getIssues()
        const items = issuesData.items.map(issue => {
            return {
                title: issue.title,
                number: issue.number,
                body: issue.body,
                created_at: issue.created_at
            }
        })
        setIssues(items)
    }

    const numberOfPublications: string = ((n) => {
        if(n === 0) {
            return 'Nenhuma publicação'
        }

        if(n === 1) {
            return '1 publicação'
        }

        return `${n} publicações`
    })(issues.length)

    useEffect(() => {
        loadProfile()
        loadIssues()
    }, [])

    return (
        <>
            <HeaderCard>
                <HomeContainer>
                    <Avatar src={profile.avatar_url} alt="" />
                    
                    <TextContainer>
                        <HeaderContainer>
                            <HeaderText>{profile.name || profile.login}</HeaderText> 
                            <Link to={profile.html_url} target='_blank'>
                                <AnimatedLink>
                                    github
                                    <span>
                                        <IconUpRight />
                                    </span>
                                </AnimatedLink>
                            </Link>
                        </HeaderContainer>
                        <DescriptionText>
                            {profile.bio}
                        </DescriptionText>
                        <div>
                            <SocialFooter>
                                <li><IconGithub /> <span>{profile.login}</span></li>
                                <li><IconBuilding /> <span>{profile.company}</span></li>
                                <li><IconUserGroup /> <span>{profile.followers} seguidor(es)</span></li>
                            </SocialFooter>
                        </div>
                    </TextContainer>
                </HomeContainer>
            </HeaderCard>

            <SearchHeaderContainer>
                <div>
                    <h2>Publicações</h2>
                    <span>{numberOfPublications}</span>
                </div>
                <input type="text" placeholder='Buscar Conteúdo'/>
            </SearchHeaderContainer>

            <PostContainer>
                {issues.map((issue) => (
                    <Link key={issue.number} to={`/detail/${issue.number}`}>
                        <Card title={issue.title} content={issue.body} date={new Date(issue.created_at)}/>
                    </Link>
                ))}
            </PostContainer>
        </>
    )
}
