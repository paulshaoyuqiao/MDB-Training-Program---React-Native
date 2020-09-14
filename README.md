# MDB-Training-Program---React-Native - Project 1
### Developer: Paul Shao
This repo is one of a series of repos to come that contain projects under development for next semester's new **React Native** curriculum that will be introduced to the Mobile Developer's of Berkeley as part of the Cross-Platform initiative.

This repo contains the first project: MDB-Meet the Members, where new members will familiarize themselves with the club by through a trivial where they try to match members' names against the shown pictures in a timed setting. Points are tracked and auto-add to contact book are supported as well.

**Note**: Part of the project requires reading local images from source paths. Traditional parsing of filenames within the `assets` directory will not quite work because dynamic loading of the images (through variables in `require`) is not allowed in React Native's framework. As a work-around, a `node.js` script `Data.js` that will parse through the provided images and text file of names and generate a Javascript file containing all preloaded image constants (with `require` on static paths) is also implemented (for ease to those who may have difficulty importing images on this project).
To generate the file `Constants.js`, simply execute `node Data.js`.
