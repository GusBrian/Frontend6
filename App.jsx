import './App.css'
import { Route, Routes} from 'react-router-dom';
import Home from './Pages/Home';
import LandingPage from './komponen/LandingPage';
import Landing from './Pages/Landing';
import state from './Pages/state';



function App () {
  return (
    <>
      <Routes>
        <Route path="/" Component={Home}/>
        <Route path="/landingpage" Component={Landing}/>
        <Route path="/state" Component={state}/>
       </Routes>
    </>
  )
}

export default App