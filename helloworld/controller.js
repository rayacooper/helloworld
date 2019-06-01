
module.exports = {
    login: (req, res) => {
        const {username, user_password} = req.body;
        const db = req.app.get('db');
        db.PULL_USER_INFO
    },

    register: (req, res) => {
        const {username, user_password} = req.body;
    }

}