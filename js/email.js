document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const formdata = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };
  fetch("https://formspree.io/f/xrbpyrea", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formdata),
  })
    .then((response) => {
      if (response.ok) {
        alert("تم إرسال الرسالة بنجاح ! سنقوم بالرد عليك قريبَا");
        document.getElementById("contactForm").reset();
      } else {
        throw new Error("حدث خطاء أثناء الإرسال");
      }
    })
    .catch((error) => {
      alert("لم يتم إرسال الرسالة . يرجى المحاولة مرة أخرى");
      console.error(error);
    });
});
