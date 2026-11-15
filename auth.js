
const signupForm = document.getElementById("signupForm");
const loginForm = document.getElementById("loginForm");
const authMessage = document.getElementById("authMessage");

function showMessage(message, isError = false) {
  authMessage.textContent = message;
  authMessage.style.color = isError ? "red" : "green";
}

// إنشاء حساب جديد
signupForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const name = document.getElementById("signupName").value.trim();
  const email = document.getElementById("signupEmail").value.trim();
  const password = document.getElementById("signupPassword").value;

  const { data, error } = await supabaseClient.auth.signUp({
    email,
    password,
options: {
  emailRedirectTo: "https://s4anj8r-lab.github.io/my-blog/",
  data: {
    full_name: name
  }
}
    
  });

  console.log("Signup result:", data);
  if (error) {
    showMessage(error.message, true);
    return;
  }

  if (data.session) {
    showMessage("تم إنشاء حسابك بنجاح!");
  } else {
    showMessage("تم التسجيل! تحقق من بريدك الإلكتروني لتأكيد الحساب.");
  }

  signupForm.reset();
});

// تسجيل الدخول
loginForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const email = document.getElementById("loginEmail").value.trim();
  const password = document.getElementById("loginPassword").value;

  const { data, error } =
    await supabaseClient.auth.signInWithPassword({
      email,
      password
    });

  if (error) {
    showMessage(error.message, true);
    return;
  }

  showMessage("أهلًا بك! تم تسجيل دخولك بنجاح.");
  loginForm.reset();
});
