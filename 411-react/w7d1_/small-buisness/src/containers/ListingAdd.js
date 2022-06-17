import { connect } from 'react-redux'
import ListingAdd from '../components/ListingAdd'
import { addListing } from '../redux/actions'

const mapStateToProps = ( state ) => {
    return {
        user: state.user,
        business: state.business,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addListing: ( listing ) => dispatch( addListing( listing ) )
    }
}

export default connect( mapStateToProps, mapDispatchToProps)(ListingAdd)
