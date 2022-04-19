import { GetAvaliableBalanceResponseModelBody } from './GetAvaliableBalanceResponseModelBody';
export declare class GetAvaliableBalanceResponseModel {
    'message': string;
    'body'?: GetAvaliableBalanceResponseModelBody;
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
