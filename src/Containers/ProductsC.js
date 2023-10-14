import { connect } from 'react-redux'
import Products from '../Components/Products/Products'
import { fetchProducts } from '../Redux/actions'

const mapStateToProps = (state) => {
    return {
        products: state.products
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchProducts: () => dispatch(fetchProducts())
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products)