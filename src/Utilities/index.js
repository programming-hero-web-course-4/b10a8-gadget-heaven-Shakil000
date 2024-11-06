import toast from "react-hot-toast";

// get all product from local
const getProducts = () => {
    const allProd = localStorage.getItem('prod');

    if(allProd){
        const items = JSON.parse(allProd);
        return items;
    }else{
        return [];
    }
}

const addProducts = (item) => {
    const prod = getProducts();
    const isExist = prod.find(products => products.id == item.id);
    if(isExist){
        return toast.error('The Product is already exist in the list!');
    }
    // const prod = [];
    prod.push(item);
    localStorage.setItem('prod', JSON.stringify(prod));
    toast.success('Successfully added product')
}


const removeProducts = id => {
    const prod = getProducts();
    const remaining = prod.filter(item => item.id != id);
    localStorage.setItem('prod', JSON.stringify(remaining));
    toast.success('Successfully Removed Products')
}


export {addProducts,getProducts,removeProducts}