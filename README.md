# Issue Management system
This project allows to display the repos under an account and take a look at the issues in the repo. It also allows the user to modify the order for the issues. The initial order is by creation date desc.

This project pulls data from github:
    - Repos
    - Issues


## Example:
[Project running in personal site ](http://maxcabrera.com/routable/)

## Take in consideration
- This app is meant to be fast :)
- I went over the propossed design and decided to take another approach that turns out to be easier to navigate in mobile and desktop views. (no one table next to the other)
- All iterations are saved in your local storage, so onces the data is pulled/modified, you are working with local data.
- We could add an expiration time to the local data to update when needed and sync up the local work.
- This was the fast approach, with more time:
    - I would create separate folders for the fetching services
    - I would write more tests for the async functions

## Available Scripts

In the project directory, you can run:
### `npm install`
### `npm start`

### `npm test`
