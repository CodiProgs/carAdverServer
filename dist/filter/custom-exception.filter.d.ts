import { ArgumentsHost, BadRequestException } from "@nestjs/common";
import { GqlExceptionFilter } from "@nestjs/graphql";
export declare class GraphQLErrorFilter implements GqlExceptionFilter {
    catch(exception: BadRequestException, host: ArgumentsHost): void;
}
