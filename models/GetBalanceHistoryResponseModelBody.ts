/**
 * dfs-api
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 2022-04-20T11:42:17Z
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { GetAvaliableBalanceResponseModelBodyItem } from './GetAvaliableBalanceResponseModelBodyItem';
import { HttpFile } from '../http/http';

export class GetBalanceHistoryResponseModelBody {
    'items'?: Array<GetAvaliableBalanceResponseModelBodyItem>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "items",
            "baseName": "items",
            "type": "Array<GetAvaliableBalanceResponseModelBodyItem>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return GetBalanceHistoryResponseModelBody.attributeTypeMap;
    }

    public constructor() {
    }
}
