<p align="center">
  <img src="https://github.com/danyim/breaking-bao/raw/master/src/assets/images/logo.png" alt="Breaking Bao Logo" align="center" height="200" />
</p>

# Breaking Bao Website

Basic static site with Google Maps, a Twitter Feed, and Material Design lite. Scaffolded with [**React Static Boilerplate**](https://github.com/kriasoft/react-static-boilerplate).

### Installation

- `yarn`

### Development

- `yarn start`

### Building

- `yarn build`

### Deployment via FTP

- `cp publish.config.sample.js publish.config.js`
- Edit `publish.config.js` with your FTP credentials

```bash
# Upload everything in /build
yarn run ftp
# Or build then upload
yarn build && yarn run ftp
```

### License

See [LICENSE.txt](https://github.com/danyim/breaking-bao/blob/master/LICENSE.txt) file.
