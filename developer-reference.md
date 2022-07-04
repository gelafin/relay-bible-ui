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

# History
* Followed this [Expo guide](https://docs.expo.dev/get-started/create-a-new-app/)
