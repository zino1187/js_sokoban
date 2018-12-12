/*박스 생성 함수*/

class Box extends GameObject{
	constructor(type,container,x,y,width,height,velX,velY,targetX,targetY,src,bg,col,row){
		super(type,container,x,y,width,height,velX,velY,targetX,targetY,src,bg);
		
		

		//박스의 좌표를 알기 위한 변수들
		this.col=col;
		this.row=row;		

		this.updateInfo();
	}

	updateInfo(){
		//박스의 이미지 없애고 임시로 좌표 찍기 
		this.div.innerText=this.row+","+this.col;
		this.div.style.border="1px solid red";
	}

	/*------------------------------------------------
	새롭게 이동할 곳 : 이미 계산된 결과가 넘어온다
	------------------------------------------------*/
	move(col, row){
		stageArray[row][col]=2;
		this.x=col*50; //이동할 곳 x 
		this.y=row*50;//이동할 곳 y		
		this.col=col; //좌표 갱신
		this.row=row; //좌표 갱신

		this.updateInfo();
	}
	
	/*------------------------------------------------
	박스가 원래 있었던 곳을 0으로 , 놓기
	------------------------------------------------*/
	swap(col, row){
		stageArray[row][col]=0;
	}


}