var express = require('express');
var router = express.Router();
const si = require('systeminformation')

router.get('/', function(req, res, next) {
    si.osInfo().then(data => {
        res.send({
            hostname: data.hostname,
            kernel: data.kernel,
            platform: data.platform,
        })
    })
});

module.exports = router;