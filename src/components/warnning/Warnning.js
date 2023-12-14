import React from 'react'
import { Link } from 'react-router-dom'

function Warnning() {
  return (
    <div>
        <h1>Vui lòng đăng nhập trước khi dùng tính năng</h1>
        <Link to={"/login"}>Login</Link>
    </div>
  )
}

export default Warnning