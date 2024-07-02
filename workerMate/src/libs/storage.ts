import { Client } from "@/app/(tabs)/clients";
import AsyncStorage from "@react-native-async-storage/async-storage";

export async function loadClients(): Promise<Client[]>{
    try{
        const key = "@workermate:clients";
        const clientsData = await AsyncStorage.getItem(key);
        let clientList : Client[] = []
        
        if(clientsData !== null){
            clientList = JSON.parse(clientsData);
        }

        return clientList;

    } catch (error)  {
        console.error(error)
        return [];
    }
}

export async function deleteClient(client: Client){
    try{
        const key = "@workermate:clients";
        const clientsData = await AsyncStorage.getItem(key);
        let clientList : Client[] = []
        
        if(clientsData !== null){
            clientList = JSON.parse(clientsData);
            const clientExist = clientList.some(c => c.clientType === "cpf" && c.cpf === client.cpf || c.clientType === "cnpj" && c.cnpj === client.cnpj)
            if(clientExist){
                clientList = clientList.filter(c => !(c.clientType === "cpf" && c.cpf === client.cpf || c.clientType === "cnpj" && c.cnpj === client.cnpj))
                await AsyncStorage.setItem(key, JSON.stringify(clientList))
            }
        }


    } catch (error)  {
        console.error(error)
    }
}

