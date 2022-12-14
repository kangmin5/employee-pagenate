import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const EmpListing = () => {
    const [empData, setEmpData] = useState(null)

    const navigate = useNavigate();

    const LoadDetail = (id) => {
        navigate('/employee/detail/' + id);
    }
    const LoadEdit = (id) => {
        navigate('/employee/edit/' + id);
    }
    const RemoveFunction = (id) => {
        if (window.confirm('정말 삭제 하시겠습니까?')) {
            // const empData = { id, name, email, phone, active };

            fetch("http://localhost:8000/employee/" + id, {
                method: "DELETE",
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify(empData)
            })
                .then(res => {
                    alert('성공적으로 삭제되었습니다.')
                    window.location.reload();
                }).catch(err => {
                    console.error(err.message);
                })
        }
    }



    useEffect(() => {
        fetch('http://localhost:8000/employee').then((res) => {
            return res.json()
        })
            .then((resp) => {
                setEmpData(resp)
            })
            .catch((err) => {
                console.log(err.message)
            })
    }, [])

    return (
        <div className='container'>
            <div className='card'>
                <div className='card-title'>
                    <h2>직원 연락처 리스트</h2>
                </div>
                <div className='card-body'>
                    <div className='divbtn'>
                        <Link to="/employee/create" className='btn btn-success'>직원추가(+)</Link>
                    </div>
                    <table className='table table-bordered'>
                        <thead className='bg-dark text-white'>
                            <tr>
                                <td>ID</td>
                                <td>이름</td>
                                <td>이메일</td>
                                <td>휴대번호</td>
                                <td>활동유무</td>
                            </tr>
                        </thead>
                        <tbody>
                            {empData?.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.phone}</td>
                                    <td>
                                        <a onClick={() => LoadEdit(item.id)} className='btn btn-success'>수정</a>
                                        <a onClick={() => RemoveFunction(item.id)} className='btn btn-danger'>삭제</a>
                                        <a onClick={() => { LoadDetail(item.id) }} className='btn btn-primary'>상세보기</a>

                                    </td>
                                </tr>)
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div >
    )
}

export default EmpListing