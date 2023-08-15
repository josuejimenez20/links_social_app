import { Route, Routes } from "react-router-dom";
import AuthRouter from "./auth/AuthRouter";
import { Container } from "@mui/material";
import { ThemeProvider } from '@emotion/react';
import { darkTheme } from "../theme/darkTheme";
import Home from "../components/home/Home";
import MessagesHome from "../components/home/messages/MessagesHome";

export function AppRouter() {

    return (<>

        <ThemeProvider
            theme={darkTheme}>

            <Container maxWidth={false} sx={{ backgroundColor: 'black', height: '400vh' }}>

                <Routes>

                    <Route path="/auth/*" element={<AuthRouter />} />
                    <Route path="/home/*" element={<Home />} />
                    <Route path="/messages/*" element={<MessagesHome />} />

                </Routes>

            </Container>

        </ThemeProvider>

    </>)


}