import { GetStockdataInfoResponseModelBodyItem } from './GetStockdataInfoResponseModelBodyItem';
export declare class GetStockdataInfoResponseModelBody {
    'item'?: GetStockdataInfoResponseModelBodyItem;
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
