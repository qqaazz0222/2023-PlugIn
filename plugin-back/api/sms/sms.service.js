const axios = require('axios')
const {SolapiMessageService} = require('solapi')
const pool = require('../')


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
                
        } catch (e) {
            console.log(e)
        }
    }

    /**
     * (POST) aligo 전송
     */
    async sendAligo(req) {
        try {
            await axios.post('https://apis.aligo.in/send/', req,{
                headers: {
                    // content-Type을 multipart/form-data 설정
                    // 그림문자 전송 가능으로 json 방식으로 전송 X
                    'Content-Type': 'multipart/form-data', 
                    'Service-Port': '443',
                }
                })
                .then((res) => {
                    console.log('응답 데이터:', res.data);
                })
                .catch((error) => {
                    console.error('에러:', error);
                })
        } catch (e) {
            console.log(e)
        }
    }

    /**
     * (POST) solapi 전송
     */
    async sendSolapi(req) {
        try {

            const messageService = new SolapiMessageService("NCSNWCXKJAGVQVXM", "EHPLEF4TCV795LRSUXTRM8N2RHISRUCC")

            return messageService.send(req)
                .then((res)=>{
                    console.log(res) 
                    return 200
                })
                .catch((e)=>{
                    console.log(e)
                    return [404,e]
                })
        } catch (e) {
            console.log(e)
        }
    }

}

module.exports = ApiService
