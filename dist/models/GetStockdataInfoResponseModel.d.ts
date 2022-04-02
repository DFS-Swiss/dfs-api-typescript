import { GetStockdataInfoResponseModelBody } from './GetStockdataInfoResponseModelBody';
export declare class GetStockdataInfoResponseModel {
    'message': string;
    'body'?: GetStockdataInfoResponseModelBody;
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
