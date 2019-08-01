//Objeto Calculadora
var Calculadora={
        on:document.getElementById("on"),
        cero:document.getElementById("0"),
        uno:document.getElementById("1"),
        dos:document.getElementById("2"),
        tres:document.getElementById("3"),
        cuatro:document.getElementById("4"),
        cinco:document.getElementById("5"),
        seis:document.getElementById("6"),
        siete:document.getElementById("7"),
        ocho:document.getElementById("8"),
        nueve:document.getElementById("9"),
        menos:document.getElementById("menos"),
        igual:document.getElementById("igual"),
        punto:document.getElementById("punto"),
        mas:document.getElementById("mas"),
        dividido:document.getElementById("dividido"),
        pantalla:document.getElementById("display") ,
        sign:document.getElementById("sign") ,
        por:document.getElementById("por"),
        //Defino los tres tipos de variables
        numero1:0,
        numero2:0,
        operacion:"",
        varaible:0,
        init: function(){
                this.InitEventoClickAchicarTecla()
               //this.MostrarNumerosTeclado()   
                this.Evento()     
                this.Resetear()
                this.AñadirPunto(".")
                this.AñadirMenos()
                this.OperacionSuma()
                this.OperacionDivision()
                this.OperacionResta()
                this.OperacionMultiplicacion()
                this.Igualdad()
                this.Resolver()   
                },
        Evento: function(){              
                     this.uno.addEventListener('click', function() {
                        Calculadora.MostrarNumerosTeclado("1")
                      })
                      this.dos.addEventListener('click', function() {
                        Calculadora.MostrarNumerosTeclado("2")
                      })
                      this.tres.addEventListener('click', function() {
                        Calculadora.MostrarNumerosTeclado("3")
                      })
                      this.cuatro.addEventListener('click', function() {
                        Calculadora.MostrarNumerosTeclado("4")
                      })
                      this.cinco.addEventListener('click', function() {
                        Calculadora.MostrarNumerosTeclado("5")
                      })
                      this.seis.addEventListener('click', function() {
                        Calculadora.MostrarNumerosTeclado("6")
                      })
                      this.siete.addEventListener('click', function() {
                        Calculadora.MostrarNumerosTeclado("7")
                      })
                      this.ocho.addEventListener('click', function() {
                        Calculadora.MostrarNumerosTeclado("8")
                      })
                      this.nueve.addEventListener('click', function() {
                        Calculadora.MostrarNumerosTeclado("9")
                      })
                      this.cero.addEventListener('click', function() {
                        Calculadora.MostrarNumerosTeclado("0")
                      })            
        },
        MostrarNumerosTeclado: function(num){
                pantalla=document.getElementById("display")   
            if(self.pantalla.innerHTML.length<=7){
              if(pantalla.innerHTML=="0"){
                pantalla.innerHTML=num            
          }
          else {
                  pantalla.innerHTML+=num
          }
            }    
                
        },     
                /*Evento para Achicar teclas*/
        InitEventoClickAchicarTecla: function(){
        var teclado=document.getElementsByClassName("tecla")
                for(i=0;i<teclado.length;i++){               
                //Listener para esuchar el mouseout 
                        teclado[i].addEventListener("mousedown",function(){
                                this.style.transform="scale(0.8,0.8)"
                        });          
                        teclado[i].addEventListener("mouseleave",function(){
                                this.style.transform="scale(1,1)"                                   
                         });       
                         teclado[i].addEventListener("mouseup",function(){
                                this.style.transform="scale(1,1)"                                                   
                         });                   
                }
        },
        Resetear: function(){
          self=this
          //Para el evento click
          self.on.addEventListener("click",function(){
            self.numero1=0
            self.numero2=0,
            self.operacion=""
            self.varaible=0
            self.pantalla.innerHTML=0
          })
        },
        AñadirPunto: function(punto){
            self=this;  
            self.punto.addEventListener("click",function(){
               existepunto=self.pantalla.innerHTML.indexOf(".");
               if(existepunto==-1){
                self.pantalla.innerHTML+=punto
              }
            })
        },
        AñadirMenos: function(){
          self=this;  
          self.sign.addEventListener("click",function(){
             existemenos=self.pantalla.innerHTML.indexOf("-");
             existecero=self.pantalla.innerHTML.indexOf("0");

             if(existemenos==-1 && existecero==-1){
              self.pantalla.innerHTML="-"+self.pantalla.innerHTML
            }
          })

        },
        OperacionSuma: function(){
          self=this
                  self.mas.addEventListener("click",function(){
                  self.numero1=self.pantalla.textContent;
                  self.operacion="+";
                  self.pantalla.innerHTML=""

              })
              
        },
        OperacionResta: function(){
          self=this
                  self.menos.addEventListener("click",function(){
                  self.numero1=self.pantalla.textContent;
                  self.operacion="-";
                  self.pantalla.innerHTML=""

              })
              
        },
        OperacionMultiplicacion: function(){
          self=this
                  self.por.addEventListener("click",function(){
                  self.numero1=self.pantalla.textContent;
                  self.operacion="*";
                  self.pantalla.innerHTML=""

              })
              
        },
        OperacionDivision: function(){
          self=this
                  self.dividido.addEventListener("click",function(){
                  self.numero1=self.pantalla.textContent;
                  self.operacion="/";
                  self.pantalla.innerHTML=""
              })             
        },
        //Cuando presione igual el segundo numero es igual segudno numero
        Igualdad:function(){        
          self=this
                  self.igual.addEventListener("click",function(){
                      self.numero2=self.pantalla.textContent;
                      
                  //  }   
                    self.Resolver()
              })
        },
  
        Resolver: function(){
          self=this
          var res=0;
          switch(this.operacion){
              case "+":
              res=parseFloat(this.numero1)+parseFloat(this.numero2);
              break;         
              case "-":
              res=parseFloat(this.numero1)-parseFloat(this.numero2);
              break;
              case "*":      
              res=parseFloat(this.numero1)*parseFloat(this.numero2);
              break;
              case "/":
              res=parseFloat(this.numero1)/parseFloat(this.numero2);
              break;                
            }      
                self.pantalla.textContent=res;
                self.numero2=res;
                
    
              }

}
Calculadora.init()
