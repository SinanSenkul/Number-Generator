resArray=new Array();

function createNumber(){
    if(document.getElementById('tB1').value==="" || document.getElementById('tB2').value==="" || document.getElementById('tB3').value===""){
        document.getElementById("alertText").value="- Fill in the required fields";
        if(document.getElementById('tB1').value===""){
            document.getElementById('tB1').style="border-color:red";
        }
        if(document.getElementById('tB2').value===""){
            document.getElementById('tB2').style="border-color:red";
        }
        if(document.getElementById('tB3').value===""){
            document.getElementById('tB3').style="border-color:red";
        }
        return;
    }
    num1=parseInt(document.getElementById('tB1').value);
    num2=parseInt(document.getElementById('tB2').value);
    num3=parseInt(document.getElementById('tB3').value);
    numArrayLength=num2-num1;
    numArray=new Array(numArrayLength);
    resArray.length=num3;
    if(num1>=num2){
        document.getElementById("alertText").value="- First number must be smaller";
        document.getElementById('tB1').value="";
        document.getElementById('tB1').style="border-color:red";
        return;
    }
    if(document.getElementById("checkbox").checked===true){
        if(num3>(num2-num1+1)){
            document.getElementById("alertText").value=`- Maximum of ${num2-num1+1} numbers can be created`;
            document.getElementById('tB3').value="";
            document.getElementById('tB3').style="border-color:red";
            return;
        }
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
    else{
        for(i=0; i<=numArrayLength; i++){
            numArray[i]=num1+i;
        }
        for(j=0; j<num3; j++){
            ranNum=Math.round(Math.random()*(numArrayLength));
            resArray[j]=numArray[ranNum];
        }
        document.getElementById("tB4").value=resArray;
    }
}

function reNew(){
    document.getElementById('tB1').style="border-color:black";
    document.getElementById('tB2').style="border-color:black";
    document.getElementById('tB3').style="border-color:black";
    document.getElementById('alertText').value="";
}

function sorter(){
    for(i=0;i<resArray.length;i++){
      for(j=0;j<resArray.length;j++){
        if(resArray[j]>resArray[j+1]){
          bigger=resArray[j];
          resArray[j]=resArray[j+1];
          resArray[j+1]=bigger;
        }
      }
    }
    document.getElementById("tB4").value=resArray;
}
