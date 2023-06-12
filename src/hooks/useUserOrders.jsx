import { useContext, useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { auth, db } from '../firebase.config';
import {AuthContext} from '../context/AuthContext'

export const useUserOrders = () => {
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [userOrders, setUserOrders] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const unsubscribeAuthState = onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        setUserLoggedIn(true);

        const ordersCollectionRef = collection(db, 'orders');
        const ordenesQuery = query(ordersCollectionRef, where('userId', '==', authUser.uid));

        getDocs(ordenesQuery)
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
        setUserLoggedIn(false);
        setUserOrders([]);
      }
    });

    return () => unsubscribeAuthState();
  }, [user]);

  return { userLoggedIn, userOrders };
};