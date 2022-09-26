# Random User API Browser using React Native

The root of the application is the `App.js` file.

## Screens

The app consists of 2 screens.

- `./screens/RandomUsers`: This is the main page of the app. It displays 20 users in a list. Pull-to-refresh and pagination is implemented.
- `./screens/UserDetails`: Clicking on a list item, we are navigated to this screen. Here the clicked person's data is presented in more detail.

## Navigation

Navigation between screens is implemented in `./navigation/NavigationStack.js` using React's `<Stack.Navigator>` component.

## API

The data is fetched from the public REST API available at [https://randomuser.me/](https://randomuser.me/).
