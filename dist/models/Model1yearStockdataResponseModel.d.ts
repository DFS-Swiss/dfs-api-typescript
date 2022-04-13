import { Model1yearStockdataResponseModelBody } from './Model1yearStockdataResponseModelBody';
export declare class Model1yearStockdataResponseModel {
    'message': string;
    'body'?: Model1yearStockdataResponseModelBody;
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
