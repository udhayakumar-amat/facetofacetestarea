export class Logger {
    constructor() {}

    log(message) {
        console.log(message);
    }

    info(message) {
        console.info(message);
    }

    error(message) {
        console.error(message);
    }

    warning(message) {
        console.warn(message);
    }

    clear() {
        console.clear();
    }
}
