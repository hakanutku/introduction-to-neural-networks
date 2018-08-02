let training_data = [{
        input: [0, 1],
        target: [1]
    },
    {
        input: [1, 0],
        target: [1]
    },
    {
        input: [0, 0],
        target: [0]
    },
    {
        input: [1, 1],
        target: [0]
    }
]

let nn;

function setup() {

    createCanvas(400, 400);
    nn = new NeuralNetwork(2, 2, 1);
}

function draw() {
    background(51);

    for (let i = 0; i < 1000; i++) {
        let data = random(training_data);
        nn.train(data.input, data.target);
    }
}
