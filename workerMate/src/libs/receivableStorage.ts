import AsyncStorage from "@react-native-async-storage/async-storage";

export interface Receivable {
    id: string;
    date: string;
    value: number;
    clientName: string;
    orderNumber: string;
    description: string;
    additionalInfo: string;
    notes: string;
    paymentMethod: 'Boleto' | 'Transferência Bancária' | 'Dinheiro' | 'Cheque' | 'Cartão de Crédito' | 'Cartão de Débito' | 'Pix';
    status: 'Recebido' | 'Em atraso' | 'A receber';
}

const key = "@workermate:receivables";

export const loadReceivables = async (): Promise<Receivable[]> => {
    try {
        const data = await AsyncStorage.getItem(key);
        return data ? JSON.parse(data) : [];
    } catch (error) {
        console.error("Failed to load receivables", error);
        return [];
    }
};

export const saveReceivable = async (receivable: Receivable): Promise<void> => {
    try {
        const receivables = await loadReceivables();
        receivables.push(receivable);
        await AsyncStorage.setItem(key, JSON.stringify(receivables));
    } catch (error) {
        console.error("Failed to save receivable", error);
    }
};

export const deleteReceivable = async (receivableId: string): Promise<void> => {
    try {
        let receivables = await loadReceivables();
        receivables = receivables.filter(r => r.id !== receivableId);
        await AsyncStorage.setItem(key, JSON.stringify(receivables));
    } catch (error) {
        console.error("Failed to delete receivable", error);
    }
};

export const updateReceivable = async (receivableId: string, updatedFields: Partial<Receivable>): Promise<void> => {
    try {
        const receivables = await loadReceivables();
        const index = receivables.findIndex(r => r.id === receivableId);
        if (index !== -1) {
            receivables[index] = { ...receivables[index], ...updatedFields };
            await AsyncStorage.setItem(key, JSON.stringify(receivables));
        }
    } catch (error) {
        console.error("Failed to update receivable", error);
    }
};
