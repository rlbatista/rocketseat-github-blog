import { DetailCardContainer, DetailCardFooter, DetailCardLinks, DetailCardTitle } from "./styles";
import { AnimatedLink } from "../../components/AnimatedLink";
import { IconCalendarDay, IconChevronLeft, IconComment, IconGithub, IconUpRight } from "../../components/Icons";

export function Detail() {
    return (
        <DetailCardContainer>
            <DetailCardLinks>
                <AnimatedLink>
                    <span>
                        <IconChevronLeft />
                    </span>
                    voltar
                </AnimatedLink>

                <AnimatedLink>
                    ver no github
                    <span>
                        <IconUpRight />
                    </span>
                </AnimatedLink>
            </DetailCardLinks>

            <DetailCardTitle>
                JavaScript data types and data structures
            </DetailCardTitle>

            <div>
                <DetailCardFooter>
                    <li><IconGithub /> <span>cameronwll</span></li>
                    <li><IconCalendarDay /> <span>Há um dia</span></li>
                    <li><IconComment /> <span>5 comentários</span></li>
                </DetailCardFooter>
            </div>

        </DetailCardContainer>
    )
}