function Node(pos,path){
    return{
        pos,
        path
    }
}
function knightMoves(start, end){
    let q = [Node(start, [start])];
    let currNode = q.shift();
    while(!arrEquals(currNode.pos, end)){
        let moves = possibleMoves(currNode.pos);
        moves.forEach(move => {
            let node = Node(move, currNode.path.concat([move]));
            q.push(node);
        });
        currNode = q.shift();
    }
    console.log(`You made it in ${currNode.path.length} moves with path:`);
    currNode.path.forEach((pos)=>{
        console.log(pos);
    })
}
function possibleMoves(pos){
    let possMoves = [];
    let moves = [[-2,-1],[-2,1],[2,-1],[2,1],[-1,-2],[1,-2],[1,2],[-1,2]];
    for(let i=0; i<8;i++){
        let a = moves[i][0]+pos[0];
        let b = moves[i][1]+pos[1];
        if(-1<a<9 && -1<b<9){ //ensure move is on the board
            possMoves.push([a,b]);
        }
    }
    return possMoves;
}
function arrEquals(arr1, arr2){
    if(arr1[0]===arr2[0] && arr1[1]===arr2[1]){
        return true;
    }
    return false
}

knightMoves([3,3],[5,3]);