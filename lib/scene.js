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
			let temp = this.distance(this.primitives[i],x,y,z);
			if(temp < min)
			{
				min = temp;
				nearest = this.primitives[i];
			}
		}
		return nearest;
	}

	distance(shape,x,y,z)
	{
		let centroid = shape.centroid();
		centroid[0] = centroid[0]+shape.transform.translate[0];
		centroid[1] = centroid[1]+shape.transform.translate[1];
		centroid[2] = centroid[2]+shape.transform.translate[2];
		
		let distance = Math.sqrt((centroid[0]-x)*(centroid[0]-x)+
		(centroid[1]-y)*(centroid[1]-y)+
		(centroid[2]-z)*(centroid[2]-z));
		// console.log(centroid[0],x,y,distance);
		return distance;
	}

	minMaxCalc()
	{
		let minX = 1;
		let maxX = -1;
		let minY = 1;
		let maxY = -1;
		let minZ = 1;
		let maxZ = -1;

		this.minMax = new Float32Array([0,0,0,0,0,0]);

		for(let i=0;i<this.primitives.length;i++)
		{
			let vertices = this.primitives[i].vertexPositions;
			for(let j=0;j<vertices.length;j++)
			{
				if(j%3 == 0)
				{
					let temp = vertices[j];
					if(temp > maxX)
					{
						maxX = temp;
					}
					else if(temp < minX)
					{
						minX = temp;
					}
				}
				else if(j%3 == 1)
				{
					let temp = vertices[j];
					if(temp > maxY)
					{
						maxY = temp;
					}
					else if(temp < minY)
					{
						minY = temp;
					}					
				}
				else
				{
					let temp = vertices[j];
					if(temp > maxZ)
					{
						maxZ = temp;
					}
					else if(temp < minZ)
					{
						minZ = temp;
					}
				}
			}
		}
		
		this.minMax[0] = minX;
		this.minMax[1] = maxX;
		this.minMax[2] = minY;
		this.minMax[3] = maxY;
		this.minMax[4] = minZ;
		this.minMax[5] = maxZ;
	}

	getMinX()
	{
		this.minMaxCalc();
		return this.minMax[0];
	}
	getMaxX()
	{
		this.minMaxCalc();
		return this.minMax[1];
	}
	getMinY()
	{
		this.minMaxCalc();
		return this.minMax[2];
	}
	getMaxY()
	{
		this.minMaxCalc();
		return this.minMax[3];
	}
	getMinZ()
	{
		this.minMaxCalc();
		return this.minMax[4];
	}
	getMaxZ()
	{
		this.minMaxCalc();
		return this.minMax[5];
	}

	coordinates()
	{
		let coordinates = new Float32Array([0,0,0])
		coordinates[0] = (this.getMinX() + this.getMaxX())/2;
		coordinates[1] = (this.getMinY() + this.getMaxY())/2;
		coordinates[2] = (this.getMinZ() + this.getMaxZ())/2;
		
		return coordinates;
	}
}
