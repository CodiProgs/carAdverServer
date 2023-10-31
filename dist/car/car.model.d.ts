import { Make } from "src/make/make.model";
import { Model } from "src/model/model.model";
import { User } from "src/user/user.model";
export declare class Car {
    id?: number;
    name: string;
    price: string;
    bodyType: string;
    fuelType: string;
    mileage: string;
    transmission: string;
    images: string;
    registration: number;
    brand: Make;
    model: Model;
    user: User;
}
