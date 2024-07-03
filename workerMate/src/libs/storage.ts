import AsyncStorage from "@react-native-async-storage/async-storage";

export interface Client {
    name: string;
    clientType: string;
    cpf?: string;
    cnpj?: string;
    socialReason?: string;
    email: string;
    phones: string[];
    address: {
        cep: string;
        address: string;
        number: string;
        complement?: string;
        neighborhood: string;
        city: string;
        state: string;
    };
    notes?: string;
}

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

export async function saveClient(client: Client){
    try{
        const key = "@workermate:clients";
        const clientsData = await AsyncStorage.getItem(key);
        let clientList : Client[] = []

        if(clientsData !== null){
            clientList = JSON.parse(clientsData);
        }
        const clientExist = clientList.some(c => c.clientType === "cpf" && c.cpf === client.cpf || c.clientType === "cnpj" && c.cnpj === client.cnpj)
        if(!clientExist){
            clientList.push(client)
            await AsyncStorage.setItem(key, JSON.stringify(clientList))
        }

    } catch (error) {
        console.error(error)
    }
}

export async function updateClient(client: Client, updateClient: Client){
    try {
        const key = "@workermate:clients";
        const clientsData = await AsyncStorage.getItem(key);
        let clientList: Client[] = [];

        if (clientsData !== null) {
            clientList = JSON.parse(clientsData);
            const index = clientList.findIndex(c => c.clientType === "cpf" && c.cpf === client.cpf || c.clientType === "cnpj" && c.cnpj === client.cnpj);
            if (index !== -1) {
                clientList[index] = updateClient;
                await AsyncStorage.setItem(key, JSON.stringify(clientList));
            }
        }
    } catch (error) {
        console.error(error);
    }
}