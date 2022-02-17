import { Scene, Shape, FixedShape, WebGLRenderer, Shader } from './lib/threeD.js';
import {vertexShaderSrc} from './shaders/vertex.js';
import {fragmentShaderSrc} from './shaders/fragment.js';

// Negative part of x is R0 and rest is R1
// 2 equal partitions
const scene = new Scene();
AddFixedElementsToScene(scene);
AddElementsToScene(scene);

// Renderer generation
const renderer = new WebGLRenderer();
renderer.setSize( 1200, 600 );
document.body.appendChild( renderer.domElement );

// Canvas created
// Adding Events to it
let canvas = renderer.domElement
canvas.addEventListener('mousedown', function(event){ onmousedown(event);});
function onmousedown(event)
{
	// TODO find shapes
	let x = event.clientX;
	let y = event.clientY;

	console.log(x+" "+y);
}

// Generating shader and drawing the shapes on the canvas
const shader = new Shader(renderer.glContext(), vertexShaderSrc, fragmentShaderSrc);
shader.use();
renderer.setAnimationLoop( animation );
function animation()
{
	renderer.clear(0.9,0.9,0.9,1);
	renderer.render(scene, shader);
}

function AddElementsToScene(scene)
{
	// Generating Elements (Shapes)
	let coordinates_large_triangle_1 = [
		1-0.5,0.0,0.0,
		1-0.25,0.5,0.0,
		1-0.75,0.5,0.0,
	]
	const largeTriangle1 = new Shape(coordinates_large_triangle_1,[1,0.647,0,1]);
	scene.add(largeTriangle1);

	let coordinates_large_triangle_2 = [
		1-0.5,0.0,0.0,
		1-0.25,0.5,0.0,
		1-0.25,-0.5,0.0,
	]
	const largeTriangle2 = new Shape(coordinates_large_triangle_2,[0.2,0.6,1,1]);
	scene.add(largeTriangle2);

	let coordinates_medium_triangle = [
		1-0.5,-0.5,0.0,
		1-0.75,-0.5,0.0,
		1-0.75,0,0.0,
	]
	const mediumTriangle = new Shape(coordinates_medium_triangle,[0,1,0,1]);
	scene.add(mediumTriangle);

	let coordinates_small_triangle_1 = [
		1-0.5,0.0,0.0,
		1-(0.75+0.5)/2,0.5/2,0.0,
		1-(0.75+0.5)/2,-0.5/2,0.0,
	]
	const smallTriangle1 = new Shape(coordinates_small_triangle_1,[0.4,1,1,1]);
	scene.add(smallTriangle1);

	let coordinates_small_triangle_2 = [
		1-0.5,-0.5,0.0,
		1-0.25,-0.5,0.0,
		1-(0.25+0.5)/2,-0.5/2,0.0,
	]
	const smallTriangle2 = new Shape(coordinates_small_triangle_2,[1,1,0.2,1]);
	scene.add(smallTriangle2);

	let coordinates_square = [
		1-0.5,0.0,0.0,
		1-0.5,-0.5,0.0,
		1-(0.25+0.5)/2,-0.5/2,0.0,
		1-0.5,0.0,0.0,
		1-0.5,-0.5,0.0,
		1-(0.75+0.5)/2,-0.5/2,0.0,
	]
	const square = new Shape(coordinates_square,[1,0,0,1]);
	scene.add(square);

	let coordinates_parallelogram = [
		1-0.75,0.5,0.0,
		1-0.75,0,0.0,
		1-(0.75+0.5)/2,0.5/2,0.0,
		1-0.75,0.0,0.0,
		1-(0.75+0.5)/2,0.5/2,0.0,
		1-(0.75+0.5)/2,-0.5/2,0.0,
	]
	const parallelogram = new Shape(coordinates_parallelogram,[0.8,0,0.8,1]);
	scene.add(parallelogram);
}

function AddFixedElementsToScene(scene)
{
	// Generating Elements (Shapes)
	let coordinates_large_triangle_1 = [
		-0.5,0.0,0.0,
		-0.25,0.5,0.0,
		-0.75,0.5,0.0,
	]
	const largeTriangle1 = new FixedShape(coordinates_large_triangle_1,[1,0.647,0,1]);
	scene.add(largeTriangle1);

	let coordinates_large_triangle_2 = [
		-0.5,0.0,0.0,
		-0.25,0.5,0.0,
		-0.25,-0.5,0.0,
	]
	const largeTriangle2 = new FixedShape(coordinates_large_triangle_2,[0.2,0.6,1,1]);
	scene.add(largeTriangle2);

	let coordinates_medium_triangle = [
		-0.5,-0.5,0.0,
		-0.75,-0.5,0.0,
		-0.75,0,0.0,
	]
	const mediumTriangle = new FixedShape(coordinates_medium_triangle,[0,1,0,1]);
	scene.add(mediumTriangle);

	let coordinates_small_triangle_1 = [
		-0.5,0.0,0.0,
		-(0.75+0.5)/2,0.5/2,0.0,
		-(0.75+0.5)/2,-0.5/2,0.0,
	]
	const smallTriangle1 = new FixedShape(coordinates_small_triangle_1,[0.4,1,1,1]);
	scene.add(smallTriangle1);

	let coordinates_small_triangle_2 = [
		-0.5,-0.5,0.0,
		-0.25,-0.5,0.0,
		-(0.25+0.5)/2,-0.5/2,0.0,
	]
	const smallTriangle2 = new FixedShape(coordinates_small_triangle_2,[1,1,0.2,1]);
	scene.add(smallTriangle2);

	let coordinates_square = [
		-0.5,0.0,0.0,
		-0.5,-0.5,0.0,
		-(0.25+0.5)/2,-0.5/2,0.0,
		-0.5,0.0,0.0,
		-0.5,-0.5,0.0,
		-(0.75+0.5)/2,-0.5/2,0.0,
	]
	const square = new FixedShape(coordinates_square,[1,0,0,1]);
	scene.add(square);

	let coordinates_parallelogram = [
		-0.75,0.5,0.0,
		-0.75,0,0.0,
		-(0.75+0.5)/2,0.5/2,0.0,
		-0.75,0.0,0.0,
		-(0.75+0.5)/2,0.5/2,0.0,
		-(0.75+0.5)/2,-0.5/2,0.0,
	]
	const parallelogram = new FixedShape(coordinates_parallelogram,[0.8,0,0.8,1]);
	scene.add(parallelogram);
}