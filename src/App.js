import { AppBar, Container } from "@material-ui/core";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SimpleTabs from "./components/menuComponent1";
import MenuAppBar from "./components/HeaderComponent";
import ProminentAppBar from "./components/ThickHeader";
import BottomAppBar from "./components/footercomponent";

// const element = <Welcome name="MenuComponent" />;
function App() {
  return (
    <div>
      <div className="rooContainer">
      <MenuAppBar/>
      {/* <ProminentAppBar/> */}
          <div className="menu" >
            <SimpleTabs></SimpleTabs>
          </div>

          <BottomAppBar/>
      </div>

    </div>
    // <Router>
    // <div>
    //   <nav>
    //     <ul>
    //       <li>
    //         <Link to="/">Home</Link>
    //       </li>
    //       <li>
    //         <Link to="/about">About</Link>
    //       </li>
    //       <li>
    //         <Link to="/users">Users</Link>
    //       </li>
    //     </ul>
    //   </nav>
    //   <Switch>
    //         <Route path="/about">
    //           <About />
    //         </Route>
    //         <Route path="/">
    //           <Home />
    //         </Route>
    //       </Switch>
    //     </div>
    //   </Router>
  );
}

export default App;
