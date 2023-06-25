import { promisify } from "util";
import textract from "textract";
import _ from "lodash";

const fromFileWithMimeAndPathAsync = promisify(
  textract.fromFileWithMimeAndPath
);

export const extractContent = async (mimetype: string, filePath: string) => {
  try {
    return await fromFileWithMimeAndPathAsync(mimetype, filePath);
  } catch (err) {
    throw err;
  }
};

export const query = async (
  mimetype: string,
  filePath: string,
  query: Array<string> | string
) => {
  try {
    let result: any = {};
    const content: any = await fromFileWithMimeAndPathAsync(mimetype, filePath);
    if (!_.isArray(query) || !_.isString(query))
      throw new Error("query should be either string or array of string");
    if (_.isArray(query)) {
      result = {};
      query.forEach((q) => {
        const queryRegex = new RegExp(q, "gi");
        const matches = content.match(queryRegex);
        result[q] = matches.length;
      });
    }

    if (_.isString(query)) {
      const queryRegex = new RegExp(query, "gi");
      const matches = content.match(queryRegex);
      result = {
        query: matches.length,
      };
    }
    return result;
  } catch (error) {
    throw error;
  }
};

export const extractFileData = async (mimetype: string, file: string) => {
  try {
    const text: any = await fromFileWithMimeAndPathAsync(mimetype, file);

    const name = text.split(" ").slice(0, 2).join(" ");
    const email = text.match(
      /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi
    )[0];
    const mobile = text.match(/(\+\d{1,3}[- ]?)?\d{10}/gi)[0];

    return {
      name,
      email,
      mobile,
      filePath: file,
    };
  } catch (err) {
    throw err;
  }
};
