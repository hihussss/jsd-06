/* eslint-disable no-undef */

import { destruct} from "../src/destructuring";

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


test ("destructuring", () => {
   const result = destruct(character,priem) 
   const expected = [8, 'Двойной выстрел', 'http://...', 'Двойной выстрел наносит двойной урон']
   expect(result).toEqual(expected)
})






test ("destructuring", () => {
    const result = destruct(character,priem2) 
    const expected = [9, 'Нокаутирующий удар', 'http://...', 'Описание недоступно']
    expect(result).toEqual(expected)
 })