import { promisify } from "util";
import textract from "textract";

const fromFileWithMimeAndPathAsync = promisify(
  textract.fromFileWithMimeAndPath
);

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
