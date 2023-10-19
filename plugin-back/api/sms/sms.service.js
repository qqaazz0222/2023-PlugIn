const axios = require('axios')
const aligo = require('aligoapi')

class ApiService {
    constructor() { }


    /**
     * (POST) bulk sms online api 
     */
    async sendBulk(body) {
        try {
            /**username=${body.username}&password=${body.password}&type=${body.type}&to=${body.to}&source=${body.source}&message=${body.message} */
            const url = `https://api.bulksmsonline.co/smsapi?username=${body.username}&password=${body.password}&type=${body.type}&to=${body.to}&source=${body.source}&message=${body.message}`;
            console.log(url)

            const send = await axios.get(url)
                .then((res) => { console.log(res) })
                .catch((err) => { console.log(err) })


        } catch (error) {

        }
    }

    /**
     * (POST) aligo 전송
     */
    async sendBulk(req) {
        try {
            var authData = body.AuthData

            aligo.send(req, authData)
                .then((r) => {
                    console.log(r)
                    res.send(r)
                })
                .catch((e) => {
                    console.log(e)
                    res.send(e)
                })

        } catch (error) {

        }
    }

}

module.exports = ApiService
