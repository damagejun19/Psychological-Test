import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import "./App.css";

const Home = () => {
  const [name, setName] = useState('');
  const [currentPage, setCurrentPage] = useState(1)
  const [gender, setGender] = useState(false);
  const [genTarget, setGenTarget] = useState("")
  const [example, setExample] = useState(false);
  
  let history = useHistory();

  function changeGender(e){
    setGenTarget(e.target.value)
  }

  function Check() {
    if (name.length === 0 || gender === false) {
      return true;
    } else {
      return false;
    }
  }

  function inputName() {
    const Name = document.querySelector(`input[name="username"]`).value;
    setName(Name);
  }

  function inputGender() {
    const Gender = document.querySelector(`input[name="gender"]:checked`).value;
    setGender(Gender);
  }

  function handleClick() {
    history.push({
      pathname: "/Test",
      state : {userName : name, userGender : gender},
    });
  }

  function checkExample(){
      if (example === false){
        return true;
      } else {
        return false;
      }
    }
    
  function inputCheck(){
    const test = document.querySelector(`input[name="select"]:checked`).value;
    setExample(test)
  }

  return (
    <div className="Home">
      <div style={{ display: currentPage === 1 ? 'block' : 'none' }}>
        <h2>직업 가치관 검사</h2>
        <div onChange={inputName}> 
          <label>이름
          <div>  
            <input type="text" 
                   name="username" 
                   value={name} />
          </div>
          </label>
        </div>
        <div>
            <label>성별</label>
          <div onChange={inputGender}>
            <label>남성
              <input type="radio" 
                     name="gender" 
                     value="100323"
                     checked={genTarget === "100323" ? true : false}
                     onChange={changeGender} 
            />
            </label>
            <label>여성
              <input type="radio" 
                     name="gender" 
                     value="100324"
                     checked={genTarget === "100324" ? true : false}
                     onChange={changeGender} 
            />
            </label>
          </div>  
        </div>
        <div>
          <button type="button" disabled={Check()} onClick={() => setCurrentPage(currentPage+1)}>
            검사 시작
          </button>
        </div>
      </div>
      <div style={{ display: currentPage === 2 ? 'block' : 'none' }}>
      <div>
          <h2>검사 예시</h2>
          <p>
            <h4>직업과 관련된 두개의 가치 중에서 자기에게 더 중요한 가치에 표시하세요.</h4>
          </p>
          <div>
            <p>두 개의 가치 중에 자신에게 더 중요한 가치를 선택하세요.</p>
          </div>
          <div onChange={inputCheck}>  
            <label>창의성</label>
            <input type='radio'
                  name = "select" 
                  value="창의성"
              />
            <label>안정성</label>
            <input type='radio'
                   name = "select" 
                   value="안정성"
            />
          </div> 
          <div>  
            <button type="button"
                    onClick={() => setCurrentPage(currentPage-1)} 
            >
              이전
            </button>
            <button type="button" 
                    disabled={checkExample()} 
                    onClick={handleClick}              
            >
              검사 시작
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home
