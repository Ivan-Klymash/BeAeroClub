import axios from 'axios'

export const fetchProducts = () => (dispatch) => {
    axios
        .get('https://run.mocky.io/v3/5ea7dfa6-39b8-4e4b-87b5-1642232becd2')
        .then((res) => res.data)
        .then((data) => {
            dispatch({
                type: 'PRODUCTS_SUCCESS',
                products: data.products,
            })
        })
}
