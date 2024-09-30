
import './App.css'
import { Button } from 'react-bootstrap'
import './assets/component/header.js'

function App() {
 

  return (
    <div className='Mainbody'>
      <div className='container'>
        <h1>LOGIN PAGE</h1>

        <div className='infobox'>
          <div className='infoname'>
            <input type="text" placeholder='Name'/>
          </div>

          <div className='infopass'>
            <input type="text" placeholder='Password'/>
          </div>
        </div>
        

        <p>
          <div>
            <a href="">forgot password?</a>
          </div>
          <div>
            <a href="">SIGNUP</a>
          </div>
          
        </p>
        {/* <button type="button">LOGIN</button> */}
        <Button variant="primary" onClick={() => ('/NextPage')}>
          LOGIN
      </Button>
        
      </div>
      
    </div>
  )
}

export default App
