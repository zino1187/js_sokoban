/*주인공 생성 클래스*/

class Hero extends GameObject{
	constructor(type,container,x,y,width,height,velX,velY,targetX,targetY,src,bg){
		super(type,container,x,y,width,height,velX,velY,targetX,targetY,src,bg);
		this.div.zIndex=100;

	}

	/*------------------------------------------------
	맵체크 : 이미 2가 존재할 경우 이동금지
	------------------------------------------------*/
	checkStep(col, row){
		console.log(row, col);
		if(stageArray[row][col]==2 || stageArray[row][col]==1){
			console.log("이동금지!! 이미 박스가 있네요");
			return false;
		}else{
			return true;
		}				
	}

	tick(){
		/*------------------------------------------------------------
		벽과의 충돌처리
		------------------------------------------------------------*/
		var hitCount=0;
		for(var i=0; i<objectManager.objectArray.length; i++){
			var obj = objectManager.objectArray[i];
			if(obj.type=="BLOCK"){
			var result = hitTest(this, obj, this.velX, this.velY);
				if(result){
					hitCount++;
					//alert(hitCount);
				}
			}
		}

		/*------------------------------------------------------------
		벽에 닿았을때의 알맞는 처리
		------------------------------------------------------------*/
		if(hitCount>0){
			
			if(key == 37){ //좌측이 닿았다면
				this.velX=0;
				console.log("좌측이 닿았구나");
			}
			if(key == 39){ //우측이 닿았다면
				this.velX=0;
				console.log("우측이 닿았구나");
			}
			if(key == 38){
				this.velY=0;
				console.log("상단이 닿았구나");
			}
			if(key == 40){
				this.velY=0;
				console.log("하단이 닿았구나");
			}

		}else{
			this.x=this.x+this.velX;
			this.y=this.y+this.velY;
		}

		/*------------------------------------------------------------
		박스와의 충돌처리
		------------------------------------------------------------*/
		var boxCount=0;
		var currentBox;

		for(var i=0; i<objectManager.objectArray.length; i++){
			var obj = objectManager.objectArray[i];

			if(obj.type=="BOX"){
				var result = hitTest(this, obj, this.velX, this.velY);
				if(result){
					boxCount++;				
					currentBox=obj;
				}
			}
		}



		/*------------------------------------------------------------
		 박스에 닿았을때의 알맞는 처리
		------------------------------------------------------------*/
		if(boxCount>0){
			if(key == 37){ //좌측이 닿았다면
				this.velX=0;
				console.log(currentBox.col, currentBox.row , "박스를 좌측으로 밀고 있구나?" );

				if(this.checkStep(currentBox.col-1, currentBox.row)){ //이미 어떤 물건이 없다면..
					currentBox.swap( currentBox.col, currentBox.row );//원래 있었던 곳 0으로...
					currentBox.move( currentBox.col-1, currentBox.row );//박스는 기존의 위치에서 좌측으로 1칸 감소함
				}
			}
			if(key == 39){ //우측이 닿았다면
				this.velX=0;
				console.log(currentBox.col, currentBox.row , "박스를 우측으로 밀고 있구나?" );

				if(this.checkStep(currentBox.col+1, currentBox.row)){ //이미 어떤 물건이 없다면..
					currentBox.swap( currentBox.col, currentBox.row );//원래 있었던 곳 0으로...
					currentBox.move( currentBox.col+1, currentBox.row );//박스는 기존의 위치에서 좌측으로 1칸 감소함
				}
			}
			if(key == 38){
				this.velY=0;
				console.log(currentBox.col, currentBox.row , "박스를 위로 밀고 있구나?" );

				if(this.checkStep(currentBox.col, currentBox.row-1)){ //이미 어떤 물건이 없다면..
					currentBox.swap( currentBox.col, currentBox.row );//원래 있었던 곳 0으로...
					currentBox.move( currentBox.col, currentBox.row-1 );//박스는 기존의 위치에서 좌측으로 1칸 감소함
				}

			}
			if(key == 40){
				this.velY=0;
				console.log(currentBox.col, currentBox.row , "박스를 아래로 밀고 있구나?" );

				if(this.checkStep(currentBox.col, currentBox.row+1)){ //이미 어떤 물건이 없다면..
					currentBox.swap( currentBox.col, currentBox.row );//원래 있었던 곳 0으로...
					currentBox.move( currentBox.col, currentBox.row+1 );//박스는 기존의 위치에서 좌측으로 1칸 감소함
				}

			}
		}

	}
}
