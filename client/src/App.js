
import { AuthContext } from './context/AuthContext';
import { BrowserRouter } from 'react-router-dom';
import { useRoutes } from './routes';
import { useAuth } from './hooks/auth.hook';
import { Navbar } from './components/Navbar';
import { Footer } from './pages/authPageElements/Footer';
import { Loader } from './components/Loader';
import { Header } from './pages/authPageElements/Header';
import 'materialize-css';
import './App.css';
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './redux/redux-helpers'




function App(props) {
  const { login, logout, token, userId, ready } = useAuth();

  const isAuthenticated = !!token;
  // const isAuthenticated = true;

  const routes = useRoutes(isAuthenticated);

  if (!ready) {
    return <Loader />;
  }

  const state = props;

  return (
    <AuthContext.Provider value={{
      login, logout, token, userId, isAuthenticated, state
    }}>
      <BrowserRouter>
        {isAuthenticated && <Header />}
        {isAuthenticated && <Navbar />}

        <div className='container'>
          {routes}
        </div>
        {isAuthenticated && <Footer />}
      </BrowserRouter>
    </AuthContext.Provider>
  );

}

export default connect(mapStateToProps, mapDispatchToProps)(App);
// export default App;
