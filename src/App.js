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
// import Dashboard from "./scenes/dashboard";
// import Sidebar from "./scenes/global/Sidebar";
// import Campaigns from "./scenes/campaigns";
// import Team from "./scenes/team";
// import Invoices from "./scenes/invoices";
// import Contacts from "./scenes/contacts";
// import Bar from "./scenes/bar";
// import Form from "./scenes/form";
// import Line from "./scenes/line";
// import Pie from "./scenes/pie";
// import FAQ from "./scenes/faq";
// import Geography from "./scenes/geography";
import Home from './Home/Home';


function App() {
const[theme,colorMode]=useMode();
  return (
  <ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
      <CssBaseline/>
   <div className="app">
<main className="content">  
<Topbar/>
<Routes>
  <Route path="/" element={<Home />}/>
  <Route path="" element={<Home />}/>

</Routes>

</main>
      </div> 
      </ThemeProvider>
  </ColorModeContext.Provider>
    
    
  );
}

export default App;