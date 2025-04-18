import { HeaderContainer } from "./styles";
import logoSvg from '../../assets/logo.svg'
import { Link } from "react-router-dom";

export function Header() {
    return (
        <HeaderContainer>
            <Link to='/'>
                <img src={logoSvg} alt="Logo do sistema" />
            </Link>
        </HeaderContainer>
    )
}