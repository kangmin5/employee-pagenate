import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

const EmpEdit = () => {
  const { empId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:8000/employee/" + empId).then((res) => {
      return res.json();
    }).then((resp) => {
      setId(resp.id)
      setName(resp.name)
      setEmail(resp.email)
      setPhone(resp.phone)
      setDate(resp.date)
      setActive(resp.isactive)
    }).catch((err) => {
      console.error(err.message)
    })
  }, [])

  const [id, setId] = useState("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [date, setDate] = useState("")
  const [active, setActive] = useState(true)
  const [validation, setValidation] = useState(false)

  const current = new Date();
  const today = current.toLocaleString('ko-kr')

  const handleSubmit = (e) => {
    e.preventDefault();

    const empData = {id,name,email,phone,date,active};

    fetch("http://localhost:8000/employee/" + empId, {
      method: "PUT",
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(empData)
    })
      .then(res => {
        alert('성공적으로 저장되었습니다.')
        navigate('/employee')
      }).catch(err => {
        console.error(err.message);
      })
  }

  const RemoveFunction = (id) => {
    if (window.confirm('정말 삭제 하시겠습니까?')) {
        const empData = { id, name, email, phone,date, active };

        fetch("http://localhost:8000/employee/" + id, {
            method: "DELETE",
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(empData)
        })
            .then(res => {
                alert('성공적으로 삭제되었습니다.')
                // window.location.reload();
                navigate('/employee')
            }).catch(err => {
                console.error(err.message);
            })
    }
}
  return (
    <div>
      <div className='row'>
        <div className='offset-lg-3 col-lg-6'>
          <form className='container' onSubmit={handleSubmit}>
            <div className='card' style={{ "textAlign": "left" }}>
              <div className='card-title'>
                <h2>직원 연락처 수정</h2>
              </div>
              <div className='card-body'>
                <div className='row'>

                  <div className='col-lg-12'>
                    <div className='form-group'>
                      <label>ID</label>
                      <input value={id || ""} disabled="disabled" className='form-control'></input>
                    </div>
                  </div>

                  <div className='col-lg-12'>
                    <div className='form-group'>
                      <label>성명</label>
                      <input required value={name || ""} onChange={e => setName(e.target.value)} className='form-control'></input>

                    </div>
                  </div>

                  <div className='col-lg-12'>
                    <div className='form-group'>
                      <label>이메일</label>
                      <input value={email || ""} onChange={e => setEmail(e.target.value)} className='form-control'></input>
                    </div>
                  </div>

                  <div className='col-lg-12'>
                    <div className='form-group'>
                      <label>휴대번호</label>
                      <input value={phone || ""} onChange={e => setPhone(e.target.value)} className='form-control' ></input>
                    </div>
                  </div>

                  <div className='col-lg-12'>
                    <div className='form-group'>
                      <label>작성일</label>
                      <input value={date}  onChange={e => setDate(today)} className='form-control'  placeholder='아무키나 누르시면 [현재시각]을 가져옵니다.' ></input>
                    </div>
                  </div>

                  <div className='col-lg-12'>
                    <div className='form-check'>
                      <input checked={active || ""} onChange={e => setActive(e.target.checked)} type="checkbox" className='form-check-input'></input>
                      <label className='form-check-lable'>퇴사자</label>
                    </div>
                  </div>

                  <div className='col-lg-12'>
                    <div className='form-group'>
                      <Link to="/employee" className='btn btn-info '>리스Home</Link>
                      <button type='submit' className='btn btn-success'>저 장</button>
                      <button type='button' onClick={()=>RemoveFunction(id)} className='btn btn-danger'>삭 제</button>

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

export default EmpEdit;