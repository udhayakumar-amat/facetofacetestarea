export class Alerts {
    constructor() {}

    show(message) {
        alert(message.toString());
    }

    confirm(message) {
        return confirm(message.toString());
    }
}
