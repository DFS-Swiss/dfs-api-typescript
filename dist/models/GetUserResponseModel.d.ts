import { GetUserResponseModelBody } from './GetUserResponseModelBody';
export declare class GetUserResponseModel {
    'message': string;
    'body'?: GetUserResponseModelBody;
    'statusCode'?: number;
    static readonly discriminator: string | undefined;
    static readonly attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
        format: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
        format: string;
    }[];
    constructor();
}
