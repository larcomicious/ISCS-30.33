export class SessionStorageAPI {
    static setItem(key, value) {
        sessionStorage.setItem(key, value);
    }
    static getItem(key) {
        return sessionStorage.getItem(key);
    }
    static removeItem(key) {
        sessionStorage.removeItem(key);
    }
    static clear() {
        sessionStorage.clear();
    }
}