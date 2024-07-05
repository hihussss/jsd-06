 const character = {
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 3,
    attack: 40,
    defence: 10,
    special: [
      {
        id: 8,
        name: 'Двойной выстрел',
        icon: 'http://...',
        description: 'Двойной выстрел наносит двойной урон'
      }, 
      {
        id: 9,
        name: 'Нокаутирующий удар',
        icon: 'http://...'
        
      }
    ]	
  }

   const priem = "Двойной выстрел"
   const priem2 = "Нокаутирующий удар"


   export function destruct(obj,priem) {
    let {special} = obj
    
    for (let i = 0; i < special.length; i++) {
        if (special[i].name === priem) {
          
          
        if ('description' in obj.special[i]) {
            
            
            return Object.values(special[i])
        }else{
            
            let {id,name,icon,description="Описание недоступно"} = special[i]
            return [id,name,icon,description]
        }
            
        }
    }
     
  }


  console.log(destruct(character,priem))
  console.log(destruct(character,priem2))