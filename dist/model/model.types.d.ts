import { ErrorType } from "src/auth/auth.types";
import { Model } from "./model.model";
export declare class CreateModelResponse {
    model: Model;
    error?: ErrorType;
}
