const { User } = require("../../models");

async function logout(req, res) {
    const {_id} = req.user;

    const user = await User.findByIdAndUpdate(_id, {token: null});
    if (!user) {
        res.status(401).json({
            status: 'unauthorized',
            code: 401,
            data: {
                message: 'Not authorized'
            }
        })
    }

    res.status(204).json({message: "Logout success"});
};

module.exports = logout;