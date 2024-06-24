import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import styles from './App.module.css'
function App() {
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
              element={<div className=
                {styles.main
                }>Blogs</div>}>
            </Route>

            <Route path='submit'
              exact
              element={<div className=
                {styles.main
                }>Submit a blog Page</div>}>
            </Route>

            <Route path='sign-up'
              exact
              element={<div className=
                {styles.main
                }>Sign Up Page</div>}>
            </Route>

            <Route path='log-in'
              exact
              element={<div className=
                {styles.main
                }>Log In Page</div>}>
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
