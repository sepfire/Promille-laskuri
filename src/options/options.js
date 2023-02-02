import React from 'react'

export default function Options() {
    const selections = [];
    for (let i = 0; i <= 24; i = i + 1) {
        selections.push(i);
    }
    return (
        selections.map(selections => {
            return <option value={selections}>{selections}</option>
        })
    )
}
