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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.extractFileData = exports.query = exports.extractContent = void 0;
const util_1 = require("util");
const textract_1 = __importDefault(require("textract"));
const fromFileWithMimeAndPathAsync = (0, util_1.promisify)(textract_1.default.fromFileWithMimeAndPath);
const extractContent = (mimetype, filePath) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield fromFileWithMimeAndPathAsync(mimetype, filePath);
    }
    catch (err) {
        throw err;
    }
});
exports.extractContent = extractContent;
const query = (mimetype, filePath, query) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const text = yield fromFileWithMimeAndPathAsync(mimetype, filePath);
    }
    catch (error) {
        throw error;
    }
});
exports.query = query;
const extractFileData = (mimetype, file) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const text = yield fromFileWithMimeAndPathAsync(mimetype, file);
        const name = text.split(" ").slice(0, 2).join(" ");
        const email = text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi)[0];
        const mobile = text.match(/(\+\d{1,3}[- ]?)?\d{10}/gi)[0];
        return {
            name,
            email,
            mobile,
            filePath: file,
        };
    }
    catch (err) {
        throw err;
    }
});
exports.extractFileData = extractFileData;
