# Creative Code Charlie Foxtrot

``` control
type: debug
```

# Alfa

``` control
path: /loopin/uniform/vec4/Alfa
sub:
  type: float

subs:
  x: 
    colour: red
  y: 
    colour: green
  z: 
    colour: blue
  w: 
    colour: yellow
```

# Bravo
``` control
path: /loopin/uniform/vec4/Alfa
sub:
  type: float
  min: -1

subs:
  x: 
    colour: red
  y: 
    colour: green
  z: 
    colour: blue
  w: 
    colour: yellow
```

# Charlie

``` control
path: /loopin/show
subs:
  buffer:
    type: bufferOptions
  alpha:
    options:
      - show
      - ignore
      - multiply
      - divide
```

``` control
path: /loopin/show/buffer
options:
  - India_loader
```

``` control
path: /loopin/render/Charlie/texture/src
subs:
  buffer:
    type: bufferOptions
```



# Delta

``` control
path: /loopin/pixels/Delta
type: pixels
width: 8
height: 8
format: rgba
sliders: hsv a
```

# Echo

``` control
path: /loopin/render/Foxtrot/layer/Echo
type: layer
```

# Foxtrot

``` control
path: /loopin/render/Foxtrot/texture/One
type: render
```

# Golf

``` control
path: /loopin/pixels/Golf
type: pixels
width: 8
height: 1
format: hex
channels: rgba
sliders: hsv a
```

# Hotel

``` control
path: /loopin/pixels/Hotel
type: pixels
width: 6
height: 2
format: rgba
sliders: hsv a
```

# India

``` control
path: /loopin/image/India_loader
type: options
source: /upload
sourceMode: value
```

``` control
path: /logic/India
type: upload
```

# Juliette
``` control
path: /loopin/pixels/Juliette
type: pixels
width: 4
height: 4
format: rgba
sliders: rgb hsv a
```

# Kilo

``` control
path: /loopin/kinect/Kilo
type: kinect
subs:
  tilt:
    type: number
    min: -30
    max: 30

  output:
    type: options
    options:
      - both
      - depth
      - video
      - alpha

  led:
    type: options
    options:
      - default
      - off
      - green
      - red
      - yellow
      - blinkGreen
      - blinkYellowRed

  infrared:
    type: toggle

  registration:
    type: toggle
```

# Lima

``` control
path: /loopin/render/Lima
subs:
  float/frequency:
    type: float
    unit: hz
    pow: 3
  
  float/duty:
    type: float
    unit: '%'
```

# Mike

``` control
path: loopin/waveform/Mike
subs:

  duration: 
    type: float
    min: 0 
    max: 15
    unit: s
    pow: 2

  gain:
    type: float
    min: 0.1
    max: 20
    unit: x
    pow: 3

  squelch:
    type: float
    min: 0
    max: 0.1
    unit: '%'
```

# November

``` control
path: loopin/shader/November
type: shader
```

# Oscar

``` control
path: loopin/shader/Oscar
type: shader
```

# Papa

``` control
path: loopin/shader/Papa
type: shader
```

# Quebec

``` control
path: loopin/shader/Quebec
type: shader
```

# Romeo

``` control
path: loopin/shader/Romeo
type: shader
```

# Sierra

``` control
path: /loopin/render/Sierra/shader
title: Shader
hide: path
type: shaderSelect
colour: cyan
```

``` control
path: /loopin/render/Sierra/texture/One
title: Texture One
hide: path
type: texture
colour: yellow
```

``` control
path: /loopin/render/Sierra/texture/Two
title: Texture Two
hide: path
type: texture
colour: yellow
```

``` control
path: /loopin/render/Sierra
type: backgroundSettings
```

# Tango

``` control
path: /loopin/render/Tango/shader
title: Shader
hide: path
type: shaderSelect
colour: cyan
```

``` control
path: /loopin/render/Tango/texture/One
title: Texture One
hide: path
type: texture
```

``` control
path: /loopin/render/Tango/texture/Two
title: Texture Two
hide: path
type: texture
```

``` control
path: /loopin/render/Tango
type: renderSettings
```

# Uniform

``` control
path: /loopin/uniform/vec4/Uniform
sub:
  type: float

subs:
  x: 
    colour: red
  y: 
    colour: green
  z: 
    colour: blue
  w: 
    colour: yellow
```

# Victor

``` control
path: /loopin/render/Victor/shader
title: Shader
hide: path
type: shaderSelect
colour: cyan
```

``` control
path: /loopin/render/Victor/texture/One
title: Texture One
hide: path
type: texture
colour: green
```

``` control
path: /loopin/render/Victor/texture/Two
title: Texture Two
hide: path
type: texture
colour: green
```

``` control
path: /loopin/render/Victor
type: backgroundSettings
```

# Whiskey

``` control
path: /loopin/render/Whiskey/shader
title: Shader
hide: path
type: shaderSelect
colour: cyan
```

``` control
path: /loopin/render/Whiskey/texture/One
title: Texture One
hide: path
type: texture
```

``` control
path: /loopin/render/Whiskey/texture/Two
title: Texture Two
hide: path
type: texture
```

``` control
path: /loopin/render/Whiskey
type: renderSettings
```


# Xray

``` control
path: /loopin/geometry/Xray
type: geometryPlane
```

# Yankee

``` control
path: /loopin/geometry/Yankee
type: geometrySphere
```

# Zulu

``` control
path: /loopin/geometry/Zulu
type: geometryPlane
```