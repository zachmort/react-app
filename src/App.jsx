import "./App.scss";
import React, { Fragment } from "react";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import * as ReactDOM from "react-dom";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from "./pages/home/Home";
// import Gigs from "./pages/gigs/Gigs";
// import Gig from "./pages/gig/Gig";
// import Login from "./pages/login/Login";
// import Register from "./pages/register/Register";
// import Add from "./pages/add/Add";
// import Orders from "./pages/orders/Orders";
// import Messages from "./pages/messages/Messages";
// import Message from "./pages/message/Message";
// import MyGigs from "./pages/myGigs/MyGigs";

const Layout = () => {
    return (
      <Fragment>
        <Navbar/>
        <Footer/>
        Hello world
        </Fragment>
    )
  };


function App() {

  // return (
  //   <div className="app">
  //   <Layout/>   
  //   </div>
  // )
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      // children: [
  //       {
  //         path: "/",
  //         element: <Home />,
  //       },
  //       {
  //         path: "/gigs",
  //         element: <Gigs />,
  //       },
  //       {
  //         path: "/myGigs",
  //         element: <MyGigs />,
  //       },
  //       {
  //         path: "/orders",
  //         element: <Orders />,
  //       },
  //       {
  //         path: "/messages",
  //         element: <Messages />,
  //       },
  //       {
  //         path: "/message/:id",
  //         element: <Message />,
  //       },
  //       {
  //         path: "/add",
  //         element: <Add />,
  //       },
  //       {
  //         path: "/gig/:id",
  //         element: <Gig />,
  //       },
  //     ],
  //   },
  //   {
  //     path: "/register",
  //     element: <Register />,
  //   },
  //   {
  //     path: "/login",
  //     element: <Login />,
  //   },
  }],
  );
  
  
    return <RouterProvider router={router} />;

}



// ReactDOM.createRoot(document.getElementById("home")).render(
//   <RouterProvider router={router} />
// );

export default App