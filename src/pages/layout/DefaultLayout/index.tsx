import { Outlet } from "react-router-dom";
import { Header } from "../../Header";
import { DefaultContentContainer } from "./syles";

export function DefaultLayout() {
    return (
        <>
            <Header />
            <DefaultContentContainer>
                <Outlet />
            </DefaultContentContainer>
        </>
    )
}