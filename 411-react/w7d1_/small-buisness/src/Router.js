import React from 'react'
import { Switch, Route, Redirect } from 'react-router'
import cookie from 'cookie'
import Home from './components/Home'
import Login from './containers/Login'
import ListingArchive from './containers/ListingArchive'
import ListingEntry from './containers/ListingEntry'
import ListingAdd from './containers/ListingAdd'


const checkAuth = () => {
	const cookies = cookie.parse(document.cookie)
	return cookies["loggedIn"] ? true : false
}


const ProtectedRoute = ({component: Component, ...rest}) => {
	return (
		<Route
		{...rest}
		render={(props) => checkAuth()
			? <Component {...props} />
			: <Redirect to="/login" />}
		/>
	)
}


const Router = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
			<Route path="/listings" component={ListingArchive} />
			<Route path="/listing/:id" component={ListingEntry} />
            <ProtectedRoute path="/add-listing" component={ListingAdd} />
			<Route path="/login" component={Login} />
        </Switch>
    );
};

export default Router;