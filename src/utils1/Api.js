class Api {

    constructor({ baseUrl, tracksUrl, sendPoemUrl, headers }) {
        this._headers = headers; 
        this._baseUrl = baseUrl;
        this._tracksUrl = tracksUrl;
        this._sendPoemUrl = sendPoemUrl;
    }

    _sendRequest(link, params) {
        return fetch(link, params)
            .then((res) => { 
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(`Ошибка ${res.status} - ${res.statusText}`)
            })
    }

    sendPoem(request) {
        return this._sendRequest(`${this._baseUrl}${this._sendPoemUrl}`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                name: request.name,
                email: request.email,
                phone: request.phone,
                poemText: request.poemText
            })
        })
    }
    
    //запрос массива карточек
    getTrackList() {
        return this._sendRequest(`${this._baseUrl}${this._tracksUrl}`, {
            headers: this._headers
        })
    }
}

const api = new Api ({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-16',
    headers: {
        // authorization: '83172f60-a4ab-4f2a-9396-1325bbd21612',
        'Content-Type': 'application/json'
    }
})

export default api;