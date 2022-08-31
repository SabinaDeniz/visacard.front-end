let errorCard = document.getElementsByClassName('card')[0];


function myInput(){
    let array = ['0', '0', '0','0',' ','0','0','0','0',' ','0','0','0','0',' ','0','0','0', '0']
    let inp = document.getElementsByTagName('input')[1];
    let deyer = inp.value.length;
    if(deyer == 4 || deyer == 9 || deyer == 14){
        inp.value = inp.value+' ';

    }
    
    let p = document.getElementsByTagName('p')[0];
    if(find(inp.value)){
        errorCard.style.visibility = 'hidden'
    }
    else{
        errorCard.style.visibility = 'visible'
    }
    for(i in inp.value){
        array[i] = inp.value[i];
    }
    inp.value = inp.value.toUpperCase()
    p.innerHTML = array.join('').toUpperCase();
}


function find(param){
    let nums = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', ' '];
    for(i of param){
        if(nums.includes(i) == false){
            return false
        }
    }
    return true
}

function upper(){
    let p = document.getElementsByTagName('p')[1];
    let nameInp = document.getElementsByTagName('input')[0];
    let list = nameInp.value.split(' ');
    for(i in list){
        list[i] = Capitalize(list[i])
    }
    nameInp.value = list.join(' ');
    p.innerHTML = nameInp.value;

}

function Capitalize(param){
    return param[0].toUpperCase() + param.slice(1, param.length).toLowerCase();
}

function month(){
    console.log('run')
    let inp2 = document.getElementsByTagName('input')[2];
    let span = document.getElementsByClassName ('month')[0];
    span.innerHTML = inp2.value;    

}
function year (){
    let inp2 = document.getElementsByTagName('input')[3];
    let span = document.getElementsByClassName ('year')[0];
    span.innerHTML = inp2.value;  
}

function test(){
    let myInp = document.getElementsByTagName ('input')[4];
    let p = document.getElementsByTagName ('p')[3];
    p.innerHTML = myInp.value;
}


