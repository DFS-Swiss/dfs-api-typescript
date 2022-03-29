export declare class GetUserResponseModelBodyItem {
    'createdAt': Date;
    'lastLogin': Date;
    'firstName': string;
    'referalCode'?: string;
    'surName': string;
    'emailConfirmed': boolean;
    'inputWalletAdress'?: string;
    'id': string;
    'email': string;
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
