export * from './GetUserResponseModel';
export * from './GetUserResponseModelBody';
export * from './GetUserResponseModelBodyItem';
export * from './Model1yearStockdataResponseModel';
export * from './Model24hStockdataResponseModel';
export * from './Model2yearsStockdataResponseModel';
export * from './MtdStockdataResponseModel';
export * from './YtdStockdataResponseModel';
export * from './YtdStockdataResponseModelBody';
export * from './YtdStockdataResponseModelBodyItem';
export declare class ObjectSerializer {
    static findCorrectType(data: any, expectedType: string): any;
    static serialize(data: any, type: string, format: string): any;
    static deserialize(data: any, type: string, format: string): any;
    static normalizeMediaType(mediaType: string | undefined): string | undefined;
    static getPreferredMediaType(mediaTypes: Array<string>): string;
    static stringify(data: any, mediaType: string): string;
    static parse(rawData: string, mediaType: string | undefined): any;
}