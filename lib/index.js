"use strict";
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
        while (_) try {
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.genshinAchievement = void 0;
/* eslint-disable no-unused-expressions */
var canvas_1 = require("canvas");
var path_1 = require("path");
function genshinAchievement(text) {
    return __awaiter(this, void 0, void 0, function () {
        var s, secondLine, canvas, ctx, myimg;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    (0, canvas_1.registerFont)((0, path_1.join)(__dirname, 'assets', 'zh-cn.ttf'), { family: 'genshin' });
                    s = text.trim();
                    if (s.trim() == "" || s.trim().length > 50)
                        throw new Error("Length must be less than 50 characters and not empty");
                    secondLine = ["\"" + s, "\"" + s];
                    secondLine[0] = secondLine[0].slice(0, secondLine[0].slice(0, 25).lastIndexOf(' '));
                    secondLine[1] = secondLine[1].slice(secondLine[1].slice(0, 25).lastIndexOf(' '));
                    canvas = (0, canvas_1.createCanvas)(719, 270);
                    ctx = canvas.getContext('2d');
                    return [4 /*yield*/, (0, canvas_1.loadImage)((0, path_1.join)(__dirname, 'assets', 'row-2-column-1.png'))];
                case 1:
                    myimg = _a.sent();
                    ctx.drawImage(myimg, 0, 0, 719, 270);
                    ctx.font = '28px "genshin"';
                    ctx.fillStyle = '#8c7d6f';
                    ctx.fillText(s.length > 27 ? secondLine[0] : "\"" + s + "\"", 220, 145);
                    s.length > 25 ? ctx.fillText(secondLine[1], 225, 190) : '';
                    return [2 /*return*/, canvas.createPNGStream()];
            }
        });
    });
}
exports.genshinAchievement = genshinAchievement;
