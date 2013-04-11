# Component.fm

## Notes

To build the Backbone project from the command line, run the following.

```
npm install -g browserify
browserify public/app/main.js -o public/assets/scripts/bundle.js
```

Certainly we'll want a gruntfile or something to do this for us, and concat
the dependencies in there as well.. I'll get to it eventually.
