# Node.js Tidy Helper

Use this tool to loop through files in a directory, run the tidy-html5 command on each file, and output the converted files to another directory. This can be configured in many different ways.

NOTE: As of now, you'll need to eliminate white spaces and probably special characters as well from the input files; you could customize this script to do this for you if you wanted. Furthermore, this readme is geared towards Mac OS users; for windows you'll need to install tidy html5 and node on your own.

## Dependencies

- Tidy Html-5
- Node

## Starting the app locally

Install dependencies:

```
brew install node
brew install tidy-html5
```

Make sure that the `tidy` command is pointing to the updated version of tidy; enter `which tidy` to see if it is pointing to the brew cask and not the system version of tidy, which is horribly outdated. You may need to create a bash or zsh alias and point tidy to the brew cask version.

After you've installed dependencies, make sure all HTML files in target folder are stripped of whitespace before running `node htmlToXml.js`
