const bcrypt = require('bcrypt');


module.exports = {
    login: (req, res, next ) => {
        const {username, user_password} = req.body;
        const db = req.app.get('db');
        let currentUser;
        db.skill_three.findOne({username}) 
            .then((user) => {
                if(user) {
                    currentUser = user;
                    return bcrypt.compare(user_password, user.user_password)
                }else{
                    throw("User doesn't exist")
                }
            }) 
            .then((isMatch)=> {
                if(isMatch){
                    delete currentUser.password;
                    res.send({success: true, user: currentUser})
                }else{
                    throw("Wrong Password")
                }
            }) 
            .catch((err) => {
                res.send({success:false, err})
            }) 
    },

    register: (req, res, next) => {
        const {username, user_password} = req.body;
        const db = req.app.get('db');
        let imageurl = `https://robohash.org/${username}`
        db.skill_three.findOne({username})
            .then((user) => {
                if(user){
                    throw('Username is taken, please login or choose another.')
                }else{
                    return bcrypt.hash(user_password, saltRounds);
                }
            })
            .then((hash) => {
                return db.skill_three.insert({username, user_password:hash, imageurl})
            })
            .then((user) => {
                delete user.user_password;
                req.session.user = user;
                res.status(200).send(user);
            })
            .catch((err) => {
                res.send(err)
            })
    },

    allPosts: (req, res, next) => {  //Lookup combining tables
        const {userPosts, searchin} = req.params;
        const db = req.app.get('db');
        if(userPosts){
            if(searchin){
                //return all posts that include search term
            }else{
                //return all posts ever
            }
        }else{
            if(searchin){
                //return posts that aren't by user & include search
            }else{
                //return all posts, excluding ones by user
            }
        }
    }
}