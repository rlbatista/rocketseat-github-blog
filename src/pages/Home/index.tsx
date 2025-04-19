import { HeaderCard } from '../../components/HeaderCard'
import logoSvg from '../../assets/logo.svg'
import { Avatar, DescriptionText, HeaderContainer, HeaderText, HomeContainer, PostContainer, SearchHeaderContainer, SocialFooter, TextContainer } from './styles'
import { IconBuilding, IconGithub, IconUpRight, IconUserGroup } from '../../components/Icons'
import { Link } from 'react-router-dom'
import { Card } from '../../components/Card'

export function Home() {
    return (
        <>
            <HeaderCard>
                <HomeContainer>
                    <Avatar src={logoSvg} alt="" />
                    
                    <TextContainer>
                        <HeaderContainer>
                            <HeaderText>Cameron Williamson</HeaderText> 
                            <Link to="/">
                                github
                                <span>
                                    <IconUpRight />
                                </span>
                            </Link>
                        </HeaderContainer>
                        <DescriptionText>
                            Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.
                        </DescriptionText>
                        <div>
                            <SocialFooter>
                                <li><IconGithub /> <span>cameronwll</span></li>
                                <li><IconBuilding /> <span>Rocketseat</span></li>
                                <li><IconUserGroup /> <span>32 seguidores</span></li>
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
