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

import { Model1yearStockdataResponseModelBody } from './Model1yearStockdataResponseModelBody';
import { HttpFile } from '../http/http';

export class YtdStockdataResponseModel {
    'message': string;
    'body'?: Model1yearStockdataResponseModelBody;
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
            "type": "Model1yearStockdataResponseModelBody",
            "format": ""
        },
        {
            "name": "statusCode",
            "baseName": "statusCode",
            "type": "number",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return YtdStockdataResponseModel.attributeTypeMap;
    }

    public constructor() {
    }
}

