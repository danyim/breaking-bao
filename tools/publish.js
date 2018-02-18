const path = require('path')
const FtpDeploy = require('ftp-deploy')
const build = require('./build')
const task = require('./task')
const config = require('./config')

const ftp = new FtpDeploy()

const ftpConfig = {
  username: config.ftp.username,
  password: config.ftp.password,
  host: config.ftp.host,
  port: config.ftp.port,
  localRoot: path.resolve(__dirname, '../public'),
  remoteRoot: config.ftp.remoteRoot
}

module.exports = task('deploy', () =>
  Promise.resolve().then(() => build()).then(() =>
    ftp.deploy(ftpConfig, err => {
      if (err) {
        console.log(err)
      } else {
        console.log('finished')
      }
      process.exit()
    })
  )
)
