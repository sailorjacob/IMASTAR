import React from "react";
import Sketch from "react-p5";

//Global Contants
const width = window.innerWidth * 0.95;
const height = window.innerHeight * 0.95;
const bound = width > height ? width : height;

//A function that doesn't need p5 that is a help function
const getRandomInt = (max) => {
	return Math.floor(Math.random() * max);
};

//Main Function
const Sketchy = (props) => {
	//Setup
	const setup = (p5, canvasParentRef) => {
		//Creates main canvas
		p5.createCanvas(width, height).parent(canvasParentRef);

		//Creates black background
		const black = p5.color(10, 10, 10);
		p5.background(black);

		//Function to generate a color scheme
		const colorScheme = () => {
			const black = p5.color(42, 43, 42);
			const grey = p5.color(112, 108, 97);
			const cream = p5.color(248, 244, 227);
			const ember = p5.color(200, 40, 10);
			const colorArray = [black, black, grey, grey, cream, cream, ember];
			const color = getRandomInt(7);

			return colorArray[color];
		};

		//Function to make a traingle
		const triangle = (x1, y1, x2, y2, x3, y3) => {
			p5.fill(colorScheme());
			p5.triangle(x1, y1, x2, y2, x3, y3);
		};

		//Function to make a sphere
		const blackSphere = (x1, y1, x2, y2) => {
			const black = p5.color(10, 10, 10);
			p5.fill(black);
			p5.noStroke();
			p5.ellipse(x1, y1, x2, y2);
		};

		//For loop that spawns many triangles
		for (let i = 0; i < 500; i++) {
			triangle(
				getRandomInt(bound),
				getRandomInt(bound),
				getRandomInt(bound),
				getRandomInt(bound),
				getRandomInt(bound),
				getRandomInt(bound)
			);
		}

		//Function to add one black sphere
		blackSphere(
			getRandomInt(bound),
			getRandomInt(bound),
			getRandomInt(bound),
			getRandomInt(bound)
		);
	};

	//Code inside the draw functions reruns every frame (motion)
	const draw = (p5) => {
		//
	};

	return <Sketch setup={setup} draw={draw} />;
};

export default Sketchy;
