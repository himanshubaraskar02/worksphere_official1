function showForm(userType) {
    const seekerForm = document.getElementById("seeker-form");
    const employerForm = document.getElementById("employer-form");

    if (userType === "seeker") {
        seekerForm.style.display = "block";
        employerForm.style.display = "none";
    } else if (userType === "employer") {
        employerForm.style.display = "block";
        seekerForm.style.display = "none";
    }
}
