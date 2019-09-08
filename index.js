async function run() {
  require('loopin-base').open( __dirname )
  .then( ( loopin ) => {
    // Your JS here.
  } )
}

if ( module == require.main )
  run()
else 
  module.exports = run