export class Scene
{
	constructor()
	{
		this.primitives = []
	}

	add(primitive)
	{
		if( this.primitives && primitive )
		{
			this.primitives.push(primitive)
		}
	}

	getNearestShape(x,y,z)
	{
		let min = 10000;
		let nearest;
		for(let i=0;i<this.primitives.length;i++)
		{
			let temp = this.distance(this.primitives[i].centroid(),x,y,z);
			if(temp < min)
			{
				min = temp;
				nearest = this.primitives[i];
			}
		}
		return nearest;
	}

	distance(centroid,x,y,z)
	{

		let distance = Math.sqrt((centroid[0]-x)*(centroid[0]-x)+
		(centroid[1]-y)*(centroid[1]-y)+
		(centroid[2]-z)*(centroid[2]-z));
		// console.log(centroid[0],x,y,distance);
		return distance;
	}

	centroid()
	{
		// @ToDo : Return the centroid as per the requirements of mode-2
	}
}
