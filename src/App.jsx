import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Components/Home'
import Programs from './Components/Programs'
import Interests from './Components/Interests'
import Choice from './Components/Choice'

function App() {
  const [activePage, setActivePage] = useState("home")

  return (
      <>
        <div className="flex flex-col h-screen">
          <div className="navbar bg-base-100 shadow-sm bg-white">
            <div className="navbar-start">
              <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                  <img src='src\assets\menuicon.JPG' className='h-5 w-5'></img>
                </div>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow bg-indigo-500">
                  <li className='bg-red-700 hover:bg-white text-slate-950 rounded-sm'><a>Home</a></li>
                  <li className='bg-yellow-400 hover:bg-white text-slate-950 rounded-sm'><a>About</a></li>
                  <li className='text-white bg-slate-950 hover:text-slate-950 bg-white rounded-sm'><a>Contact</a></li>
                </ul>
              </div>
            </div>
            <div className="navbar-center">
              <img src='src\assets\raiderwaylogofinal.png' className='w-25 h-10'></img>
            </div>
            <div className="navbar-end">
              <button onClick={() => onNav("interest")} className="btn btn-ghost bg-indigo-500">
                Sign Up
              </button>

            </div>
          </div>
          <div className="flex flex-col grow">
            {activePage === "home" && <Home onNav={() => setActivePage("choice")}/>}
            {activePage === "choice" && <Choice onNav={setActivePage}></Choice>}
            {activePage === "interest" && <Interests onNav={setActivePage}></Interests>}
            {activePage === "program" && <Programs onNav={setActivePage}></Programs>}
          </div>
        </div>
      </>
  )
}

export default App
