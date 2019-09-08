Creative Code Charlie Foxtrot ( shorthand C3F ) is an experiment in realtime collaborative visualization software development. The intention is for a group of people to simultaneously design, develop, tune and colour a video artwork rendered in real time on multiple screens. C3F is a participatory event, requiring the skills and minds of the Vancouver Creative Technology community. Specifically, at least 3 coders with skills in GLSL will livecode C3F and act as hubs for visual design. Everyone within wifi range be able to access and control the piece, allowing all participants with smart devices to alter and improve the art simultaneously. 

This experiment is inspired by previous creative coding relays, but adds a new level of parallelism and orthogonality. To my knowledge, this experiment is unprecedented.

# Mission
Attempt to create a singular, generative, multiscreen art piece using ad hoc collaboration. The goal for each participant is tasteful improvement to the state and configuration of an abstract rendering machine, described below. 

The result will be a record of the state of the piece, represented as git commits, video recordings and logs of property changes. All results will be released as open source.

# Participation

## Code

Edit GLSL files directly and define the root mathematics of the piece. 

## Control

Change high level parameters of result over web instance. 

## Converse

Hang out, observe, converse, suggest and learn.

# Architecture

The language of C3F will be abstract symbols based on the NATO phonetic alphabet. Each symbol will represent a shader, uniform, video buffer, layer or concept. For example, *Hotel* represents a 8x1 Palette.  

Each symbol will have a control panel that allows properties and connections to be configured. For instance, the Layer *Sierra* will use geometry from either *Xray*, *Yankee* or *Zulu*.

The most profound interaction between symbols in the choice of Buffer input to the uniform Alfa or Bravo, as applied to a Layer or Render symbol. Any Buffer or Palette may be used in combination with another, in combination with a Shader, to generate, manipulate and combine images. In this way, the architecture of the rendering machine is defined by configuration. Essentially, anything can be used as an input or operand to anything else.

The architecture of C3F is represented in YAML file in the `preset/` dir of this repo. Although it is accessible, it is not intended to be edited during the duration of the experiment. 

## Symbols

| Symbol     | Type    | Description |
| -----------|---------|-------------|
| *Alfa*       | Uniform | Abstract `vec4` Uniform, represented by 4 sliders in `0:1` range.
| *Bravo*      | Uniform | Abstract `vec4` Uniform, represented by 4 sliders in `-1:+1` range.
| *Charlie*    | Render  | Fixed composite of output renders, used for projection and recording.
| *Delta*      | Palette | 8x8 HSVA, intended for realtime touch paint.
| *Echo*       | Layer   | Overlay over *Foxtrot*
| *Foxtrot*    | Render  | Main render area, displayed with projector and recorded.
| *Golf* | Palette
| *Hotel* | Palette 
| *India* | Buffer | Uploadable image input.
| *Juliett* | Palette 
| *Kilo* | Buffer | Kinect RGB+D input, with camera facing event.
| *Lima* | Buffer | Preconfigured LFO.
| *Mike* | Buffer | Audio input from ambient music.
| *November* | Shader |
| *Oscar* |
| *Papa* |
| *Quebec* |
| *Romeo* |
| *Sierra* | Layer | Overlay layer over *Tango*
| *Tango* | Render | Main render area, displayed with projector and recorded.
| *Uniform* | Uniform | Obviously. `vec4` Uniform, represented by 4 sliders in `0:1` range.
| *Victor* | Layer | Overlay layer over *Whiskey*
| *Whiskey* | Render | Main render area, displayed with projector and recorded.
| *Xray* | Geometry
| *Yankee* | Geometry
| *Zulu* | Geometry
| *Zero* | Global |

## Shaders

## Uniforms

All Uniforms are included and accessible within all shaders.

### Controlled Uniforms
*Alfa*, *Bravo*, *Uniform* are 

### Texture Uniforms
*One*, *Two* and *Three* are texture inputs. Each is represented by a small collection of GLSL uniforms

### System Uniforms




