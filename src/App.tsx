import React from 'react'
import { BrowserRouter , Switch, Route } from "react-router-dom"
import PageRender from './PageRender'
import './assets/styles/index.css'
const App = () => {
  return (
    <BrowserRouter>
      <h2 className="text-red-500">
        hello
      </h2>
      <Switch>
        <Route path='/' component={PageRender} exact />
        <Route path='/:page' component={PageRender} exact />
        <Route path='/:page/:id' component={PageRender} exact />
      </Switch>
    </BrowserRouter>
  )
}

export default App

