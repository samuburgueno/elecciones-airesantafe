import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Admin from './components/admin';
import { Vacunacion } from './containers'

const App = () => {
	return (
		<Router>
			<Switch>
				<Route path="/concejales">
					<Admin electionName="concejales" />
				</Route>
				<Route path="/diputados">
					<Admin electionName="diputados" />
				</Route>
				<Route path="/senadores">
					<Admin electionName="senadores" />
				</Route>
				<Route path="/vacunacion">
					<Vacunacion />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;