#!/usr/bin/env node

go()

async function go() {
  const loopin = require('loopin').global()
  loopin.plugin( require('loopin-native'), {
    useEnv: true,
    verbose: true,
  } ) 

  loopin.patchYAML(`
    show/buffer: syphon
    syphon/syphon:
      mode: client
  `)

  await loopin.bootstrap()
}