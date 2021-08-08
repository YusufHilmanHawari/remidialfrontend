import Axios from "axios";

export const login = (username, password) => {
  return (dispatch) => {
    Axios.get(`http://localhost:2000/users?username=${username}&password=${password}`)
      .then(res => {
        if (res.data.length === 0) {
          return dispatch({
            type: 'ERROR_LOGIN'
          })
        } else {
          localStorage.setItem('idUser', res.data[0].id)
          return dispatch({
            type: 'LOGIN',
            payload: res.data[0]
          })
        }
      })
  }
}

export const errorLoginFalse = () => {
  return (dispatch) => {
    return dispatch({
      type: 'ERROR_LOGIN_FALSE'
    })
  }
}

export const logout = () => {
  return (dispatch) => {
    return dispatch({
      type: 'LOG_OUT'
    })
  }
}