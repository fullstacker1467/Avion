import React from 'react'
import { Link } from 'react-router-dom'

export const NLink = ({item , nav}) => {
  return (
      <Link onClick={nav} to={item.to}>{item.title}</Link>
  )
}
