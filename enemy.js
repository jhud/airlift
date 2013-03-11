
function Enemy(mesh) {
	this.mesh = mesh;
	
	this.init = function () {
		this.mesh.position.set(Math.random()*400.0-200, Math.random()*50.0, Math.random()*500.0 + 2500);
		this.mesh.scale.set(2.0, 2.0, 2.0);
	}

	this.update = function(delta) {
		var moveDistance = -100 * delta;
	
		this.mesh.translateZ(moveDistance);
		
		if (this.mesh.position.z < -2500.0) {
			this.mesh.position.z = 2500;
		}
	}
	
	this.init();
	return this;
}