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

import { ListSymbolsBodyItems } from './ListSymbolsBodyItems';
import { HttpFile } from '../http/http';

export class ListSymbolsBody {
    'items'?: Array<ListSymbolsBodyItems>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "items",
            "baseName": "items",
            "type": "Array<ListSymbolsBodyItems>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ListSymbolsBody.attributeTypeMap;
    }

    public constructor() {
    }
}

