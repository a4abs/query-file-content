export declare const extractContent: (mimetype: string, filePath: string) => Promise<unknown>;
export declare const query: (mimetype: string, filePath: string, query: Array<string> | string) => Promise<void>;
export declare const extractFileData: (mimetype: string, file: string) => Promise<{
    name: any;
    email: any;
    mobile: any;
    filePath: string;
}>;
