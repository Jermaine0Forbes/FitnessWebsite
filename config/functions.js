module.exports = {

    hello: function(){
        console.log("hello");
    },

    encodeStr: function(str){
         var string  = str.replace(/ /g,"-");
         return string;
    },

    decodeStr: function(str){
        var string  = str.replace(/-/g," ");
        return string;
    },

    grabAndAddValues: (obj,add)=>{
        var data = {};
       for(prop in obj){
         data[prop] = obj[prop]
       }
       for(prop in add){
         data[prop] = add[prop]
       }

       return data;
   },


}
