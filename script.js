document.addEventListener("DOMContentLoaded", function() {
    const contactSection = document.getElementById("contact");
    const contactButton = document.createElement("button");
    contactButton.textContent = "연락처 표시";
    contactButton.onclick = function() {
        contactSection.innerHTML = "<h2>연락처</h2><p>이메일: example@example.com</p>";
    };

    document.body.appendChild(contactButton);
});
