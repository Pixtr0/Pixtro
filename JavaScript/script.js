


setInterval(function showPrice(){
    var Id = "";
    var Switch = "";
    var Stabs = "";
    var Lube = "";
    var price;
    var Amount = 0;
    let keyBoards = ['C_','S_','W_'];
    for(let i = 0; i < keyBoards.length ; i++)
    {
        Id = keyBoards[i] + "result";
        Switch = keyBoards[i] + "switches";
        Stabs = keyBoards[i] + "stabs";
        Lube = keyBoards[i] + "lube";
        if(Id == "C_result"){Amount = 99.99;} 
        if(Id == "S_result"){Amount = 144.99;} 
        if(Id =="W_result"){Amount = 132.99;} 
        
        price = (Amount +  Number(document.getElementById(Switch).value) + Number(document.getElementById(Stabs).value) + Number(document.getElementById(Lube).value) );
        
        document.getElementById(Id).innerHTML = price;
    }
},1000)



