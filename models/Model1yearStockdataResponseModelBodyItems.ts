/**
 * dfs-api
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 2022-04-13T21:18:06Z
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

export class Model1yearStockdataResponseModelBodyItems {
    'symbol': string;
    'price': number;
    'name': string;
    'currency': string;
    'time': Date;
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
            "name": "price",
            "baseName": "price",
            "type": "number",
            "format": "float"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "currency",
            "baseName": "currency",
            "type": "string",
            "format": ""
        },
        {
            "name": "time",
            "baseName": "time",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "id",
            "baseName": "_id",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Model1yearStockdataResponseModelBodyItems.attributeTypeMap;
    }

    public constructor() {
    }
}

