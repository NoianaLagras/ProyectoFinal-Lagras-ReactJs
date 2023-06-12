import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { auth, db } from '../firebase.config';

export const useUserOrders = () => {
  const [userLoggedIn, setuserLoggedIn] = useState(false);
  const [userOrders, setUserOrders] = useState([]);

  useEffect(() => {
    const noRegistrado = onAuthStateChanged(auth, (user) => {
      if (user) {
       setuserLoggedIn(true);
        
        const ordersCollectionRef = collection(db, 'orders');
        const ordenes = query(ordersCollectionRef, where('userId', '==', user.uid));
        
        getDocs(ordenes)
          .then((snapshot) => {
            const ordersData = [];
            snapshot.forEach((doc) => {
              ordersData.push({ id: doc.id, ...doc.data() });
            });
            setUserOrders(ordersData);
          })
          .catch((error) => {
            console.error('Error al obtener las órdenes del usuario:', error);
          });
      } else {

        setuserLoggedIn(false);
        setUserOrders([]);
      }
    });
  
    return () => noRegistrado();
  }, []);
  return { userLoggedIn, userOrders };
};

