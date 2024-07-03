import { Client, deleteClient, loadClients, saveClient, updateClient } from "@/libs/storage";
import { ReactNode, createContext, useContext, useEffect, useState } from "react";

interface ClienteContextType{
    clients: Client[];
    addClient: (client: Client) => void;
    removeClients: (client: Client) => void;
    updateClientFunction: (client: Client, newClient: Client) => void;
}

const ClientContext = createContext<ClienteContextType | undefined>(undefined);

export const ClientProvider = ({ children }) => {
    const [clients, setClients] = useState<Client[]>([]);

    useEffect(() => {
        const fetchClients = async () => {
            const loadedClients = await loadClients();
            setClients(loadedClients);
        }
        fetchClients();
    },[])

    const addClient = async (client: Client) => {
        await saveClient(client);
        setClients([...clients, client])
    };

    const removeClients = async (client: Client) => {
        const updatedClient = clients.filter(c => !(c.clientType === "cpf" && c.cpf === client.cpf || c.clientType === "cnpj" && c.cnpj === client.cnpj))
        await deleteClient(client);
        setClients(updatedClient);
    }

    const updateClientFunction = async (client: Client, newClient: Client) => {
        const clientIndex = clients.indexOf(client);
        const updatedClients = [...clients];
        updatedClients[clientIndex] = { ...updatedClients[clientIndex], ...newClient };

        await updateClient(client, newClient);

        setClients(updatedClients);
        
    }

    return (
        <ClientContext.Provider value={{clients, addClient, removeClients, updateClientFunction, }}>
            {children}
        </ClientContext.Provider>
    )

}

export const useClientContext = () => {
    const context = useContext(ClientContext);
    if(!context) {
        throw new Error("useClientContext must be used within a ClientProvider")
    }

    return context;
}