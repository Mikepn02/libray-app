export interface Book {
    id: number;
    name: string;
    author:string;
    publisher:string;
    publicationYear:number;
    subject:string;
    createdAt: string;
    updatedAt:string;
}

export interface Student {
    id: string;
    firstName:string;
    lastName:string;
    email: string;
    createdAt:string;
    updatedAt:string;
}