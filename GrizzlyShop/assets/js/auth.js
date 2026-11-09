const registerForm = document.getElementById("registerForm");

if (registerForm) {
    registerForm.addEventListener("submit", async (event) => {
        event.preventDefault();

        const message = document.getElementById("registerMessage");
        const button = registerForm.querySelector("button[type='submit']");

        const username = document.getElementById("username").value.trim();
        const fullName = document.getElementById("fullName").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirmPassword").value;

        if (password !== confirmPassword) {
            message.textContent = "รหัสผ่านไม่ตรงกัน";
            message.style.color = "#ff5555";
            return;
        }

        if (!/^[A-Za-z0-9_]{3,20}$/.test(username)) {
            message.textContent =
                "ชื่อผู้ใช้ต้องเป็นภาษาอังกฤษ ตัวเลข หรือ _ จำนวน 3-20 ตัว";
            message.style.color = "#ff5555";
            return;
        }

        button.disabled = true;
        button.textContent = "กำลังสมัครสมาชิก...";

        try {
            const { data, error } = await window.sb.auth.signUp({
                email: email,
                password: password,
                options: {
                    data: {
                        username: username,
                        full_name: fullName
                    },
                    emailRedirectTo: window.location.origin +
                        "/GrizzlyShop/index.html"
                }
            });

            if (error) throw error;

            if (data.session) {
                message.textContent = "สมัครสมาชิกสำเร็จ!";
                message.style.color = "#35d07f";

                setTimeout(() => {
                    window.location.href = "../index.html";
                }, 1500);
            } else {
                message.textContent =
                    "สมัครสำเร็จแล้ว กรุณาตรวจสอบอีเมลเพื่อยืนยันบัญชี";
                message.style.color = "#35d07f";
            }

        } catch (error) {
            console.error(error);

            message.textContent = error.message;
            message.style.color = "#ff5555";

        } finally {
            button.disabled = false;
            button.textContent = "สมัครสมาชิก";
        }
    });
}

async function logout() {
    const { error } = await window.sb.auth.signOut();

    if (error) {
        alert(error.message);
        return;
    }

    window.location.href = "../index.html";
}

const loginForm = document.getElementById("loginForm");

if (loginForm) {
    loginForm.addEventListener("submit", async (event) => {
        event.preventDefault();

        const message = document.getElementById("loginMessage");

        const email = document.getElementById("loginEmail").value.trim();
        const password = document.getElementById("loginPassword").value;

        try {
            const { data, error } =
                await window.sb.auth.signInWithPassword({
                    email,
                    password
                });

            if (error) throw error;

            message.textContent = "เข้าสู่ระบบสำเร็จ!";
            message.style.color = "#35d07f";

            setTimeout(() => {
                window.location.href = "../index.html";
            }, 1000);

        } catch (error) {
            message.textContent = error.message;
            message.style.color = "#ff5555";
        }
    });
}