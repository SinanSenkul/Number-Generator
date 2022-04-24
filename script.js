resArray=new Array();

function createNumber(){
    num1=parseInt(document.getElementById('tB1').value);
    num2=parseInt(document.getElementById('tB2').value);
    num3=parseInt(document.getElementById('tB3').value);

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
        numArrayLength=num2-num1;
        numArray=new Array();
        numArray.length=numArrayLength;
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
    else{
        resArray=[];
        for(i=0; i<=num3; i++){
            resArray[i]=Math.round(Math.random()*num2);
            while(resArray[i]<num1){
                resArray[i]=Math.round(Math.random()*num2);
            }
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
    array=resArray;
    arraySort=new Array(array.length);
    for(i=0;i<array.length;i++){
      for(j=0;j<array.length;j++){
        if(array[j]>array[j+1]){
          bigger=array[j];
          array[j]=array[j+1];
          array[j+1]=bigger;
        }
      }
    }
    document.getElementById("tB4").value=array;
}
