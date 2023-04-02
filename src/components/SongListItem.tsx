import React from 'react'

interface Props {
    label: string
    time: string
}

const SongListItem: React.FC<Props> = ({ label, time }) => {
  return (
    <li className="p-2 mt-1 rounded cursor-pointer flex justify-between hover:bg-neutral-800">
        <p>{label}</p>
        <p>{time}</p>
    </li>
  )
}

export default SongListItem
