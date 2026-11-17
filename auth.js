
const signupForm = document.getElementById("signupForm");
const loginForm = document.getElementById("loginForm");
const authMessage = document.getElementById("authMessage");

function showMessage(message, isError = false) {
  if (!authMessage) {
    alert(message);
    return;
  }

  authMessage.textContent = message;
  authMessage.style.color = isError ? "red" : "green";
}

if (!signupForm || !loginForm || !authMessage) {
  showMessage("بعض عناصر تسجيل الحساب غير موجودة في الصفحة.", true);
} else if (typeof supabaseClient === "undefined") {
  showMessage("تعذر تحميل Supabase. تحقق من ملفات السكربت.", true);
} else {

  // إنشاء حساب جديد
  signupForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    try {
      const name = document.getElementById("signupName").value.trim();
      const email = document.getElementById("signupEmail").value.trim();
      const password = document.getElementById("signupPassword").value;

      showMessage("جارٍ إنشاء الحساب...");

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

      if (error) {
        showMessage(error.message, true);
        return;
      }

      if (data.session) {
        showMessage("تم إنشاء حسابك بنجاح!");
      } else {
        showMessage("تم التسجيل! تحقق من بريدك الإلكتروني.");
      }

      signupForm.reset();

    } catch (error) {
      showMessage("حدث خطأ: " + error.message, true);
    }
  });

  // تسجيل الدخول
  loginForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    try {
      const email = document.getElementById("loginEmail").value.trim();
      const password = document.getElementById("loginPassword").value;

      showMessage("جارٍ تسجيل الدخول...");

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

    } catch (error) {
      showMessage("حدث خطأ: " + error.message, true);
    }
  });
}
