import { vec3, mat4 } from 'https://cdn.skypack.dev/gl-matrix';

export class Transform
{
	constructor(shape)
	{		
		this.shape = shape;

		this.translate = vec3.create();
		vec3.set(this.translate, 0, 0, 0);
		
		this.scale = vec3.create();
		vec3.set(this.scale, 1, 1, 1);
		
		this.rotationAngle = 0; // required in radians
		this.rotationAxis = vec3.create();
		vec3.set(this.rotationAxis, 0, 0, 1);

		this.modelTransformMatrix = mat4.create();
		mat4.identity(this.modelTransformMatrix);

		this.updateModelTransformMatrix();
	}

	// https://math.hws.edu/graphicsbook/c7/s1.html
	// search 'opposite' and read it properly
	updateModelTransformMatrix(m)
	{
		if(m == 1)
		{
			mat4.identity(this.modelTransformMatrix);

			let centroid = this.shape.centroid();
			mat4.translate(this.modelTransformMatrix, this.modelTransformMatrix, centroid);

			mat4.translate(this.modelTransformMatrix, this.modelTransformMatrix, this.translate);

			mat4.rotate(this.modelTransformMatrix, this.modelTransformMatrix, this.rotationAngle, this.rotationAxis);
			mat4.scale(this.modelTransformMatrix, this.modelTransformMatrix, this.scale);

			let translate_origin = vec3.create();
			vec3.set(translate_origin, -centroid[0], -centroid[1], -centroid[2]);
			mat4.translate(this.modelTransformMatrix, this.modelTransformMatrix, translate_origin);
		}
		else(m == 2)
		{
			mat4.identity(this.modelTransformMatrix);
			mat4.translate(this.modelTransformMatrix, this.modelTransformMatrix, this.translate);
			mat4.rotate(this.modelTransformMatrix, this.modelTransformMatrix, this.rotationAngle, this.rotationAxis);
			mat4.scale(this.modelTransformMatrix, this.modelTransformMatrix, this.scale);
		}
	}	

	setTranslate(translateV) {
		let centroid = this.shape.centroid();
		
		if((centroid[0]+translateV[0] >=-1 && centroid[0]+translateV[0] <=1 &&
		   centroid[1]+translateV[1] >=-1 && centroid[1]+translateV[1] <=1 &&
		   centroid[2]+translateV[2] >=-1 && centroid[2]+translateV[2] <=1) == true)
		{
		   this.translate = translateV;
		}
	}

	getTranslate() {
		return this.translate;
	}

	setScale(scaleV) {
		this.scale = scaleV;
	}

	getScale() {
		return this.scale;
	}

	setRotationAngle(rotationAngle){
		this.rotationAngle = rotationAngle;
	}

	getRotationAngle(rotationAngle){
		return this.rotationAngle;
	}
}