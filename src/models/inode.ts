export class InodePool {
    private inodeCount: number;
    private pool: Map<number, Inode>;
    constructor() {
        this.inodeCount = 0;
        this.pool = new Map();
    }
    get length() {
        return this.pool.size;
    }
    set(key: number, value: Inode) {
        return this.pool.set(key, value);
    }
    get(key: number) {
        return this.pool.get(key);
    }
    rmv(key: number) {
        return this.pool.delete(key);
    }
    has(key: number) {
        return this.pool.has(key);
    }
    add(key: number, value: Inode) {
        if (this.has(key)) {
            throw Error('already exist!');
        }
        this.set(key, value);
        this.inodeCount++;
    }
}
export class Inode {
    public index: number; // self-increase from 0
    public usrid: string;
    public grpid: string;
    z;
    public mode: string; // rwxrwxrwx
    public ctime: number; // create timestamp
    public mtime: number; // last modify timestamp
    public atime: number; // last access timestamp
    public count: number; // total link count
    constructor() {
        this.ctime = this.mtime = this.atime = Date.now();
    }
}

let inodePool: InodePool;
inodePool = new InodePool();
inodePool.add(0, new Inode());
