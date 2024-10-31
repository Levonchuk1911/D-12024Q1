const sheeps = [0,1,1,0,1,0,0,0,1,0,1,0,0,0,]
const empty = []
for(let x=1; x < sheeps.length; x++) {
    if (sheeps[x] === 0){
        empty.push(sheeps[x])
    }
}
console.log(empty)