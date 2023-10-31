import { Make } from "./make.model";
import { ErrorType } from "src/auth/auth.types";
export declare class CreateMakeResponse {
    make: Make;
    error?: ErrorType;
}
