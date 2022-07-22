import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
import './App.css';
import {publicRoutes} from './routes'
function App() {
  return (
   <Router>
      <div className="App">
        <Routes>
            {publicRoutes.map((items,index)=> {
              const Page = items.component
              return <Route key={index} path={items.path} element={<Page/>}/>
            })}
        </Routes>
      </div>
   </Router>
  );
}

export default App;
