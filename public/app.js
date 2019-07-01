const CreateUser = document.querySelector('.CreateUser')
const Login = document.querySelector('.Login')

CreateUser.addEventListener('submit', (e) => {
  e.preventDefault()
  const username = CreateUser.querySelector('.username').value
  const password = CreateUser.querySelector('.password').value
  console.log(`creating user with username ${username} and password ${password}`);
  post('/createUser', { username, password })
})

Login.addEventListener('submit', (e) => {
    e.preventDefault()
    const username = CreateUser.querySelector('.username').value
    const password = CreateUser.querySelector('.password').value
    post('/login', { username, password }).then(({ status }) => {
        if (status === 200) alert('login success')
        else alert('login failed')
    })
})

function post (path, data) {
  return window.fetch(path, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
}
