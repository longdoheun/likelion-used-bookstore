
import React from "react"

export default function (props) {
  return (
    <div className="Auth-form-container">
      
      <form className="Auth-form">
        <div>
            <h2 className="Auth-form-logintitle">로그인/회원가입</h2>
            <img src="C:\Users\user\Desktop\skku\학회_멋진사자처럼\2학기본프로젝트\project_bookstore\logo3.PNG" alt="이미지" onerror="onErrorImage(this)"/>
        </div>
          
        
        <div className="Auth-form-content">
        
          
          <h6 className="Auth-form-title">어서오세요!<br/>유생책방입니다</h6>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="ID"
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Password"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="loginbtn btn btn-primary">
              로그인
            </button>
          </div>
          <p className="forgot-password text-right mt-2">
            Forgot <a href="#">password?</a>
          </p>
        </div>
      </form>
    </div>
  )
}
