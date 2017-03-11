const path = require('path');
// const firebase = require('firebase-tools');
const FtpDeploy = require('ftp-deploy');
const build = require('./build');
const task = require('./task');
const config = require('./config');

const ftp = new FtpDeploy();

// // Build and deploy the app to Firebase
// module.exports = task('deploy', () => Promise.resolve()
//   .then(() => build())
//   .then(() => firebase.login({ nonInteractive: false }))
//   .then(() => firebase.deploy({
//     project: config.project,
//     cwd: path.resolve(__dirname, '../'),
//   }))
//   .then(() => { setTimeout(() => process.exit()); }));

const ftpConfig = {
  username: config.ftp.username,
  password: config.ftp.password,
  host: config.ftp.host,
  port: config.ftp.port,
  localRoot: path.resolve(__dirname, '../public'),
  remoteRoot: config.ftp.remoteRoot,
};

module.exports = task('deploy', () => Promise.resolve()
  .then(() => build())
  .then(() => ftp.deploy(ftpConfig, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('finished');
    }
    process.exit();
  })));
  // .then(() => { setTimeout(() => ); }));
