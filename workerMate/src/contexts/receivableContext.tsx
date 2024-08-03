import { ReactNode, createContext, useContext, useEffect, useState } from "react";
import { loadReceivables, saveReceivable, deleteReceivable, updateReceivable } from "@/libs/receivableStorage";
import { Receivable } from "@/libs/receivableStorage";
import * as Crypto from 'expo-crypto'

interface ReceivableContextType {
    receivables: Receivable[];
    addReceivable: (receivable: Omit<Receivable, 'id'>) => void;
    removeReceivable: (receivableId: string) => void;
    updateReceivableFunction: (receivableId: string, newReceivable: Omit<Receivable, 'id'>) => void;
}

const ReceivableContext = createContext<ReceivableContextType | undefined>(undefined);

export const ReceivableProvider = ({ children }: { children: ReactNode }) => {
    const [receivables, setReceivables] = useState<Receivable[]>([]);

    useEffect(() => {
        const fetchReceivables = async () => {
            const loadedReceivables = await loadReceivables();
            setReceivables(loadedReceivables);
        }
        fetchReceivables();
    },[])

    const addReceivable = async (receivable: Omit<Receivable, 'id'>) => {
        const id = Crypto.randomUUID();
        const newReceivable: Receivable = {id, ...receivable}
        await saveReceivable(newReceivable);
        setReceivables([...receivables, newReceivable])
    };

    const removeReceivable = async (receivableId: string) => {
        await deleteReceivable(receivableId);
        const updatedReceivables = receivables.filter(r => r.id !== receivableId);
        setReceivables(updatedReceivables);
    }

    const updateReceivableFunction = async (receivableId: string, newReceivable: Omit<Receivable, 'id'>) => {
        const receivableIndex = receivables.findIndex(r => r.id === receivableId);
        if (receivableIndex !== -1) {
            const updatedReceivable: Receivable = {
                ...newReceivable,
                id: receivableId,
            };
            const updatedReceivables = [...receivables];
            updatedReceivables[receivableIndex] = updatedReceivable;

            await updateReceivable(receivableId, updatedReceivable);

            setReceivables(updatedReceivables);
        }
    }

    return (
        <ReceivableContext.Provider value={{ receivables, addReceivable, removeReceivable, updateReceivableFunction }}>
            {children}
        </ReceivableContext.Provider>
    );
}

export const useReceivableContext = () => {
    const context = useContext(ReceivableContext);
    if (!context) {
        throw new Error("useReceivableContext must be used within a ReceivableProvider");
    }

    return context;
}
