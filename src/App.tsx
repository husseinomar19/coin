
// import Dashboard from './componeten/Dashborad'
import Test from './componeten/Test'
import Test2 from './componeten/Test2'
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import { BrowserRouter} from 'react-router-dom';



function App() {
 
  return (
    <>
    <div className="main">
    <Router>
      <Route index element={<Test/>} />
      <Route path="/test2" element={<Test2/>} />
    </Router> 
    </div>
    </>
  );
}

export default App;
