/* eslint-disable no-undef */

import {sort} from  '../src/legend.js'

const Swordsmen = {name: 'мечник', health: 10, level: 2, attack: 80, defence: 40}



const PatternSort = ["name", "level"]



test ("legend", () => {
    const result = sort(Swordsmen, PatternSort)
    const expected =
    [ 
    {key: "name", value: "мечник"}, 
    {key: "level", value: 2}, 
    {key: "attack", value: 80}, 
    {key: "defence", value: 40}, 
    {key: "health", value: 10} 
    ];
    expect(result).toEqual(expected)


})



