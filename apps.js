function signup() {
    document.getElementById("login").classList.add("hidden");
    document.getElementById("signup").classList.remove("hidden");
}
function login() {
    document.getElementById("signup").classList.add("hidden");
    document.getElementById("login").classList.remove("hidden");
}   

const users = [];
    function btnsignup() {
        const username = document.getElementById('signup-username').value;
        const password = document.getElementById('signup-password').value;
        const confirmPassword = document.getElementById('signup-password-confirm').value;

        if (password !== confirmPassword) {
            alert ('Nhập sai mật khẩu');
            return;
        }

        const userExits = users.some(user => user.username === username);
        if (userExits) {
            alert('Tên đã được sử dụng')
            return;
        }

        users.push({ username, password });
        alert("Đăng ký thành công !");
        login();

    }


    function btnlogin() {
        const username = document.getElementById("login-username").value;
        const password = document.getElementById("login-password").value;
    
        const user = users.find(user => user.username === username && user.password === password);
        if (user) {
            alert("Đăng nhập thành công");
        } else {
            alert("Tài khoảng và mật khẩu không hợp lệ");
        }
    }