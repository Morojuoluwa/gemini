
import Sidebar from './components/Sidebar'
import Main from './components/Main'
import { BrowserRouter as Router } from 'react-router-dom'

const App = () => {
  return (
    <Router>
       <div className=' flex'>
        <Sidebar/>
        <Main/>
       </div>
    </Router>
   
  )
}

export default App