const Container = require('typedi');

const Service = require('./sms.service');

module.exports = [
    /**
     * (POST) bulksmsonline 전송
     */
    {
        path: '/bulkonline',
        method: 'post',
        middleware: [],
        controller: async (req, res, next) => {
            try {
                const ServiceInstance = Container.get(Service);
                const data = await ServiceInstance.sendBluk(req.body);

                console.log(data)
            } catch (e) {
                console.log(e)
            }
        }
    }


]