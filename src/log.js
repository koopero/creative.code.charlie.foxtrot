module.exports = function ( {
  file = 'data/log.tsv'
} = {} ) {
  const loopin = this 
  const { H } = loopin

  const fs = require('fs-extra')
  const path = require('path')
  const logFile = loopin.filesResolve( file )
  const logDir = path.dirname( logFile )
  fs.ensureDirSync( logDir )
  let logStream = fs.createWriteStream( lofFile, { flag: 'a' } )
  let cursor = new (H.Cursor)( {
    listening: true,
    path: '/',
    delay: 30,
    onDelta: ( value, path ) => {
      let now = new Date()
      let logline = now.toJSON()+'\t'+JSON.stringify( value )+'\r\n'
      logStream.write( logline)
    }
  } )
}
