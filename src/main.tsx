// import React from 'react'
 import ReactDOM from 'react-dom/client'
//  import App from './App.tsx'
//  import App from './App'
// import { BrowserRouter} from 'react-router-dom';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
//  import Dashboard from './componeten/Dashborad'
//  import Favo from "./componeten/Favo";
// import Test from './componeten/Test';
// import Test2 from './componeten/Test2';

// function App() {
//   return (
//     <div className="main">
//        <Router>
//       <Route index element={<Test/>} />
//       <Route path="/test2" element={<Test2/>} />
//     </Router>
//     </div>
//   );
// }


// ReactDOM.createRoot(document.getElementById('root')!).render(
//   <React.StrictMode>
//     {/* <Dashboard /> */}
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
    
//   </React.StrictMode>,
// )
import React from 'react';
import { BrowserRouter as Router, Route ,Routes} from 'react-router-dom';
import Test from './componeten/Test';
import Test2 from './componeten/Test2';
import './App.css';
import Dashboard from './componeten/Dashborad'

function App() {
  return (
       <Routes>
        <Route path="/test" element={<Test />} />
        <Route path="/test2" element={<Test2 />} />
        <Route path="/" element={<Dashboard />} />
      </Routes>
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
);

