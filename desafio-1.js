let personagens = [
    ["Laura",2000],
    ["Maria",3500],
    ["Mario",5002],
    ["Elioneide",15000]
    ];
    
    let nomePersonagem = personagens[3][0];
    let nivelPersonagem = personagens[3][1];
    
    
    if (nivelPersonagem < 1001){
    console.log("O Herói de nome **" + nomePersonagem + "** está no nível de **Ferro**")
    }else if (nivelPersonagem < 2001){
    console.log("O Herói de nome **" + nomePersonagem + "** está no nível de **Bronze**")
    }else if (nivelPersonagem <6001){
    console.log("O Herói de nome **" + nomePersonagem + "** está no nível de **Prata**")
    }else if (nivelPersonagem < 7001){
    console.log("O Herói de nome **" + nomePersonagem + "** está no nível de **Ouro**")
    }else if (nivelPersonagem < 8001){
    console.log("O Herói de nome **" + nomePersonagem + "** está no nível de **Platina**")
    }else if (nivelPersonagem < 9001){
    console.log("O Herói de nome **" + nomePersonagem + "** está no nível de **Ascendente**")
    }else if (nivelPersonagem < 10001){
    console.log("O Herói de nome **" + nomePersonagem + "** está no nível de **Imortal**")
    }else {
    console.log("O Herói de nome **" + nomePersonagem + "** está no nível de **Radiante**")
    }
    