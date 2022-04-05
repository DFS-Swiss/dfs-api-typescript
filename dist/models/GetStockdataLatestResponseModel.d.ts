import { GetStockdataLatestResponseModelBody } from './GetStockdataLatestResponseModelBody';
export declare class GetStockdataLatestResponseModel {
    'message': string;
    'body'?: GetStockdataLatestResponseModelBody;
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
