# Commands
<i>Heroku doesn't like Git Bash; use another terminal for Heroku commands.</i>
<hr></hr><br></br>

        npm start
        expo start
Test on localhost. Run from root of project. Have to build client first if testing it too.

[Expo cli commands](https://docs.expo.dev/workflow/expo-cli/)

        yarn deploy
Deploy manually to GitHub Pages.

# Flow
1. Create feature branch from development branch
2. Test locally
    - Client-only test: change code > cd to root > npm start
3. Push changes to feature branch
4. Merge feature branch into main - picked up by GH Action and deployed to Prod

# Component Sources
Look for components from these sources, in order, before making a new one.
If a source doesn't provide a good enough component, try the next one.
1. [Paper](https://callstack.github.io/react-native-paper/index.html)
2. [Expo's React Native](https://docs.expo.dev/versions/v45.0.0/react-native/activityindicator/)
3. Make a new one

## The Chosen
* Forms: [react-hook-form with react-native inputs](https://react-hook-form.com/get-started/#reactnative)
* Navigation: [@react-navigation/material-bottom-tabs](https://callstack.github.io/react-native-paper/bottom-navigation.html)
* input: custom (components with "SingletonInputForm" in the name)
* button/icon button: react-paper
* View: react-native
* theme: custom
  * reusable styling is in assets/stylesheets
  * if style calls for multiple components to be used in a specific way, use a wrapper component (e.g., components/pages/PageStyler)
* buttons: custom buttons in components/buttons (new custom buttons use react-native-paper)
  * style prop doesn't support sugar styles like "border". Instead, set each style individually, as in this [example to set button border color](https://github.com/callstack/react-native-paper/issues/2875)
* Modal: react-native-paper
* List: FlatList from react-native

# History
* Followed this [Expo guide](https://docs.expo.dev/get-started/create-a-new-app/)
* Configured linter with .eslintrc.js. To run the linter, ctrl+shift+p > "ESLint: Fix all auto-fixable problems"
* Followed this [guide](https://reactnavigation.org/docs/material-bottom-tab-navigator/) to install nav components
