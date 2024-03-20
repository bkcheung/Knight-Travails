function knightMoves(start, end, graph=[], moves=[]){
    graph.push(possibleMoves(start));
    moves.push(start);
    let node = possibleMoves(start);
    node.forEach(item => {
        if(node===null || node===end) return node;
        moves.push(item)
        graph.push(possibleMoves(start));
        console.log(item);
    })
}
function possibleMoves(position){
    let graph = [];
    let moves = [[-2,-1],[-2,1],[2,-1],[2,1],[-1,-2],[1,-2],[1,2],[-1,2]];
    let n = position[0];
    let m = position[1];
    for(let i=0; i<8;i++){
        let a = moves[i][0]+n;
        let b = moves[i][1]+m;
        if(-1<a<9 && -1<b<9){ //ensure move is on the board
            graph.push([a,b]);
        }
    }
    return graph;
}

knightMoves([3,3],[7,2]);