import { ReactNode, createContext, useContext, useEffect, useState } from "react";
import * as Crypto from 'expo-crypto'
import { Order, deleteOrder, loadOrders, saveOrder, updateOrder } from "@/libs/orderStorage";

interface OrderContextType {
    orders: Order[];
    addOrder: (order: Omit<Order, 'id'>) => void;
    removeOrder: (orderId: string) => void;
    updateOrderFunction: (orderId: string, newOrder: Omit<Order, 'id'>) => void;
}

const OrderContext = createContext<OrderContextType | undefined>(undefined);

export const OrderProvider = ({ children }: { children: ReactNode }) => {
    const [orders, setOrders] = useState<Order[]>([]);

    useEffect(() => {
        const fetchOrders = async () => {
            const loadedOrders = await loadOrders();
            setOrders(loadedOrders);
        }
        fetchOrders();
    },[])

    const addOrder = async (order: Omit<Order, 'id'>) => {
        const id = Crypto.randomUUID();
        const newOrder: Order  = {id, ...order}
        await saveOrder(newOrder);
        setOrders([...orders, newOrder])
    };

    const removeOrder = async (orderId: string) => {
        await deleteOrder(orderId);
        const updatedOrders = orders.filter(o => o.id !== orderId);
        setOrders(updatedOrders);
    }

    const updateOrderFunction = async (orderId: string, newOrder: Omit<Order, 'id'>) => {
        const orderIndex = orders.findIndex(o => o.id === orderId);
        if (orderIndex !== -1) {
            const updatedOrder: Order = {
                ...newOrder,
                id: orderId,
            };
            const updatedOrders = [...orders];
            updatedOrders[orderIndex] = updatedOrder;

            await updateOrder(orderId, updatedOrder);

            setOrders(updatedOrders);
        }
    }

    return (
        <OrderContext.Provider value={{ orders, addOrder, removeOrder, updateOrderFunction }}>
            {children}
        </OrderContext.Provider>
    );
}

export const useOrderContext = () => {
    const context = useContext(OrderContext);
    if (!context) {
        throw new Error("useOrderContext must be used within an OrderProvider");
    }

    return context;
}
