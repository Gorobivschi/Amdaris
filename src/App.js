import { Link } from "react-router-dom";
import {UserProvider} from "./UserContext"
function App() {
 
return ( 
  <UserProvider>
  <div>
  <header>
      <title>STEAM on WHEELS</title>
  </header>
  <div>
      <header>
          <img class="logo" src="./icon.png"></img>
         <navbar>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/explore">Explore</Link>
            <Link to="/contacts">Contacts</Link>
            
         </navbar> 
      </header>
  
    <main>
       <section id="index">
          <div class="index-info">
              <h1>STEAM on Wheels</h1>
              <br></br>
              <a href="/more" class="link-index">Afla mai mult</a>
          </div>
         
       </section>
    </main>
  <footer>
      <span>Tekedu</span>
  </footer>
<br></br>
  </div>
  </div>
  </UserProvider>
  )
   

}

export default App;
