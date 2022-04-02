import { GetStockdataInfoResponseModelBodyItem } from './GetStockdataInfoResponseModelBodyItem';
import { ListSymbolsBodyData } from './ListSymbolsBodyData';
export declare class ListSymbolsBodyItems {
    'symbol': GetStockdataInfoResponseModelBodyItem;
    'data': Array<ListSymbolsBodyData>;
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
