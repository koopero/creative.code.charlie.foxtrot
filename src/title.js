module.exports = function ( {
} = {} ) {
  const loopin = this 
  const { H } = loopin
  const onDelta = ( value, path ) => {
    console.log( "TITLE", value )
    let text = ` : ${value} : `
    loopin.patch( text, 'text/Charlie_text/text' )
  }

  onDelta( loopin.)

  const cursor = new (H.Cursor)( {
    listening: true,
    path: '/loopin/render/Charlie/texture/src/buffer',
    onDelta
  } )
}
