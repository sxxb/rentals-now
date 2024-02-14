import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import React from "react";

import Layout from './components/Layout.jsx';

import Home from './components/Home.jsx';

import Products from './components/Products.jsx';
import Product from './components/Product.jsx';
import Contact from './components/Contact.jsx';
import Howitworks from './components/HowItWorks.jsx';
import ErrorPage from './components/ErrorPage.jsx';

import Agreement from './components/policies/Agreement.jsx';
import Disclaimer from './components/policies/Disclaimer.jsx';
import Privacy from './components/policies/Privacy.jsx';
import Returns from './components/policies/Returns.jsx';
import Shipping from './components/policies/Shipping.jsx';
import Terms from './components/policies/Terms.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<ErrorPage />}>
        <Route index element={<Home />}/>
        <Route path="Products" element={<Products />} />       
        <Route path="Products/:link" element={<Product />}/>
        <Route path="Contact" element={<Contact />}/>
        <Route path="HowItWorks" element={<Howitworks />}/>
        <Route path="Agreement" element={<Agreement />}/>
        <Route path="Disclaimer" element={<Disclaimer />}/>
        <Route path="Privacy" element={<Privacy />}/>
        <Route path="Returns" element={<Returns />}/>
        <Route path="Shipping" element={<Shipping />}/>
        <Route path="Terms" element={<Terms />}/>
        <Route path="*" element={<ErrorPage />}/>
    </Route>
  )
)

export default function App() {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}