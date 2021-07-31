class Screen{
    constructor(){
        this.start = createImg("images/maxresdefault.png")
        this.storytext1 = createElement("p")
        this.storytext2 = createElement("p")
        this.bank = createImg("images/bank.png")
        this.thief = createImg("images/giphy.gif")
        //this.how  = createImg()
    }
    startScreen(){
        this.thief.hide()
        this.bank.hide()
        this.start.position(250,380);
        this.start.size(650,300)
        this.start.mouseClicked(()=>{
            gameState="story";
        })
    }
    storyScreen(){
        this.start.hide() 
        this.thief.show() 
        this.bank.show ()
        this.thief.position(400,100);
        this.bank.position (200,300);
        this.bank.size (500,300);
        this.storytext1.html("This is a corrupt bank with lot of  black money  is being robbed byRobbinHood.  " );
        this.storytext2.html("Help Robin to escape safely from the police");
        this.storytext1.position (10,20);
        this.storytext2.position (10,70);
        this.storytext1.style ("color","red");
        this.storytext1.style ("font-size","30px")
        this.storytext2.style ("color","yellow");
        this.storytext2.style ("font-size","30px")

    }
}