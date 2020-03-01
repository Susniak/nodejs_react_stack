class Urls {
    constructor() {
        this.base = 'http://51.68.142.49:8080';
    }

    getAccount(payload) {
        return this.getUrl('account', payload);
    }

    verifyAccount(token) {
        return this.getUrl('account/verify', {
            token
        });
    }

    addPlayer() {
        return this.getUrl('player');
    }

    createAccount() {
        return this.getUrl('account');
    }

    getUrl(url, params = false) {
        return `${this.base}/${url}${this.prepareParams(params)}`;
    }

    prepareParams(params) {
        const string = params ? Object.keys(params).map(param => `${param}=${params[param]}`).join('&') : false;

        return string ? `?${string}` : '';
    }
}

export default new Urls();
