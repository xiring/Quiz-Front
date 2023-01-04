export function isUserLogged() {
    return !!window.localStorage.getItem('token') ?? '';
//    return true;
}

export function setLogged(isLogged) {
    // return Cookies.set(TokenKey, isLogged);
}

export function removeToken() {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    localStorage.removeItem('permissions')
}

export function getUserPermissions() {
    return localStorage.getItem('permissions') ?? [];
}

export function checkPermissions(routePermissions) {
    let permissions = getUserPermissions();
    let status = ''
    if (permissions) {
        status = routePermissions.filter(i => permissions.includes(i))
    }
    return !!status.length;
}

export function checkSuperUser() {
    let user = localStorage.getItem('user') ?? '';
    return JSON.parse(user).is_super === 1;
}
