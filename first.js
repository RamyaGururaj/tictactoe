let btns=document.querySelectorAll(".but");
let turnx=true;
let board=document.querySelector(".board");
// let count=0;
btns.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        if(turnx){
            btn.innerText="X";
            btn.classList.add("xcolor");
            turnx=false;
        }else{
            btn.innerText="O";
            btn.classList.add("ocolor");
            turnx=true;
        }
        btn.disabled=true;
        // count++;
        checkwinner();
    });
})
let winpat=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
let checkwinner=()=>{
    for(let pat of winpat){
        let pat1=btns[pat[0]].innerText;
        let pat2=btns[pat[1]].innerText;
        let pat3=btns[pat[2]].innerText;
        if(pat1!=="" && pat2!=="" && pat3!==""){

            if(pat1===pat2 && pat2===pat3){
                let winner=pat1;
                console.log("winner",winner);
                let newele=document.createElement("p");
                newele.classList.add("para");
                if(winner==="X"){
                    newele.innerText="Congratulations!! winner is X";
                    board.append(newele);
                    disabledbtns();
                }else{
                    newele.innerText="Congratulations!! winner is O";
                    board.append(newele);
                    disabledbtns();
                }
                let newbtn=document.createElement("button");
                newbtn.innerText="new game";
                newbtn.classList.add("butt");
                let newpara=document.querySelector(".para");
                newpara.append(newbtn);
                newbtn.addEventListener("click",()=>{
                    for(let btn of btns){
                        btn.innerText="";
                        btn.disabled=false;
                        newele.remove();
                        newbtn.remove();
                    }
                });
            }
        }
    }
}
let disabledbtns=()=>{
    for(let btn of btns){
        btn.disabled=true;
    } 
}



