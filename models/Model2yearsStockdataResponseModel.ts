/**
 * dfs-api
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 2022-03-25T21:50:14Z
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { YtdStockdataResponseModelBody } from './YtdStockdataResponseModelBody';
import { HttpFile } from '../http/http';

export class Model2yearsStockdataResponseModel {
    'message': string;
    'body'?: YtdStockdataResponseModelBody;
    'statusCode'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "message",
            "baseName": "message",
            "type": "string",
            "format": ""
        },
        {
            "name": "body",
            "baseName": "body",
            "type": "YtdStockdataResponseModelBody",
            "format": ""
        },
        {
            "name": "statusCode",
            "baseName": "statusCode",
            "type": "number",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Model2yearsStockdataResponseModel.attributeTypeMap;
    }

    public constructor() {
    }
}

