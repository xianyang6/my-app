import axios from 'axios';
import env from './env';

axios.defaults.baseURL = env.apiBaseUrl;

export async function getProducts(types?: string[], application?: string[]): Promise<Product[]> {
    const response = await axios.get<Product[]>('/products', {
        params: {
            types: types?.join(',') ?? '',
            application: application?.join(',') ?? ''
        }
    });
    return response.data;
}

export async function getTypes(): Promise<string[]> {
    const response = await axios.get<string[]>('/types');
    return response.data;
}

export async function getApplications():Promise<string[]> {
    const response = await axios.get<string[]>('/applications');
    return response.data;
}


export interface Product {
    id: number;
    name: string;
    imageUrl: string;
    types: string[];
    application: string[];
}
