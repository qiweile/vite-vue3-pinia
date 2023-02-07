import Cookies from 'js-cookie'

const TokenKey = 'Admin-Token'

export function getToken() {
    return Cookies.get(TokenKey)
}

export function setToken(token) {
    return Cookies.set(TokenKey, token)
}

export function removeToken() {
    return Cookies.remove(TokenKey)
}
/**
 * 判断对象是否存在key
 * @param obj
 * @param key
 */
export function objectHasKey(obj: object, key: string | number | symbol) {
    return Object.prototype.hasOwnProperty.call(obj, key);
}

