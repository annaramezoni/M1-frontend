# Turners Vehicle Classification – Frontend

## About The Project

The Turners Vehicle Classification Frontend is a React application that allows users to upload an image of a car and identify its vehicle type using an image classification API.

The application provides a simple interface where users can select a car image, preview the uploaded image, and view the predicted vehicle type along with the model's confidence probability.

### Features

- **Image Upload:** Select a vehicle image from your device.
- **Image Preview:** Display the selected image before viewing the classification result.
- **Vehicle Classification:** Send the uploaded image to the backend API for analysis.
- **Prediction Results:** Display the predicted vehicle type and its confidence probability.
- **Loading State:** Show an analysing message while the image is being processed.
- **Error Handling:** Display an error message if the classification request fails.
- **Responsive Styling:** Use CSS Modules to organise and style the interface.

## Built With

- [React](https://react.dev/) – Building the user interface.
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) – Application logic and API requests.
- [CSS Modules](https://github.com/css-modules/css-modules) – Component-specific styling.
- [Font Awesome](https://fontawesome.com/) – Search and user icons.
- [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) – Sending image data to the backend.
- [Azure Custom Vision](https://learn.microsoft.com/en-us/azure/ai-services/custom-vision-service/) – Image classification through the backend service.

## Getting Started

Follow these instructions to run the frontend locally.

### Prerequisites

Make sure you have installed:

- [Node.js and npm](https://nodejs.org/)
- [Git](https://git-scm.com/)
- The Turners Vehicle Classification backend API

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/annaramezoni/M1-frontend.git
   ```

2. Navigate into the project directory:

   ```bash
   cd M1-frontend
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

   If your project uses Create React App instead of Vite, use `npm start` instead.

5. Open the local URL displayed in your terminal, commonly `http://localhost:5173` for Vite.

### Backend Configuration

The frontend communicates with the backend API to classify uploaded vehicle images.

The current API URL is defined in `Home.jsx`:

```javascript
const API_URL = "http://localhost:3000/";
```

Make sure the backend server is running at this address before uploading an image.

If your backend runs on a different URL or port, update `API_URL` accordingly.

For deployment, configure the frontend to use the deployed backend URL rather than `localhost`.

## Usage

1. Open the application in your browser.
2. Select the option to upload a photo of a car.
3. Choose an image that clearly shows the full body of the vehicle.
4. Wait while the application sends the image to the backend for classification.
5. View the predicted vehicle type and its confidence probability.
6. If the request fails, check that the backend is running and try again.

### How It Works

1. The user selects an image using the file input.
2. React creates a temporary URL to display an image preview.
3. The image is added to a `FormData` object using the field name `image`.
4. The frontend sends a `POST` request to the backend using `fetch()`.
5. The backend processes the image using the image classification service and returns the prediction.
6. React updates the interface with the vehicle type and confidence probability.
7. If an error occurs, the application displays an appropriate message.

### Example Response

The frontend expects the backend to return a JSON response similar to the following:

```json
{
  "Vehicle Type": "SUV",
  "Probability": 0.95
}
```

The probability is expected as a decimal between `0` and `1`. The frontend converts it to a percentage for display.

For example, `0.95` is displayed as `95%`.

## Acknowledgements

- [React Documentation](https://react.dev/)
- [Font Awesome](https://fontawesome.com/)
- [Microsoft Azure Custom Vision Documentation](https://learn.microsoft.com/en-us/azure/ai-services/custom-vision-service/)

---

**Note:** This project is a vehicle image classification prototype. The prediction represents the model's confidence in its classification and should not be interpreted as a guarantee of accuracy or as an insurance premium calculation.
