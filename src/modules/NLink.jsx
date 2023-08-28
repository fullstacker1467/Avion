import React from 'react'
import { Link } from 'react-router-dom'

export const NLink = ({item}) => {
  return (
      <Link to={item.to}>{item.title}</Link>
  )
}
