Creative Code Charlie Foxtrot ( shorthand C3F ) is an experiment in realtime collaborative visualization software development. The intention is for a group of people to simultaneously design, develop, tune and colour a video artwork rendered in real time on multiple screens. 

# Mission

Attempt to create a singular, generative, multiscreen art piece using ad hoc collaboration. The goal for each participant is tasteful improvement to the state and configuration of an abstract rendering machine. 

The result will be a record of the state of the piece, represented as git commits, video recordings and logs of property changes. All results will be released as open source.

# Participation

The initial *C3F* experiment is happening October 8th, 2019 at the Centre for Digital Media in Vancouver. See [the meetup page](https://www.meetup.com/Vancouver-Creative-Technology/events/264683290/) for more info.

# Setup

You may use this source code to run your own copy of C3F. To do so, you should have a working knowledge of `node.js` and `git`. 

``` sh
git clone https://github.com/koopero/creative.code.charlie.foxtrot/
cd creative.code.charlie.foxtrot

# Huge package install. May take a few.
npm install

cp loopin.local.example.yaml loopin.local.yaml
# Edit the file loopin.local.yaml to set up optional audio and kinect inputs.

# Start the experiment!
npm start

# Now, you can browse http://localhost:7004/ to control C3F.
```

# Acknowledgements

Special thanks to the following:

- [Darren ]().
- The [Vancouver Creative Tech Community](https://www.meetup.com/Vancouver-Creative-Technology/) for your continued support and feedback.
- [HFour](http://hfour.ca/) for your enthusiastic support of open source psychedelia.