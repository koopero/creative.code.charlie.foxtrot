async function run() {
  require('loopin-base').open( __dirname )
  .then( ( loopin ) => {
    loopin.plugin( require('./src/title.js') )
    loopin.plugin( require('./src/log.js') )
    loopin.plugin( require('./src/entropy.js') )
  } )
}

if ( module == require.main )
  run()
  .catch( ( err ) => {
    process.exit( 1 )
  })
else 
  module.exports = run