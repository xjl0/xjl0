import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import ErrorLayout from './ErrorLayout';
import Error404 from "../components/errors/Error404";
import MainPage from "../pages/mainPage/MainPage";

const Layout = () => {
    return (
        <>
            <Routes>
                <Route element={<ErrorLayout />}>
                    <Route path="errors/404" element={<Error404 />} />
                </Route>

                <Route>
                    <Route path="/" element={<MainPage />} />
                </Route>
                <Route path="*" element={<Navigate to="/errors/404" replace />} />
            </Routes>
        </>
    );
};

export default Layout;