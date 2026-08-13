/* =====================================================
   RESUME BUILDER - FINAL JAVASCRIPT
===================================================== */

let educationCount = 0;
let experienceCount = 0;
let internshipCount = 0;
let certificateCount = 0;
let projectCount = 0;
let achievementCount = 0;


/* =====================================================
   HELPER
===================================================== */

function getValue(id, fallback = "") {
    const el = document.getElementById(id);
    return el ? el.value.trim() : fallback;
}

function escapeHTML(value) {
    return String(value || "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}


/* =====================================================
   PERSONAL INFORMATION
===================================================== */

function updatePersonal() {

    const name = getValue("name");
    const job = getValue("job");
    const email = getValue("email");
    const phone = getValue("phone");
    const location = getValue("location");

    const previewName = document.getElementById("previewName");
    const previewJob = document.getElementById("previewJob");
    const previewEmail = document.getElementById("previewEmail");
    const previewPhone = document.getElementById("previewPhone");
    const previewLocation = document.getElementById("previewLocation");

    if (previewName) {
        previewName.textContent = name || "Your Name";
    }

    if (previewJob) {
        previewJob.textContent = job || "Your Job Title";
    }

    if (previewEmail) {
        previewEmail.textContent = email || "your@email.com";
    }

    if (previewPhone) {
        previewPhone.textContent = phone || "+91 98765 43210";
    }

    if (previewLocation) {
        previewLocation.textContent = location || "Your Location";
    }


    /* LinkedIn */

    const linkedin = getValue("linkedin");
    const previewLinkedin =
        document.getElementById("previewLinkedin");

    if (previewLinkedin) {

        if (linkedin) {

            previewLinkedin.href = linkedin;
            previewLinkedin.textContent =
                linkedin
                    .replace(/^https?:\/\//, "")
                    .replace(/^www\./, "");

        } else {

            previewLinkedin.href = "#";
            previewLinkedin.textContent =
                "linkedin.com/in/username";
        }
    }


    /* GitHub */

    const github = getValue("github");
    const previewGithub =
        document.getElementById("previewGithub");

    if (previewGithub) {

        if (github) {

            previewGithub.href = github;
            previewGithub.textContent =
                github
                    .replace(/^https?:\/\//, "")
                    .replace(/^www\./, "");

        } else {

            previewGithub.href = "#";
            previewGithub.textContent =
                "github.com/username";
        }
    }
}


/* =====================================================
   SUMMARY
===================================================== */

function updateSummary() {

    const preview =
        document.getElementById("previewSummary");

    if (!preview) return;

    const summary = getValue("summary");

    if (summary) {
        preview.textContent = summary;
    } else {
        preview.textContent =
            "Your professional summary will appear here.";
    }
}


/* =====================================================
   EDUCATION
===================================================== */

function addEducation() {

    educationCount++;

    const container =
        document.getElementById("educationContainer");

    if (!container) return;

    const item =
        document.createElement("div");

    item.className = "dynamic-item";
    item.id = `education-${educationCount}`;

    item.innerHTML = `

        <div class="dynamic-header">

            <strong>
                Education ${educationCount}
            </strong>

            <button
                type="button"
                class="remove-btn"
                onclick="removeItem('education-${educationCount}')">

                Remove

            </button>

        </div>

        <div class="dynamic-grid">

            <div class="form-group">

                <label>Degree / Course</label>

                <input
                    class="edu-degree"
                    placeholder="M.Sc Computer Science"
                    oninput="updateResume()">

            </div>

            <div class="form-group">

                <label>Institution</label>

                <input
                    class="edu-institution"
                    placeholder="Government Arts College"
                    oninput="updateResume()">

            </div>

            <div class="form-group">

                <label>Start Year</label>

                <input
                    class="edu-start"
                    placeholder="2024"
                    oninput="updateResume()">

            </div>

            <div class="form-group">

                <label>End Year</label>

                <input
                    class="edu-end"
                    placeholder="2026"
                    oninput="updateResume()">

            </div>

            <div class="form-group full">

                <label>CGPA / Percentage</label>

                <input
                    class="edu-score"
                    placeholder="8.5 CGPA / 85%"
                    oninput="updateResume()">

            </div>

        </div>
    `;

    container.appendChild(item);

    updateResume();
}


function updateEducation() {

    const preview =
        document.getElementById("previewEducation");

    if (!preview) return;

    const items =
        document.querySelectorAll(
            "#educationContainer .dynamic-item"
        );

    preview.innerHTML = "";

    items.forEach(item => {

        const degree =
            item.querySelector(".edu-degree")?.value.trim();

        const institution =
            item.querySelector(".edu-institution")?.value.trim();

        const start =
            item.querySelector(".edu-start")?.value.trim();

        const end =
            item.querySelector(".edu-end")?.value.trim();

        const score =
            item.querySelector(".edu-score")?.value.trim();

        if (!degree && !institution) return;

        const div =
            document.createElement("div");

        div.className = "resume-item";

        div.innerHTML = `

            <div class="resume-item-top">

                <div>

                    <strong>
                        ${escapeHTML(degree)}
                    </strong>

                    ${
                        institution
                        ?
                        `<div class="resume-company">
                            ${escapeHTML(institution)}
                        </div>`
                        :
                        ""
                    }

                    ${
                        score
                        ?
                        `<div class="resume-cgpa">
                            ${escapeHTML(score)}
                        </div>`
                        :
                        ""
                    }

                </div>

                ${
                    start || end
                    ?
                    `<span class="resume-date">
                        ${escapeHTML(start)}
                        ${start || end ? " - " : ""}
                        ${escapeHTML(end)}
                    </span>`
                    :
                    ""
                }

            </div>
        `;

        preview.appendChild(div);
    });
}


/* =====================================================
   EXPERIENCE
===================================================== */

function addExperience() {

    experienceCount++;

    const container =
        document.getElementById("experienceContainer");

    if (!container) return;

    const item =
        document.createElement("div");

    item.className = "dynamic-item";
    item.id = `experience-${experienceCount}`;

    item.innerHTML = `

        <div class="dynamic-header">

            <strong>
                Experience ${experienceCount}
            </strong>

            <button
                type="button"
                class="remove-btn"
                onclick="removeItem('experience-${experienceCount}')">

                Remove

            </button>

        </div>

        <div class="dynamic-grid">

            <div class="form-group">

                <label>Job Title</label>

                <input
                    class="exp-role"
                    placeholder="Software Developer"
                    oninput="updateResume()">

            </div>

            <div class="form-group">

                <label>Company</label>

                <input
                    class="exp-company"
                    placeholder="Company Name"
                    oninput="updateResume()">

            </div>

            <div class="form-group">

                <label>Start Year</label>

                <input
                    class="exp-start"
                    placeholder="2025"
                    oninput="updateResume()">

            </div>

            <div class="form-group">

                <label>End Year</label>

                <input
                    class="exp-end"
                    placeholder="Present"
                    oninput="updateResume()">

            </div>

            <div class="form-group full">

                <label>Description</label>

                <textarea
                    class="exp-description"
                    placeholder="Describe your experience..."
                    oninput="updateResume()"></textarea>

            </div>

        </div>
    `;

    container.appendChild(item);

    updateResume();
}


function updateExperience() {

    const preview =
        document.getElementById("previewExperience");

    if (!preview) return;

    const items =
        document.querySelectorAll(
            "#experienceContainer .dynamic-item"
        );

    preview.innerHTML = "";

    items.forEach(item => {

        const role =
            item.querySelector(".exp-role")?.value.trim();

        const company =
            item.querySelector(".exp-company")?.value.trim();

        const start =
            item.querySelector(".exp-start")?.value.trim();

        const end =
            item.querySelector(".exp-end")?.value.trim();

        const description =
            item.querySelector(".exp-description")?.value.trim();

        if (!role && !company && !description) return;

        const div =
            document.createElement("div");

        div.className = "resume-item";

        div.innerHTML = `

            <div class="resume-item-top">

                <div>

                    <strong>
                        ${escapeHTML(role)}
                    </strong>

                    ${
                        company
                        ?
                        `<div class="resume-company">
                            ${escapeHTML(company)}
                        </div>`
                        :
                        ""
                    }

                </div>

                ${
                    start || end
                    ?
                    `<span class="resume-date">
                        ${escapeHTML(start)}
                        ${start || end ? " - " : ""}
                        ${escapeHTML(end)}
                    </span>`
                    :
                    ""
                }

            </div>

            ${
                description
                ?
                `<p>${escapeHTML(description)}</p>`
                :
                ""
            }
        `;

        preview.appendChild(div);
    });
}


/* =====================================================
   INTERNSHIP
===================================================== */

function addInternship() {

    internshipCount++;

    const container =
        document.getElementById("internshipContainer");

    if (!container) return;

    const item =
        document.createElement("div");

    item.className = "dynamic-item";
    item.id = `internship-${internshipCount}`;

    item.innerHTML = `

        <div class="dynamic-header">

            <strong>
                Internship ${internshipCount}
            </strong>

            <button
                type="button"
                class="remove-btn"
                onclick="removeItem('internship-${internshipCount}')">

                Remove

            </button>

        </div>

        <div class="dynamic-grid">

            <div class="form-group">

                <label>Role</label>

                <input
                    class="intern-role"
                    placeholder="Python Developer Intern"
                    oninput="updateResume()">

            </div>

            <div class="form-group">

                <label>Company</label>

                <input
                    class="intern-company"
                    placeholder="Company Name"
                    oninput="updateResume()">

            </div>

            <div class="form-group">

                <label>Duration</label>

                <input
                    class="intern-duration"
                    placeholder="3 Months"
                    oninput="updateResume()">

            </div>

            <div class="form-group">

                <label>Verify Link</label>

                <input
                    type="url"
                    class="intern-link"
                    placeholder="https://..."
                    oninput="updateResume()">

            </div>

            <div class="form-group full">

                <label>Description</label>

                <textarea
                    class="intern-description"
                    placeholder="Describe your internship..."
                    oninput="updateResume()"></textarea>

            </div>

        </div>
    `;

    container.appendChild(item);

    updateResume();
}


function updateInternships() {

    const preview =
        document.getElementById("previewInternships");

    if (!preview) return;

    preview.innerHTML = "";

    const items =
        document.querySelectorAll(
            "#internshipContainer .dynamic-item"
        );

    items.forEach(item => {

        const role =
            item.querySelector(".intern-role")?.value.trim();

        const company =
            item.querySelector(".intern-company")?.value.trim();

        const duration =
            item.querySelector(".intern-duration")?.value.trim();

        const description =
            item.querySelector(".intern-description")?.value.trim();

        const link =
            item.querySelector(".intern-link")?.value.trim();

        if (!role && !company && !description) return;

        const div =
            document.createElement("div");

        div.className = "resume-item";

        div.innerHTML = `

            <div class="resume-item-top">

                <div>

                    <strong>
                        ${escapeHTML(role)}
                    </strong>

                    ${
                        company
                        ?
                        `<div class="resume-company">
                            ${escapeHTML(company)}
                        </div>`
                        :
                        ""
                    }

                </div>

                ${
                    duration
                    ?
                    `<span class="resume-date">
                        ${escapeHTML(duration)}
                    </span>`
                    :
                    ""
                }

            </div>

            ${
                description
                ?
                `<p>${escapeHTML(description)}</p>`
                :
                ""
            }

            ${
                link
                ?
                `<a
                    class="resume-link"
                    href="${escapeHTML(link)}"
                    target="_blank"
                    rel="noopener noreferrer">
                    Verify Internship ↗
                </a>`
                :
                ""
            }
        `;

        preview.appendChild(div);
    });
}


/* =====================================================
   CERTIFICATES
===================================================== */

function addCertificate() {

    certificateCount++;

    const container =
        document.getElementById("certificateContainer");

    if (!container) return;

    const item =
        document.createElement("div");

    item.className = "dynamic-item";
    item.id = `certificate-${certificateCount}`;

    item.innerHTML = `

        <div class="dynamic-header">

            <strong>
                Certificate ${certificateCount}
            </strong>

            <button
                type="button"
                class="remove-btn"
                onclick="removeItem('certificate-${certificateCount}')">

                Remove

            </button>

        </div>

        <div class="dynamic-grid">

            <div class="form-group">

                <label>Certificate Name</label>

                <input
                    class="cert-name"
                    placeholder="Python Basics"
                    oninput="updateResume()">

            </div>

            <div class="form-group">

                <label>Issuing Organization</label>

                <input
                    class="cert-issuer"
                    placeholder="IBM"
                    oninput="updateResume()">

            </div>

            <div class="form-group">

                <label>Date</label>

                <input
                    class="cert-date"
                    placeholder="2026"
                    oninput="updateResume()">

            </div>

            <div class="form-group">

                <label>Verify Link</label>

                <input
                    type="url"
                    class="cert-link"
                    placeholder="https://..."
                    oninput="updateResume()">

            </div>

        </div>
    `;

    container.appendChild(item);

    updateResume();
}


function updateCertificates() {

    const preview =
        document.getElementById("previewCertificates");

    if (!preview) return;

    preview.innerHTML = "";

    const items =
        document.querySelectorAll(
            "#certificateContainer .dynamic-item"
        );

    items.forEach(item => {

        const name =
            item.querySelector(".cert-name")?.value.trim();

        const issuer =
            item.querySelector(".cert-issuer")?.value.trim();

        const date =
            item.querySelector(".cert-date")?.value.trim();

        const link =
            item.querySelector(".cert-link")?.value.trim();

        if (!name && !issuer) return;

        const div =
            document.createElement("div");

        div.className = "resume-item";

        div.innerHTML = `

            <div class="resume-item-top">

                <div>

                    <strong>
                        ${escapeHTML(name)}
                    </strong>

                    ${
                        issuer
                        ?
                        `<div class="resume-company">
                            ${escapeHTML(issuer)}
                        </div>`
                        :
                        ""
                    }

                </div>

                ${
                    date
                    ?
                    `<span class="resume-date">
                        ${escapeHTML(date)}
                    </span>`
                    :
                    ""
                }

            </div>

            ${
                link
                ?
                `<a
                    class="resume-link"
                    href="${escapeHTML(link)}"
                    target="_blank"
                    rel="noopener noreferrer">
                    Verify Certificate ↗
                </a>`
                :
                ""
            }
        `;

        preview.appendChild(div);
    });
}


/* =====================================================
   PROJECTS
===================================================== */

function addProject() {

    projectCount++;

    const container =
        document.getElementById("projectContainer");

    if (!container) return;

    const item =
        document.createElement("div");

    item.className = "dynamic-item";
    item.id = `project-${projectCount}`;

    item.innerHTML = `

        <div class="dynamic-header">

            <strong>
                Project ${projectCount}
            </strong>

            <button
                type="button"
                class="remove-btn"
                onclick="removeItem('project-${projectCount}')">

                Remove

            </button>

        </div>

        <div class="dynamic-grid">

            <div class="form-group">

                <label>Project Name</label>

                <input
                    class="project-name"
                    placeholder="Resume Builder"
                    oninput="updateResume()">

            </div>

            <div class="form-group">

                <label>Technologies</label>

                <input
                    class="project-tech"
                    placeholder="HTML, CSS, JavaScript"
                    oninput="updateResume()">

            </div>

            <div class="form-group full">

                <label>Project / GitHub Link</label>

                <input
                    type="url"
                    class="project-link"
                    placeholder="https://github.com/..."
                    oninput="updateResume()">

            </div>

            <div class="form-group full">

                <label>Description</label>

                <textarea
                    class="project-description"
                    placeholder="Describe your project..."
                    oninput="updateResume()"></textarea>

            </div>

        </div>
    `;

    container.appendChild(item);

    updateResume();
}


function updateProjects() {

    const preview =
        document.getElementById("previewProjects");

    if (!preview) return;

    preview.innerHTML = "";

    const items =
        document.querySelectorAll(
            "#projectContainer .dynamic-item"
        );

    items.forEach(item => {

        const name =
            item.querySelector(".project-name")?.value.trim();

        const tech =
            item.querySelector(".project-tech")?.value.trim();

        const link =
            item.querySelector(".project-link")?.value.trim();

        const description =
            item.querySelector(".project-description")?.value.trim();

        if (!name) return;

        const div =
            document.createElement("div");

        div.className = "resume-item";

        div.innerHTML = `

            <div class="resume-item-top">

                <strong>
                    ${escapeHTML(name)}
                </strong>

            </div>

            ${
                tech
                ?
                `<div class="resume-company">
                    ${escapeHTML(tech)}
                </div>`
                :
                ""
            }

            ${
                description
                ?
                `<p>${escapeHTML(description)}</p>`
                :
                ""
            }

            ${
                link
                ?
                `<a
                    class="resume-link"
                    href="${escapeHTML(link)}"
                    target="_blank"
                    rel="noopener noreferrer">
                    View Project ↗
                </a>`
                :
                ""
            }
        `;

        preview.appendChild(div);
    });
}


/* =====================================================
   ACHIEVEMENTS
===================================================== */

function addAchievement() {

    achievementCount++;

    const container =
        document.getElementById("achievementContainer");

    if (!container) return;

    const item =
        document.createElement("div");

    item.className = "dynamic-item";
    item.id = `achievement-${achievementCount}`;

    item.innerHTML = `

        <div class="dynamic-header">

            <strong>
                Achievement ${achievementCount}
            </strong>

            <button
                type="button"
                class="remove-btn"
                onclick="removeItem('achievement-${achievementCount}')">

                Remove

            </button>

        </div>

        <div class="dynamic-grid">

            <div class="form-group">

                <label>Achievement</label>

                <input
                    class="achievement-title"
                    placeholder="Hackathon Finalist"
                    oninput="updateResume()">

            </div>

            <div class="form-group">

                <label>Year</label>

                <input
                    class="achievement-year"
                    placeholder="2026"
                    oninput="updateResume()">

            </div>

            <div class="form-group full">

                <label>Description</label>

                <textarea
                    class="achievement-description"
                    placeholder="Describe your achievement..."
                    oninput="updateResume()"></textarea>

            </div>

        </div>
    `;

    container.appendChild(item);

    updateResume();
}


function updateAchievements() {

    const preview =
        document.getElementById("previewAchievements");

    if (!preview) return;

    preview.innerHTML = "";

    const items =
        document.querySelectorAll(
            "#achievementContainer .dynamic-item"
        );

    const list =
        document.createElement("ul");

    list.className = "achievement-list";

    let hasAchievement = false;

    items.forEach(item => {

        const title =
            item.querySelector(".achievement-title")?.value.trim();

        const year =
            item.querySelector(".achievement-year")?.value.trim();

        const description =
            item.querySelector(".achievement-description")?.value.trim();

        if (!title) return;

        hasAchievement = true;

        const li =
            document.createElement("li");

        li.innerHTML = `

            <strong>
                ${escapeHTML(title)}
            </strong>

            ${
                year
                ? ` (${escapeHTML(year)})`
                : ""
            }

            ${
                description
                ? ` — ${escapeHTML(description)}`
                : ""
            }
        `;

        list.appendChild(li);
    });

    if (hasAchievement) {
        preview.appendChild(list);
    }
}


/* =====================================================
   SKILLS
===================================================== */

function updateSkills() {

    const preview =
        document.getElementById("previewSkills");

    if (!preview) return;

    preview.innerHTML = "";

    const skills =
        getValue("skills");

    if (!skills) return;

    skills
        .split(",")
        .map(skill => skill.trim())
        .filter(skill => skill.length > 0)
        .forEach(skill => {

            const li =
                document.createElement("li");

            li.textContent = skill;

            preview.appendChild(li);
        });
}


/* =====================================================
   REMOVE
===================================================== */

function removeItem(id) {

    const element =
        document.getElementById(id);

    if (element) {
        element.remove();
        updateResume();
    }
}


/* =====================================================
   MAIN UPDATE
===================================================== */

function updateResume() {

    updatePersonal();
    updateSummary();
    updateEducation();
    updateExperience();
    updateInternships();
    updateCertificates();
    updateProjects();
    updateAchievements();
    updateSkills();
}


/* =====================================================
   DOWNLOAD / PRINT
===================================================== */

function downloadResume() {

    updateResume();

    setTimeout(() => {
        window.print();
    }, 100);
}


/* =====================================================
   CLEAR
===================================================== */

function clearResume() {

    const answer =
        confirm(
            "Are you sure you want to clear all entered information?"
        );

    if (!answer) return;

    document
        .querySelectorAll(
            "input, textarea"
        )
        .forEach(element => {
            element.value = "";
        });

    [
        "educationContainer",
        "experienceContainer",
        "internshipContainer",
        "certificateContainer",
        "projectContainer",
        "achievementContainer"
    ]
    .forEach(id => {

        const container =
            document.getElementById(id);

        if (container) {
            container.innerHTML = "";
        }
    });

    educationCount = 0;
    experienceCount = 0;
    internshipCount = 0;
    certificateCount = 0;
    projectCount = 0;
    achievementCount = 0;

    updateResume();
}


/* =====================================================
   PAGE LOAD
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        updateResume();

    }
);
