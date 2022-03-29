import { YtdStockdataResponseModelBody } from './YtdStockdataResponseModelBody';
export declare class Model1yearStockdataResponseModel {
    'message': string;
    'body'?: YtdStockdataResponseModelBody;
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
