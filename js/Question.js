class Question {
    constructor(){
        this.input = createInput("Name");
        this.button = createButton('Play');
        this.greeting = createElement('h3');
        this.question = createElement('h2');
    }

    display(){
        var title = createElement('h2');
        title.html("QUIZ!");
        title.position(100,0);
       
        this.input.position(130,160);
        
        this.button.position(250,200);
        
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            contestant.name = this.input.value();
            contestantCount = contestantCount+1;
            contestant.index=contestantCount;
            contestant.update();
            contestant.updateCount(contestantCount);
            this.greeting.html("Hello " + contestant.name);
            this.greeting.position(140,160);
        })
    }

    hide(){
        this.input.hide();
        this.greeting.hide();
        this.button.hide();
    }      
}