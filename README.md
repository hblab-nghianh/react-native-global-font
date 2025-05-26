# react-native-global-font
[![npm version](https://badge.fury.io/js/react-native-global-font.svg)](https://badge.fury.io/js/react-native-global-font)
![MIT](https://img.shields.io/dub/l/vibe-d.svg)
![Platform - Android and iOS](https://img.shields.io/badge/platform-Android%20%7C%20iOS-yellow.svg)

Easily apply a custom font globally for all `Text` and `TextInput` components in your React Native app (Android & iOS).

---

## Features
- Set a global font for all `Text` and `TextInput` components
- Supports both Android and iOS
- Compatible with all React Native versions (auto-detects version)

---

## Installation
1. **Add your font file** to your app at `assets/fonts/` (e.g. `assets/fonts/YourFontName.ttf`).
2. **Create** a `react-native.config.js` file in your project root:

```js
module.exports = {
  project: {
    ios: {},
    android: {},
  },
  assets: ['./assets/fonts/'],
};
```
3. **Link assets** (for RN < 0.60 use `react-native link`):
```sh
npm install --save react-native-global-font
npx react-native link
```
4. **iOS only:** Add your font to `Info.plist`:
```xml
<key>UIAppFonts</key>
<array>
  <string>YourFontName.ttf</string>
</array>
```

---

## Usage
Call `GlobalFont.applyGlobal('YourFontName')` at the root of your app (e.g. in `componentDidMount` or `useEffect`).

```js
import GlobalFont from 'react-native-global-font';

// Class component
componentDidMount() {
  GlobalFont.applyGlobal('YourFontName');
}

// or Functional component
useEffect(() => {
  GlobalFont.applyGlobal('YourFontName');
}, []);
```

---

## Compatibility
- **React Native >= 0.65:** Uses `defaultProps` for global font.
- **React Native < 0.65:** You should use version 1.x of this library (`npm install react-native-global-font@1`).

---

## License
MIT


