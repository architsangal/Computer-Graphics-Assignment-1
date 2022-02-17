import {Transform} from './transform.js';

export class FixedShape
{
	constructor(coordinates,color)
	{
		this.vertexPositions = new Float32Array(coordinates);		
		this.color = color;
		this.transform = new Transform();
	}
}