define(["greetall"],function(greetall){
    return {
        hello1:function(name){
            return greetall[name].hello + " "+greetall[name].name;
        }
    }
})