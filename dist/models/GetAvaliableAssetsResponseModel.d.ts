import { GetAvaliableAssetsResponseModelBody } from './GetAvaliableAssetsResponseModelBody';
export declare class GetAvaliableAssetsResponseModel {
    'message': string;
    'body'?: GetAvaliableAssetsResponseModelBody;
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
