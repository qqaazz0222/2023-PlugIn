const { Container } = require('typedi');
const Service = require('./user.service');

Container.set(Service, new Service())

module.exports = [
    /**
     * (POST)유저 회원가입
     */
    {
        path: '/user/signup',
        method: 'post',
        middleware: [],
        controller: async (req, res, next) => {
            try {
                const ServiceInstance = Container.get(Service);
                const datas = await ServiceInstance.createUser(req.body);
                if (datas == 200) {
                    return res.status(200).json({
                        status: 200,
                        message: 'success',
                    })
                } else if (datas == 409) {
                    return res.status(409).json({
                        status: 409,
                        message: 'ID duplicate',
                    })
                }

            } catch (e) {
                console.log(e)
                return 400
            }
        }
    },

    /**
     * (POST) 유저 로그인
     */
    {
        path: '/user/signin',
        method: 'post',
        middleware: [],
        controller: async (req, res, next) => {
            try {
                const ServiceInstance = Container.get(Service);
                const datas = await ServiceInstance.loginUser(req.body);
                if (datas == 200) {
                    return res.status(200).json({
                        status: 200,
                        message: 'success',
                    })
                } else if (datas == 406) {
                    return res.status(406).json({
                        status: 406,
                        message: 'Invaild Password',
                    })
                } else if (datas == 409) {
                    return res.status(409).json({
                        status: 409,
                        message: 'ID does not exist',
                    })
                }

            } catch (e) {
                console.log(e)
                return 400
            }
        }
    }




]