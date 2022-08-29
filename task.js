let quest_num = document.getElementById("quest_num");
let timer = document.getElementById("timer");
let question = document.getElementById("question");
let a = document.getElementById("a");
let b = document.getElementById("b");
let c = document.getElementById("c");
let d = document.getElementById("d");
let next = document.getElementById("next");
let answers =document.querySelectorAll(".answers");
let container = document.querySelector(".container");
let repeat = document.getElementById("repeat");
let content = document.querySelector(".content");
let correct = document.getElementById("correct");
fetch("info-file.json")
.then(response => response.json())
.then(data => {
    let num=0;
    let correctAnswers = 0;

    a.addEventListener("click",function(){
        selectAnswer(a ,num);
        selectAnswer(b ,num);
        selectAnswer(c ,num);
        selectAnswer(d ,num);
        next.style.display = "block";
        if(a.id == data[num].answer)
        {
            correctAnswers+=1;
        
        }
    
    })
    
    b.addEventListener("click",function(){
        selectAnswer(a ,num);
        selectAnswer(b ,num);
        selectAnswer(c ,num);
        selectAnswer(d ,num);
        next.style.display = "block";
        if(b.id == data[num].answer)
        {
            correctAnswers+=1;
            
        }
        
    })
    
    c.addEventListener("click",function(){
        selectAnswer(a ,num);
        selectAnswer(b ,num);
        selectAnswer(c ,num);
        selectAnswer(d ,num);
        next.style.display = "block";

        if(c.id == data[num].answer)
        {
            correctAnswers+=1;
            
        }
    })
    
    d.addEventListener("click",function(){
        selectAnswer(a ,num);
        selectAnswer(b ,num);
        selectAnswer(c ,num);
        selectAnswer(d ,num);
        next.style.display = "block";

        if(d.id == data[num].answer)
        {
            correctAnswers+=1;
            
        }
    })
    





    next.addEventListener("click",function(){




if(quest_num.textContent == "8")
{
    question.style = "opacity : 0;";
    a.style = "opacity : 0;";
    b.style = "opacity : 0;";
    c.style = "opacity : 0;";
    d.style = "opacity : 0;";
    correct.textContent = `${correctAnswers} / 8`

}

        if(quest_num.textContent == "7")
        {
        next.textContent = "Complete";
        repeat.style.display ="block";
        

        }

        next.style.display = "none";

            num += 1;
    if(quest_num.textContent == "8")
    {
    quest_num.textContent ="8";
    }
    else
    {
        quest_num.textContent = parseInt(quest_num.textContent) + 1; 

    }
       
        question.textContent = data[num].quest;
        a.textContent = data[num].a;
        b.textContent = data[num].b;
        c.textContent = data[num].c;
        d.textContent = data[num].d;
        timer.textContent = "30";
       if (timer.textContent = "0")
       {
        timer.textContent = "30";
       }
        
       a.className = "undo";
       b.className = "undo";
       c.className = "undo";
       d.className = "undo";

       
        })

    question.textContent = data[num].quest;
    a.textContent = data[num].a;
    b.textContent = data[num].b;
    c.textContent = data[num].c;
    d.textContent = data[num].d;
   let time = setInterval(function () {
    
       timer.textContent  = parseInt(timer.textContent) -1;
    if(timer.textContent == 0)
    {
        clearInterval(time);
        selectAnswer(a ,num);
        selectAnswer(b ,num);
        selectAnswer(c ,num);
        selectAnswer(d ,num);
        next.style.display = "block";
    }
    
    
    }, 1000);



function selectAnswer(an ){
if (an.id == data[num].answer)
{
    an.className = "green";
}
else 
an.className = "red";
}


repeat.addEventListener("click",function(){

    location.reload();

})







})
