import { Scene, Triangle, Square, Parallelogram, WebGLRenderer, Shader } from './lib/threeD.js';
import {vertexShaderSrc} from './shaders/vertex.js';
import {fragmentShaderSrc} from './shaders/fragment.js';

let render_X = 600;
let render_Y = 600;

// begin R0 generation
const scene_R0 = new Scene();
AddElementsToScene(scene_R0);

const renderer_R0 = new WebGLRenderer();
renderer_R0.setSize( render_X, render_Y );
document.body.appendChild( renderer_R0.domElement );

const shader_R0 = new Shader(renderer_R0.glContext(), vertexShaderSrc, fragmentShaderSrc);
shader_R0.use();
renderer_R0.setAnimationLoop( animation_R0 );
function animation_R0()
{
	renderer_R0.clear(0.9,0.9,0.9,1);
	renderer_R0.render(scene_R0, shader_R0);
}
// end of R0 generation

const scene = new Scene();
AddElementsToScene(scene);

// Renderer generation
const renderer = new WebGLRenderer();
renderer.setSize( render_X, render_Y );
document.body.appendChild( renderer.domElement );

// Canvas created
// Adding Events to it
let canvas = renderer.domElement;
canvas.addEventListener('mousedown', function(event){ onmousedown(event);});
function onmousedown(event)
{
	let revX = (event.clientX-render_X)/render_X*2-1;
	let revY = -event.clientY/render_Y*2+1;
	let nearestShape = scene.getNearestShape(revX,revY,0);
	console.log(nearestShape.name);
}

// Generating shader and drawing the shapes on the canvas
const shader = new Shader(renderer.glContext(), vertexShaderSrc, fragmentShaderSrc);
shader.use();
renderer.setAnimationLoop( animation );
function animation()
{
	renderer.clear(0.8,0.8,0.8,1);
	renderer.render(scene, shader);
}

function AddElementsToScene(scene)
{
	// Generating Elements (Shapes)
	let coordinates_large_triangle_1 = [
		0.0,0.0,0.0,
		-0.5,0.5,0.0,
		0.5,0.5,0.0,
	]
	const largeTriangle1 = new Triangle(coordinates_large_triangle_1,[1,0.647,0,1],"Large Triangle 1");
	scene.add(largeTriangle1);

	let coordinates_large_triangle_2 = [
		0.0,0.0,0.0,
		0.5,0.5,0.0,
		0.5,-0.5,0.0,
	]
	const largeTriangle2 = new Triangle(coordinates_large_triangle_2,[0.2,0.6,1,1],"Large Triangle 2");
	scene.add(largeTriangle2);

	let coordinates_medium_triangle = [
		0.0,-0.5,0.0,
		-0.5,-0.5,0.0,
		-0.5,0,0.0,
	]
	const mediumTriangle = new Triangle(coordinates_medium_triangle,[0,1,0,1],"Medium Triangle");
	scene.add(mediumTriangle);

	let coordinates_small_triangle_1 = [
		0.0,0.0,0.0,
		-(0.5)/2,0.5/2,0.0,
		-(0.5)/2,-0.5/2,0.0,
	]
	const smallTriangle1 = new Triangle(coordinates_small_triangle_1,[0.4,1,1,1],"Small Triangle 1");
	scene.add(smallTriangle1);

	let coordinates_small_triangle_2 = [
		0.5,-0.5,0.0,
		0.25,-0.5/2,0.0,
		0,-0.5,0.0,
	]
	const smallTriangle2 = new Triangle(coordinates_small_triangle_2,[1,1,0.2,1],"Small Triangle 2");
	scene.add(smallTriangle2);

	let coordinates_square = [
		0,0,0, 				 	// point 1
		0.25,-0.5/2,0.0,	 	// point 2
		0,-0.5,0.0,			 	// point 3
		-(0.5)/2,-0.5/2,0.0,	// point 4
		0,0,0,
		0,-0.5,0.0,
	]
	const square = new Square(coordinates_square,[1,0,0,1],"Square");
	scene.add(square);

	let coordinates_parallelogram = [
		-0.5,0,0.0,     		// point 1
		-0.5,0.5,0,     		// point 2
		-(0.5)/2,0.5/2,0.0,     // point 3
		-(0.5)/2,-0.5/2,0.0,    // point 4
		-0.5,0,0.0,
		-(0.5)/2,0.5/2,0.0,
	]
	const parallelogram = new Parallelogram(coordinates_parallelogram,[0.8,0,0.8,1],"Parallelogram");
	scene.add(parallelogram);
}

