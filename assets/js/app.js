const loginForm = document.getElementById("loginForm");
const emailControl = document.getElementById("email");
const passwordControl = document.getElementById("password");



const loginApi = (obj) => {
   return new Promise((resolve, reject) => {
      setTimeout(() => {
         //API call
         if (
            obj.email === 'abc@gmail.com'&&
            obj.password === 'abcdef'
         ) {
            resolve("Login success!!!");
         } else {
            reject("Invalid Email or password");
         }
      }, 800);
   });
};

const onLogin = (eve) => {
   eve.preventDefault();
   let obj = {
      email: emailControl.value,
      password: passwordControl.value,
   };
   //    console.log(obj);
   //    call api
   loginApi(obj)
      .then((msg) => {
         //  console.log(msg);
         Swal.fire({
            title: msg,
            icon: "success",
            timer: 2500,
         });
      })
      .catch((err) => {
         //  console.log(err);
         Swal.fire({
            title: err,
            icon: "error",
            timer: 2500,
         });
      })
      .finally(() => {
         loginForm.reset();
      });
};

loginForm.addEventListener("submit", onLogin);