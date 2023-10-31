import { Car } from "src/car/car.model";
export declare class User {
    id?: number;
    name: string;
    surname: string;
    location?: string;
    email?: string;
    image: string;
    password: string;
    phone?: string;
    type: string;
    createdAt: Date;
    updatedAt: Date;
    cars?: Car[];
}
