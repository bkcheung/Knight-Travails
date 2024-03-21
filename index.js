function square(x,y){
    return{
        x,
        y,
        pos: [x,y],
        previous: [],
        setPrev(pos){
            this.previous.push(pos);
        },
        getPrev(){
            return this.previous;
        },
        possibleMoves(){
            let moves = [];
            let offsets = [[-2,-1],[-2,1],[2,-1],[2,1],
                         [-1,-2],[1,-2],[1,2],[-1,2]];

            for(let i=0; i<8;i++){
                let a = offsets[i][0]+ this.x;
                let b = offsets[i][1]+ this.y;
                if(-1<a<9 && -1<b<9){ //ensure move is on the board
                    moves.push([a,b]);
                }
            }
            return moves;
        }
    }
}
function knightMoves(start, end, graph=[], moves=[]){
    let startSq = square(start[0],start[1]);
    let endSq = square(end[0],end[1]);
    console.log(startSq.possibleMoves());

    moves.push(startSq.pos);
    // //base case
    if(sqEquals(start,end)){
        return `You made it in ${moves.length} moves with path [${moves}]`;
    } 
    // let arr = possibleMoves(start);
    // arr.forEach(item => {
    //     return knightMoves(item,end,graph,moves);
    // })
    // return moves;
}

function sqEquals(sq1, sq2){
    if(sq1.x===sq2.x && sq1.y===sq2.y){
        return true;
    }
    return false
}

console.log(knightMoves([3,3],[3,3]));