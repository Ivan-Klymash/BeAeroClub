import axios from 'axios'

export const fetchProducts = () => (dispatch) => {
    axios
        .get('https://run.mocky.io/v3/abd819f1-47a5-4cdc-8f84-7c273dfb6547')
        .then((res) => res.data)
        .then((data) => {
            dispatch({
                type: 'PRODUCTS_SUCCESS',
                products: data.products,
            })
        })
}
