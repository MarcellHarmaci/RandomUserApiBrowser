# Random User API Browser using React Native

## Screens

The app consists of 2 screens.

- `RandomUsers` - This is the main page of the app. It displays 20 users in a list. Pull-to-refresh and pagination is implemented.
- `UserDetails` - Clicking on a list item, we get navigated to this screen. Here the clicked person's data is presented in more detail.

## Navigation

Navigation is implemented in `NavigationStack` using React's `<Stack.Navigator>` component.

## API

The data is fetched from the public REST API available at [https://randomuser.me/](https://randomuser.me/).
