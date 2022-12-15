import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const EmpCreate = () => {
    const [id,setId] = useState("")
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [phone,setPhone] = useState("")
    const [active,setActive] = useState(true)
    const [validation,setValidation] = useState(false)

    const navigate = useNavigate();

    const handleSubmit=(e)=>{
        e.preventDefault();
        const empData = {name,email,phone,active};

        fetch("http://localhost:8000/employee",{
            method: "POST",
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify(empData)
        })
        .then(res =>{
            alert('성공적으로 저장되었습니다.')
            navigate('/')
        }).catch(err =>{
            console.error(err.message);
        })
    }


    return (
        <div>
            <div className='row'>
                <div className='offset-lg-3 col-lg-6'>
                    <form className='container' onSubmit={handleSubmit}>
                        <div className='card' style={{"textAlign":"left" }}>
                            <div className='card-title'>
                                <h2>직원 연락처 등록</h2>
                            </div>
                            <div className='card-body'>
                                <div className='row'>

                                    <div className='col-lg-12'>
                                        <div className='form-group'>
                                            <label>ID</label>
                                            <input value={id} disabled="disabled" className='form-control'></input>
                                        </div>
                                    </div>

                                    <div className='col-lg-12'>
                                        <div className='form-group'>
                                            <label>성명</label>
                                            <input required value={name} onChange={e=>setName(e.target.value)} className='form-control'></input>
                                        </div>
                                    </div>
                                    
                                    <div className='col-lg-12'>
                                        <div className='form-group'>
                                            <label>이메일</label>
                                            <input value={email} onMouseDown={e=>setValidation(true)} onChange={e=>setEmail(e.target.value)} className='form-control'></input>
                                        </div>
                                    </div>
                                    
                                    <div className='col-lg-12'>
                                        <div className='form-group'>
                                            <label>휴대번호</label>
                                            <input value={phone}  onChange={e=>setPhone(e.target.value)} className='form-control' ></input>
                                        </div>
                                    </div>
                                    
                                    <div className='col-lg-12'>
                                        <div className='form-check'>
                                            <input checked={active} onChange={e=>setActive(e.target.checked)} type="checkbox" className='form-check-input'></input>
                                            <label className='form-check-lable'>재직 확인</label>
                                        </div>
                                    </div>
                                    
                                    <div className='col-lg-12'>
                                        <div className='form-group'>
                                            <button type='submit' className='btn btn-success'>저 장</button>
                                            <Link to="/" className='btn btn-danger'>나가기</Link>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default EmpCreate