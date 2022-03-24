export function tokenValidation(token) {
    if (token.length !== 8) {
        return false;
    }
    return true;
}
export function generateToken() {
    return Math.random().toString(36).substr(2, 8);
}
export function getDays(amount) {
    let days = Math.floor(amount / 100);
    if (days === 0) {
        days = 1;
    }
    let someDate = new Date();
    let result = someDate.setDate(someDate.getDate() + days);
    return new Date(result);
}
