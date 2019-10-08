# Creative Code Charlie Foxtrot

Welcome to *C3F*, presented by [Vancouver Creative Tech](https://www.meetup.com/Vancouver-Creative-Technology/). This is an experiment in the ad-hoc, collaborative creation of abstract digital art.

## Mission

Your mission, as a *C3F* participant, is the iterative, tasteful improvement 

## Machine

The core of *C3F* is configurable rendering engine. It contains 26 units, designated in NATO phonetic alphabet from [Alfa](#alfa) to [Zulu](#zulu). Each unit has its own page of *Controls* to control its operation. Use the navigation as the top or side of your screen to switch between control pages. Each unit is also represented as a GPU texture, and can be used in combination with others for effect. 

---
### Controls

Controls are interfaces to *C3F* parameters. They are mostly selectors and sliders that change the parameters and routing of *C3F* data. For instance, the control below chooses which texture is displayed on the shared viewport [Charlie](#charlie). Please feel free to change every control in the system to experiment with new looks! Controls are shared by everyone, so be mindful of others when resources need to be shared. 

---
``` control
type: preview
```

### Inputs

- [Alfa](#alfa), [Bravo](#bravo) and [Uniform](#uniform) are uniform inputs that flavour other processes.
- [India](#india) and [Juliette](#juliette) are image inputs. Upload your own imagery to help build C3F.
- [Delta](#delta), [Golf](#golf) and [Hotel](#hotel) are pixel inputs, used to paint low resolution gradients and patterns.
- [Lima](#lima) and [Yankee](#yankee) are configurable function generators.
- [Mike](#mike) is an audio visualization.
- [Kilo](#kilo) is a Kinect camera.

---
### Processes

In *C3F*, every symbol can be used as a live input to a selection of image effects. By combining as changing the parameters fo these effects, new imagery can be created.

- [Echo](#echo) is a cumulative feedback effect.
- [November](#november) is a displacement effect.
- [Oscar](#oscar) is the kaleidoscope Darren asked for.
- [Papa](#papa) is a little fake particle system.
- [Quebec](#quebec) is a colour combination effect.
- [Romeo](#romeo) converts things to radial coordinates.
- [Sierra](#sierra) renders a sphere.
- [Victor](#victor) combines three textures.
- [Zulu](#zulu) used pixels as colour maps.

---
### Outputs

- [Charlie](#charlie) is a shared main view screen, used for previewing other symbols. Use *Charlie* to channel-flip between render units.
- [Whiskey](#whiskey), [Tango](#tango) and [Foxtrot](#foxtrot) are main output screens. They each select a single texture as part of the primary result of *C3F*.

---
### Shaders

The output of *C3F* can be radically altered by directly editing the GLSL shader code. To attain access to shader files, speak to the experiment organizer.

# Alfa

*Alfa* is a vector uniform with a length of 4. It is represented visually by 4 RGBY bars. It's value is used as flavour by some processes. 

``` control
path: /loopin/uniform/vec4/Alfa
title: Alfa
hide: path
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
---
``` control
type: preview
options:
  - Zulu
  - Alfa
  - Bravo
```

# Bravo

*Bravo* is a vector uniform with a length of 4. It is represented visually by radial gradient. It's value is used as flavour by some processes. 

---
``` control
path: /loopin/uniform/vec4/Bravo
title: Bravo
hide: path
sub:
  type: float
  min: -1

subs:
  x: 
  y: 
  z: 
  w: 
```
---
``` control
type: preview
options:
  - Alfa
  - Bravo
  - Charlie
```

# Charlie

*Charlie* is the main viewport of C3F. It acts as a master composite for project output. It displays [Whiskey](#whiskey), [Tango](#tango) and [Foxtrot](#foxtrot) as well as a configurable preview function. *Charlie* is used as a shared resource to quickly channel flip between textures.

---

``` control
path: /loopin/show/buffer
hide: path
title: Main Screen
colour: red

options:
  - title: Charlie
    value: Charlie_zoom
  - title: CWTF
    value: Charlie
```

``` control
path: /loopin/osd/enabled
type: toggle
colour: red
title: FPS Display
hide: path
```

``` control
type: preview
```
``` control
type: charlieFilter
```

# Delta

*Delta* is pixel input. It allows for the painting of an 8x6 pixel image. Depending on *Filter*, *Delta* may be used as a gradient or grid.

---
``` control
path: /loopin/pixels/Delta
hide: path
type: pixels
width: 8
height: 6
channels: rgba
sliders: hsv a
```
---
``` control
type: preview
options:
  - Charlie
  - Delta
  - Echo
```
``` control
type: charlieFilter
```
# Echo

*Echo* is a simple feedback effect. 

``` control
path: /loopin/render/Echo/texture
type: oneTexture
```
``` control
type: Bravo
```
---
``` control
type: preview
options:
  - Delta
  - Echo
  - Foxtrot
```

# Foxtrot

*Foxtrot* is a main experiment output, represented by a single texture selection. Along with [Whiskey](#whiskey) and [Tango](#tango), *Foxtrot* contributes to the permanent record of the experiment.

``` control
path: /loopin/render/Foxtrot/texture
type: oneTexture
```
---
``` control
type: preview
options:
  - Echo
  - Foxtrot
  - Golf
```


# Golf

*Golf* is pixel input. It allows for the painting of an 4x3 pixel image. Depending on *Filter*, *Delta* may be used as a gradient or grid.

---
``` control
path: /loopin/pixels/Golf
type: pixels
hide: path
width: 4
height: 3
format: hex
channels: rgba
sliders: hsv a
```
---
``` control
type: preview
options:
  - Foxtrot
  - Golf
  - Hotel
```
``` control
type: charlieFilter
```

# Hotel


*Hotel* is pixel input. It allows for the painting of an 8x1 pixel image. Depending on *Filter*, *Delta* may be used as a gradient or grid.

``` control
path: /loopin/pixels/Hotel
type: pixels
width: 8
height: 1
channels: rgba
sliders: hsv a
```
---
``` control
type: preview
options:
  - Golf
  - Hotel
  - India
```
``` control
type: charlieFilter
```
# India

*India* is an image loader. Use the upload function to contribute imagery to C3F, or select uploaded images. Images will be cropped to experiment aspect ratio. *Please be respectful and courteous when uploading images.*

---

``` control
path: /logic/India
hide: path
title: Upload
type: upload
```

``` control
path: /loopin/image/India_loader
title: Select 
hide: path
colour: green
type: options
source: /upload
sourceMode: value
```
---
``` control
path: /loopin/render/India/float
colour: cyan
title: Jitter
hide: path
subs:
  zoom:
    type: float
    min: 0
    max: 1
```
---
``` control
type: preview
options:
  - Hotel
  - India
  - Juliette
```

# Juliette
*Juliette* is an image loader. Use the upload function to contribute imagery to C3F, or select uploaded images. Images will be cropped to experiment aspect ratio. *Please be respectful and courteous when uploading images.*

---

``` control
path: /logic/Juliette
hide: path
title: Upload
type: upload
```
``` control
path: /loopin/image/Juliette_loader
title: Select 
hide: path
colour: green
type: options
source: /upload
sourceMode: value
```
---
``` control
path: /loopin/render/Juliette/float
colour: cyan
title: Jitter
hide: path
subs:
  zoom:
    type: float
    min: 0
    max: 1
```
---
``` control
type: preview
options:
  - India
  - Juliette
  - Kilo
```

# Kilo

*Kilo* is a XBox 360 Kinect. 

``` control
path: /loopin/kinect/Kilo
title: Kinect Settings
type: group
hide: path
subs:
  infrared:
    type: toggle

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

  tilt:
    type: number
    min: -30
    max: 30



```
---
``` control
type: preview
options:
  - Juliette
  - Kilo
  - Lima
```

# Lima

*Lima* is a 2D low-frequecy sin wave oscillator with colour channel phasing.

---
``` control
path: /loopin/render/Lima/float
title: Lima
colour: magenta
hide: path
subs:
  rotation:
    type: number
    unit: deg
    direction: right
    min: -180
    max: 180
  
  zoom:
    type: number
    min: -2
    max: 2

  frequency:
    type: float
    unit: hz
    max: 8
    min: 0.01
    pow: 3

  split:
    type: float
    max: 1
```
---
``` control
type: preview
options:
  - Kilo
  - Lima
  - Mike
```
---
``` control
type: shaderError
path: /loopin/shader/Lima/stderr
```

# Mike

*Mike* is a very simple audio visualisation. It renders a 1-dimensional image derived from an audio input ( ambient music ) over a period of `duration`. 

``` control
path: loopin/waveform/Mike_input
title: Audio Input Settings
hide: path
subs:
  duration: 
    type: float
    min: 0.125
    max: 3
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
``` control
path: /loopin/render/Mike/texture/One/filter
hide: path
title: Filter
options:
  - linear
  - nearest
```
``` control
path: /loopin/buffer/Mike_input/width
hide: path
title: Buffer Size
options:
  - 16
  - 32
  - 64
  - 128
  - 256
```




``` control
path: /loopin/render/Mike/transform
title: Transform
hide: path
colour: cyan
subs:
  rotate:
    type: float
    direction: right
    unit: deg
    max: 360
  x:
    type: float
    min: -0.25
    max: 0.25
    direction: right
  y:
    type: float
    min: -0.25
    max: 0.25
    direction: down
```
---
``` control
type: preview
options:
  - Lima
  - Mike
  - November
```


# November

November is a displacement shader. The source coordinates of texture `One` are altered by `Two`, in combinations with uniforms from `Bravo`.

---

``` control
path: loopin/render/November/texture
type: twoTextures
```
``` control
path: /loopin/uniform/vec4/Bravo
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

---
``` control
type: preview
options:
  - Mike
  - November
  - Oscar
```
---
``` control
type: shaderError
path: /loopin/shader/November/stderr
```


# Oscar

Oscar is a kaliedascope type effect.

``` control
path: loopin/render/Oscar/texture
type: oneTexture
```
---
``` control
type: preview
options:
  - November
  - Oscar
  - Papa
```
---
``` control
type: shaderError
path: /loopin/shader/Oscar/stderr
```

# Papa

*Papa* is a stateless particle system, splitting a single Texture into many quads and projecting them into 3D space.

---
``` control
path: loopin/render/Papa/layer/over/texture
type: oneTexture
```

``` control
path: /loopin/render/Papa/layer/over/blend
type: blendsOnBlack
```

``` control
path: /loopin/camera/Papa
type: cameraForeground
```

``` control
path: /loopin/render/Papa/layer/over/transform
type: transform
```

``` control
colour: yellow
title: Geometry
hide: path
path: /loopin/mesh/Papa/plane
subs:
  cols:
    type: number
    quant: 1
    digits: 0

    min: 1
    max: 60
  rows:
    type: number
    quant: 1
    digits: 0
    min: 1
    max: 60
```
``` control
path: /loopin/render/Papa/texture
type: backgroundTexture
```
``` control
type: Uniform
```

---
``` control
type: preview
options:
  - Oscar
  - Papa
  - Quebec
```

``` control
path: /loopin/shader/Papa/stderr
type: shaderError
```

# Quebec

Quebec mixes two textures together in `HSV` colour space;

``` control
path: loopin/render/Quebec/texture
type: twoTextures
```
---
``` control
type: preview
options:
  - Papa
  - Quebec
  - Romeo
```
---
``` control
type: shaderError
path: /loopin/shader/Quebec/stderr
```

# Romeo

*Romeo* converts textures into a radial coordinate space.

``` control
path: loopin/render/Romeo/texture
type: oneTexture
```
---
``` control
type: preview
options:
  - Quebec
  - Romeo
  - Sierra
```
---
``` control
type: shaderError
path: /loopin/shader/Romeo/stderr
```

# Sierra

Sierra renders a rotating sphere, using texture `One` on the sphere, with texture `Two` as a background.

``` control
path: /loopin/render/Sierra/layer/over/texture
type: foregroundTexture
```
``` control
path: /loopin/render/Sierra/layer/over/blend
type: blendsOver
```

``` control
path: /loopin/camera/Sierra
type: cameraForeground
```
``` control
path: /loopin/render/Sierra/layer/over/transform
type: transform
```
``` control
path: /loopin/render/Sierra/texture
type: backgroundTexture
```


---
``` control
type: preview
options:
  - Romeo
  - Sierra
  - Tango
```
---
``` control
type: shaderError
path: /loopin/shader/Sierra/stderr
```

# Tango

*Tango* is a main display, similar to [Whiskey](#whiskey) and [Foxtrot](#foxtrot).

``` control
path: /loopin/render/Tango/texture
type: oneTexture
```
---
``` control
type: preview
options:
  - Sierra
  - Tango
  - Uniform
```

# Uniform

*Uniform* is a vector uniform with a length of 4. It is represented visually by a solid colour. It's value is used as flavour by other processes. 

---
``` control
type: Uniform
```
---
``` control
type: preview
options:
  - Tango
  - Uniform
  - Victor
```

# Victor

*Victor* is three-way texture combiner. It mixes between *One* and *Two*, using bias from *Three*.

``` control
path: /loopin/render/Victor/texture
type: threeTextures
```
---
``` control
type: preview
options:
  - Uniform
  - Victor
  - Whiskey
```
---
``` control
type: shaderError
path: /loopin/shader/Victor/stderr
```

# Whiskey

*Whiskey* is a main display, similar to [Tango](#tango) and [Foxtrot](#foxtrot). Its output is combined into the main output of the experiment.

``` control
path: /loopin/render/Whiskey/texture
type: oneTexture
```
---
``` control
type: preview
options:
  - Victor
  - Whiskey
  - Xray
```
# Xray

*Xray* combines two textures, with a per-channel mix flavoured by [Bravo](#bravo).

``` control
path: /loopin/render/Xray/texture
type: twoTextures
```
``` control
type: Uniform
```
---
``` control
type: preview
options:
  - Whiskey
  - Xray
  - Yankee
```
---
``` control
type: shaderError
path: /loopin/shader/Xray/stderr
```

# Yankee

*Yankee* is a simplex noise generator, producing trippy, cloud-like patterns. Shout out to Ken Perlin, VCT speaker, each noise function better than the last!

---
``` control
path: /loopin/render/Yankee/float
title: Yankee
hide: path
colour: magenta
subs:
  rotation:
    type: number
    unit: deg
    direction: right
    min: -180
    max: 180
  
  zoom:
    type: number
    min: -2
    max: 2

  frequency:
    type: float
    unit: hz
    max: 8
    min: 0.01
    pow: 3

  split:
    type: float
    max: 1
```
---
``` control
type: preview
options:
  - Xray
  - Yankee
  - Zulu
```
---
``` control
type: shaderError
path: /loopin/shader/Yankee/stderr
```
# Zulu

*Zulu* maps from single Texture, to a set of colours from `Pixels`, using `Uniform` as flavour. This allows solarization and other effects.


*See pixels elements [Delta](#delta), [Golf](#golf), [Hotel](#hotel).*

---
``` control
path: /loopin/render/Zulu/texture/Two/buffer
type: pixelsSelect
```
``` control
path: /loopin/render/Zulu/texture
type: oneTexture
```
``` control
type: Uniform
```
---
``` control
type: preview
options:
  - Yankee
  - Zulu
  - Alfa
```
---
``` control
type: shaderError
path: /loopin/shader/Zulu/stderr
```

# Entropy

**Entropy must be disabled during experiment!!** *Please do not touch!*

---
``` control
type: entropy
```

``` control
path: /loopin/show/buffer
hide: path
title: Main Screen
colour: red

options:
  - Charlie
  - Charlie_zoom
  - India_loader
  - India
  - Oscar
```