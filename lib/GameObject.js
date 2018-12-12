//최상위 객체 정의

class GameObject{
	constructor(type,container,x,y,width,height,velX,velY,targetX,targetY,src,bg){
		this.type=type;
		this.container=container;
		this.x=x;
		this.y=y;
		this.width=width;
		this.height=height;
		this.velX=velX;
		this.velY=velY;
		this.targetX=targetX;
		this.targetY=targetY;
		this.src=src;
		this.bg=bg;
		this.mapX=x/50;
		this.mapY=y/50;

		this.div=document.createElement("div");
		this.img=document.createElement("img");
		this.div.style.position="absolute";
		this.div.style.left=this.x+"px";
		this.div.style.top=this.y+"px";
		this.div.style.width=this.width+"px";
		this.div.style.height=this.height+"px";
		this.div.style.background=this.bg;
		
		if(this.src!=""){
			//alert("이미지 있네요");
			this.img.src=this.src;
			this.img.style.width=this.width+"px";
			this.img.style.height=this.height+"px";
			this.div.appendChild(this.img);
		}
		this.container.appendChild(this.div);
	}
	tick(){
		this.x=this.x+this.velX;
		this.y=this.y+this.velY;
	}
	render(){
		this.div.style.left=this.x+"px";
		this.div.style.top=this.y+"px";
	}
}