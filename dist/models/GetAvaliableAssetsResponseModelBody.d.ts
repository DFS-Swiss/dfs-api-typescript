import { GetAvaliableAssetsResponseModelBodyItems } from './GetAvaliableAssetsResponseModelBodyItems';
export declare class GetAvaliableAssetsResponseModelBody {
    'items'?: Array<GetAvaliableAssetsResponseModelBodyItems>;
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
