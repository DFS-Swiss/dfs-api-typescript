"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configureAuthMethods = exports.ProddfsswisscognitoAuthorizer029DC9BBAuthentication = void 0;
var ProddfsswisscognitoAuthorizer029DC9BBAuthentication = (function () {
    function ProddfsswisscognitoAuthorizer029DC9BBAuthentication(apiKey) {
        this.apiKey = apiKey;
    }
    ProddfsswisscognitoAuthorizer029DC9BBAuthentication.prototype.getName = function () {
        return "proddfsswisscognitoAuthorizer029DC9BB";
    };
    ProddfsswisscognitoAuthorizer029DC9BBAuthentication.prototype.applySecurityAuthentication = function (context) {
        context.setHeaderParam("apiKey", this.apiKey);
    };
    return ProddfsswisscognitoAuthorizer029DC9BBAuthentication;
}());
exports.ProddfsswisscognitoAuthorizer029DC9BBAuthentication = ProddfsswisscognitoAuthorizer029DC9BBAuthentication;
function configureAuthMethods(config) {
    var authMethods = {};
    if (!config) {
        return authMethods;
    }
    authMethods["default"] = config["default"];
    if (config["proddfsswisscognitoAuthorizer029DC9BB"]) {
        authMethods["proddfsswisscognitoAuthorizer029DC9BB"] = new ProddfsswisscognitoAuthorizer029DC9BBAuthentication(config["proddfsswisscognitoAuthorizer029DC9BB"]);
    }
    return authMethods;
}
exports.configureAuthMethods = configureAuthMethods;
//# sourceMappingURL=auth.js.map