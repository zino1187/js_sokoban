//미니 박스 div 생성

class MiniBox extends GameObject{
	constructor(type,container,x,y,width,height,velX,velY,targetX,targetY,src,bg){
		super(type,container,x,y,width,height,velX,velY,targetX,targetY,src,bg);
		this.div.style.borderRadius=20+"px";
	}
}