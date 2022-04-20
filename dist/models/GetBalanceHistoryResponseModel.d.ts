import { GetBalanceHistoryResponseModelBody } from './GetBalanceHistoryResponseModelBody';
export declare class GetBalanceHistoryResponseModel {
    'message': string;
    'body'?: GetBalanceHistoryResponseModelBody;
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
