const environment = {
    development: {
      isProduction: false,
      apiUrl: 'http://s2.staging-host.com/birddog-express/api/'
    },
    production: {
      isProduction: true,
      apiUrl: 'http://s2.staging-host.com/birddog-express/api/'
    }
  }[process.env.NODE_ENV || 'development'];
  
  let AuthToken;
  
  module.exports = Object.assign(
    {},
    environment
  );
  