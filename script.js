document.addEventListener("DOMContentLoaded", () => {
    loadMembers();

    document.getElementById("addMemberForm").addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;

        fetch("http://localhost/backend/add_member.php", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, phone }),
        })
        .then(response => response.json())
        .then(data => {
            alert(data.message || data.error);
            loadMembers();
        });
    });
});

function loadMembers() {
    fetch("http://localhost/backend/get_members.php")
        .then(response => response.json())
        .then(members => {
            const membersList = document.getElementById("membersList");
            membersList.innerHTML = "";
            members.forEach(member => {
                membersList.innerHTML += `<li>${member.name} - ${member.email} - ${member.phone}</li>`;
            });
        });
}
