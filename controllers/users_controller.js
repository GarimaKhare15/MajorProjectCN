/*const User = require('../models/user');

module.exports.profile = function(req, res){
    if(req.cookies.user_id){
        User.findById(req.cookies.user_id,function(err,user){
            if(user){
                return res.render('user_profile',{
                    title:"User_Profile",
                    user:user,
                })
            }

            return res.redirect('/users/sign-in');
        });
    }
    else{
        return res.redirect('/users/sign-in');
    }
}

//render the sign up page
module.exports.signUp = function(req,res){
    
    if(req.isAuthenticated()){
        return res.redirect('/users/profile');
    }

    return res.render('user_sign_up',{
        title:'Codeial | Sign Up'
    })
}

//render the sign in page
module.exports.signIn = function(req,res){

    if(req.isAuthenticated()){
        return res.redirect('/users/profile');
    }
    return res.render('user_sign_in',{
        title:'Codeial | Sign In'
    })
}

//get the sign up data
module.exports.create = function(req,res){
<<<<<<< HEAD

    if(req.body.password!=req.body.confirm_password){
=======
    //TODO later
    if(req.body.password != req.body.confirm_password){
>>>>>>> be0665d12de5978af87cfa17c81ecb70a10f822c
        return res.redirect('back');
    }

    User.findOne({email:req.body.email},function(err,user){
        if(err){
            console.log('error in finding user in signing up',err);
            return;
        }

        if(!user){
            User.create(req.body,function(err,user){
                if(err){
                    console.log('error in creating user',err);return;
                }
            return res.redirect('/users/sign-in')
            })
        }

        else{
            return res.redirect('back');
        }
    });
<<<<<<< HEAD
=======

>>>>>>> be0665d12de5978af87cfa17c81ecb70a10f822c
}

//sign in and create session for the user
module.exports.createSession = function(req,res){
<<<<<<< HEAD
    //TODO later
   return res.redirect('/');
}

module.exports.destroySession = function(req,res){
    req.logout();
    return res.redirect('/');
}*/

const User = require('../models/user');


module.exports.profile = function(req, res){
    return res.render('user_profile', {
        title: 'User Profile'
    })
}


// render the sign up page
module.exports.signUp = function(req, res){
    if (req.isAuthenticated()){
        return res.redirect('/users/profile');
    }


    return res.render('user_sign_up', {
        title: "Codeial | Sign Up"
    })
}


// render the sign in page
module.exports.signIn = function(req, res){

    if (req.isAuthenticated()){
        return res.redirect('/users/profile');
    }
    return res.render('user_sign_in', {
        title: "Codeial | Sign In"
    })
}

// get the sign up data
module.exports.create = function(req, res){
    if (req.body.password != req.body.confirm_password){
        return res.redirect('back');
    }

    User.findOne({email: req.body.email}, function(err, user){
        if(err){console.log('error in finding user in signing up'); return}

        if (!user){
            User.create(req.body, function(err, user){
                if(err){console.log('error in creating user while signing up'); return}

                return res.redirect('/users/sign-in');
            })
        }else{
            return res.redirect('back');
        }

    });
}


// sign in and create a session for the user
module.exports.createSession = function(req, res){
    return res.redirect('/');
}

module.exports.destroySession = function(req, res){
    req.logout();

    return res.redirect('/');
=======
    //steps to authenticate
    //find the user
    User.findOne({email:req.body.email},function(err,user){
        if(err){
            console.log('error in finding user',err);
            return;
        }
        console.log(user);
        //handle user found
        if(user){

            //handle password which doesn't match
            if(user.password != req.body.password){
                console.log('Password not match')
                return res.redirect('back');
            }
            //handle session create
            res.cookie('user_id',user.id);
            return res.redirect('/users/profile');
        }
        else{
            console.log('User not find');
            return res.redirect('back');
        }
    })   
}

//signOut User
module.exports.signOut = function(req,res){
    res.clearCookie('user_id');
    res.redirect('/users/sign-in');
>>>>>>> be0665d12de5978af87cfa17c81ecb70a10f822c
}