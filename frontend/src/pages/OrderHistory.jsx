// frontend/src/pages/OrderHistory.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/OrderHistory.css';

function OrderHistory() {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        // Obter histórico de pedidos
        const token = localStorage.getItem('token');
        axios.get('http://localhost:5000/api/orders/history', {
            headers: { Authorization: `Bearer ${token}` },
        })
            .then(response => setOrders(response.data))
            .catch(error => console.error('Erro ao buscar pedidos:', error));
    }, []);

    return (
        <div className="order-history">
            <h1>Histórico de Pedidos</h1>
            {orders.length > 0 ? (
                orders.map(order => (
                    <div key={order._id} className="order-card">
                        <p><strong>ID do Pedido:</strong> {order._id}</p>
                        <p><strong>Status:</strong> {order.status}</p>
                        <p><strong>Total:</strong> R${order.totalAmount}</p>
                        <div className="order-items">
                            <h4>Itens:</h4>
                            {order.items.map((item, index) => (
                                <p key={index}>{item.title} - Quantidade: {item.quantity}</p>
                            ))}
                        </div>
                    </div>
                ))
            ) : (
                <p>Você ainda não realizou nenhum pedido.</p>
            )}
        </div>
    );
}

export default OrderHistory;
