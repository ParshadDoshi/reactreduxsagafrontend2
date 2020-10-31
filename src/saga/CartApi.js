import axios from 'axios';

const cart = async userId => {

    const { data } = await axios.get(`http://localhost:5000/cart/${userId}`);
    return data;

}
const addcart = async (userId, productId, quantity) => await axios.post('http://localhost:5000/cart/add', { userId, productId, quantity });
export default { cart, addcart }