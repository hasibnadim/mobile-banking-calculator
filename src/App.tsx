import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar } from "react-bootstrap";
import "./App.css"; 
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
  Outlet,
} from "react-router-dom";
import Home from "./components/Home";
import Bkash from "./Services/Bkash";
import Nagad from "./Services/Nagad";
import Rocket from "./Services/Rocket";
import Upay from "./Services/Upay";
import { useEffect, useRef, useState } from "react";
function App() {
  const [readyInstaller, setReadyInstaller] = useState(false)
  const sw = useRef<any>(null)
  const install = async () => {
    if (sw.current) {
      sw.current.register()
    }
  }
  useEffect(() => {
   window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault()
      sw.current = e
      setReadyInstaller(true)
    })
    return () => {
      window.removeEventListener('beforeinstallprompt', () => {})
    }
  }, [])
  
  return (
    <>
      <Navbar bg="dark" variant="dark" className="px-1 py-0">
        <Navbar.Brand href="/">Mobile Banking Calculator</Navbar.Brand>
        {readyInstaller && <button className="installer_btn" onClick={install}>Install</button>}
      </Navbar>
      <RouterProvider
        router={createBrowserRouter(
          createRoutesFromElements(
            <Route
              path="*"
              element={
                <div className="main_container">
                  <Outlet />
                  <br />
                  <br />

                  <div className="text-center  w-100">
                    <a href="/">Go to Home</a>
                  </div>
                </div>
              }
            >
              <Route path="upay" element={<Upay />} />
              <Route path="rocket" element={<Rocket />} />
              <Route path="nagad" element={<Nagad />} />
              <Route path="bkash" element={<Bkash />} />
              <Route path="*" element={<Home />} />
            </Route>
          )
        )}
      />
      <Navbar className="border-top py-0" bg="dark" variant="dark">
        <p className="pt-2 text-white">
          Developed by{" "}
          <a
            href="https://github.com/hasibnadim"
            className="text-white"
            target="_blank"
          >
            MD Hasib Nadim
          </a>
        </p>
      </Navbar>
    </>
  );
}

export default App;
