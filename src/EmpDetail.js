import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

const EmpDetail = () => {
    const { empId } = useParams();
    const [empData, setEmpData] = useState({})
    const navigate = useNavigate();
    useEffect(() => {
        fetch("http://localhost:8000/employee/" + empId).then((res) => {
            return res.json();
        }).then((resp) => {
            setEmpData(resp)
        }).catch((err) => {
            console.error(err.message)
        })
    }, [empData])

    const LoadEdit = (empId) => {
        navigate('/employee/edit/' + empId);
    }
    return (
        <div>

            {empData &&
                <div>
                    <h2> 직원 성명 :  <b>{empData.name}</b>  (<span>ID: {empData.id}</span>)</h2>
                    <h3> 연락처 세부사항</h3>
                    <h5> 이메일 : {empData.email}</h5>
                    <h5> 휴대번호 : {empData.phone}</h5>
                    <Link to="/employee" className='btn btn-info'>리스트Home</Link>
                    <a onClick={() => LoadEdit(empId)} className='btn btn-success'>수정</a>
                </div>
            }

        </div>
    )
}

export default EmpDetail