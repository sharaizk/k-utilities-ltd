import React from "react";
import { Helmet } from "react-helmet";
// Screens
import { ToastContainer } from "react-toastify";
import Router from "./routes/routes.js";
import "react-toastify/dist/ReactToastify.css";
import TopNavbar from "./components/Nav/TopNavbar";


export default function App() {
  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Khula:wght@400;600;800&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <TopNavbar />
      <Router />
    </>
  );
}
