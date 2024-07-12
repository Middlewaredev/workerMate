import { ReactNode, createContext, useContext, useEffect, useState } from "react";
import { loadReceivables, saveReceivable, deleteReceivable, updateReceivable } from "@/libs/receivableStorage";
import { Receivable } from "@/libs/receivableStorage";

interface ReceivableContextType {
    receivables: Receivable[];
    addReceivable: (receivable: Receivable) => void;
    removeReceivable: (receivable: Receivable) => void;
    updateReceivableFunction: (oldReceivable: Receivable, newReceivable: Receivable) => void;
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

    const addReceivable = async (receivable: Receivable) => {
        await saveReceivable(receivable);
        setReceivables([...receivables, receivable])
    };

    const removeReceivable = async (receivable: Receivable) => {
        const updatedReceivables = receivables.filter(r => r.date !== receivable.date || r.clientName !== receivable.clientName || r.description !== receivable.description);
        await deleteReceivable(receivable);
        setReceivables(updatedReceivables);
    }

    const updateReceivableFunction = async (oldReceivable: Receivable, newReceivable: Receivable) => {
        const receivableIndex = receivables.findIndex(r => r.date === oldReceivable.date && r.clientName === oldReceivable.clientName && r.description === oldReceivable.description);
        if (receivableIndex !== -1) {
            const updatedReceivables = [...receivables];
            updatedReceivables[receivableIndex] = newReceivable;

            await updateReceivable(oldReceivable, newReceivable);

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
