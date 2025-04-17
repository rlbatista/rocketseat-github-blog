import type { CSSProp } from "styled-components";
import { defaultTheme } from "../styles/themes/default";

type ThemeType = typeof defaultTheme;

declare module "styled-components" {
     
    // eslint-disable-next-line @typescript-eslint/no-empty-object-type
    export interface DefaultTheme extends ThemeType {}
}

declare module "react" {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    interface DOMAttributes<T> {
        css?: CSSProp;
    }
}