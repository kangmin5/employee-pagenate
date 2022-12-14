import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const EmpDetail = () => {
  const { empId } = useParams();
  const [empData, setEmpData] = useState({})
  useEffect(() => {
    fetch("http://localhost:8000/employee/" + empId).then((res) => {
      return res.json();
    }).then((resp) => {
      setEmpData(resp)
    }).catch((err) => {
      console.error(err.message)
    })
  }, [empData])
  return (
    <div>
      {empData &&
        <div>
          <h2> 직원 성명 :  <b>{empData.name}</b>  (<span>ID: {empData.id}</span>)</h2>
          <h3> 연락처 세부사항</h3>
          <h5> 이메일 : {empData.email}</h5>
          <h5> 휴대번호 : {empData.phone}</h5>
          <Link to="/" className='btn btn-danger'>리스트로 돌아가기</Link>
        </div>      
      }

    </div>
  )
}

export default EmpDetail