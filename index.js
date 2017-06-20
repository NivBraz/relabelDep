require('./database');
require('./server');

// const   express     = require('express');
//         app         = express(),
//         // data        = require('./data/securitySettingsDB.json'),
//         port        = process.env.PORT || 3000,
//         bodyParser  = require('body-parser'),
//         // methods     = require('./modules');

// // var method = methods();
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true }));

// // app.use(express.static('public'));
// // app.get('/', (req,res) => {
// //   console.log('Trace: API Page');
// //   res.sendFile(__dirname + '/api/index.html');
// // });

// // app.post('/lo/', (req, res) => {
// //   res.setHeader('Debug', 'getAllUsers was reached');
// //   method.getAllUsers().then(
// //     (users) => {
// //         res.status(200).json(users);
// //     },  (error) => {
// //         console.log(error);
// //         res.status(200).json(error);
// //     }
// //   );
// // });
// //
// // app.get('/getUserById/:user_id', (req, res) => {
// //   res.setHeader('Debug', 'getUserById was reached');
// //   res.setHeader('Debug-info', 'user_id: ' + req.params.user_id);
// //   method.getUserById(req.params.user_id).then(
// //     (user) => {
// //       res.status(200).json(user);
// //     },  (error) => {
// //       console.log(error);
// //       res.status(200).json(error);
// //     }
// //   );
// // });
// //
// // app.post('/getUserById/', (req, res) => {
// //   res.setHeader('Debug', 'getUserById was reached');
// //   var usrId = req.body.user_id;
// //   res.setHeader('Debug-info', 'user_id: ' + usrId);
// //   method.getUserById(usrId).then(
// //     (user) => {
// //       res.status(200).json(user);
// //     },  (error) => {
// //       console.log(error);
// //       res.status(200).json(error);
// //     }
// //   );
// // });
// //
// app.post('/login/', (req, res) => {
//   res.setHeader('Debug', 'login was reached');
//   var username = req.body.username;
//   var password = req.body.password;
//   res.setHeader('Debug-info1', 'username: ' + username);
//   res.setHeader('Debug-info2', 'password: ' + password);
//   method.getAlertsDevices(loginAlerts, minimumDevices).then(
//     (users) => {
//       res.status(200).json(users);
//     },  (error) => {
//       console.log(error);
//       res.status(200).json(error);
//     }
//   );
// });
// //
// // app.all('*', (req, res) => {
// //   res.status(200).json({"Error": "Request route didn\'t match any option!",
// //     "Tip": "Check the service\'s API and see the supported routes"});
// // });

// app.listen(port);
// console.log(`listening on port ${port}`);
