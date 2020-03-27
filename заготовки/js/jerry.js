 function Jerry(){
    this.coordX = 100;
    this.coordY = 500;
    this.width = 25;
    this.height = 25;
    this.name = "Jerry";
    this.speedX = 15;
    this.speedY = 15;

    this.state = function(edit){
        if(edit === "top"){
            edit -= this.speedY; 
        } else if(edit === "bottom"){
            edit += this.sppedY;
        } else if( edit === "left"){
            edit -= this.speedX;
        } else if( edit === "right"){
            edit += this.speedX;
        }
    }
}