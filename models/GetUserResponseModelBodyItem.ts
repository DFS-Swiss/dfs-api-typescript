/**
 * dfs-api
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 2022-04-05T15:45:35Z
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

export class GetUserResponseModelBodyItem {
    'createdAt': Date;
    'lastLogin': Date;
    'firstName': string;
    'referalCode'?: string;
    'surName': string;
    'emailConfirmed': boolean;
    'inputWalletAdress'?: string;
    'id': string;
    'email': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "createdAt",
            "baseName": "createdAt",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "lastLogin",
            "baseName": "lastLogin",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "firstName",
            "baseName": "firstName",
            "type": "string",
            "format": ""
        },
        {
            "name": "referalCode",
            "baseName": "referalCode",
            "type": "string",
            "format": ""
        },
        {
            "name": "surName",
            "baseName": "surName",
            "type": "string",
            "format": ""
        },
        {
            "name": "emailConfirmed",
            "baseName": "emailConfirmed",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "inputWalletAdress",
            "baseName": "inputWalletAdress",
            "type": "string",
            "format": ""
        },
        {
            "name": "id",
            "baseName": "_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "email",
            "baseName": "email",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return GetUserResponseModelBodyItem.attributeTypeMap;
    }

    public constructor() {
    }
}

