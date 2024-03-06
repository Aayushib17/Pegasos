// // src/App.js
// import React from 'react';
// import { BrowserRouter as Router, Route, Link,Routes } from 'react-router-dom';
// import Login from './Components/Home/Login';
// import Signup from './Components/Home/Signup';
// import Overview from './Components/Home/Overview';
// import Home from './Components/Home/Home';
// const App = () => {
//   return (
//   <div> 
//    <Router>
//         <Routes>
//         <Route path="/" element={<Home/>} />
//         <Route path="/login" element={<Login/>} />
//         <Route path="/signup" element={<Signup/>} />
//         <Route path="/overview" element={<Overview/>} />

//         </Routes>
//     </Router>
    
//      </div>
//   );
 
// };

// export default App;
import { ColorModeContext ,useMode} from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import {Routes, Route} from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Dashboard from "./scenes/dashboard";
import Sidebar from "./scenes/global/Sidebar";
import Team from "./scenes/team";
import { useState } from "react";
// import Campaigns from "./scenes/campaigns";
import Contacts from "./scenes/contacts";
// import Automation from "./scenes/automation";
// import Ecommerece from "./scenes/ecommerece";
// import Library from "./scenes/library";
// import Report from "./scenes/report";
import Bar from "./scenes/bar";
import Form from "./scenes/form";
import Line from "./scenes/line";
import Pie from "./scenes/pie";
import FAQ from "./scenes/faq";
// import Geography from "./scenes/geography";
// import AbTesting from "./scenes/abtesting";
// import Home from './Frontend/Home/Home';
// import Calandar from "./scenes/calandar";


function App() {
const[theme,colorMode]=useMode();
const [isSidebar, setIsSidebar] = useState(true);
  return (
  <ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
      <CssBaseline/>
   <div className="app">
   <Sidebar isSidebar={isSidebar} />
<main className="content">  
<Topbar setIsSidebar={setIsSidebar} />
<Routes>
  {/* <Route path="/" element={<Home />}/> */}
  <Route path="/" element={<Dashboard />}/>
  <Route path="/team" element={<Team />}/>
  {/* <Route path="/campaigns" element={<Campaigns />}/> */}
  <Route path="/contacts" element={<Contacts />}/>
  {/* <Route path="/automation" element={<Automation />}/> */}
  {/* <Route path="/ecommerce" element={<Ecommerce />}/> */}
  {/* <Route path="/library" element={<Library />}/> */}
  {/* <Route path="/report" element={<Report />}/> */}
   <Route path="/form" element={<Form />}/>
   <Route path="/bar" element={<Bar />}/>
  <Route path="/pie" element={<Pie />}/>
  <Route path="/line" element={<Line />}/> 
   <Route path="/faq" element={<FAQ />}/>
  {/*<Route path="/geography" element={<Geography />}/>
  <Route path="/calandar" element={<Calandar />}/>
  <Route path="/abtesting" element={<AbTesting />}/> */}



</Routes>

</main>
      </div> 
      </ThemeProvider>
  </ColorModeContext.Provider>
    
    
  );
}

export default App;