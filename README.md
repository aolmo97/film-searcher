# Film Searcher Project

## Overview
This is an [Expo](https://expo.dev) application created using [`create-expo-app`](https://www.npmjs.com/package/create-expo-app). It provides a foundation for developing a cross-platform mobile application using React Native and Expo tools.

## Key Features
- Built with Expo framework
- Uses file-based routing
- Supports development builds, Android emulator, iOS simulator, and Expo Go

## Getting Started

### Prerequisites
- Node.js and npm installed on your machine

### Setup
1. Clone this repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the root directory of the project
4. In the `.env` file, define the `EXPO_PUBLIC_API_KEY` variable with your API key:
   ```
   EXPO_PUBLIC_API_KEY=your_api_key_here
   ```

### Running the App
Start the development server:
```bash
npx expo start
```

This will display options to run the app on:
- Development build
- Android emulator
- iOS simulator
- Expo Go (limited sandbox environment)

### Try the App on Your Device
To try the app on your physical device:

1. Install the Expo Go app on your smartphone:
   - [Expo Go for Android](https://play.google.com/store/apps/details?id=host.exp.exponent)
   - [Expo Go for iOS](https://apps.apple.com/app/expo-go/id982107779)

2. Start the development server as mentioned above.

3. Scan the QR code displayed in your terminal with your device's camera (iOS) or the Expo Go app (Android).

4. The app will open in Expo Go, allowing you to test and interact with it on your device.

## Development
- Main development takes place in the `app` directory
- The project uses file-based routing for navigation


## Resources
- [Expo Documentation](https://docs.expo.dev/)
- [Expo Guides](https://docs.expo.dev/guides)
- [Learn Expo Tutorial](https://docs.expo.dev/tutorial/introduction/)

## Community and Support
- [Expo on GitHub](https://github.com/expo/expo)
- [Discord Community](https://chat.expo.dev)

## Contributing
We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for more details.

## License
This project is licensed under the [MIT License](LICENSE).
