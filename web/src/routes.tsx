import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom'
import CreateOrphanage from './pages/CreateOrphanage';
import Landing from './pages/Landing'
import OrphanegesMap from './pages/OrphanagesMap'
import Orphanege from './pages/Orphanage'

function Routes() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact component={Landing} />
				<Route path="/app" component={OrphanegesMap} />

        <Route path="/orphanages/create" component={CreateOrphanage} />
        <Route path="/orphanages/:id" component={Orphanege} />
			</Switch>
		</BrowserRouter>
	);
}

export default Routes;
