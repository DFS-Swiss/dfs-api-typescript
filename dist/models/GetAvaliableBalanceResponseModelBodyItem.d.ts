export declare class GetAvaliableBalanceResponseModelBodyItem {
    'reference': string;
    'uid': string;
    'newBalance': number;
    'oldBalance': number;
    'difference': number;
    'time': Date;
    'type': string;
    'userId': string;
    'transactionId': string;
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
