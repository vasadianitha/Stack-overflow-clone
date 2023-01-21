import './App.css';
import { BrowserRouter as Router} from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Navbar from './components/Navar/Navbar';
import AllRoutes from './AllRoutes';
import { fetchAllQuestions } from './actions/question';
import { fetchAllUsers } from './actions/users';

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAllUsers())
    dispatch(fetchAllQuestions())
    
  }, [dispatch])

  return (
    <div className="App">
      <Router>
        <Navbar/>
        <AllRoutes/>
      </Router>
    </div>
  );
}

export default App;
