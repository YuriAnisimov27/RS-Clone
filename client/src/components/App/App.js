import { connect } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import useRoutes from "../../routes";
import useAuth from "../../hooks/auth.hook";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Loader from "../Loader/Loader";
import Header from "../Header/Header";
import { mapStateToProps, mapDispatchToProps } from "../../redux/redux-helpers";
import "materialize-css";
import "./App.css";

function App(props) {
  const { login, logout, token, userId, ready } = useAuth();

  // const isAuthenticated = !!token;
  const isAuthenticated = true;

  const routes = useRoutes(isAuthenticated);

  if (!ready) {
    return <Loader />;
  }

  const state = props;

  return (
    <AuthContext.Provider
      value={{
        login,
        logout,
        token,
        userId,
        isAuthenticated,
        state,
      }}
    >
      <BrowserRouter>
        {isAuthenticated && <Header />}
        {isAuthenticated && <Navbar />}

        <div>{routes}</div>
        {isAuthenticated && <Footer />}
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
