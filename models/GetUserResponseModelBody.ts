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

import { GetUserResponseModelBodyItem } from './GetUserResponseModelBodyItem';
import { HttpFile } from '../http/http';

export class GetUserResponseModelBody {
    'item'?: GetUserResponseModelBodyItem;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "item",
            "baseName": "item",
            "type": "GetUserResponseModelBodyItem",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return GetUserResponseModelBody.attributeTypeMap;
    }

    public constructor() {
    }
}

