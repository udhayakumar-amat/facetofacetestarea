export class Logger {
    constructor() {}

    log(message) {
        console.log(message.toString());
    }

    info(message) {
        console.info(message.toString());
    }

    error(message) {
        console.error(message.toString());
    }

    warning(message) {
        console.warn(message.toString());
    }

    clear() {
        console.clear();
    }
}
