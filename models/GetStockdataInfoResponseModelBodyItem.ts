/**
 * dfs-api
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 2022-04-02T18:58:32Z
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

export class GetStockdataInfoResponseModelBodyItem {
    'symbol': string;
    'displayName': string;
    'description': string;
    'id': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "symbol",
            "baseName": "symbol",
            "type": "string",
            "format": ""
        },
        {
            "name": "displayName",
            "baseName": "displayName",
            "type": "string",
            "format": ""
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string",
            "format": ""
        },
        {
            "name": "id",
            "baseName": "_id",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return GetStockdataInfoResponseModelBodyItem.attributeTypeMap;
    }

    public constructor() {
    }
}

