import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Pagination from './Pagination'

const EmpListing = () => {
    const [empData, setEmpData] = useState([])
    //페이지 관련 2줄
    const [currentPage, setCurrentPage] = useState(1)
    const [cardPerPage] = useState(10)

    const navigate = useNavigate();

    const LoadDetail = (id) => {
        navigate('/employee/detail/' + id);
    }
    const LoadEdit = (id) => {
        navigate('/employee/edit/' + id);
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

    //현재 페이지 찾기
    const indexOfLastCard = currentPage * cardPerPage;
    const indexOfFirstCard = indexOfLastCard - cardPerPage;
    const currentCard = empData.slice(indexOfFirstCard, indexOfLastCard);

    // 페이지 변경하기
    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    return (
        <div>
            <h1 className='mb-3'> CORESTONE </h1>
            <div className='container'>
                <div className='card'>
                    <div className='card-title'>
                        <h3 className='pt-4'>직원 연락처 리스트</h3>
                    </div>
                    <div className='card-body'>
                        <div className='divbtn'>
                            <Link to="/employee/create" className='btn btn-success'>직원추가(+)</Link>
                            <Link to="/" className='btn btn-info'>Home</Link>
                        </div>
                        <table className='table table-bordered'>
                            <thead className='bg-dark text-white'>
                                <tr >
                                    <td>ID</td>
                                    <td>이름</td>
                                    <td>이메일</td>
                                    <td>휴대번호</td>
                                    <td>작성일</td>
                                </tr>
                            </thead>
                            <tbody>
                                { currentCard &&
                                    currentCard
                                    .sort((a,b) => a.date - b.date)
                                    .map((item) => (
                                    <tr key={item.id} className='trlist' onClick={()=>LoadDetail(item.id)}>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.email}</td>
                                        <td>{item.phone}</td>
                                        <td>{item.date}</td>
                                    </tr>)
                                )}
                            </tbody>
                        </table>
                        <div className='pagination'>
                            <Pagination cardPerPage={cardPerPage} totalCard={empData.length} paginate={paginate} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EmpListing