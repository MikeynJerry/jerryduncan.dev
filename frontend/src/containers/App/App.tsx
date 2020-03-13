import React, { FunctionComponent, ReactElement } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'


interface AppProps {
  routes: ReactElement
}

const App: FunctionComponent<AppProps> = ({ routes }) => (
  <Router>{routes}</Router>
)

export default App
