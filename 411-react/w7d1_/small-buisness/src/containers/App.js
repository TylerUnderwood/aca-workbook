import { connect } from 'react-redux'
import App from '../App'
import { login, logout } from '../redux/actions'


const mapDispatchToProps = ( dispatch ) => {
    return {
		login: () => dispatch( login() ),
		logout: () => dispatch( logout() )
    }
}

export default connect( null, mapDispatchToProps )(App)