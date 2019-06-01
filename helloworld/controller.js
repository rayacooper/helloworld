
module.exports = {
    login: async (req, res) => {
        const {username, user_password} = req.body;
        const db = req.app.get('db');
        db.CHECK_FOR_USER(username)
        // db.PULL_USER_INFO
    },

    register: (req, res) => {
        const {username, user_password} = req.body;
        const db = req.app.get('db');
        db.REGISTER_USER({username, user_password})
    }

}