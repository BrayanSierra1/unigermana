const isLogin = sessionStorage.getItem('isLogin');

if(isLogin !== '1'){
    location.href = './index.html';
}