import { useRouteError, Link, ScrollRestoration } from "react-router-dom";
import Footer from '../components/Footer.jsx';
import Header from '../components/Header.jsx';


export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
      <main className="error-page">
        <h1>Oops</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <Link to=".." relative="path">Click here to go back.</Link>
      </main>
    
  );
}