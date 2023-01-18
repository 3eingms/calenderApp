import { Badge, Button, Calendar } from 'antd'
import { useState } from 'react'
const getListData = (value) => {
  let listData
  
  switch (value.date()) {
    case 8:
      listData = [
        {
          type: 'error',
          content: 'Bank Holiday',
        },
        ,
      ]
      break
    case 10:
      listData = [
        {
          type: 'error',
          content: 'Bank Holiday',
        },
      ]
      break
    case 15:
      listData = [
        {
          type: 'error',
          content: 'Bank Holiday',
        },
      ]
      break
    default:
  }
  return listData || []
}
const getMonthData = (value) => {
  if (value.month() === 8) {
    return 1394
  }
}

const CalenderApp = () => {
  const [date, setDate] = useState()


  const setHoliday = () => {
    console.log(date)
  
  }

  const monthCellRender = (value) => {
    const num = getMonthData(value)
    return num ? (
      <div className="notes-month">
        <section>{num}</section>
        <span>Backlog number</span>
      </div>
    ) : null
  }
  const dateCellRender = (value) => {
    const listData = getListData(value)

    return (
      <ul className="events">
        {listData.map((item) => (
          <li key={item.content}>
            <Badge status={item.type} text={item.content} />
          </li>
        ))}
        
             
        
      </ul>
    )
  }
  return (
    <>
      <Button onClick={setHoliday}>Holiday</Button>
      <Calendar
        dateCellRender={dateCellRender}
        monthCellRender={monthCellRender}
        onChange={(val) => setDate(val.date())}
      />
      ;
    </>
  )
}
export default CalenderApp
