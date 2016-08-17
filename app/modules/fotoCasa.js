var moduleBase = require('moduleBase'),
    constants = require('..\\Utilities\\constants');


var fotoCasaModule = new moduleBase();

fotoCasaModule.configure(constants.types.fotoCasa,constants.urls.fotoCasa, filter, conversor);



function filter(){
    var self = this;
        urlBase = self.url;
    
        // tti -> alquiler, venta, ....
      self.cleanUrl = [
          urlBase + "?opi=36&ts=&t=08024&l=&bti=2&tti=3&mode=1&prchti=&cu=es-es",
          urlBase + "?opi=36&ts=&t=08012&l=&bti=2&tti=3&mode=1&prchti=&cu=es-es",
          urlBase + "?opi=36&ts=&t=08010&l=&bti=2&tti=3&mode=1&prchti=&cu=es-es",
          urlBase + "?opi=36&ts=&t=08010&l=&bti=2&tti=3&mode=1&prchti=&cu=es-es",
      ]; 

      
}

function conversor(dom){
    // get from dom the detail url
    
}

// function executor(){
//     var self = this, 
//         dom = [];

//     self.cleanUrl.forEach(function (url){        
//         request(url, function (error, response, html){
//             if(!error){
//                 dom.push($);
//             }
//         });//response
//     });//foreach

//     return dom;
// }


module.exports = fotoCasaModule;