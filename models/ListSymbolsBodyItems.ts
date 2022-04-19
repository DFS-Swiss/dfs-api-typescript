/**
 * dfs-api
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 2022-04-19T11:06:16Z
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { GetStockdataInfoResponseModelBodyItem } from './GetStockdataInfoResponseModelBodyItem';
import { Model1yearStockdataResponseModelBodyItems } from './Model1yearStockdataResponseModelBodyItems';
import { HttpFile } from '../http/http';

export class ListSymbolsBodyItems {
    'symbol': GetStockdataInfoResponseModelBodyItem;
    'data': Array<Model1yearStockdataResponseModelBodyItems>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "symbol",
            "baseName": "symbol",
            "type": "GetStockdataInfoResponseModelBodyItem",
            "format": ""
        },
        {
            "name": "data",
            "baseName": "data",
            "type": "Array<Model1yearStockdataResponseModelBodyItems>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ListSymbolsBodyItems.attributeTypeMap;
    }

    public constructor() {
    }
}

