import React from 'react'
import { Icommit } from '../lib/interfaces'
import style from "../style/commit.module.scss" 

const Commit = (props: Icommit) => {
  const {name, date, comment} = props;

  return (
    <div className={style.container}>
      <p>{name}</p>
      <p>{date}</p>
      <p>{comment}</p>
    </div>
  )
}

export default Commit