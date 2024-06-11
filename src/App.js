import {Provider} from "react-redux"
import './App.css';
import store from './Utils/store';
import Body from './components/Body';
import Head from './components/Head';
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import Maincontainer from "./components/Maincontainer";
import WatchPage from "./components/WatchPage";

const appRouter=createBrowserRouter([{
  path:"/",
  element:<Body/>,
  children:[{
    path:"/",
    element:<Maincontainer/>
  },
  {
    path:"watch",
    element:<WatchPage/>
  }
]
}])


function App() {
  
  return (
    <Provider store={store}>
   
  
    <div>
      <Head/>
      <RouterProvider router={appRouter}/>
      
      {/**
       * header
       * body
       * sidebar
       *  menuitems
       * main container
       *   buttonlist
       *   video container
       *    video card
       */}
    </div>
    </Provider>
  
  
      
  );
}

export default App;
