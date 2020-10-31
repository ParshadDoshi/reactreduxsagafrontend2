import axios from 'axios';

const products = async () => {

    const { data } = await axios.get('http://localhost:5000/products/');
    return data;

}
const getproduct = async id => await axios.get(`http://localhost:5000/products/${id}`);
const addproduct = async data => await axios.post('http://localhost:5000/products/add', data);
const editproduct = async (id, name, price) => {
    console.log("IN Edit PRODUCT API ID IS" + id)
    let { data } = await axios.put(`http://localhost:5000/products/update/${id}`, { name, price })
    return data
}
const deleteproduct = async _id => {
    console.log("Delete Product API" + _id)
    let { data } = await axios.delete(`http://localhost:5000/products/delete/${_id}`);
    return data
}

const addImage = async imagefile => {
    console.log("In add Image" + imagefile)

    var formData = new FormData();
    formData.append('imagefile', imagefile);
    const options = {
        headers: {
            'Content-Type': 'multipart/form-data',
        }
    };
    let filename = await axios.post(`http://localhost:5000/asset/image`, formData, options)
    return filename
}
export default { products, getproduct, addproduct, editproduct, deleteproduct, addImage };