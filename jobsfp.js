function filterJobs() {
    const category = document.getElementById("category").value;
    const jobCards = document.querySelectorAll(".job-card");

    jobCards.forEach(card => {
        if (category === "all" || card.dataset.category === category) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}

function searchJobs() {
    const searchTerm = document.getElementById("search-input").value.toLowerCase();
    const jobCards = document.querySelectorAll(".job-card");

    jobCards.forEach(card => {
        const title = card.querySelector("h3").textContent.toLowerCase();
        const company = card.querySelector("p").textContent.toLowerCase();
        if (title.includes(searchTerm) || company.includes(searchTerm)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}
