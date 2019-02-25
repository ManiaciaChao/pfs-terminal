import * as inode from './inode';

enum fileType {
    text,
    binary,
    directory,
    device
}

export interface File {
    data: string;
    type: fileType;
}

export class textFile implements File {
    data: string;
    type: fileType;
}
