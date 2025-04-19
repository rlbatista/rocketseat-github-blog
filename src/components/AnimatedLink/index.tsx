import { ReactNode } from "react";
import { LinkContainer } from "./styles";

export function AnimatedLink({children}: {children: ReactNode}) {
    return (
        <LinkContainer>
            {children}
        </LinkContainer>
    )
}