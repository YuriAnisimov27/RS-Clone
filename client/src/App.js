import {AuthContext} from './context/AuthContext';
import {BrowserRouter} from 'react-router-dom';
import {useRoutes} from './routes';
import {useAuth} from './hooks/auth.hook';
import {Navbar} from './components/Navbar';
import {Footer} from './components/Footer';
import {Loader} from './components/Loader';
import 'materialize-css';
import './App.css';

function App() {
  const {login, logout, token, userId, ready} = useAuth();
  // const isAuthenticated = !!token;
  const isAuthenticated = true;
  const routes = useRoutes(isAuthenticated);

  if (!ready) {
    return <Loader/>;
  }

  return (
    <AuthContext.Provider value={{
      login, logout, token, userId, isAuthenticated
    }}>
      <BrowserRouter>
        {isAuthenticated && <Navbar/>}
        <div className='container'>
          {routes}
        </div>
        {isAuthenticated && <Footer/>}
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
