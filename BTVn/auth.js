import { 
    auth, 
    createUserWithEmailAndPassword 
  } from "firebase/auth";
  
  document.getElementById('registerForm')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const messageElement = document.getElementById('registerMessage');
    
    if (password !== confirmPassword) {
      messageElement.textContent = "Mật khẩu không trùng khớp!";
      messageElement.className = "message error";
      return;
    }
    
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      
      messageElement.textContent = "Đăng ký thành công!";
      messageElement.className = "message success";
      
      setTimeout(() => {
        window.location.href = "Login.html";
      }, 2000);
    } catch (error) {
      let errorMessage = "Đã xảy ra lỗi khi đăng ký!";
      
      switch(error.code) {
        case "auth/email-already-in-use":
          errorMessage = "Email đã được sử dụng!";
          break;
        case "auth/invalid-email":
          errorMessage = "Email không hợp lệ!";
          break;
        case "auth/weak-password":
          errorMessage = "Mật khẩu phải có ít nhất 6 ký tự!";
          break;
      }
      
      messageElement.textContent = errorMessage;
      messageElement.className = "message error";
    }
  });

  import { 
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
  } from "firebase/auth";
  
  document.getElementById('loginForm')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    const messageElement = document.getElementById('loginMessage');
    
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      
      messageElement.textContent = "Đăng nhập thành công!";
      messageElement.className = "message success";
      
      setTimeout(() => {
        window.location.href = "Main.html"; 
      }, 2000);
    } catch (error) {
      let errorMessage = "Đăng nhập thất bại!";
      
      switch(error.code) {
        case "auth/user-not-found":
        case "auth/wrong-password":
          errorMessage = "Email hoặc mật khẩu không đúng!";
          break;
        case "auth/user-disabled":
          errorMessage = "Tài khoản đã bị vô hiệu hóa!";
          break;
      }
      
      messageElement.textContent = errorMessage;
      messageElement.className = "message error";
    }
  });
  
  function setupLogout() {
    document.getElementById('logoutButton')?.addEventListener('click', async () => {
      try {
        await signOut(auth);
        window.location.href = "Login.html";
      } catch (error) {
        console.error("Lỗi khi đăng xuất:", error);
      }
    });
  }
  
  function checkAuthState() {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("Người dùng đã đăng nhập:", user.email);
        
        document.querySelectorAll('.auth-link').forEach(link => {
          link.style.display = 'none';
        });
        
        const logoutBtn = document.getElementById('logoutButton');
        if (logoutBtn) logoutBtn.style.display = 'block';
      } else {
        console.log("Người dùng đã đăng xuất");
        
        document.querySelectorAll('.auth-link').forEach(link => {
          link.style.display = 'block';
        });
        
        const logoutBtn = document.getElementById('logoutButton');
        if (logoutBtn) logoutBtn.style.display = 'none';
      }
    });
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    checkAuthState();
    setupLogout();
  });