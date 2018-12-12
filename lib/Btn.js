/*버튼 생성 클래스*/

class Btn{
		constructor(container,width,height,x,y,text,fontSize,bg){
		this.container=container;
		this.width=width;
		this.height=height;
		this.x=x;
		this.y=y;
		this.text=text;
		this.fontSize=fontSize;
		this.bg=bg;

		this.btn=document.createElement("div");
		this.btn.style.position="absolute";
		this.btn.style.right=this.x+"px";
		this.btn.style.bottom=this.y+"px";
		this.btn.style.zIndex=6;
		this.btn.innerText=this.text;
		this.btn.style.fontSize=this.fontSize+"px";
		this.btn.style.width=this.width+"px";
		this.btn.style.height=this.height+"px";
		this.btn.style.background=this.bg;
		this.btn.style.borderRadius=20+"px";
		this.btn.style.color="#fff";
		this.btn.style.fontWeigth="bold";
		this.btn.style.textAlign="center";

		this.container.appendChild(this.btn);
		}
	}
	
