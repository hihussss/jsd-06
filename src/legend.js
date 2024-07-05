const Swordsmen = {name: 'мечник', health: 10, level: 2, attack: 80, defence: 40}


const PatternSort = ["name", "level"]


export function sort(obj, pattern) {
    let arr = []
    let Notarr = []
    for (let i in obj) {
        if (pattern.includes(i)) {
            arr.push({key: i, value: obj[i]})
        }else{
            Notarr.push({key: i, value: obj[i]})  
        }   
    }
    
    Notarr.sort(function(a, b)  {
        if (a.key > b.key) {
            return 1;
          }
          if (a.key < b.key) {
            return -1;
          }
        });
    
    arr.push(...Notarr)
    return arr
        }
       


    console.log(sort(Swordsmen, PatternSort))