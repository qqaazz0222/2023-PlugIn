import axios from "axios";

const sendBulkSMS = async (datas) => {
    let params = {
        username: datas.id,
        password: datas.pw,
        type: datas.type,
        to: datas.to,
        source: datas.from,
        message: datas.message,
        //options
        scheduled: datas.scheduled, //UTC-04 EX) 2020-01-013T12:49:00

    }
    const url = `https://api.bulksmsonline.co/smsapi?username=${datas.id}&password=${datas.pw}&type=${datas.type}&to=${datas.to}&source=${datas.from}&message=${datas.message}`;

    const send = await axios.post(url)
        .then((res) => { console.log(res) })
        .catch((err) => { console.log(err) })

    console.log(typeof (send))

}

const sendAligo = async (datas) => {
    let params = {
        key: datas.key,
        user_id: datas.id,
        sender: datas.from, //발신자
        recevier: datas.to, //수신자
        msg: datas.message,

        /**options */
        msg_type: datas.type,
        title: datas.title,
        destination: datas.destination,//%고객명% 치환용 입력
        rdate: datas.date,
        rtime: datas.time,
        image1: datas.img1,
        image2: datas.img2,
        image3: datas.img3,
        testmode_yn: '' // input Y when TEST 
    }

    const url = 'https://apis.aligo.in/send/'

    const send = await axios.post(url, { params })
        .then((res) => { console.log(res) })
        .catch((err) => { console.log(err) })

}

const sendEasy = async (datas) => {
    let params = {
        Username: datas.id,
        Password: datas.pw,
        From: datas.from, //발신자
        To: datas.to, //수신자
        Text: datas.message,
        Type: datas.type,
    }

    const url = 'https://api.easysendsms.app/bulksms'

    const send = await axios.post(url, { params })
        .then((res) => { console.log(res) })
        .catch((err) => { console.log(err) })
}

const sendBulkgate = async (datas) => {
    const params = {
        "application_id": "<APPLICATION_ID>",
        "application_token": "<APPLICATION_TOKEN>",
        "number": "7700900000",
        "text": "test_sms",
        "country": "gb"
    }
}

export { sendBulkSMS }