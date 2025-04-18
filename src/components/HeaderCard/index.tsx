import { ReactNode } from "react";
import { HeaderCardContainer } from "./styles";

export function HeaderCard({children}: {children: ReactNode}) {
    return (
        <HeaderCardContainer>
            {children}
        </HeaderCardContainer>
    )
}