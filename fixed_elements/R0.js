import { Scene, Triangle, WebGLRenderer, Shader } from './lib/threeD.js';
import {vertexShaderSrc} from './shaders/vertex.js';
import {fragmentShaderSrc} from './shaders/fragment.js';

export class R0
{
	constructor(canvasLength, canvasBreadth)
	{
        this.elements = [];
        this.elements.push(new Triangle(0,0));

    }
}