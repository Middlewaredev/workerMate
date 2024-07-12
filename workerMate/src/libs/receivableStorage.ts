import AsyncStorage from "@react-native-async-storage/async-storage";

export interface Receivable {
    date: string;
    value: number;
    clientName: string;
    description: string;
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

export const deleteReceivable = async (receivable: Receivable): Promise<void> => {
    try {
        let receivables = await loadReceivables();
        receivables = receivables.filter(r => r.date !== receivable.date || r.clientName !== receivable.clientName || r.description !== receivable.description);
        await AsyncStorage.setItem(key, JSON.stringify(receivables));
    } catch (error) {
        console.error("Failed to delete receivable", error);
    }
};

export const updateReceivable = async (oldReceivable: Receivable, newReceivable: Receivable): Promise<void> => {
    try {
        const receivables = await loadReceivables();
        const index = receivables.findIndex(r => r.date === oldReceivable.date && r.clientName === oldReceivable.clientName && r.description === oldReceivable.description);
        if (index !== -1) {
            receivables[index] = newReceivable;
            await AsyncStorage.setItem(key, JSON.stringify(receivables));
        }
    } catch (error) {
        console.error("Failed to update receivable", error);
    }
};
