const activeSession = require('../models/activeSession');

const reqAuth = (req, res, next) => {
    const token = String(req.headers.authorization);
    activeSession.find({ token: token }, function(err, session) {
        if (session.length == 1) {
            return next();
        } else {
            return res.json({
                success: false,
                msg: 'User is not logged on'
            });
        }
    });
};

module.exports = reqAuth;