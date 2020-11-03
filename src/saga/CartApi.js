import axios from 'axios';

const cart = async userId => {

    const { data } = await axios.get(`http://localhost:5000/cart/${userId}`);
    return data;

}
const addcart = async (userId, productId, quantity, option) => await axios.post('http://localhost:5000/cart/add', { userId, productId, quantity, option });
export default { cart, addcart }