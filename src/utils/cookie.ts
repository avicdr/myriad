export function setCookie(cookieName: string, value: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
        localStorage.setItem(cookieName, value);
        resolve(true);
    });
}

export function getCookie(cookieName: string): string {
    return localStorage.getItem(cookieName);
}

export const removeCookie = (cookieName: string) => {
    return new Promise((resolve, reject) => {
        localStorage.removeItem(cookieName);
        resolve(true);
    });
};

export const clearSession = () => {
    localStorage.clear()
};
