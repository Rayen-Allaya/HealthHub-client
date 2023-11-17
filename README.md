# HealthHub

## Introduction
Welcome to HealthHub, a mobile application built using Expo and React Native. This document serves as a guide for team members to set up the development environment, run the application, and contribute to its development.

## Table of Contents
1. [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
2. [Development](#development)
    - [Starting the App](#starting-the-app)
    - [Running the App on a Physical Device](#running-the-app-on-a-physical-device)

## Getting Started

### Prerequisites
Before you begin, make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)

### Installation
1. Clone the repository:
   ```bash
   git clone [link to github repo]
   cd HealthHub-client
2. Clone the repository:
   ```bash
   npm install

## Development

### Starting the App
To start the application locally, use the following command:

```bash
npx expo start
```

This will launch the Expo development server. You can then run the app on an emulator, physical device, or use the Expo Go app on your smartphone to preview the app.

### Running the App on a Physical Device
To run your Expo app on a physical device, follow these steps. **Ensure your computer and mobile device are connected to the same network**:

1. **Install Expo Go**: On your mobile device, download and install the Expo Go app from the App Store (iOS) or Google Play Store (Android).

2. **Ensure Developer Mode is Enabled**: On your mobile device, enable Developer Mode in the device settings.

3. **Scan QR Code**: After the server starts, a QR code will be displayed in the terminal. Open the Expo Go app on your mobile device and scan the QR code. This action will initiate the installation of the app on your device.

4. **Wait for Bundling**: Allow some time for the bundling process to complete. Once done, your app will be loaded on the Expo Go app, and you can interact with it as if it were installed directly on your device.

By following these steps, you can seamlessly test and experience your Expo app on your physical device, providing a real-time preview of your development progress.