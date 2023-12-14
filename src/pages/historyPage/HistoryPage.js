import React from 'react'
import './HistoryPage.css'
import Warnning from '../../components/warnning/Warnning'

function HistoryPage() {
  return (
    <div className='history-page'>
      {
        localStorage.getItem("me") === null ? <Warnning/> : (<div>History</div>)
      }
    </div>
  )
}

export default HistoryPage