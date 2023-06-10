import React, { createContext, useState, useEffect } from 'react'
import { db } from '../firebase.config'
import {collection ,getDocs} from 'firebase/firestore'
import Spinner from '../components/Spinner/Spinner';




export const ProductContext = createContext('');

export const ProductProvider = ({ children }) => {
  const [product, setProduct] = useState([]);
  const [loading , setLoading] = useState(false)

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true)
      try {
        const productsData = collection(db, 'product');
        const data = await getDocs(productsData);
        const items = data.docs.map(doc => {
          return {
            id: doc.id,
            ...doc.data()
          };
        });
        setProduct(items);
        setLoading(false)
      } catch (error) {
        console.error('Error en ProductContext', error);
      }
    };

    fetchProducts();
  }, []);
 
  return (
    <ProductContext.Provider value={product}>
      {loading ? <Spinner/> : children}
    </ProductContext.Provider>
  );
};