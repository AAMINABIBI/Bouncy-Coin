import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import styles from './App.module.css'
import Protected from "./components/Protected/Protected";
import Error from "./pages/Error/Error"
import Login from './pages/Login/Login'

function App() {
  const isAuth=false;
  return (
   
    <div className={styles.container} >
      <BrowserRouter>
        <div className={styles.layout}>
          <Navbar>

          </Navbar>
          <Routes>
            <Route
              path='/'
              exact
              element={
                <div className={styles.main} >
                  <Home></Home>
                </div>

              }
            />

            <Route path='crypto'
              exact
              element={<div className=
                {styles.main
                }>Crypto Page</div>}>
            </Route>

            <Route path='blogs'
              exact
              element={
                <Protected isAuth={isAuth}>
              <div className=
                {styles.main
                }>Blogs</div>
                </Protected>
                }>
            </Route>

            <Route path='submit'
              exact
              element={
              <Protected  isAuth={isAuth}>
              <div className=
                {styles.main
                }>Submit a blog Page</div>
                </Protected>}
                >
            </Route>

            <Route path='signup'
              exact
              element={<div className=
                {styles.main
                }>Sign Up Page</div>}>
            </Route>

            <Route path='login'
              exact
              element={<div className=
                {styles.main
                }><Login /></div>}>
            </Route>
<Route path='*'
element={
  <div className={styles.main}><Error>
    </Error>
    </div>
}>

</Route>

          </Routes>

          <Footer>

          </Footer>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
