class Register {
  constructor(options) {
    this._urlBase = options.urlBase;
    this._headers = options.headers;
  }

  getRegistration(password, email) {
    console.log(password, email)
    return fetch(`${this._baseUrl}/signup`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({password, email})
    })
    .then((response) => {
      try {
        if (response.status === 200){
          return response.json();
        }
      } catch(e){
        return (e)
      }
    })
  }

  getAvtorization(password, email) {
    console.log(password, email)
    return fetch(`${this._urlBase}/signin`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({password, email})
    })
    .then((response) => {
      try {
        if (response.status === 200){
          return response.json();
        }
      } catch(e){
        return (e)
      }
    })
  }

  getControl(JWT) {
    return fetch(`${this._urlBase}/users/me`, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        "Authorization" : `Bearer ${JWT}`
    } ,

    })
  }
}

const register = new Register({
  urlBase: 'https://auth.nomoreparties.co.',
  headers: {
    "Content-Type": "application/json" 
  }
});

export default register;
// export const baseUrl = 'https://auth.nomoreparties.co.';

// export const register = (password, email) => {
//   return fetch(`${baseUrl}/signup`, {
//     metop: 'POST',
//     headers: {
//       "Content-Type": "application/json" 
//     },
//     body: JSON.stringify({
//       "password": password,
//       "email": email 
//     })
//     .then((response) => {
//       try {
//         if (response.status === 200){
//           return response.json();
//         }
//       } catch(e){
//         return (e)
//       }
//     })
//     .then((res) => {
//       return res;
//     })
//     .catch((err) => console.log(err))
//   })
// }


// export const register = (username, password, email) => {
//   return fetch(`${BASE_URL}/auth/local/register`, {
//     method: 'POST',
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({username, password, email})
//   })
//   .then((response) => {
//     try {
//       if (response.status === 200){
//         return response.json();
//       }
//     } catch(e){
//       return (e)
//     }
//   })
//   .then((res) => {
//     return res;
//   })
//   .catch((err) => console.log(err));
// }; 