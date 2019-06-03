
module.exports = {
    login: async (req, res) => {
        const {username, user_password} = req.body;
        const db = req.app.get('db');
        let userFound = await db.check_user_exists(username);
        if(!userFound){
            alert(`User not found. Please check your spelling kid.`)
        }
    
    },

    register: async (req, res) => {
        const {username, user_password} = req.body;
        const db = req.app.get('db');
        let imageurl = `https://robohash.org/${username}`
        let userFound = await db.check_user_exists(username);
        if (!userFound){
            db.REGISTER_USER(username, user_password, imageurl)
        // .then(user => {
        //     res.status(200).send(user);
        // })
    }
    }
}