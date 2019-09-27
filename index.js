async function run() {
  require('loopin-base').open( __dirname )
  .then( ( loopin ) => {
    loopin.plugin( require('./src/entropy.js') )
    loopin.plugin( require('./src/log.js') )
  } )
}

if ( module == require.main )
  run()
else 
  module.exports = run