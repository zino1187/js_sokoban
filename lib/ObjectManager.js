class ObjectManager{
	constructor(){
		this.objectArray=[];
		//게임에 등장할 모든 종류의 오브젝트들을 모아놓은 배열
	}
	addObject(obj){
		this.objectArray.push(obj);
	}
	removeChild(obj){
		stage.removeChild(obj.div);
		this.objectArray.splice(this.objectArray.indexOf(obj),1);
	}
	tick(){
		for(var i=0; i<this.objectArray.length; i++){
			this.objectArray[i].tick();
		}
	}
	render(){
		for(var i=0; i<this.objectArray.length; i++){
			this.objectArray[i].render();
		}
	}
}