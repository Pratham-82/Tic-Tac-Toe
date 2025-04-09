let boxes = document.querySelectorAll('.box');
let resBtn = document.querySelector('#res-btn');
let winName = document.querySelector('.win-name');
 
let turn0 = true;

const winPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

boxes.forEach((box) =>{
    box.addEventListener('click',()=>{
        // console.log('button Was clicked');
        if(turn0){
            box.innerText = 'O';
            box.style.color='blue';
            turn0 = false;
        }
        else{
            box.style.color='#b0413e';
            box.innerText = 'X';
            turn0 = true;
        }
        box.disabled = true;
        checkWinner();
    })
})

const checkWinner = () =>{
    for(let pattern of winPattern){
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if(pos1!=''&&pos2!=''&&pos3!=0){
            if(pos1==pos2&&pos2==pos3){
                // console.log('Winner',pos1);
                winName.innerText = `${pos1} Win Game`
                boxes.forEach((box)=>{
                    box.disabled=true;
                })
            }
        }
    }
}



resBtn.addEventListener('click',()=>{
    boxes.forEach((box)=>{
        box.innerText = '';
        box.disabled = false ;
        winName.innerText = '';
    })
})