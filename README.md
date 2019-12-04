# npm-talk-utils

Sample library of miscellaneous utility functions.

# NPM publishing setup

This one is very vanilla, relying solely on user input for versioning and publishing.

This can be fine for small personal projects but there are a few key issues

1. It's up to the user to keep track of whether it's a patch/minor/major update
   from the previously published version.

2. It's up to the user to fill out a changelog (if at all).

3. Without a means of automating the versioning, this can't be integrated into
   a CI pipeline.
