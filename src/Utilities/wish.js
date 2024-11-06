import toast from "react-hot-toast";

// Get all products from local storage
const wishGetProducts = () => {
    const allProd = localStorage.getItem('wishProd');
    return allProd ? JSON.parse(allProd) : [];
}

const wishAddProducts = (wishItem) => {
    const wishProd = wishGetProducts();
    const isExist = wishProd.some(product => product.id === wishItem.id);
    if (isExist) {
        return toast.error('The Product is already in the list!');
    }
    wishProd.push(wishItem);
    localStorage.setItem('wishProd', JSON.stringify(wishProd));
    toast.success('Successfully added product to WishList');
}

const wishRemoveProducts = (id) => {
    const wishProd = wishGetProducts();
    const remaining = wishProd.filter(wishItem => wishItem.id !== id);
    localStorage.setItem('wishProd', JSON.stringify(remaining));
    toast.success('Successfully removed product from WishList');
}

export { wishGetProducts, wishAddProducts, wishRemoveProducts };
