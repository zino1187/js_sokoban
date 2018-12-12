/*자주사용하는 코드는 함수화를 하여 가져다 쓴다!!*/

/*-------------------------------------------------
사용법 : getRandom 호출시 당신이 원하는 수를 넣으세요
	 ex) getRandom(5)를 넣으면 0~4를 반환받습니다.
---------------------------------------------------*/

function getRandom(num){
	var r = Math.random();
	var n = parseInt(r*num);
	return n;
}

//ex)2, 7 --> 2 ~ 6까지 나옴!!
function getRandomByRange(min,max){
	return parseInt(Math.random()*(max-min))+min;
}

/*-------------------------------------------------
시간 문자열 처리 함수
호출자는 아래의 사항을 숙지하고 쓰세요
인수로 넘긴 n이 10보다 작으면 앞에 "0"이라는 문자를 
조합해서 결과를 반환해 주자!
---------------------------------------------------*/
function getTimeString(n){
	if(n<10){
		n="0"+n;
	}
	return n;
}


////////충돌 검사 함수///////

/*----------------------------------------------------
인수1 : 나 객체 
인수2 : 상대방 객체
----------------------------------------------------*/

//1) 사후 판단

function collisionCheck(me, target) {
	//나의 너비가 상대의 범위에 있는지 체크
	var horizon1=me.x+me.width >= target.x;  //좌측에서 우측으로 접근시
	var horizon2=me.x <= target.x+target.width; //우측에서 좌측으로 접근시
	//나의 높이가 상대의 범위에 있는지 체크
	var vertical1=(me.y+me.height >= target.y);  //위에서 아래로 접근시
	var vertical2=(me.y <= target.y+target.height); //아래에서 위로 접근시
	return (horizon1 && horizon2) && (vertical1 && vertical2);
	//모두다 만족시켜야 true
}

//2) 사전 판단

function hitTest(me, target , nextX , nextY) { //nextX,nextY : 앞으로 움직일 x,y값(velX,velY)
	//두물체간 충돌 여부 판단 
	me_x= parseInt(me.div.style.left);
	me_y= parseInt(me.div.style.top);
	me_width=parseInt(me.div.style.width);
	me_height=parseInt(me.div.style.height);
	
	target_x= parseInt(target.div.style.left);
	target_y= parseInt(target.div.style.top);
	target_width=parseInt(target.div.style.width);
	target_height=parseInt(target.div.style.height);
	
	nextX=parseInt(nextX);
	nextY=parseInt(nextY);
	
	
	var result1=(me_x+nextX >= target_x) && (me_x+nextX <= (target_x+target_width));//나의 x좌표위치가 타겟의 x range 내에 있는지 판단 
	var result2=((me_x+me_width+nextX) >= target_x) && ((me_x+me_width+nextX) <= (target_x+target_width)); 	//나의 가로폭이 타겟의 가로폭 내에 있는지 판단
	
	var result3=((me_y+nextY) >= target_y) && ((me_y+nextY) <= (target_y+target_height));//나의 y좌표위치가 타겟의 세로폭 내에 있는지 판단
	var result4=((me_y+me_height+nextY) >= target_y) && ((me_y+me_height+nextY) <= (target_y+target_height));//나의 y폭이 타겟의 세로폭 내에 있는지 판단
	

	return (result1 || result2) && (result3 || result4);
}

////////////////////////////////////
/*------------------------------------------------------
원하는 달이 몇일까지 있는지 구하는 함수
ex) User가 알고싶은 달이 5월일 경우,
	  getLastDateOfMonth(2018, 4);
-------------------------------------------------------*/
function getLastDateOfMonth(year,month){
	var d = new Date();
	//조작하기
	d.setFullYear(year);
	d.setMonth(month+1);
	//자바스크립트에서는 마지막 날을 구할 수 없기 때문에
	//정보를 다음달로 넘어간 후 0일을 구한다.
	d.setDate(0);

	//함수 호출자에게 원하는 데이터를 반환 시켜준다.
	return d.getDate();
}

/*------------------------------------------------------
해당 월의 시작 요일 구하기
ex) User가 알고싶은 달이 5월일 경우,
Date객체를 5월로 세팅하고, 날짜는 1일로 세팅한다.
그리고나서, 요일을 물어본다.
★ 주의 : 호출시 5월이 궁금하다면 -1을 해주고 넘겨줘야함.
-------------------------------------------------------*/
function getStartDayOfMonth(year,month){
	var d = new Date(); //현재 날짜이므로, 조작이 필요하다.
	d.setFullYear(year);
	d.setMonth(month);
	d.setDate(1);
	
	return d.getDay(); //요일은 day
}