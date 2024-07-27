import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Transaction from "./pages/Transaction";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import { useQuery } from "@apollo/client";
import { GET_AUTHENTICATED_USER } from "./graphql/queries/user.query";

const App = () => {
  const authUser = false;
  const { loading, data } = useQuery(GET_AUTHENTICATED_USER);
  console.log("Data: ", data);
  return (
    <>
      {data?.authUser && <Header />}
      <Routes>
        <Route
          path="/"
          element={data?.authUser ? <Home /> : <Navigate to="/login" />}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/transaction/:id"
          element={data?.authUser ? <Transaction /> : <Navigate to="/login" />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
