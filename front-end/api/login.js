const login = async () => {
    const user = document.getElementById('user').value;
    const password = document.getElementById('password').value;
    
    const response = await fetchApi('login', 'post', {usuario: user, password})
    if(response.total === 1) {
        sessionStorage.setItem('isLogin', '1');
        location.href = './tabla.html';
    } else {
        alert('No fue posible iniciar sesión, verifica los datos')
    }
}
