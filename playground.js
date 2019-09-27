function randomPixels( {
  width = 8,
  height = 8
} ) {
  const Colour = require('deepcolour')

  let colour = new Colour('green')
  let data = ''
  let rand1 = Math.random
  let rand2 = () => Math.random() * 2 - 1
  const epsilon = 0.05
  let noise = 0.02
  let entropify = ( value, amount ) =>
    amount <= 0 ? value :
    rand1() < epsilon ? ( value + rand2() ) % 1 :
    value + rand2() * noise

  for ( let y = 0; y < height; y ++ ) {
    for ( let x = 0; x < width; x ++ ) {
      let pixel = colour.clone()
      pixel.hue = entropify( pixel.hue )
      pixel.val = entropify( pixel.val )
      pixel.sat = entropify( pixel.sat )

      data += pixel.toHexString( 4 )
      data += ' '
    }
    data += '\r\n'
  }

  return { width, height, data, format: 'hex', channels: 'rgba' }
}

console.log( randomPixels({}))