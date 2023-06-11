import React from 'react'
import  Container  from '../components/layout/Container'
import { useUserOrders } from '../hooks/useUserOrders';
const Orders = () => {
        const { userOrders } = useUserOrders();
      
        return (
            <Container>
          <div className='orders'>
            <div className='orden'>
            <h1>Mis Pedidos:</h1>
            {userOrders.map((order) => (
  <div key={order.id} className='orderChild border border-2 border-dark p-2 mb-2 border-opacity-50'>
    <p>Numero de Orden : {order.id}</p>
{order.items.map((item) => (
      <div key={item.id}>
       
        <img src={item.img} alt={item.name} />
        <p><strong>{item.name}</strong></p>
        <p>Total: {order.total}</p>
        <span>Cantidad : {item.cantidad}</span>
      </div>
    ))}
  </div>
))}</div>
          </div>
          </Container>
        );
      };
      
      export default Orders;