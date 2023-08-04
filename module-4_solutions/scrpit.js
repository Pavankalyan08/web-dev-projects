var names=new Array();
names[0]="Yashas";
names[1]="John";
names[2]="Jenny";
names[3]="jason";
names[4]="denzil paul";
names[5]="mitsuha";
names[6]="Sakura";
names[7]="paula";
names[8]="laura";
names[9]="jimmy";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}