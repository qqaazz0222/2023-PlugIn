const pool = require('../../DB/db')

class UserService {
    constructor() { }


    /**
     * (POST) 유저 회원가입
     */
    async createUser(body) {
        try {
            const { account, pw, name, email, country, phone } = body
            const id_check = await pool.query('select * from user where account = ?', account)

            if (!id_check[0].length) {
                await pool.query('INSERT INTO user(account, pw, name, email, country, phone) VALUES (?,?,?,?,?,?)', [
                    account,
                    pw,
                    name,
                    email,
                    country,
                    phone
                ])
                return 200
            } else if (id_check[0].length) {
                return 409
            }
        } catch (e) {
            console.log(e)
        }
    }

    /**
     * (POST) 유저 로그인
     */
    async loginUser(body) {
        try {
            const { account, pw } = body
            const id_check = await pool.query('select * from user where account = ?', account)

            if (id_check[0].length) {
                if (id_check[0][0].account === account && id_check[0][0].pw === pw) {
                    return 200
                } else if (id_check[0][0].pw != pw) {
                    return 406
                }
            }
            else if (!id_check[0].length) {
                return 409
            }
        } catch (e) {
            console.log(e)
        }
    }

}

module.exports = UserService
