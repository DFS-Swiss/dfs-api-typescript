import { ListSymbolsBodyData } from './ListSymbolsBodyData';
import { ListSymbolsBodySymbol } from './ListSymbolsBodySymbol';
export declare class ListSymbolsBodyItems {
    'symbol': ListSymbolsBodySymbol;
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
