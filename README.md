# Flyway

Flyway is a modern web application for searching and displaying information about airports worldwide. It provides a fast, user-friendly interface to look up airports by city or place name, leveraging the Air-port-codes API.

## Features
- **Search Airports:** Enter a city or place name to find matching airports.
- **Live Results:** Results update as you type, showing airport name, code, type, city, state/province, and country.
- **Responsive UI:** Built with Bulma CSS for a clean, responsive design.
- **Modern JavaScript:** Uses ES6+, Babel, and Webpack for development and production builds.

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v10 or higher recommended)
- [npm](https://www.npmjs.com/)

### Installation
1. Clone the repository:
   ```sh
   git clone <repository-url>
   cd Flyway
   ```
2. Install dependencies:
   ```sh
   npm install
   ```

### Development
To start the development server with hot reloading:
```sh
npm start
```
The app will open in your browser at `http://localhost:8080` (default).

### Production Build
To build the app for production:
```sh
npm run build
```
The output will be in the `build/` directory.

## Project Structure
```
Flyway/
├── assets/
│   ├── style.css
│   └── img/
│       └── bg.jpg
├── src/
│   ├── air-port-codes-node.js  # API integration logic
│   ├── app.js                  # Main app logic
│   └── ui.js                   # UI rendering logic
├── index.html                  # Main HTML file
├── package.json                # Project metadata and scripts
├── webpack.config.js           # Webpack configuration
```

## API Usage
This project uses the [Air-port-codes API](https://www.air-port-codes.com/). You may need to obtain your own API key and secret for production use. The current keys in the code are for demonstration only.

## Credits
- UI Framework: [Bulma](https://bulma.io/)
- Starter Pack: [Brad Traversy - babel_webpack_starter](https://github.com/bradtraversy/babel_webpack_starter)

## License
This project is licensed under the MIT License.
