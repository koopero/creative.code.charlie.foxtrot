module.exports = async function ( {
  rate = 10,
} = {} ) {
  const loopin = this 
  const _ = require('lodash')
  const path = require('path')
  const fs = require('fs')
  const YAML = require('js-yaml')
  const { random, floor } = Math
  let file = path.resolve( __dirname, '..', 'entropy.yaml' )
  let spec = fs.readFileSync( file )
  spec = YAML.load( spec )

  let delta = 0
  let cursor = new (loopin.H.Cursor)( {
    path: '/entropy/',
  } )

  
  loopin.on('frame', onFrame )

  

  function onFrame( frame ) {
    delta += parseFloat( frame.delta ) || 0 

    if ( delta > 1/rate ) {
      randomize( delta )
      delta = 0
    }
  }

  // setInterval( randomize, 2000 )


  

  function randomize( delta ) {
    const amount = parseFloat( cursor.get() ) || 0
    const root = loopin.H.root 

    if ( !amount )
      return

    const maybeSet = ( value, path ) => {
      if ( random() > amount * delta ) 
        return

      // console.log( path, '=', value )
      root.set( value, path )
    }

    let imageOptions = _.map( root.get('upload'), ( img ) => img && img.src )
    imageOptions = _.filter( imageOptions )

    _.map( spec.floats, ( number, path ) => {
      let { min = 0, max = 1 } = number || {}
      let value = min + ( max - min ) * random() 
      maybeSet( value, path ) 
    } )
    _.map( spec.options, ( list, path ) => {
      list = _.filter( spec.lists[list] )
      let index = floor( random() * list.length )
      maybeSet( list[index], path )
    })
    _.map( spec.pixels, ( pixels, path ) => {
      let existing = loopin.H.root.get( path +'/data' )
      // console.log( existing )

      let { width, height } = pixels

      maybeSet( randomPixels({ width, height } ), path )
    } )
    _.map( spec.images, ( image, path ) => {
      let list = imageOptions
      if ( !list.length )
        return 
      let index = floor( random() * list.length )
      maybeSet( list[index], path )
    })
  }
}


function randomPixels( {
  width = 8,
  height = 8
} ) {
  const Colour = require('deepcolour')
  let rand1 = Math.random

  let colour = new Colour('green')
  colour.value = 0.8
  colour.saturation = 0.9
  colour.hue = rand1()
  let data = ''

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
      pixel.alpha = entropify( pixel.alpha )


      data += pixel.toHexString( 4 )
      data += ' '
    }
    data += '\r\n'
  }

  return { width, height, data, format: 'hex', channels: 'rgba' }
}