import React from "react"
import App from "./app"
import { Provider } from 'react-redux';
import {
   Route,
   Redirect,
   Switch,
   Link,
   HashRouter
 } from 'react-router-dom';


 const Root = (props) => {
    return (
    <Provider store={props.store}> 
       <HashRouter>
          <App/>
       </HashRouter>
    </Provider>
    )
 }

export default Root