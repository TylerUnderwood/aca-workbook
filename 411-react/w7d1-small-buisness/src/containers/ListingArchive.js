import { connect } from 'react-redux'
import ListingArchive from '../components/ListingArchive'
import { removeListing } from '../redux/actions'

const mapStateToProps = ( state ) => {
    return {
        user: state.user,
        business: state.business,
    }
}


const mapDispatchToProps = ( dispatch ) => {
    return {
        removeListing: ( index ) => dispatch( removeListing( index ) )
    }
}

export default connect( mapStateToProps, mapDispatchToProps )(ListingArchive)