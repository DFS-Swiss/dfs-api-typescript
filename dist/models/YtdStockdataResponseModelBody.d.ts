import { YtdStockdataResponseModelBodyItem } from './YtdStockdataResponseModelBodyItem';
export declare class YtdStockdataResponseModelBody {
    'item'?: YtdStockdataResponseModelBodyItem;
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
