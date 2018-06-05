const FtpDeploy = require('ftp-deploy')
const config = require('./publish.config.js')
const ftp = new FtpDeploy()

const defaultConfig = {
  localRoot: `${__dirname}/build`,
  include: ['*', '**/*', '.*'],
  remoteRoot: '/public_html',
  exclude: [],
  deleteRoot: true
}

const combinedConfig = {
  ...defaultConfig,
  ...config
}

ftp
  .deploy(combinedConfig)
  .then(res => console.log('Upload complete!'))
  .catch(err => console.log(err))
