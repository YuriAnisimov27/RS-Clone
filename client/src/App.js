import { AuthContext } from './context/AuthContext';
import { BrowserRouter } from 'react-router-dom';
import { useRoutes } from './routes';
import { useAuth } from './hooks/auth.hook';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Loader } from './components/Loader';
import 'materialize-css';
import './App.css';
import { connect } from 'react-redux'


function mapStateToProps(state) {
  return {
    a: state.a,
    currentLanguage: state.currentLanguage,
    footerContent: state.en.footerContent,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    ru: () => dispatch({ type: 'CHANGE_LNG', lng: 'ru' }),
    en: () => dispatch({ type: 'CHANGE_LNG', lng: 'en' }),
    bel: () => dispatch({ type: 'CHANGE_LNG', lng: 'bel' }),
  }
}


function App(props) {
  const { login, logout, token, userId, ready } = useAuth();

  // const isAuthenticated = !!token;
  const isAuthenticated = true;

  const routes = useRoutes(isAuthenticated);

  if (!ready) {
    return <Loader />;
  }


  console.log(props);

  const state = props;


  return (
    <AuthContext.Provider value={{
      login, logout, token, userId, isAuthenticated, state
    }}>
      <BrowserRouter>
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

