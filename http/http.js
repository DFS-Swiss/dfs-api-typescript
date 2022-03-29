"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.wrapHttpLibrary = exports.ResponseContext = exports.SelfDecodingBody = exports.RequestContext = exports.HttpException = exports.HttpMethod = void 0;
// typings of url-parse are incorrect...
// @ts-ignore
const URLParse = require("url-parse");
const rxjsStub_1 = require("../rxjsStub");
__exportStar(require("./isomorphic-fetch"), exports);
/**
 * Represents an HTTP method.
 */
var HttpMethod;
(function (HttpMethod) {
    HttpMethod["GET"] = "GET";
    HttpMethod["HEAD"] = "HEAD";
    HttpMethod["POST"] = "POST";
    HttpMethod["PUT"] = "PUT";
    HttpMethod["DELETE"] = "DELETE";
    HttpMethod["CONNECT"] = "CONNECT";
    HttpMethod["OPTIONS"] = "OPTIONS";
    HttpMethod["TRACE"] = "TRACE";
    HttpMethod["PATCH"] = "PATCH";
})(HttpMethod = exports.HttpMethod || (exports.HttpMethod = {}));
class HttpException extends Error {
    constructor(msg) {
        super(msg);
    }
}
exports.HttpException = HttpException;
/**
 * Represents an HTTP request context
 */
class RequestContext {
    /**
     * Creates the request context using a http method and request resource url
     *
     * @param url url of the requested resource
     * @param httpMethod http method
     */
    constructor(url, httpMethod) {
        this.httpMethod = httpMethod;
        this.headers = {};
        this.body = undefined;
        this.url = new URLParse(url, true);
    }
    /*
     * Returns the url set in the constructor including the query string
     *
     */
    getUrl() {
        return this.url.toString();
    }
    /**
     * Replaces the url set in the constructor with this url.
     *
     */
    setUrl(url) {
        this.url = new URLParse(url, true);
    }
    /**
     * Sets the body of the http request either as a string or FormData
     *
     * Note that setting a body on a HTTP GET, HEAD, DELETE, CONNECT or TRACE
     * request is discouraged.
     * https://httpwg.org/http-core/draft-ietf-httpbis-semantics-latest.html#rfc.section.7.3.1
     *
     * @param body the body of the request
     */
    setBody(body) {
        this.body = body;
    }
    getHttpMethod() {
        return this.httpMethod;
    }
    getHeaders() {
        return this.headers;
    }
    getBody() {
        return this.body;
    }
    setQueryParam(name, value) {
        let queryObj = this.url.query;
        queryObj[name] = value;
        this.url.set("query", queryObj);
    }
    /**
     * Sets a cookie with the name and value. NO check  for duplicate cookies is performed
     *
     */
    addCookie(name, value) {
        if (!this.headers["Cookie"]) {
            this.headers["Cookie"] = "";
        }
        this.headers["Cookie"] += name + "=" + value + "; ";
    }
    setHeaderParam(key, value) {
        this.headers[key] = value;
    }
}
exports.RequestContext = RequestContext;
/**
 * Helper class to generate a `ResponseBody` from binary data
 */
class SelfDecodingBody {
    constructor(dataSource) {
        this.dataSource = dataSource;
    }
    binary() {
        return this.dataSource;
    }
    async text() {
        const data = await this.dataSource;
        // @ts-ignore
        if (data.text) {
            // @ts-ignore
            return data.text();
        }
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.addEventListener("load", () => resolve(reader.result));
            reader.addEventListener("error", () => reject(reader.error));
            reader.readAsText(data);
        });
    }
}
exports.SelfDecodingBody = SelfDecodingBody;
class ResponseContext {
    constructor(httpStatusCode, headers, body) {
        this.httpStatusCode = httpStatusCode;
        this.headers = headers;
        this.body = body;
    }
    /**
     * Parse header value in the form `value; param1="value1"`
     *
     * E.g. for Content-Type or Content-Disposition
     * Parameter names are converted to lower case
     * The first parameter is returned with the key `""`
     */
    getParsedHeader(headerName) {
        const result = {};
        if (!this.headers[headerName]) {
            return result;
        }
        const parameters = this.headers[headerName].split(";");
        for (const parameter of parameters) {
            let [key, value] = parameter.split("=", 2);
            key = key.toLowerCase().trim();
            if (value === undefined) {
                result[""] = key;
            }
            else {
                value = value.trim();
                if (value.startsWith('"') && value.endsWith('"')) {
                    value = value.substring(1, value.length - 1);
                }
                result[key] = value;
            }
        }
        return result;
    }
    async getBodyAsFile() {
        const data = await this.body.binary();
        const fileName = this.getParsedHeader("content-disposition")["filename"] || "";
        const contentType = this.headers["content-type"] || "";
        try {
            return new File([data], fileName, { type: contentType });
        }
        catch (error) {
            /** Fallback for when the File constructor is not available */
            return Object.assign(data, {
                name: fileName,
                type: contentType
            });
        }
    }
    /**
     * Use a heuristic to get a body of unknown data structure.
     * Return as string if possible, otherwise as binary.
     */
    getBodyAsAny() {
        try {
            return this.body.text();
        }
        catch (_a) { }
        try {
            return this.body.binary();
        }
        catch (_b) { }
        return Promise.resolve(undefined);
    }
}
exports.ResponseContext = ResponseContext;
function wrapHttpLibrary(promiseHttpLibrary) {
    return {
        send(request) {
            return (0, rxjsStub_1.from)(promiseHttpLibrary.send(request));
        }
    };
}
exports.wrapHttpLibrary = wrapHttpLibrary;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImh0dHAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLHdDQUF3QztBQUN4QyxhQUFhO0FBQ2Isc0NBQXNDO0FBQ3RDLDBDQUErQztBQUUvQyxxREFBbUM7QUFFbkM7O0dBRUc7QUFDSCxJQUFZLFVBVVg7QUFWRCxXQUFZLFVBQVU7SUFDbEIseUJBQVcsQ0FBQTtJQUNYLDJCQUFhLENBQUE7SUFDYiwyQkFBYSxDQUFBO0lBQ2IseUJBQVcsQ0FBQTtJQUNYLCtCQUFpQixDQUFBO0lBQ2pCLGlDQUFtQixDQUFBO0lBQ25CLGlDQUFtQixDQUFBO0lBQ25CLDZCQUFlLENBQUE7SUFDZiw2QkFBZSxDQUFBO0FBQ25CLENBQUMsRUFWVyxVQUFVLEdBQVYsa0JBQVUsS0FBVixrQkFBVSxRQVVyQjtBQVFELE1BQWEsYUFBYyxTQUFRLEtBQUs7SUFDcEMsWUFBbUIsR0FBVztRQUMxQixLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDZixDQUFDO0NBQ0o7QUFKRCxzQ0FJQztBQU9EOztHQUVHO0FBQ0gsTUFBYSxjQUFjO0lBS3ZCOzs7OztPQUtHO0lBQ0gsWUFBbUIsR0FBVyxFQUFVLFVBQXNCO1FBQXRCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFWdEQsWUFBTyxHQUE4QixFQUFFLENBQUM7UUFDeEMsU0FBSSxHQUFnQixTQUFTLENBQUM7UUFVbEMsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLFFBQVEsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVEOzs7T0FHRztJQUNJLE1BQU07UUFDVCxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDL0IsQ0FBQztJQUVEOzs7T0FHRztJQUNJLE1BQU0sQ0FBQyxHQUFXO1FBQ3JCLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxRQUFRLENBQUMsR0FBRyxFQUFFLElBQUksQ0FB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QUksRUFBRSxXQUFXLEVBQUUsQ0FBQyxDQUFDO1NBQzVEO1FBQUMsT0FBTyxLQUFLLEVBQUU7WUFDWiw4REFBOEQ7WUFDOUQsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRTtnQkFDdkIsSUFBSSxFQUFFLFFBQVE7Z0JBQ2QsSUFBSSxFQUFFLFdBQVc7YUFDcEIsQ0FBQyxDQUFDO1NBQ047SUFDTCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksWUFBWTtRQUNmLElBQUk7WUFDQSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDM0I7UUFBQyxXQUFNLEdBQUU7UUFFVixJQUFJO1lBQ0EsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1NBQzdCO1FBQUMsV0FBTSxHQUFFO1FBRVYsT0FBTyxPQUFPLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7Q0FDSjtBQW5FRCwwQ0FtRUM7QUFVRCxTQUFnQixlQUFlLENBQUMsa0JBQXNDO0lBQ3BFLE9BQU87UUFDTCxJQUFJLENBQUMsT0FBdUI7WUFDMUIsT0FBTyxJQUFBLGVBQUksRUFBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUNoRCxDQUFDO0tBQ0YsQ0FBQTtBQUNILENBQUM7QUFORCwwQ0FNQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHR5cGluZ3Mgb2YgdXJsLXBhcnNlIGFyZSBpbmNvcnJlY3QuLi5cbi8vIEB0cy1pZ25vcmVcbmltcG9ydCAqIGFzIFVSTFBhcnNlIGZyb20gXCJ1cmwtcGFyc2VcIjtcbmltcG9ydCB7IE9ic2VydmFibGUsIGZyb20gfSBmcm9tICcuLi9yeGpzU3R1Yic7XG5cbmV4cG9ydCAqIGZyb20gJy4vaXNvbW9ycGhpYy1mZXRjaCc7XG5cbi8qKlxuICogUmVwcmVzZW50cyBhbiBIVFRQIG1ldGhvZC5cbiAqL1xuZXhwb3J0IGVudW0gSHR0cE1ldGhvZCB7XG4gICAgR0VUID0gXCJHRVRcIixcbiAgICBIRUFEID0gXCJIRUFEXCIsXG4gICAgUE9TVCA9IFwiUE9TVFwiLFxuICAgIFBVVCA9IFwiUFVUXCIsXG4gICAgREVMRVRFID0gXCJERUxFVEVcIixcbiAgICBDT05ORUNUID0gXCJDT05ORUNUXCIsXG4gICAgT1BUSU9OUyA9IFwiT1BUSU9OU1wiLFxuICAgIFRSQUNFID0gXCJUUkFDRVwiLFxuICAgIFBBVENIID0gXCJQQVRDSFwiXG59XG5cbi8qKlxuICogUmVwcmVzZW50cyBhbiBIVFRQIGZpbGUgd2hpY2ggd2lsbCBiZSB0cmFuc2ZlcnJlZCBmcm9tIG9yIHRvIGEgc2VydmVyLlxuICovXG5leHBvcnQgdHlwZSBIdHRwRmlsZSA9IEJsb2IgJiB7IHJlYWRvbmx5IG5hbWU6IHN0cmluZyB9O1xuXG5cbmV4cG9ydCBjbGFzcyBIdHRwRXhjZXB0aW9uIGV4dGVuZHMgRXJyb3Ige1xuICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcihtc2c6IHN0cmluZykge1xuICAgICAgICBzdXBlcihtc2cpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBSZXByZXNlbnRzIHRoZSBib2R5IG9mIGFuIG91dGdvaW5nIEhUVFAgcmVxdWVzdC5cbiAqL1xuZXhwb3J0IHR5cGUgUmVxdWVzdEJvZHkgPSB1bmRlZmluZWQgfCBzdHJpbmcgfCBGb3JtRGF0YSB8IFVSTFNlYXJjaFBhcmFtcztcblxuLyoqXG4gKiBSZXByZXNlbnRzIGFuIEhUVFAgcmVxdWVzdCBjb250ZXh0XG4gKi9cbmV4cG9ydCBjbGFzcyBSZXF1ZXN0Q29udGV4dCB7XG4gICAgcHJpdmF0ZSBoZWFkZXJzOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9ID0ge307XG4gICAgcHJpdmF0ZSBib2R5OiBSZXF1ZXN0Qm9keSA9IHVuZGVmaW5lZDtcbiAgICBwcml2YXRlIHVybDogVVJMUGFyc2U7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIHRoZSByZXF1ZXN0IGNvbnRleHQgdXNpbmcgYSBodHRwIG1ldGhvZCBhbmQgcmVxdWVzdCByZXNvdXJjZSB1cmxcbiAgICAgKlxuICAgICAqIEBwYXJhbSB1cmwgdXJsIG9mIHRoZSByZXF1ZXN0ZWQgcmVzb3VyY2VcbiAgICAgKiBAcGFyYW0gaHR0cE1ldGhvZCBodHRwIG1ldGhvZFxuICAgICAqL1xuICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcih1cmw6IHN0cmluZywgcHJpdmF0ZSBodHRwTWV0aG9kOiBIdHRwTWV0aG9kKSB7XG4gICAgICAgIHRoaXMudXJsID0gbmV3IFVSTFBhcnNlKHVybCwgdHJ1ZSk7XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBSZXR1cm5zIHRoZSB1cmwgc2V0IGluIHRoZSBjb25zdHJ1Y3RvciBpbmNsdWRpbmcgdGhlIHF1ZXJ5IHN0cmluZ1xuICAgICAqXG4gICAgICovXG4gICAgcHVibGljIGdldFVybCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy51cmwudG9TdHJpbmcoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXBsYWNlcyB0aGUgdXJsIHNldCBpbiB0aGUgY29uc3RydWN0b3Igd2l0aCB0aGlzIHVybC5cbiAgICAgKlxuICAgICAqL1xuICAgIHB1YmxpYyBzZXRVcmwodXJsOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy51cmwgPSBuZXcgVVJMUGFyc2UodXJsLCB0cnVlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBib2R5IG9mIHRoZSBodHRwIHJlcXVlc3QgZWl0aGVyIGFzIGEgc3RyaW5nIG9yIEZvcm1EYXRhXG4gICAgICpcbiAgICAgKiBOb3RlIHRoYXQgc2V0dGluZyBhIGJvZHkgb24gYSBIVFRQIEdFVCwgSEVBRCwgREVMRVRFLCBDT05ORUNUIG9yIFRSQUNFXG4gICAgICogcmVxdWVzdCBpcyBkaXNjb3VyYWdlZC5cbiAgICAgKiBodHRwczovL2h0dHB3Zy5vcmcvaHR0cC1jb3JlL2RyYWZ0LWlldGYtaHR0cGJpcy1zZW1hbnRpY3MtbGF0ZXN0Lmh0bWwjcmZjLnNlY3Rpb24uNy4zLjFcbiAgICAgKlxuICAgICAqIEBwYXJhbSBib2R5IHRoZSBib2R5IG9mIHRoZSByZXF1ZXN0XG4gICAgICovXG4gICAgcHVibGljIHNldEJvZHkoYm9keTogUmVxdWVzdEJvZHkpIHtcbiAgICAgICAgdGhpcy5ib2R5ID0gYm9keTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0SHR0cE1ldGhvZCgpOiBIdHRwTWV0aG9kIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cE1ldGhvZDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0SGVhZGVycygpOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaGVhZGVycztcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0Qm9keSgpOiBSZXF1ZXN0Qm9keSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJvZHk7XG4gICAgfVxuXG4gICAgcHVibGljIHNldFF1ZXJ5UGFyYW0obmFtZTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIGxldCBxdWVyeU9iaiA9IHRoaXMudXJsLnF1ZXJ5O1xuICAgICAgICBxdWVyeU9ialtuYW1lXSA9IHZhbHVlO1xuICAgICAgICB0aGlzLnVybC5zZXQoXCJxdWVyeVwiLCBxdWVyeU9iaik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0cyBhIGNvb2tpZSB3aXRoIHRoZSBuYW1lIGFuZCB2YWx1ZS4gTk8gY2hlY2sgIGZvciBkdXBsaWNhdGUgY29va2llcyBpcyBwZXJmb3JtZWRcbiAgICAgKlxuICAgICAqL1xuICAgIHB1YmxpYyBhZGRDb29raWUobmFtZTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIGlmICghdGhpcy5oZWFkZXJzW1wiQ29va2llXCJdKSB7XG4gICAgICAgICAgICB0aGlzLmhlYWRlcnNbXCJDb29raWVcIl0gPSBcIlwiO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaGVhZGVyc1tcIkNvb2tpZVwiXSArPSBuYW1lICsgXCI9XCIgKyB2YWx1ZSArIFwiOyBcIjtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0SGVhZGVyUGFyYW0oa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpOiB2b2lkICB7XG4gICAgICAgIHRoaXMuaGVhZGVyc1trZXldID0gdmFsdWU7XG4gICAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJlc3BvbnNlQm9keSB7XG4gICAgdGV4dCgpOiBQcm9taXNlPHN0cmluZz47XG4gICAgYmluYXJ5KCk6IFByb21pc2U8QmxvYj47XG59XG5cbi8qKlxuICogSGVscGVyIGNsYXNzIHRvIGdlbmVyYXRlIGEgYFJlc3BvbnNlQm9keWAgZnJvbSBiaW5hcnkgZGF0YVxuICovXG5leHBvcnQgY2xhc3MgU2VsZkRlY29kaW5nQm9keSBpbXBsZW1lbnRzIFJlc3BvbnNlQm9keSB7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBkYXRhU291cmNlOiBQcm9taXNlPEJsb2I+KSB7fVxuXG4gICAgYmluYXJ5KCk6IFByb21pc2U8QmxvYj4ge1xuICAgICAgICByZXR1cm4gdGhpcy5kYXRhU291cmNlO1xuICAgIH1cblxuICAgIGFzeW5jIHRleHQoKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgICAgY29uc3QgZGF0YTogQmxvYiA9IGF3YWl0IHRoaXMuZGF0YVNvdXJjZTtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBpZiAoZGF0YS50ZXh0KSB7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICByZXR1cm4gZGF0YS50ZXh0KCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8c3RyaW5nPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgICAgICAgcmVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsICgpID0+IHJlc29sdmUocmVhZGVyLnJlc3VsdCBhcyBzdHJpbmcpKTtcbiAgICAgICAgICAgIHJlYWRlci5hZGRFdmVudExpc3RlbmVyKFwiZXJyb3JcIiwgKCkgPT4gcmVqZWN0KHJlYWRlci5lcnJvcikpO1xuICAgICAgICAgICAgcmVhZGVyLnJlYWRBc1RleHQoZGF0YSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFJlc3BvbnNlQ29udGV4dCB7XG4gICAgcHVibGljIGNvbnN0cnVjdG9yKFxuICAgICAgICBwdWJsaWMgaHR0cFN0YXR1c0NvZGU6IG51bWJlcixcbiAgICAgICAgcHVibGljIGhlYWRlcnM6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0sXG4gICAgICAgIHB1YmxpYyBib2R5OiBSZXNwb25zZUJvZHlcbiAgICApIHt9XG5cbiAgICAvKipcbiAgICAgKiBQYXJzZSBoZWFkZXIgdmFsdWUgaW4gdGhlIGZvcm0gYHZhbHVlOyBwYXJhbTE9XCJ2YWx1ZTFcImBcbiAgICAgKlxuICAgICAqIEUuZy4gZm9yIENvbnRlbnQtVHlwZSBvciBDb250ZW50LURpc3Bvc2l0aW9uXG4gICAgICogUGFyYW1ldGVyIG5hbWVzIGFyZSBjb252ZXJ0ZWQgdG8gbG93ZXIgY2FzZVxuICAgICAqIFRoZSBmaXJzdCBwYXJhbWV0ZXIgaXMgcmV0dXJuZWQgd2l0aCB0aGUga2V5IGBcIlwiYFxuICAgICAqL1xuICAgIHB1YmxpYyBnZXRQYXJzZWRIZWFkZXIoaGVhZGVyTmFtZTogc3RyaW5nKTogeyBbcGFyYW1ldGVyOiBzdHJpbmddOiBzdHJpbmcgfSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdDogeyBbcGFyYW1ldGVyOiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9O1xuICAgICAgICBpZiAoIXRoaXMuaGVhZGVyc1toZWFkZXJOYW1lXSkge1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHBhcmFtZXRlcnMgPSB0aGlzLmhlYWRlcnNbaGVhZGVyTmFtZV0uc3BsaXQoXCI7XCIpO1xuICAgICAgICBmb3IgKGNvbnN0IHBhcmFtZXRlciBvZiBwYXJhbWV0ZXJzKSB7XG4gICAgICAgICAgICBsZXQgW2tleSwgdmFsdWVdID0gcGFyYW1ldGVyLnNwbGl0KFwiPVwiLCAyKTtcbiAgICAgICAgICAgIGtleSA9IGtleS50b0xvd2VyQ2FzZSgpLnRyaW0oKTtcbiAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0W1wiXCJdID0ga2V5O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLnRyaW0oKTtcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUuc3RhcnRzV2l0aCgnXCInKSAmJiB2YWx1ZS5lbmRzV2l0aCgnXCInKSkge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLnN1YnN0cmluZygxLCB2YWx1ZS5sZW5ndGggLSAxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmVzdWx0W2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBnZXRCb2R5QXNGaWxlKCk6IFByb21pc2U8SHR0cEZpbGU+IHtcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHRoaXMuYm9keS5iaW5hcnkoKTtcbiAgICAgICAgY29uc3QgZmlsZU5hbWUgPSB0aGlzLmdldFBhcnNlZEhlYWRlcihcImNvbnRlbnQtZGlzcG9zaXRpb25cIilbXCJmaWxlbmFtZVwiXSB8fCBcIlwiO1xuICAgICAgICBjb25zdCBjb250ZW50VHlwZSA9IHRoaXMuaGVhZGVyc1tcImNvbnRlbnQtdHlwZVwiXSB8fCBcIlwiO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBGaWxlKFtkYXRhXSwgZmlsZU5hbWUsIHsgdHlwZTogY29udGVudFR5cGUgfSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAvKiogRmFsbGJhY2sgZm9yIHdoZW4gdGhlIEZpbGUgY29uc3RydWN0b3IgaXMgbm90IGF2YWlsYWJsZSAqL1xuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oZGF0YSwge1xuICAgICAgICAgICAgICAgIG5hbWU6IGZpbGVOYW1lLFxuICAgICAgICAgICAgICAgIHR5cGU6IGNvbnRlbnRUeXBlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVzZSBhIGhldXJpc3RpYyB0byBnZXQgYSBib2R5IG9mIHVua25vd24gZGF0YSBzdHJ1Y3R1cmUuXG4gICAgICogUmV0dXJuIGFzIHN0cmluZyBpZiBwb3NzaWJsZSwgb3RoZXJ3aXNlIGFzIGJpbmFyeS5cbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0Qm9keUFzQW55KCk6IFByb21pc2U8c3RyaW5nIHwgQmxvYiB8IHVuZGVmaW5lZD4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYm9keS50ZXh0KCk7XG4gICAgICAgIH0gY2F0Y2gge31cblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYm9keS5iaW5hcnkoKTtcbiAgICAgICAgfSBjYXRjaCB7fVxuXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodW5kZWZpbmVkKTtcbiAgICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSHR0cExpYnJhcnkge1xuICAgIHNlbmQocmVxdWVzdDogUmVxdWVzdENvbnRleHQpOiBPYnNlcnZhYmxlPFJlc3BvbnNlQ29udGV4dD47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvbWlzZUh0dHBMaWJyYXJ5IHtcbiAgICBzZW5kKHJlcXVlc3Q6IFJlcXVlc3RDb250ZXh0KTogUHJvbWlzZTxSZXNwb25zZUNvbnRleHQ+O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gd3JhcEh0dHBMaWJyYXJ5KHByb21pc2VIdHRwTGlicmFyeTogUHJvbWlzZUh0dHBMaWJyYXJ5KTogSHR0cExpYnJhcnkge1xuICByZXR1cm4ge1xuICAgIHNlbmQocmVxdWVzdDogUmVxdWVzdENvbnRleHQpOiBPYnNlcnZhYmxlPFJlc3BvbnNlQ29udGV4dD4ge1xuICAgICAgcmV0dXJuIGZyb20ocHJvbWlzZUh0dHBMaWJyYXJ5LnNlbmQocmVxdWVzdCkpO1xuICAgIH1cbiAgfVxufVxuIl19