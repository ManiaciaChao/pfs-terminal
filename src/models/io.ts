interface Buffer {
    data: string;
    push();
    pop();
}

abstract class Stream {
    buffer;
    constructor(buffer: Buffer) {
        this.buffer = buffer;
    }
}

class StreamIn extends Stream {
    constructor(buffer: Buffer) {
        super(buffer);
    }
    in(stream: string) {}
}

class StreamOut extends Stream {
    constructor(buffer: Buffer) {
        super(buffer);
    }
    out(stream: string) {}
}
