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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.genshinAchievement = void 0;
/* eslint-disable no-unused-expressions */
var canvas_1 = require("canvas");
var path_1 = __importDefault(require("path"));
function genshinAchievement(text) {
    return __awaiter(this, void 0, void 0, function () {
        var myimg, s, canvas, ctx, fontSize, maxWidth, _a, x, y, lineHeight;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    (0, canvas_1.registerFont)(path_1.default.join(__dirname, "..", 'assets', 'zh-cn.ttf'), { family: 'genshin' });
                    return [4 /*yield*/, (0, canvas_1.loadImage)(path_1.default.join(__dirname, "..", 'assets', 'row-2-column-1.png'))];
                case 1:
                    myimg = _b.sent();
                    s = text.trim();
                    if (s.trim() == "" || s.trim().length > 100)
                        throw new Error("Length must be less than 50 characters and not empty");
                    canvas = (0, canvas_1.createCanvas)(719, 270);
                    ctx = canvas.getContext('2d');
                    ctx.drawImage(myimg, 0, 0, 719, 270);
                    fontSize = 28;
                    maxWidth = 500;
                    _a = [220, 180], x = _a[0], y = _a[1];
                    lineHeight = 35;
                    ctx.font = "".concat(fontSize, "px genshin");
                    ctx.fillStyle = '#8c7d6f';
                    if (ctx.measureText(s).width > maxWidth) {
                        ctx.fillText(s.substring(0, 25), x, y - lineHeight);
                        ctx.fillText(s.substring(25, s.length), x, y);
                    }
                    else
                        ctx.fillText(s, x, y);
                    return [2 /*return*/, canvas.createPNGStream()];
            }
        });
    });
}
exports.genshinAchievement = genshinAchievement;
