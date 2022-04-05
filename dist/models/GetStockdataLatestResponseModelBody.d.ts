import { ListSymbolsBodyData } from './ListSymbolsBodyData';
export declare class GetStockdataLatestResponseModelBody {
    'item'?: ListSymbolsBodyData;
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
