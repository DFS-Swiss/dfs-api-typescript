import { GetAvaliableBalanceResponseModelBodyItem } from './GetAvaliableBalanceResponseModelBodyItem';
export declare class GetBalanceHistoryResponseModelBody {
    'items'?: Array<GetAvaliableBalanceResponseModelBodyItem>;
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