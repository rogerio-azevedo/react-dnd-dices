import React from "react"
import { Switch, Route } from "react-router-dom"

import MainBoard from "../pages/MainBoard"

function routes() {
  return (
    <Switch>
      <Route path="/" exact component={MainBoard} />
    </Switch>
  )
}

export default routes
