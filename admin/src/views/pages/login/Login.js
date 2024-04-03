import React, { useState } from 'react'
import Swal from 'sweetalert2';
import { API_URL } from '../../../config';
import { Link } from 'react-router-dom'
import { CButton, CCard, CCardBody, CCardGroup, CCol, CContainer, CForm, CFormInput, CInputGroup, CInputGroupText, CRow, } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'

const Login = () => {

      const [username, setUsername] = useState('');
      const [password, setPassword] = useState('');

      const validateForm = () => {
            if (!username.trim() || !password.trim()) {
                  Swal.fire({
                        title: 'Error!',
                        text: 'Username and password are required.',
                        icon: 'error',
                        confirmButtonText: 'OK'
                  });
                  return false;
            }
            return true;
      };

      const handleSubmit = async (e) => {
            e.preventDefault();
            if (!validateForm()) return;

            try {
                  const response = await fetch('http://localhost:5000/api/login', {
                        method: 'POST',
                        headers: {
                              'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ username, password }),
                  });

                  if (!response.ok) {
                        throw new Error('Network response was not ok');
                  }

                  const { token } = await response.json();
                  localStorage.setItem('token', token);
                  window.location.href = '/#/dashboard';
            } catch (error) {
                  console.error('There was a problem with the fetch operation:', error);

                  Swal.fire({
                        title: 'Error!',
                        text: 'Incorrect username or password.',
                        icon: 'error',
                        confirmButtonText: 'OK'
                  });
            }
      };

      return (
            <div className="bg-body-tertiary min-vh-100 d-flex flex-row align-items-center">
                  <CContainer>
                        <CRow className="justify-content-center">
                              <CCol md={4}>
                                    <CCardGroup>
                                          <CCard className="p-3">
                                                <CCardBody>
                                                      <CForm onSubmit={handleSubmit}>
                                                            <h1>Login</h1>
                                                            <p className="text-body-secondary">Sign In to your account</p>
                                                            <CInputGroup className="mb-3">
                                                                  <CInputGroupText>
                                                                        <CIcon icon={cilUser} />
                                                                  </CInputGroupText>
                                                                  <CFormInput placeholder="Username" autoComplete="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                                                            </CInputGroup>
                                                            <CInputGroup className="mb-4">
                                                                  <CInputGroupText>
                                                                        <CIcon icon={cilLockLocked} />
                                                                  </CInputGroupText>
                                                                  <CFormInput type="password" placeholder="Password" autoComplete="current-password" value={password} onChange={(e) => setPassword(e.target.value)} />
                                                            </CInputGroup>
                                                            <CRow>
                                                                  <CCol xs={6}>
                                                                        <CButton color="primary" className="px-4" type="submit">
                                                                              Login
                                                                        </CButton>
                                                                  </CCol>
                                                                  <CCol xs={6} className="text-right">
                                                                        <CButton color="link" className="px-0">
                                                                              Forgot password?
                                                                        </CButton>
                                                                  </CCol>
                                                            </CRow>
                                                      </CForm>
                                                </CCardBody>
                                          </CCard>
                                    </CCardGroup>
                              </CCol>
                        </CRow>
                  </CContainer>
            </div>
      )
}

export default Login
