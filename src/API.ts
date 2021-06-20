export async function getProducts(types?: string[], application?: string[]) {
    const response = await fetch(`http://localhost:3000/products?types=${types?.join(',') ?? ''}&application=${application?.join(',') ?? ''}`);
    return await response.json() as Product[];
}

export async function getTypes(){
    const response = await fetch('http://localhost:3000/types');
    return await response.json() as string[];
}

export async function getApplications(){
    const response = await fetch('http://localhost:3000/applications');
    return await response.json() as string[];
}


export interface Product {
    id: number;
    name: string;
    imageUrl: string;
    types: string[];
    application: string[];
}
