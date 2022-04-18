function createNumber(){
    if(document.getElementById('tB1').value==="" || document.getElementById('tB2').value==="" || document.getElementById('tB3').value===""){
        alert("Fill in the required fields");
        return;
    }
    num1=document.getElementById('tB1').value*1;
    num2=document.getElementById('tB2').value*1;
    num3=document.getElementById('tB3').value*1;
    if(num1===0 && num2===0 && num3===0){
        alert("Fill in the required fields");
        return;
    }
    if(num1>=num2){
        alert("First number must be smaller");
        document.getElementById('tB1').value="";
        return;
    }
    if(num3>(num2-num1+1)){
        alert(`Maximum of ${num2-num1+1} numbers can be created`);
        document.getElementById('tB3').value="";
        return;
    }
    numArrayLength=num2-num1;
    numArray=new Array();
    numArray.length=numArrayLength;
    resArray=new Array();
    resArray.length=num3;
    for(i=0; i<=numArrayLength; i++){
        numArray[i]=num1+i;
    }
    for(j=0; j<num3; j++){
        ranNum=Math.random()*(numArrayLength);
        ranNum=Math.round(ranNum);
        while(numArray[ranNum]===null){
            ranNum=Math.random()*(numArrayLength);
            ranNum=Math.round(ranNum);
        }
        resArray[j]=numArray[ranNum];
        numArray[ranNum]=null;
    }
    document.getElementById("tB4").value=resArray;
}
