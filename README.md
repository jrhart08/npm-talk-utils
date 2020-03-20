# npm-talk-utils

Sample library of miscellaneous utility functions.

# NPM publishing setup

This one is very vanilla, relying solely on user input for versioning and publishing.

Steps to publish:

```bash
# from ~/projects/npm-talk-utils

# whatever changes you're making
git add .
git commit -m "changed stuff"

# clean and build your lib/ folder
npm run clean
npm run build

# bump your package version appropriately.
# for version 1.2.3:
#   major = 1
#   minor = 2
#   patch = 3
# npm version (major|minor|patch)

npm version minor # 1.2.3 -> 1.3.0

# publish to the registry.
# our .npmrc file tells npm to publish this to our verdaccio server
# (since the name in package.json has a `@jrh/` scope)
npm publish
```


This can be fine for small personal projects but there are a few key issues

1. Prone to human error. The developer must make
   sure to run these steps in the correct order.
   
2. It's up to the developer to keep track of whether it's a
   patch/minor/major update from the previously published version.

3. It's up to the developer to fill out a changelog (if at all).

4. Without a means of automating the versioning, this can't be integrated into
   a CI pipeline.
