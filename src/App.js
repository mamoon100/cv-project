import { Switch, Route, Link, HashRouter } from "react-router-dom";

import CvMaker from "./component/cv-maker";
import AboutME from "./component/about-me";

function App() {
  return (
    <HashRouter basename="/"> 
      <Switch>
        <Route path='/' exact>
          <Link to="/about-me">about-me single dash</Link>
          <Link to="/cv-maker">cv-maker single dash</Link>
        </Route>
        {/* <Route path='/' exact>
          <Link to="/about-me">about-me</Link>
          <Link to="/cv-maker">cv-maker</Link>
        </Route> */}
        <Route path='/about-me'>
          <AboutME />
        </Route>
        <Route path='/cv-maker' >
          <CvMaker />
        </Route>
       </Switch>
    </HashRouter>
  );
}

export default App;
