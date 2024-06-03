const gameboard = document.getElementById('gameBoard');
const context = gameboard.getContext('2d');
const scoreText = document.getElementById('scoreVal')

let width = gameboard.width;
let height = gameboard.height;
let unit = 25;

let foodX;
let foodY;
let Xvel = 25;
let Yvel = 0;
let score = 0;
let active = true;
let started = false;
let paused = false;

let snake = [{x:unit*3,y:0},
    {x:unit*2,y:0},{x:unit,y:0},{x:0,y:0}
]

window.addEventListener('keydown',keypress);

function startGame() {
    context.fillStyle = '#000000'
    context.fillRect(0,0,height,width)
    createfood()
    displayfood()
    drawsnake();
}

function createfood(){
    foodX = Math.floor(Math.random()*width/unit)*unit
    foodY = Math.floor(Math.random()*height/unit)*unit
    console.log(foodX);
    console.log(foodY);
}

function displayfood(){
    console.log('food');
    context.fillStyle = 'red'
    context.fillRect(foodX,foodY,unit,unit)

}

function drawsnake(){
    context.fillStyle = 'aqua'
    context.strokeStyle = '#000000'
    snake.forEach((snakepart) => {
        context.fillRect(snakepart.x,snakepart.y,unit,unit)
        context.strokeRect(snakepart.x,snakepart.y,unit,unit)
    } )
}

function clearBoard(){
    context.fillStyle = '#000000'
    context.fillRect(0,0,height,width);
}

function movesnake(){
    const head = {x:snake[0].x+Xvel,y:snake[0].y+Yvel}
    snake.unshift(head);
    if(snake[0].x == foodX && snake[0].y == foodY){
        createfood()
        score += 1
        scoreText.textContent = score;
    }
    else snake.pop()

}

function nextTick(){
    if(active && !paused){
        setTimeout(() =>{
            clearBoard()
            displayfood()
            drawsnake()
            movesnake()
            checkgameover()
            nextTick()
        },200)
    }
    else if(!active){
        clearBoard();
        context.font = "bold 50px serif";
        context.fillStyle = "white";
        context.textAlign = "center";
        context.fillText("Game Over !!", width/2, height/2);
    }
}

function keypress(event){
    if (!started){
        started = true
        nextTick()
    }

    if(event.keyCode===32){
        console.log('clicked')
        if(paused){
            paused = false;
            nextTick();
        }
        else{
            paused = true;
        }
    }

    const LEFT = 37
    const UP = 38
    const RIGHT = 39
    const DOWN = 40

    switch(true){
        case(event.keyCode == LEFT && Xvel!= unit && Xvel != -unit):
        Xvel-=unit
        Yvel = 0
        break;
        case(event.keyCode == RIGHT && Xvel!= unit && Xvel != -unit):
        Xvel+=unit
        Yvel = 0
        break;
        case(event.keyCode == UP && Yvel!= unit && Yvel != -unit):
        Yvel-=unit
        Xvel = 0
        break;
        case(event.keyCode == DOWN && Yvel!= unit && Yvel != -unit):
        Yvel += unit
        Xvel = 0
        break;
    }
}

function checkgameover(){
    switch(true){
        case(snake[0].x < 0 ) :
        case(snake[0].x >= width ) :
        case(snake[0].y < 0 ) :
        case(snake[0].y >= height ) :
         active = false;
         break;
    }

    for(let i=1; i < snake.length; i++){
        if(snake[0].x == snake[i].x && snake[0].y == snake[i].y){
            active = false;
        }
    }
    
}
startGame();