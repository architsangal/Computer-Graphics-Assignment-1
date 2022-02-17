import { vec3, mat4 } from 'https://cdn.skypack.dev/gl-matrix';

export class Transform
{
	constructor()
	{
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

	updateModelTransformMatrix()
	{
		mat4.identity(this.modelTransformMatrix);
		mat4.translate(this.modelTransformMatrix, this.modelTransformMatrix, this.translate);
		mat4.rotate(this.modelTransformMatrix, this.modelTransformMatrix, this.rotationAngle, this.rotationAxis);
		mat4.scale(this.modelTransformMatrix, this.modelTransformMatrix, this.scale);
	}	

	setTranslate(translationVec) {
		this.translate = translationVec;
	}

	getTranslate() {
		return this.translate;
	}

	setScale(scalingVec) {
		this.scale = scalingVec;
	}

	getScale() {
		return this.scale;
	}

	setRotationAngle(rotationAngle){
		this.rotationAngle = rotationAngle;
	}

	setRotationAngle(rotationAngle){
		return this.rotationAngle;
	}
}