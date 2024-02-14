import { Outlet, ScrollRestoration } from "react-router-dom";
import Footer from '../components/Footer.jsx';
import Header from '../components/Header.jsx';

export default function Layout() {
    return (
        <>
        <Header />
        <Outlet />
        <Footer />
        <ScrollRestoration />
        </>
    )
}