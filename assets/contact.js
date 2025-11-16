document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#contactForm");
  const statusEl = document.querySelector("#status");
  const btn = document.querySelector("#sendBtn");

  if (!form) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    statusEl.textContent = "";
    statusEl.className = "status";

    
    const hp = form.querySelector('input[name="company"]');
    if (hp && hp.value) {
      statusEl.textContent = "Message sent! ✅";
      statusEl.classList.add("ok");
      form.reset();
      return;
    }

    const payload = {
      name: form.name.value.trim(),
      email: form.email.value.trim(),
      message: form.message.value.trim(),
    };

    btn.disabled = true;
    btn.classList.add("loading");

    try {
      const res = await fetch("http://localhost:3000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (res.ok && data.ok) {
        statusEl.textContent = "Message sent! ✅";
        statusEl.classList.add("ok");
        form.reset();
      } else {
        statusEl.textContent = data.error || "Error sending message.";
        statusEl.classList.add("error");
      }
    } catch (err) {
      statusEl.textContent = "Network error (is the server running?).";
      statusEl.classList.add("error");
    } finally {
      btn.disabled = false;
      btn.classList.remove("loading");
    }
  });
});
