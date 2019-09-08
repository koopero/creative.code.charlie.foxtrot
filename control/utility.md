# Show
``` control
path: loopin/show
subs:
  alpha:
    options:
      - ignore
      - multiply
      - divide
      - show
    
  filter:
    options:
      - linear
      - nearest

  buffer:
    # Until controls map properly, put your buffers here
    - example
    - output
```


# Window

Loopin is designed to complete own the host machine. Therefore, we can remotely
control parameters of the application's window.

``` control
path: loopin/window/fullscreen
hide: all
title: fullscreen
type: trigger
toggle: true
```

``` control
path: loopin/osd/enabled
hide: all
title: OSD
type: trigger
toggle: true
```

## Snapshot

The `snapshot` utility takes quick screenshots of a given buffer. They are saved to [./data/snap/](/loopin/file/data/snap/). This utility is implemented by [./node/logic/snapshot.js](/loopin/file//node/logic/snapshot.js)

``` control
path: logic/snapshot
subs:
  snap:
    type: trigger
    title: Snap
    hide: all

  extension:
    options:
      - .jpg
      - .png

  # You will need to keep these options
  # updated in your application.
  buffer:
    options:
      # Until controls map properly, put your buffers here
      - example
      - output
```

## Recorder

The `recorder` utility 'renders' a buffer as a sequence of image files, then uses **ffmpeg** to convert them into an mp4 file. In doing so, the clock will be slowed to render each frame precisely.

Results are saved to [./data/recorder/](/loopin/file/data/recorder/).

``` control
path: logic/recorder
subs:
  start:
    type: trigger

  rate:
    options: [ 8, 15, 30, 60 ]

  count:
    type: slider
    min: 30
    max: 300
    precision: 0
    pow: 2.2

  buffer:
    options:
      # Until controls map properly, put your buffers here
      - example
      - output
```


## OSD

The [OSD](https://loopin.tech/ofxLoopin-osd.html) is the ugly white-on-black glob of text in the top-left of every Loopin window, by default. Disable it here:

``` control
path: loopin/osd/enabled
type: trigger
toggle: true
```

You can also jam in custom text:

``` control
path: loopin/osd/text
type: text
size: 54
```
