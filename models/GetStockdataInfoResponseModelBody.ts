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

import { GetStockdataInfoResponseModelBodyItem } from './GetStockdataInfoResponseModelBodyItem';
import { HttpFile } from '../http/http';

export class GetStockdataInfoResponseModelBody {
    'item'?: GetStockdataInfoResponseModelBodyItem;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "item",
            "baseName": "item",
            "type": "GetStockdataInfoResponseModelBodyItem",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return GetStockdataInfoResponseModelBody.attributeTypeMap;
    }

    public constructor() {
    }
}

