import { ErrorType } from "src/auth/auth.types";
import { Car } from "./car.model";
export declare class CreateCarResponse {
    car: Car;
    error?: ErrorType;
}
