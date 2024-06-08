import {Provider} from "react-redux"
import './App.css';
import store from './Utils/store';
import Body from './components/Body';
import Head from './components/Head';




function App() {
  return (
    <Provider store={store}>
   
  
    <div>
      <Head/>
      <Body/>
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
