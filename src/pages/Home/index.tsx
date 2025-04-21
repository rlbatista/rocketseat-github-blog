import { HeaderCard } from '../../components/HeaderCard'
import { Avatar, DescriptionText, HeaderContainer, HeaderText, HomeContainer, PostContainer, SearchHeaderContainer, SocialFooter, TextContainer } from './styles'
import { IconBuilding, IconGithub, IconUpRight, IconUserGroup } from '../../components/Icons'
import { Link } from 'react-router-dom'
import { AnimatedLink } from '../../components/AnimatedLink'
import { Card } from '../../components/Card'
import { useEffect, useState } from 'react'
import { gitHubApi, GithubProfile } from '../../lib/api'
import { configs } from '../../utils/configs'

export function Home() {
    const [ profile, setProfile ] = useState<GithubProfile>({} as GithubProfile)

    async function loadProfile() {
        const profileData = await gitHubApi.getProfile(configs.getGithubAccount())

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

    useEffect(() => {
        loadProfile()
    }, [])

    return (
        <>
            <HeaderCard>
                <HomeContainer>
                    <Avatar src={profile.avatar_url} alt="" />
                    
                    <TextContainer>
                        <HeaderContainer>
                            <HeaderText>{profile.name}</HeaderText> 
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
                    <span>6 publicações</span>
                </div>
                <input type="text" placeholder='Buscar Conteúdo'/>
            </SearchHeaderContainer>

            <PostContainer>
                <Card />
                <Card />
                <Card />
                <Card />
            </PostContainer>
        </>
    )
}
