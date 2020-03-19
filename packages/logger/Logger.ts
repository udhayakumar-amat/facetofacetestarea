export class Logger {
    constructor() {}

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
