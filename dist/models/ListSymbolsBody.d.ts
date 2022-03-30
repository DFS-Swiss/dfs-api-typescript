import { ListSymbolsBodyItems } from './ListSymbolsBodyItems';
export declare class ListSymbolsBody {
    'items'?: Array<ListSymbolsBodyItems>;
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
