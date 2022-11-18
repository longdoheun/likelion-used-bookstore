import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <div onClick={()=>{navigate("/")}}>notFound</div>
  )
}
