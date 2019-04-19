import { connect } from 'react-redux'

import BookRow from '../components/BookRow'

const mapStateToProps = (state, { data }) => {
    return ({
        data,
    })}

const BookRowContainer = connect(mapStateToProps)(BookRow)

export default BookRowContainer;
