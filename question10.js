// This is Question 10 

const a =  [1,3,4,2,6,7,9]
const b = [2,3,1,5,7,9]
let count = []

for(let i=0 ; i <=a.length-1 ;i++)
{
    let temp = a[i]
    for(let j = 0; j<= b.length-1;j++)
    {
        if(b[j] === a[i])
        {
            count.push(a[i])
        }
    }
}

console.log(count);