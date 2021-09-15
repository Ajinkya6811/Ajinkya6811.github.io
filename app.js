const boxes = Array.from(document.getElementsByClassName('box'));
const resultText = document.getElementById('starting text');
const RestartButton = document.getElementById('Restart');
const P_1 = 'O';
const P_2 = 'X';


let currentPlayer;

const board_data = [];


const Draw = () => {
    boxes.forEach((box, index)=>{
        let style = '';
        if (index < 3){
            style += 'border-bottom: 5px solid black;';
        
        }

        if ((index==2)||(index==5)||(index==8)){
            style += 'border-left: 5px solid black;';
        }
        

        if ((index % 3) == 0){
            style += 'border-right: 5px solid black;';
        }

        if (index > 5){
            style += 'border-top: 5px solid black;';
        
        }

        box.style = style;
        box.addEventListener('click', boxClicked);

    })


}
const boxClicked = (e) => {
    const id = e.target.id;
    console.log(id);
    if(!board_data[id]) {
        board_data[id] = currentPlayer;
        e.target.innerText = currentPlayer;


        if(PlayerWon()){
            resultText.innerText = currentPlayer+" wins";
                      
            return;             
        } 
        let check = 0;
        for (let i = 1; i < 10; i++) {
            if(board_data[i]==null)
                check++;
        }
        if(check==0)
        {
            if(!PlayerWon())
            {
                resultText.innerText = "The game Ended in a Tie.....Rematch???";
            }
        }
    }
        currentPlayer = currentPlayer == P_1 ? P_2 : P_1;


};

const PlayerWon = () => {
    if(board_data[1]==currentPlayer){
        if(board_data[2]==currentPlayer && board_data[3] ==currentPlayer){
            console.log("%s win on left", currentPlayer);
            return 1;
        }

        if(board_data[5]==currentPlayer && board_data[9] ==currentPlayer){
            console.log("%s win on diagonal", currentPlayer);
            return 1;
        }

        if(board_data[4]==currentPlayer && board_data[7] ==currentPlayer){
            console.log("%s win on vertical", currentPlayer);
            return 1;
        }

    }

    if(board_data[9]==currentPlayer){
        if(board_data[8]==currentPlayer && board_data[7] ==currentPlayer){
            console.log("%s win on bottom horizontal", currentPlayer);
            return 1;
        }

        if(board_data[6]==currentPlayer && board_data[3] ==currentPlayer){
            console.log("%s win on right vertical", currentPlayer);
            return 1;
        }
    }

    if(board_data[5]==currentPlayer){
        if(board_data[2]==currentPlayer && board_data[8] ==currentPlayer){
            console.log("%s win on center vertical", currentPlayer);
            return 1;  
        }

        if(board_data[4]==currentPlayer && board_data[6] ==currentPlayer){
            console.log("%s win on right vertical", currentPlayer);
            return 1;
        }

        if(board_data[3]==currentPlayer && board_data[7] ==currentPlayer){
            console.log("%s win on diagonal", currentPlayer);
            return 1;
        }
    }

};


const restart = () => {

    resultText.innerText = 'Lets play Tic Tac Toe game!!';

    for (let i = 0; i < board_data.length; i++) {
        board_data[i] = null;
        
    };
    

    boxes.forEach((box) => {
        box.innerText = '';
    });
    
    currentPlayer = P_1;

    


}

RestartButton.addEventListener('click', restart);

restart();

Draw();
