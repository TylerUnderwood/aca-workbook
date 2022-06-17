import { connect } from 'react-redux'
import AddCar from '../components/AddCar'
import { addCar } from '../redux/actions'
import { removeCar } from '../redux/actions'

const mapDispatchToProps = (dispatch) => {
	return {
		addCar:      (car) => dispatch(    addCar(car)   ),
		removeCar: (index) => dispatch( removeCar(index) )
	}
}

export default connect(null, mapDispatchToProps)(AddCar)