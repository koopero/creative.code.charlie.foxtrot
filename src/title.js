module.exports = function ( {
} = {} ) {
  const loopin = this 
  const { H } = loopin
  const onDelta = ( value, path ) => {
    let text = ` : ${value} : `
    loopin.patch( text, 'text/Charlie_text/text' )
  }

  const cursor = new (H.Cursor)( {
    listening: true,
    path: '/loopin/render/Charlie/texture/src/buffer',
    onDelta
  } )
}
