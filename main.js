function calculating1(){
    let input1 = document.querySelector("#variable1").value;
    let input2 = document.querySelector("#variable2").value;

    console.log("1st variable: " + input1 + "\n2nd variable: " + input2 + "\nResult of division: " + (+input1)/(+input2));
    let input3 = input1;
    input1 = input2;
    input2 = input3;
    
    console.log("Modified form of variable values\n" + "1st variable: " + input1 + "\n2nd variable: " + input2);
}

function solution1(){
    let input1 = document.querySelector("#variable3").value;
    let input2 = document.querySelector("#variable4").value;
    let input3 = document.querySelector("#variable5").value;

    console.log("1st variable: " + input1 + "\n2nd variable: " + input2 + "\n3rd variable: " + input3);

    let input4;
    input4 = (input3 - input2) / input1;
    console.log("The value of X: " + input4);
}

function calculating2(){
    let input1 = document.querySelector("#a").value;
    let input2 = document.querySelector("#b").value;

    console.log("1st variable: " + input1 + "\n2nd variable: " + input2);

    if(input1>input2){
        console.log("Number1 + Number2: " + ((+input1)+(+input2)));
    }

    if(input1<input2){
        console.log("Number1 - Number2: " + ((+input1)-(+input2)));
    }
    if(input1==input2){
        console.log("Number1 * Number2: " + ((+input1)*(+input2)));
    }

}

function solution2(){
    let input1 = document.querySelector("#var1").value;
    let input2 = document.querySelector("#var2").value;
    let input3 = document.querySelector("#var3").value;

    console.log("1st variable: " + input1 + "\n2nd variable: " + input2 + "\n3rd variable: " + input3);

    let d;
    d = (input2**2) - (4*input1*input3);

    if(d>0){ 
        let x1,x2;  
        x1 = ((-input2) + Math.sqrt(d))/(2*input1);
        x2 = ((+input2) + Math.sqrt(d))/(2*input1);

        console.log("x1=" + x1 + "\nx2=" + x2);
    }

    if(d<0){ 

        console.log("No Solution");
    }

    if(d==0){ 
        let x1,x2,y1,y2;
        x1 = (-input2)/(2*input1);
        x2 = (+input2)/(2*input1);
        y1= (+input1)*(x1**2) + (+input2)*x1 + (+input3);
        y2= (+input1)*(x2**2) + (+input2)*x2 + (+input3);
        if(y1==0){
            console.log("x=" + x1);
        }
        if(y2==0){
            console.log("x=" + x2);
        }  
    }

}
function numbname(){
    let x = ["teen", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
    let y = ["one", "two", "three", "for", "five", "six", "seven", "eight", "nine"];
    let num = document.querySelector("#number").value;
    let n = y.length;
    let m = x.length;
    if(num/10 < 1){
        for(let i=0;i<n;i++){
            if(i==(+num)-1){
                console.log(y[i]);
            }
        }
    }


    else if(num/10 == 1.1){
        console.log("eleven");
    }


    else if(num/10 == 1.2){
        console.log("twelve");
    }


    else if(num%10 == 0){
        for(let i=0;i<n;i++){
            if(num/10 == i+1){
                console.log(x[i]);
            }
        }
    }


    else if(num/10>1.2 && num/10<2){
        for(let i=0;i<n;i++){
            if(num%10==i+1){
                console.log(y[i] + x[0]);
            }
        }
    }


    else{
        for(let i=0;i<m;i++){
            if((num-num%10)/10==i+1){
                for(let j=0;j<n;j++){
                    if(num%10==j+1){
                        console.log(x[i] + y[j]);
                    }
                }
            }
        }
    }
    if(num<1 || num>99){
        console.log("Wrong number!!!");
        alert("WRONG!");
    }
}

function circle(){
    let x = document.querySelector("#x").value;
    let y = document.querySelector("#y").value;
    let r = document.querySelector("#r").value;

    if(x**2 + y**2 < r**2){
        console.log("It's on point");
    }
    else if(x**2 + y**2 > r**2){
        console.log("Not in point");
    }
    else{
        console.log("The point is on the circumference");
    }


}