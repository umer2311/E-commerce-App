import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts,addProduct,deleteProduct,updateProduct } from '../../../redux/productSlice';

const Product = () => {
  const [name, setProductName] = useState('');
  const [company, setCompany] = useState('');
  const [categories, setCategories] = useState('');
  const [ratings, setRatings] = useState(0);
  const [statement, setStatement] = useState('');
  const [size, setSize] = useState('');
  const [origin, setOrigin] = useState('');
  const [price, setPrice] = useState(0);
  const [stock, setStock] = useState(0);
  const [isTrending, setIsTrending] = useState(false);
  const [isHotSeller, setIsHotSeller] = useState(false);
  const [saleDiscount, setSaleDiscount] = useState(0);
  const [discountedPrice, setDiscountedPrice] = useState(0);
  const [totalSold, setTotalSold] = useState(0);
  const [images, setImages] = useState('');
  const [editingProductId, setEditingProductId] = useState(null);
  const dispatch = useDispatch();
  const data = useSelector((state) => state.product.product);

  const token = localStorage.getItem('token');

  const handleFileChange = (event) => {
    setImages(event.target.files);
    }
    const form = new FormData();
    const handleFormSubmit = (event) => {
      event.preventDefault();
  
      form.append('name', name);
      form.append('company', company);
      form.append('categories', categories);
      form.append('ratings', ratings);
      form.append('statement', statement);
      form.append('size', size);
      form.append('origin', origin);
      form.append('price', price);
      form.append('stock', stock);
      form.append('isTrending', isTrending);
      form.append('isHotSeller', isHotSeller);
      form.append('saleDiscount', saleDiscount);
      form.append('discountedPrice', discountedPrice);
      form.append('totalSold', totalSold);
      for (let i = 0; i < images.length; i++) {
        form.append('images', images[i]);
        console.log(images[i])
      }
      console.log("submit")

    };
  
  const headers ={
    'Content-Type': 'multipart/form-data'
   }
   
  useEffect(() => {
    if (editingProductId !== null) {
      const editingproduct = data.find(product => product._id === editingProductId);
      if (editingproduct) {
        setProductName(editingproduct.name);
        setCompany(editingproduct.company);
        setCategories(editingproduct.categories);
        setRatings(editingproduct.ratings); 
        setStatement(editingproduct.statement);
        setSize(editingproduct.size);
        setOrigin(editingproduct.origin);
        setPrice(editingproduct.price);
        setStock(editingproduct.stock);
        setIsTrending(editingproduct.isTrending); 
        setIsHotSeller(editingproduct.isHotSeller);
        setSaleDiscount(editingproduct.saleDiscount);
        setDiscountedPrice(editingproduct.discountedPrice);
        setTotalSold(editingproduct.totalSold); 
        setImages(editingproduct.images);
      }
    }
  }, [editingProductId, data]);

  const changeState = () => {
    console.log(`${token}`)
    dispatch(fetchProducts());
  };

  // const updatedProduct = {
  //   name ,company, categories ,ratings ,description:{statement,size,origin},
  //   price ,stock , isTrending  ,isHotSeller ,saleDiscount
  //   ,discountedPrice,  totalSold,images
  // };
  
  const addproduct = () => {
    dispatch(addProduct({form,headers}));
    dispatch(fetchProducts(headers));
    //clearForm();
  };

  const updateproduct = () => {
    if (editingProductId !== null) {
      dispatch(updateProduct({ id: editingUserId, updatedData: updateUserObject ,headers:headers }));
      dispatch(fetchProducts(headers));
      clearForm();
    }
  };

  const deleteproduct = (id) => {
    dispatch(deleteProduct(id));
    dispatch(fetchProducts(headers));
    clearForm();
  };

  const clearForm = () => {
    setProductName(' ');
    setCompany(' ');
    setCategories(' ');
    setRatings(' '); 
    setStatement('');
    setSize('');
    setOrigin('');
    setPrice(' ');
    setStock(' ');
    setIsTrending(' '); 
    setIsHotSeller(' ');
    setSaleDiscount(' ');
    setDiscountedPrice(' ');
    setTotalSold(' '); 
    setImages(' ');
    setEditingProductId(null);
  };

 
  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl mb-4">{editingProductId ? 'Edit Product' : 'Add New Product'}</h1>
      <div className="flex flex-col space-y-4 mb-6">
        <form encType='multipart/form-data' onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setProductName(e.target.value)}
          className="rounded-md px-3 py-2 border focus:outline-none focus:border-blue-500"
        />
        <input
          type="text"
          placeholder="Company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          className="rounded-md px-3 py-2 border focus:outline-none focus:border-blue-500"
        />
        <input
          type="text"
          placeholder="Categories"
          value={categories}
          onChange={(e) => setCategories(e.target.value)}
          className="rounded-md px-3 py-2 border focus:outline-none focus:border-blue-500"
        />
        <input
          type="number"
          placeholder="Rating"
          value={ratings}
          onChange={(e) => setRatings(e.target.value)}
          className="rounded-md px-3 py-2 border focus:outline-none focus:border-blue-500"
        />
       
            <input
            type="text"
            placeholder="Statement"
            value={statement}
            onChange={(e) => setStatement(e.target.value)}
            className="rounded-md px-3 py-2 border focus:outline-none focus:border-blue-500"
          />
       <input
          type="text"
          placeholder="Size"
          value={size}
          onChange={(e) => setSize(e.target.value)}
          className="rounded-md px-3 py-2 border focus:outline-none focus:border-blue-500"
        />
        <input
          type="text"
          placeholder="Origin"
          value={origin}
          onChange={(e) => setOrigin(e.target.value)}
          className="rounded-md px-3 py-2 border focus:outline-none focus:border-blue-500"
        />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="rounded-md px-3 py-2 border focus:outline-none focus:border-blue-500"
        />
        <input
          type="number"
          placeholder="Stock"
          value={stock}
          onChange={(e) => setStock(e.target.value)}
          className="rounded-md px-3 py-2 border focus:outline-none focus:border-blue-500"
        />
       
            <input
            type="text"
            placeholder="IsTrending"
            value={isTrending}
            onChange={(e) => setIsTrending(e.target.value)}
            className="rounded-md px-3 py-2 border focus:outline-none focus:border-blue-500"
          />
         <input
          type="text"
          placeholder="IsHotSeller"
          value={isHotSeller}
          onChange={(e) => setIsHotSeller(e.target.value)}
          className="rounded-md px-3 py-2 border focus:outline-none focus:border-blue-500"
        />
        <input
          type="number"
          placeholder="SaleDiscount"
          value={saleDiscount}
          onChange={(e) => setSaleDiscount(e.target.value)}
          className="rounded-md px-3 py-2 border focus:outline-none focus:border-blue-500"
        />
        <input
          type="number"
          placeholder="DiscountedPrice"
          value={discountedPrice}
          onChange={(e) => setDiscountedPrice(e.target.value)}
          className="rounded-md px-3 py-2 border focus:outline-none focus:border-blue-500"
        />
        <input
          type="number"
          placeholder="Total sold"
          value={totalSold}
          onChange={(e) => setTotalSold(e.target.value)}
          className="rounded-md px-3 py-2 border focus:outline-none focus:border-blue-500"
        />
       
            <input
            type="file"
            multiple='multiple'
            name='images'
            //value={images}
            onChange={handleFileChange}
            className="rounded-md px-3 py-2 border focus:outline-none focus:border-blue-500"
          />
           <button type="submit">Submit</button>
        </form>

      </div>
      <div className="flex space-x-4">
        {editingProductId ? (
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-200"
            onClick={updateproduct}
          >
            Update Product
          </button>
        ) : (
          <button
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700 focus:outline-none focus:ring focus:ring-green-200"
            onClick={addproduct}
          >
            Add Product
          </button>
        )}
        <button
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-200"
          onClick={changeState}
        >
          Get All Data
        </button>
      </div>

      <h2 className="text-2xl mt-8 mb-4">Product List</h2>
      <table className="min-w-full border border-gray-200">
        <thead className="bg-gray-100">
          <tr>
        
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Company</th>
            <th className="border px-4 py-2">Categories</th>
            <th className="border px-4 py-2">Ratings</th>
            <th className="border px-4 py-2">Description</th>
            <th className="border px-4 py-2">Size</th>
            <th className="border px-4 py-2">Origin</th>
            <th className="border px-4 py-2">Price</th>
            <th className="border px-4 py-2">Stock</th>
            <th className="border px-4 py-2">IsTrending</th>
            <th className="border px-4 py-2">IsHotSeller</th>
            <th className="border px-4 py-2">SaleDiscount</th>
            <th className="border px-4 py-2">DiscountedPrice</th>
            <th className="border px-4 py-2">TotalSold</th>

          </tr>
        </thead>
        <tbody>
          {data && data.map((product) => (
            
            <tr key={product._id}>
              <td className="border px-4 py-2">{product.name}</td>
              <td className="border px-4 py-2">{product.company}</td>
              <td className="border px-4 py-2">{product.categories}</td>
              <td className="border px-4 py-2">{product.ratings}</td>
              <td className="border px-4 py-2">{product.description.statement}</td>
              <td className="border px-4 py-2">{product.description.size}</td>
              <td className="border px-4 py-2">{product.description.origin}</td>
              <td className="border px-4 py-2">{product.price}</td>
              <td className="border px-4 py-2">{product.stock}</td>
              <td className="border px-4 py-2">{product.isTrending}</td>
              <td className="border px-4 py-2">{product.isHotSeller}</td>
              <td className="border px-4 py-2">{product.saleDiscount}</td>
              <td className="border px-4 py-2">{product.discountedPrice}</td>
              <td className="border px-4 py-2">{product.totalSold}</td>
              <td className="border px-4 py-2">
                <button
                  className="text-red-600 hover:text-red-800 mr-2"
                  onClick={() => deleteproduct(product._id)}
                >
                  Delete
                </button>
                <button
                  className="text-blue-600 hover:text-blue-800"
                  onClick={() => setEditingProductId(product._id)}
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Product;