function getValue(){
     let myValueA =  document.getElementById('valueA');
     let myValueB =  document.getElementById('valueB');
     let myValueC =  document.getElementById('valueC');
    console.log('vlue a', myValueA.value);
     var delta = myValueB.value * myValueB.value - 4*myValueA.value*myValueC.value;
     console.log('detal',delta);
     if (delta > 0){
        root1 = (-myValueB.value + Math.sqrt(delta))/ (2*myValueA.value);
        root2 = (-myValueB.value - Math.sqrt(delta))/ (2*myValueA.value);
        console.log(root1);
        console.log(root2);

     }else if (delta == 0){
        root1 = root2 = -myValueB.value / (2 * myValueA.value);
        console.log(root1);
        console.log(root2);
     }
}