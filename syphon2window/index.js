// This is a quick and dirty util to put the syphon output of C3F into a window.
if ( module == require.main )
  run()
  .catch( ( err ) => {
    console.error( err )
    process.exit( 1 )
  })
else 
  module.exports = run

async function run() {
  const _ = require('lodash')
  let windowName = _.trim( process.argv[2] )
  const windows = {
    Charlie: { x: 1, y: 1 },
    Whiskey: { x: -1, y: 1 },
    Tango: { x: 1, y: -1 },
    Foxtrot: { x: -1, y: -1 },
  }
  const window = windows[windowName] || windows.Charlie

  require('loopin-base').open( __dirname )
  .then( ( loopin ) => {
    loopin.patch( windowName, 'window/title')
    loopin.patch( window, 'render/crop/transform')
  } )
}

