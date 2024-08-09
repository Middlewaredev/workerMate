import AsyncStorage from "@react-native-async-storage/async-storage";

export interface Discount {
    id: string;
    percentage: boolean;
    value: string;
    type: 'service' | 'equipment' | 'order'
}

export interface Tax {
    id: string;
    shippingValue: string;
    taxName: string;
    taxValue: string;
}

export interface PaymentConditions {
    id: string;
    type: 'cash' | 'signal' | 'installments';
    details?: string;
    signalPercentage?: boolean;
    signalValue?: string;
    signalType?: 'installments' | 'cash';
    installments?: number;
}

export interface Order {
    id: string;
    clientType?: string;
    clientId?: string;
    appointmentId?: string;
    serviceId?: string;
    equipmentId?: string;
    discount?: Discount;
    tax?: Tax;
    paymentConditions?: PaymentConditions;
    paymentMethod?: 'Boleto' | 'Transferência Bancária' | 'Dinheiro' | 'Cheque' | 'Cartão de Crédito' | 'Cartão de Débito' | 'Pix';
    additionalInfo?: string;
    notes?: string;
}

const key = "@workermate:orders";

export async function loadOrders(): Promise<Order[]>{
    try{
        const ordersData = await AsyncStorage.getItem(key);
        let orderList : Order[] = []
        
        if(ordersData !== null){
            orderList = JSON.parse(ordersData);
        }

        return orderList;

    } catch (error)  {
        console.error(error)
        return [];
    }
}

export async function deleteOrder(orderId: string){
    try{
        const ordersData = await AsyncStorage.getItem(key);
        let orderList : Order[] = []
        
        if(ordersData !== null){
            orderList = JSON.parse(ordersData);
            const updatedOrderList = orderList.filter(o => o.id !== orderId);
            await AsyncStorage.setItem(key, JSON.stringify(updatedOrderList));
        }


    } catch (error)  {
        console.error(error)
    }
}

export async function saveOrder(order: Order){
    try{
        const ordersData = await AsyncStorage.getItem(key);
        let orderList : Order[] = []

        if(ordersData !== null){
            orderList = JSON.parse(ordersData);
        }
        const orderExist = orderList.some(o => o.id === order.id)
        if(!orderExist){
            orderList.push(order)
            await AsyncStorage.setItem(key, JSON.stringify(orderList))
        }

    } catch (error) {
        console.error(error)
    }
}

export async function updateOrder(orderId: string, updatedOrder: Order){
    try {
        const ordersData = await AsyncStorage.getItem(key);
        let orderList: Order[] = [];

        if (ordersData !== null) {
            orderList = JSON.parse(ordersData);
            const index = orderList.findIndex(o => o.id === orderId);
            if (index !== -1) {
                orderList[index] = updatedOrder;
                await AsyncStorage.setItem(key, JSON.stringify(orderList));
            }
        }
    } catch (error) {
        console.error(error);
    }
}