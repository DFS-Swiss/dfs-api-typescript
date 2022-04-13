import { Model1yearStockdataResponseModelBodyItems } from './Model1yearStockdataResponseModelBodyItems';
export declare class Model1yearStockdataResponseModelBody {
    'items'?: Array<Model1yearStockdataResponseModelBodyItems>;
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
