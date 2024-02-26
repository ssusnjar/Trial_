import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
// import {

//   Kontakt,
//   ONama,
//   Projekti1,
//   Usluge1,
// } from "./components" "./components";
import HomePage from './components/HomePage/HomePage';
import Layout from './components/Layout';
import Kontakt from './components/Kontakt/Kontakt';
import ONama from './components/oNama/ONama';
import Projekti1 from "./components/Projekti/Projekti";
import Usluge1 from './components/Usluge/Usluge';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path="/oNama" element={<ONama />} /> 
      <Route path="/Projekti" element={<Projekti1 />} />
      <Route path="/Kontakt" element={<Kontakt />} />
      <Route path="/Usluge" element={<Usluge1 />} />
    </Route>
  )
);

function App({ routes }) {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;


