## Water Jug Challenge Documentation

This documentation provides an overview of the Water Jug Challenge project, its purpose, and instructions on how to use it.

### Purpose
The Water Jug Challenge is a problem-solving exercise that involves using two jugs of different sizes to measure a specific amount of water. The goal of this project is to provide a solution to the Water Jug Challenge, allowing users to input the sizes of the jugs and the desired amount of water, and getting the steps required to reach that amount.

### Functionality
The Water Jug Challenge program allows users to:
- Input the sizes of the two jugs.
- Specify the desired amount of water to be measured.
- Get a step-by-step solution to reach the desired amount using the provided jugs.

### How to Use
To use the Water Jug Challenge program, follow these steps:
1. Clone the repository to your local machine.
2. Open the terminal and navigate to the project directory.
3. Install any dependencies required by running npm install.
4. Run the program by executing npm start.
5. Follow the prompts to input the sizes of the jugs and the desired amount of water.
6. Once the solution is calculated, the program will display the steps required to reach the desired amount using the provided jugs.

### Dependencies
The Water Jug Challenge program requires Node.js and npm (Node Package Manager) to be installed on your machine. Make sure you have them installed before running the program.

## Endpoints

### POST /

This endpoint solves the water container problem. You must submit the following data in the body of the request as JSON:

```json
\{
  "bucketX": 2,
  "bucketY": 10,
  "amountWantedZ": 4
\}
```

- bucketX: Size of the first container.
- bucketY: Size of the second container.
- amountWantedZ: Desired amount of water.

The answer will be a JSON object with the solution to the problem:

```json
\{
    "0": {
        "bucketX": 0,
        "bucketY": 0,
        "explanation": "Water Jug Challenge"
    },
    "1": {
        "bucketX": 2,
        "bucketY": 0,
        "explanation": "Fill bucket x"
    },
    "2": {
        "bucketX": 0,
        "bucketY": 2,
        "explanation": "Transfer bucket x to bucket y"
    },
    "3": {
        "bucketX": 2,
        "bucketY": 2,
        "explanation": "Fill bucket x"
    },
    "4": {
        "bucketX": 0,
        "bucketY": 4,
        "explanation": "Transfer bucket x to bucket y"
    }
\}

```