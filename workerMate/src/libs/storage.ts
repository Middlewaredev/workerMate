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

