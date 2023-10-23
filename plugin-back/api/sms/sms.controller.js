const { Container } = require('typedi');

const Service = require('./sms.service');

Container.set(Service, new Service())

module.exports = [
    /**
     * (POST) bulksmsonline 전송
     */
    {
        path: '/send/bulkonline',
        method: 'post',
        middleware: [],
        controller: async (req, res, next) => {
            try {
                console.log(req.body)
                const ServiceInstance = Container.get(Service);
                const datas = await ServiceInstance.sendBulk(req.body);


            } catch (e) {
                console.log(e)
            }
        }
    },

    /**
     * (POST) aligo 전송
     */
    {
        path: '/send/aligo',
        method: 'post',
        middleware: [],
        controller: async (req, res, next) => {
            try {
                const ServiceInstance = Container.get(Service);
                const datas = await ServiceInstance.sendAligo(req.body);

            } catch (e) {
                console.log(e)
            }
        }
    },

    /**
     * (POST) solapi 전송
     */
    {
        path: '/send/solapi',
        method: 'post',
        middleware: [],
        controller: async (req, res, next) => {
            try {
                const ServiceInstance = Container.get(Service);
                const datas = await ServiceInstance.sendSolapi(req.body);
                console.log(datas[1])
                if (datas == 200){
                    return res.status(200).json({
                        status : 200,
                        message : 'success send a message'
                    })
                }else {
                    return res.status(404).json({
                        status:404,
                        message: datas[1].message
                    })
                }
            } catch (e) {
                console.log(e)
            }
        }
    },


]
// const sendEasy = async (datas) => {
//     let params = {
//         Username: datas.id,
//         Password: datas.pw,
//         From: datas.from, //발신자
//         To: datas.to, //수신자
//         Text: datas.message,
//         Type: datas.type,
//     }

//     const url = 'https://api.easysendsms.app/bulksms'

//     const send = await axios.post(url, { params })
//         .then((res) => { console.log(res) })
//         .catch((err) => { console.log(err) })
// }

// const sendBulkgate = async (datas) => {
//     const params = {
//         "application_id": "<APPLICATION_ID>",
//         "application_token": "<APPLICATION_TOKEN>",
//         "number": "7700900000",
//         "text": "test_sms",
//         "country": "gb"
//     }
// }

// export { sendBulkSMS }