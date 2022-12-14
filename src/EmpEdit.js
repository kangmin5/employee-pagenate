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
      setActive(resp.isactive)
    }).catch((err) => {
      console.error(err.message)
    })
  }, [])

  const [id, setId] = useState("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [active, setActive] = useState(true)
  const [validation, setValidation] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    const empData = { id, name, email, phone, active };

    fetch("http://localhost:8000/employee/" + empId, {
      method: "PUT",
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(empData)
    })
      .then(res => {
        alert('성공적으로 저장되었습니다.')
        navigate('/')
      }).catch(err => {
        console.error(err.message);
      })
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
                      <input value={id ||""} disabled="disabled" className='form-control'></input>
                    </div>
                  </div>

                  <div className='col-lg-12'>
                    <div className='form-group'>
                      <label>성명</label>
                      <input required value={name ||""} onMouseDown={e => setValidation(true)} onChange={e => setName(e.target.value)} className='form-control'></input>
                      {name.length === 0 && validation && <span className='text-danger'>이름을 입력하세요.</span>}
                    </div>
                  </div>

                  <div className='col-lg-12'>
                    <div className='form-group'>
                      <label>이메일</label>
                      <input value={email ||""} onMouseDown={e => setValidation(true)} onChange={e => setEmail(e.target.value)} className='form-control'></input>
                    </div>
                  </div>

                  <div className='col-lg-12'>
                    <div className='form-group'>
                      <label>휴대번호</label>
                      <input value={phone ||""} onMouseDown={e => setValidation(true)} onChange={e => setPhone(e.target.value)} className='form-control' placeholder='01020335577'></input>
                      {phone.length === 0 && validation && <span className='text-danger'>숫자만 입력하세요</span>}
                    </div>
                  </div>

                  <div className='col-lg-12'>
                    <div className='form-check'>
                      <input checked={active ||""} onChange={e => setActive(e.target.checked)} type="checkbox" className='form-check-input'></input>
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

export default EmpEdit;