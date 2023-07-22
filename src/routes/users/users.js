"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var express_1 = require("express");
var connecttion_1 = require("../../sql_connection/connecttion");
var sql = require("mssql");
var usersRoutes = (0, express_1.Router)();
usersRoutes.post("/cadastro", function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
    var dadosUsuario, conexaoBanco, resultado, usuarioCriado, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                dadosUsuario = request.body.dadosUsuario;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 7, , 8]);
                return [4 /*yield*/, sql.connect(connecttion_1.conexaoString)];
            case 2:
                conexaoBanco = _a.sent();
                return [4 /*yield*/, conexaoBanco.query(templateObject_1 || (templateObject_1 = __makeTemplateObject(["select * from usuarios where email = ", ""], ["select * from usuarios where email = ", ""])), dadosUsuario.email)];
            case 3:
                resultado = _a.sent();
                if (!(resultado.recordset.length == 0)) return [3 /*break*/, 5];
                return [4 /*yield*/, conexaoBanco.query(templateObject_2 || (templateObject_2 = __makeTemplateObject(["INSERT INTO usuarios VALUES(", ",", ",", ",\n      ", ",", ",", ")"], ["INSERT INTO usuarios VALUES(", ",", ",", ",\n      ", ",", ",", ")"])), dadosUsuario.nome, dadosUsuario.email, dadosUsuario.telefone, dadosUsuario.data_nascimento, dadosUsuario.ramo_atividade, dadosUsuario.receber_notificacao)];
            case 4:
                usuarioCriado = _a.sent();
                return [2 /*return*/, response.json({
                        messageStatus: "Cadastro realizado com sucesso!",
                        usuario: usuarioCriado.recordset
                    })];
            case 5: return [2 /*return*/, response.json({
                    messageStatus: "Este e-mail já foi utilizado."
                })];
            case 6: return [3 /*break*/, 8];
            case 7:
                error_1 = _a.sent();
                return [2 /*return*/, response.json({ messageStatus: error_1 })];
            case 8: return [2 /*return*/];
        }
    });
}); });
exports["default"] = usersRoutes;
var templateObject_1, templateObject_2;
