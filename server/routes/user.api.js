const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../config/keys');

// Load input validation
const validateRegisterInput = require('../validation/register.validation');
const validateLoginInput = require('../validation/login.validation');

// Load UserModel
const User = require('../models/user.model');

const reqAuth = require('./safeRoutes');
const activeSession = require('../models/activeSession');

// Register
router.post('/register', (req, res) => {
    const { errors, isValid } = validateRegisterInput(req.body);
    if(!isValid) {
        return res.status(400).json(errors);
    }

    User.findOne({ email: req.body.email })
        .then(user => {
            if (user) {
                return res.status(404).json({ email: "Email already exists!" });
            } else {
                const newUser = new User({
                    name: req.body.name,
                    email: req.body.email,
                    password: req.body.password
                });
    
                // Hash password before storing
                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                        if(err) throw err;
                        newUser.password = hash;
                        newUser
                            .save()
                            .then(user => res.json(user))
                            .catch(err => console.log(err));
                    });
                });
            }
        });
});

// Login
router.post("/login", (req, res) => {
    const { errors, isValid } = validateLoginInput(req.body);
    if(!isValid) {
        return res.status(400).json(errors);
    }

    const email = req.body.email;
    const password = req.body.password;

    User.findOne({email}).then(user => {
        if(!user) {
            return res.status(404).json({emailnotfound: "Email not found"});
        }

        // Check Password
        bcrypt.compare(password, user.password).then(isMatch => {
            if(isMatch) {
                const payload = {
                    id: user.id,
                    name: user.name
                };

                // Sign token
                jwt.sign(
                    payload,
                    keys.secretOrKey,
                    {
                        expiresIn: 31556926
                    },
                    (err, token) => {
                        res.json({
                            success: true,
                            token: "Bearer" + token
                        });
                    }
                );
            } else {
                return res
                    .status(400)
                    .json({passwordincorrect: "Password incorrect"});
            }
        });
    });
});

// Fetch Data 
router.get('/', (req, res) => {
    User.find({ })
        .then((data) => {
            console.log("Data: ", data);
            res.json(data);
        })
        .catch((error) => {
            console.log("error: ", error);
        })
})

// Save
router.post('/save', (req, res) => {
    const data = req.body;
    const newUser = new User(data);

    newUser.save((error) => {
        if(error) {
            res.status(500).json({msg: "Sorry..."})
            return;
        }
        return res.json(data);
    })
})

// Fetch One User
router.get('/edit', (req, res) => {
    const data = req.body;
    User.findOne({_id: "605793e2a9b826e963f93ec0"})
        .then(user => {
            res.json(user);
        })
        .catch((error) => {
            res.status(500).json({ invaliduser: "User isn't existed!" });
        })
})

// Route /admin/users
router.post('/all', reqAuth, (req, res) => {
    User.find({}, (err, users) => {
        if (err) {
            res.json({ success: false });
        }
        users = users.map((item) => {
            const x = item;
            x.password = undefined;
            x.__v = undefined;
            return x;
        });
        res.json({ success: true, users: users });
    });
});

// Edit
router.post('/edit', reqAuth, (req, res) => {
    const { userID, name, email } = req.body;

    User.find({ _id: userID }).then((user) => {
        if (user.length == 1) {
            const query = { _id: user[0]._id };
            const newvalue = { $set: { name: name, email: email } };
            User.updateOne(query, newvalue, (err, cb) => {
                if (err) {
                    res.json({ success: false, msg: 'There was an error. Please contract the administator' });
                }
                res.json({ success: true });
            });
        } else {
            res.json({ success: false });
        }
    });
});

router.post('/check/resetpass/:id', (req, res) => {
    const userID = req.params.id;
    User.find({_id: userID}).then((user) => {
      if (user.length == 1 && user[0].resetPass == true) {
        res.json({success: true}); // reset password was made for this user
      } else {
        res.json({success: false});
      }
    });
  });
  
  router.post('/resetpass/:id', (req, res) => {
    const errors = [];
    const userID = req.params.id;
  
    let {password} = req.body;
  
    if (password.length < 6) {
      errors.push({msg: 'Password must be at least 6 characters'});
    }
    if (errors.length > 0) {
      res.json({success: false, msg: errors});
    } else {
      const query = {_id: userID};
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(password, salt, null, (err, hash) => {
          if (err) throw err;
          password = hash;
          const newvalues = {$set: {resetPass: false, password: password}};
          User.updateOne(query, newvalues, function(err, usr) {
            if (err) {
              res.json({success: false, msg: err});
            }
            res.json({success: true});
          });
        });
      });
    }
  });
  
  router.post('/forgotpassword', (req, res) => {
    const {email} = req.body;
    const errors = [];
  
    if (!email) {
      errors.push({msg: 'Please enter all fields'});
    }
    User.find({email: email}).then((user) => {
      if (user.length != 1) {
        errors.push({msg: 'Email Address does not exist'});
      }
      if (errors.length > 0) {
        res.json({success: false, errors: errors});
      } else {
        // create reusable transporter object using the default SMTP transport
        const transporter = nodemailer.createTransport(smtpConf);
  
        const query = {_id: user[0]._id};
        const newvalues = {$set: {resetPass: true}};
        User.updateOne(query, newvalues, function(err, usr) {});
  
        // don't send emails if it is in demo mode
        if (process.env.DEMO != 'yes') {
          // send mail with defined transport object
          transporter.sendMail({
            from: '"Creative Tim" <' + smtpConf.auth.user + '>', // sender address
            to: email, // list of receivers
            subject: 'Creative Tim Reset Password', // Subject line
            // eslint-disable-next-line max-len
            html: '<h1>Hey,</h1><br><p>If you want to reset your password, please click on the following link:</p><p><a href="' + 'http://localhost:3000/auth/confirm-password/' + user._id + '">"' + 'http://localhost:3000/auth/confirm-email/' + user._id + + '"</a><br><br>If you did not ask for it, please let us know immediately at <a href="mailto:' + smtpConf.auth.user + '">' + smtpConf.auth.user + '</a></p>', // html body
          });
          res.json({success: true});
        }
        res.json({success: true, userID: user[0]._id});
      }
    });
  });

  router.post('/confirm/:id', (req, res) => {
    const userID = req.params.id;
  
    const query = {_id: userID};
  
    const newvalues = {$set: {accountConfirmation: true}};
    User.updateOne(query, newvalues, function(err, usr) {
      if (err) {
        res.json({success: false});
      }
      res.json({success: true});
    });
  });

  router.post('/checkSession', reqAuth, function(req, res) {
    res.json({success: true});
  });
  
  router.post('/logout', reqAuth, function(req, res) {
    const token = req.body.token;
    activeSession.deleteMany({token: token}, function(err, item) {
      if (err) {
        res.json({success: false});
      }
      res.json({success: true});
    });
  });

module.exports = router;