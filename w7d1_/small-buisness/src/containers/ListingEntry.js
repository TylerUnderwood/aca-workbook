import { connect } from 'react-redux'
import ListingEntry from '../components/ListingEntry'

const mapStateToProps = ( state ) => {
    return {
        business: state.business,
    }
}

export default connect( mapStateToProps )(ListingEntry)
