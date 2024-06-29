let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newbtn = document.querySelector("#new-btn");
let msgcont = document.querySelector(".msg-cont");
let msge = document.querySelector("#msg");

let turno = true;

const winpattern = [[0,1,2],[3,4,5],[6,7,8],[0,4,8],[2,4,6],[0,3,6],[1,4,7],[2,5,8]];

  const resetgame = () => {
    enable();
    msgcont.classList.add("hide");

}

boxes.forEach( (box) => {
    box.addEventListener("click", () => {
        console.log("clicked");
       

        if(turno){
            box.innerText = "O";

            turno = false;
            
        }
        else{
            
            box.innerText = "X" ;
            turno = true;
        }

        box.disabled = true;

        cheackwinner();
    }

    );

});

const disable = () => {
    for(box of boxes){
        box.disabled = true;
    }
};
const enable = () => {
    for(box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};


const showWinner = (winner) => {
    msge.innerText = `Congratulation, winner is ${winner}`;
    msgcont.classList.remove("hide");
    disable();
};
 
const cheackwinner = () => {
    for( let pattern of winpattern) {
       let pos1 = boxes[pattern[0]].innerText;
       let pos2 = boxes[pattern[1]].innerText;
       let pos3 =  boxes[pattern[2]].innerText; 
       if(pos1 != "" && pos2 != "" && pos3 != "" ) {
        if(pos1 === pos2 && pos2 === pos3){
            showWinner(pos1);
        }
    }
    }

   
};


newbtn.addEventListener("click",()=>{
    resetgame();

});

reset.addEventListener("click", resetgame);