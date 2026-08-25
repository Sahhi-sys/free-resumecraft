/* =========================================================
   RESUMECRAFT — COMPLETE SCRIPT.JS
   CLEAN REPLACEMENT
========================================================= */

let educationCount = 0;
let experienceCount = 0;
let internshipCount = 0;
let certificateCount = 0;
let projectCount = 0;
let languageCount = 0;
let achievementCount = 0;

let currentPhotoData = "";


/* =========================================================
   BASIC HELPERS
========================================================= */

function getValue(id, fallback = "") {
    const el = document.getElementById(id);
    if (!el) return fallback;
    return String(el.value || "").trim();
}


function escapeHTML(value) {
    return String(value || "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}


function normalizeURL(url) {
    if (!url) return "";

    url = String(url).trim();

    if (/^https?:\/\//i.test(url)) {
        return url;
    }

    return "https://" + url;
}


function showSection(id, show) {
    const section = document.getElementById(id);

    if (!section) return;

    section.style.display = show ? "block" : "none";
}


/* =========================================================
   START / BUILD RESUME
========================================================= */

function startCrafting() {

    const landing = document.getElementById("landingPage");
    const builder = document.getElementById("builderPage");

    if (landing) {
        landing.style.display = "none";
    }

    if (builder) {
        builder.style.display = "block";
    }

    document.body.classList.add("builder-active");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    updateResume();
}


/* =========================================================
   PERSONAL DETAILS
========================================================= */

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

    if (previewName) previewName.textContent = name;
    if (previewJob) previewJob.textContent = job;
    if (previewEmail) previewEmail.textContent = email;
    if (previewPhone) previewPhone.textContent = phone;
    if (previewLocation) previewLocation.textContent = location;


    /* LinkedIn */

    const linkedin = getValue("linkedin");
    const linkedinPreview =
        document.getElementById("previewLinkedin");

    if (linkedinPreview) {

        if (linkedin) {

            linkedinPreview.style.display = "inline-block";
            linkedinPreview.href = normalizeURL(linkedin);
            linkedinPreview.target = "_blank";
            linkedinPreview.rel = "noopener noreferrer";

            linkedinPreview.textContent =
                linkedin
                    .replace(/^https?:\/\//i, "")
                    .replace(/^www\./i, "");

        } else {

            linkedinPreview.style.display = "none";
            linkedinPreview.removeAttribute("href");
        }
    }


    /* GitHub */

    const github = getValue("github");
    const githubPreview =
        document.getElementById("previewGithub");

    if (githubPreview) {

        if (github) {

            githubPreview.style.display = "inline-block";
            githubPreview.href = normalizeURL(github);
            githubPreview.target = "_blank";
            githubPreview.rel = "noopener noreferrer";

            githubPreview.textContent =
                github
                    .replace(/^https?:\/\//i, "")
                    .replace(/^www\./i, "");

        } else {

            githubPreview.style.display = "none";
            githubPreview.removeAttribute("href");
        }
    }
}


/* =========================================================
   SUMMARY
========================================================= */

function updateSummary() {

    const summary = getValue("summary");
    const preview = document.getElementById("previewSummary");

    if (!preview) return;

    preview.textContent = summary;

    showSection(
        "sectionSummary",
        Boolean(summary)
    );
}


/* =========================================================
   EDUCATION
========================================================= */

function addEducation() {

    educationCount++;

    const container =
        document.getElementById("educationContainer");

    if (!container) return;

    const id = `education-${Date.now()}-${educationCount}`;

    const item = document.createElement("div");

    item.className = "dynamic-item";
    item.id = id;

    item.innerHTML = `
        <div class="dynamic-header">
            <strong>Education ${educationCount}</strong>

            <button
                type="button"
                class="remove-btn"
                onclick="removeItem('${id}')">
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

    preview.innerHTML = "";

    let hasData = false;

    document
        .querySelectorAll(
            "#educationContainer .dynamic-item"
        )
        .forEach(item => {

            const degree =
                item.querySelector(".edu-degree")
                    ?.value.trim() || "";

            const institution =
                item.querySelector(".edu-institution")
                    ?.value.trim() || "";

            const start =
                item.querySelector(".edu-start")
                    ?.value.trim() || "";

            const end =
                item.querySelector(".edu-end")
                    ?.value.trim() || "";

            const score =
                item.querySelector(".edu-score")
                    ?.value.trim() || "";

            if (!degree && !institution && !score) {
                return;
            }

            hasData = true;

            const div = document.createElement("div");

            div.className = "resume-item";

            div.innerHTML = `
                <div class="resume-item-top">

                    <div>
                        ${
                            degree
                                ? `<strong>${escapeHTML(degree)}</strong>`
                                : ""
                        }

                        ${
                            institution
                                ? `<div class="resume-company">
                                    ${escapeHTML(institution)}
                                   </div>`
                                : ""
                        }

                        ${
                            score
                                ? `<div class="resume-cgpa">
                                    ${escapeHTML(score)}
                                   </div>`
                                : ""
                        }
                    </div>

                    ${
                        start || end
                            ? `<span class="resume-date">
                                ${escapeHTML(start)}
                                ${start || end ? " - " : ""}
                                ${escapeHTML(end)}
                               </span>`
                            : ""
                    }

                </div>
            `;

            preview.appendChild(div);
        });

    showSection("sectionEducation", hasData);
}


/* =========================================================
   EXPERIENCE
========================================================= */

function addExperience() {

    experienceCount++;

    const container =
        document.getElementById("experienceContainer");

    if (!container) return;

    const id = `experience-${Date.now()}-${experienceCount}`;

    const item = document.createElement("div");

    item.className = "dynamic-item";
    item.id = id;

    item.innerHTML = `
        <div class="dynamic-header">
            <strong>Experience ${experienceCount}</strong>

            <button
                type="button"
                class="remove-btn"
                onclick="removeItem('${id}')">
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
                <label>Start</label>
                <input
                    class="exp-start"
                    placeholder="2025"
                    oninput="updateResume()">
            </div>

            <div class="form-group">
                <label>End</label>
                <input
                    class="exp-end"
                    placeholder="Present"
                    oninput="updateResume()">
            </div>

            <div class="form-group full">
                <label>Description</label>

                <textarea
                    class="exp-description"
                    placeholder="Describe your responsibilities..."
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

    preview.innerHTML = "";

    let hasData = false;

    document
        .querySelectorAll(
            "#experienceContainer .dynamic-item"
        )
        .forEach(item => {

            const role =
                item.querySelector(".exp-role")
                    ?.value.trim() || "";

            const company =
                item.querySelector(".exp-company")
                    ?.value.trim() || "";

            const start =
                item.querySelector(".exp-start")
                    ?.value.trim() || "";

            const end =
                item.querySelector(".exp-end")
                    ?.value.trim() || "";

            const description =
                item.querySelector(".exp-description")
                    ?.value.trim() || "";

            if (!role && !company && !description) {
                return;
            }

            hasData = true;

            const div = document.createElement("div");

            div.className = "resume-item";

            div.innerHTML = `
                <div class="resume-item-top">

                    <div>
                        ${
                            role
                                ? `<strong>${escapeHTML(role)}</strong>`
                                : ""
                        }

                        ${
                            company
                                ? `<div class="resume-company">
                                    ${escapeHTML(company)}
                                   </div>`
                                : ""
                        }
                    </div>

                    ${
                        start || end
                            ? `<span class="resume-date">
                                ${escapeHTML(start)}
                                ${start || end ? " - " : ""}
                                ${escapeHTML(end)}
                               </span>`
                            : ""
                    }

                </div>

                ${
                    description
                        ? `<p>${escapeHTML(description)}</p>`
                        : ""
                }
            `;

            preview.appendChild(div);
        });

    showSection("sectionExperience", hasData);
}


/* =========================================================
   INTERNSHIPS
========================================================= */

function addInternship() {

    internshipCount++;

    const container =
        document.getElementById("internshipContainer");

    if (!container) return;

    const id = `internship-${Date.now()}-${internshipCount}`;

    const item = document.createElement("div");

    item.className = "dynamic-item";
    item.id = id;

    item.innerHTML = `
        <div class="dynamic-header">
            <strong>Internship ${internshipCount}</strong>

            <button
                type="button"
                class="remove-btn"
                onclick="removeItem('${id}')">
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

    let hasData = false;

    document
        .querySelectorAll(
            "#internshipContainer .dynamic-item"
        )
        .forEach(item => {

            const role =
                item.querySelector(".intern-role")
                    ?.value.trim() || "";

            const company =
                item.querySelector(".intern-company")
                    ?.value.trim() || "";

            const duration =
                item.querySelector(".intern-duration")
                    ?.value.trim() || "";

            const link =
                item.querySelector(".intern-link")
                    ?.value.trim() || "";

            const description =
                item.querySelector(".intern-description")
                    ?.value.trim() || "";

            if (!role && !company && !description) {
                return;
            }

            hasData = true;

            const div = document.createElement("div");

            div.className = "resume-item";

            div.innerHTML = `
                <div class="resume-item-top">

                    <div>
                        ${
                            role
                                ? `<strong>${escapeHTML(role)}</strong>`
                                : ""
                        }

                        ${
                            company
                                ? `<div class="resume-company">
                                    ${escapeHTML(company)}
                                   </div>`
                                : ""
                        }
                    </div>

                    ${
                        duration
                            ? `<span class="resume-date">
                                ${escapeHTML(duration)}
                               </span>`
                            : ""
                    }

                </div>

                ${
                    description
                        ? `<p>${escapeHTML(description)}</p>`
                        : ""
                }

                ${
                    link
                        ? `<a
                            class="resume-link"
                            href="${normalizeURL(link)}"
                            target="_blank"
                            rel="noopener noreferrer">
                            Verify Internship ↗
                           </a>`
                        : ""
                }
            `;

            preview.appendChild(div);
        });

    showSection("sectionInternships", hasData);
}


/* =========================================================
   PROJECTS
========================================================= */

function addProject() {

    projectCount++;

    const container =
        document.getElementById("projectContainer");

    if (!container) return;

    const id = `project-${Date.now()}-${projectCount}`;

    const item = document.createElement("div");

    item.className = "dynamic-item";
    item.id = id;

    item.innerHTML = `
        <div class="dynamic-header">
            <strong>Project ${projectCount}</strong>

            <button
                type="button"
                class="remove-btn"
                onclick="removeItem('${id}')">
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

    let hasData = false;

    document
        .querySelectorAll(
            "#projectContainer .dynamic-item"
        )
        .forEach(item => {

            const name =
                item.querySelector(".project-name")
                    ?.value.trim() || "";

            const tech =
                item.querySelector(".project-tech")
                    ?.value.trim() || "";

            const link =
                item.querySelector(".project-link")
                    ?.value.trim() || "";

            const description =
                item.querySelector(".project-description")
                    ?.value.trim() || "";

            if (!name && !description) {
                return;
            }

            hasData = true;

            const div = document.createElement("div");

            div.className = "resume-item";

            div.innerHTML = `
                ${
                    name
                        ? `<strong>${escapeHTML(name)}</strong>`
                        : ""
                }

                ${
                    tech
                        ? `<div class="resume-company">
                            ${escapeHTML(tech)}
                           </div>`
                        : ""
                }

                ${
                    description
                        ? `<p>${escapeHTML(description)}</p>`
                        : ""
                }

                ${
                    link
                        ? `<a
                            class="resume-link"
                            href="${normalizeURL(link)}"
                            target="_blank"
                            rel="noopener noreferrer">
                            View Project ↗
                           </a>`
                        : ""
                }
            `;

            preview.appendChild(div);
        });

    showSection("sectionProjects", hasData);
}


/* =========================================================
   CERTIFICATES
========================================================= */

function addCertificate() {

    certificateCount++;

    const container =
        document.getElementById("certificateContainer");

    if (!container) return;

    const id = `certificate-${Date.now()}-${certificateCount}`;

    const item = document.createElement("div");

    item.className = "dynamic-item";
    item.id = id;

    item.innerHTML = `
        <div class="dynamic-header">
            <strong>Certificate ${certificateCount}</strong>

            <button
                type="button"
                class="remove-btn"
                onclick="removeItem('${id}')">
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

    let hasData = false;

    document
        .querySelectorAll(
            "#certificateContainer .dynamic-item"
        )
        .forEach(item => {

            const name =
                item.querySelector(".cert-name")
                    ?.value.trim() || "";

            const issuer =
                item.querySelector(".cert-issuer")
                    ?.value.trim() || "";

            const date =
                item.querySelector(".cert-date")
                    ?.value.trim() || "";

            const link =
                item.querySelector(".cert-link")
                    ?.value.trim() || "";

            if (!name && !issuer) {
                return;
            }

            hasData = true;

            const div = document.createElement("div");

            div.className = "resume-item";

            div.innerHTML = `
                <div class="resume-item-top">

                    <div>
                        ${
                            name
                                ? `<strong>${escapeHTML(name)}</strong>`
                                : ""
                        }

                        ${
                            issuer
                                ? `<div class="resume-company">
                                    ${escapeHTML(issuer)}
                                   </div>`
                                : ""
                        }
                    </div>

                    ${
                        date
                            ? `<span class="resume-date">
                                ${escapeHTML(date)}
                               </span>`
                            : ""
                    }

                </div>

                ${
                    link
                        ? `<a
                            class="resume-link"
                            href="${normalizeURL(link)}"
                            target="_blank"
                            rel="noopener noreferrer">
                            Verify Certificate ↗
                           </a>`
                        : ""
                }
            `;

            preview.appendChild(div);
        });

    showSection("sectionCertificates", hasData);
}


/* =========================================================
   SKILLS
========================================================= */

function updateSkills() {

    const preview =
        document.getElementById("previewSkills");

    if (!preview) return;

    preview.innerHTML = "";

    const skills = getValue("skills");

    if (!skills) {

        showSection("sectionSkills", false);
        return;
    }

    const list = skills
        .split(",")
        .map(x => x.trim())
        .filter(Boolean);

    list.forEach(skill => {

        const span = document.createElement("span");

        span.textContent = skill;

        preview.appendChild(span);
    });

    showSection(
        "sectionSkills",
        list.length > 0
    );
}


/* =========================================================
   LANGUAGES
========================================================= */

function addLanguage() {

    languageCount++;

    const container =
        document.getElementById("languageContainer");

    if (!container) return;

    const id = `language-${Date.now()}-${languageCount}`;

    const item = document.createElement("div");

    item.className = "dynamic-item";
    item.id = id;

    item.innerHTML = `
        <div class="dynamic-header">

            <strong>
                Language ${languageCount}
            </strong>

            <button
                type="button"
                class="remove-btn"
                onclick="removeItem('${id}')">
                Remove
            </button>

        </div>

        <div class="dynamic-grid">

            <div class="form-group">
                <label>Language</label>

                <input
                    class="language-name"
                    placeholder="English"
                    oninput="updateResume()">
            </div>

            <div class="form-group">
                <label>Proficiency</label>

                <input
                    class="language-level"
                    placeholder="Professional"
                    oninput="updateResume()">
            </div>

        </div>
    `;

    container.appendChild(item);

    updateResume();
}


function updateLanguages() {

    const preview =
        document.getElementById("previewLanguages");

    if (!preview) return;

    preview.innerHTML = "";

    let hasData = false;

    document
        .querySelectorAll(
            "#languageContainer .dynamic-item"
        )
        .forEach(item => {

            const name =
                item.querySelector(".language-name")
                    ?.value.trim() || "";

            const level =
                item.querySelector(".language-level")
                    ?.value.trim() || "";

            if (!name) return;

            hasData = true;

            const div = document.createElement("div");

            div.className = "language-item";

            div.innerHTML = `
                <strong>
                    ${escapeHTML(name)}
                </strong>

                ${
                    level
                        ? `<span> — ${escapeHTML(level)}</span>`
                        : ""
                }
            `;

            preview.appendChild(div);
        });

    showSection("sectionLanguages", hasData);
}


/* =========================================================
   ACHIEVEMENTS
========================================================= */

function addAchievement() {

    achievementCount++;

    const container =
        document.getElementById("achievementContainer");

    if (!container) return;

    const id = `achievement-${Date.now()}-${achievementCount}`;

    const item = document.createElement("div");

    item.className = "dynamic-item";
    item.id = id;

    item.innerHTML = `
        <div class="dynamic-header">

            <strong>
                Achievement ${achievementCount}
            </strong>

            <button
                type="button"
                class="remove-btn"
                onclick="removeItem('${id}')">
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

    let hasData = false;

    document
        .querySelectorAll(
            "#achievementContainer .dynamic-item"
        )
        .forEach(item => {

            const title =
                item.querySelector(".achievement-title")
                    ?.value.trim() || "";

            const year =
                item.querySelector(".achievement-year")
                    ?.value.trim() || "";

            const description =
                item.querySelector(".achievement-description")
                    ?.value.trim() || "";

            if (!title) return;

            hasData = true;

            const div = document.createElement("div");

            div.className = "resume-item";

            div.innerHTML = `
                <div class="resume-item-top">

                    <strong>
                        ${escapeHTML(title)}
                    </strong>

                    ${
                        year
                            ? `<span class="resume-date">
                                ${escapeHTML(year)}
                               </span>`
                            : ""
                    }

                </div>

                ${
                    description
                        ? `<p>${escapeHTML(description)}</p>`
                        : ""
                }
            `;

            preview.appendChild(div);
        });

    showSection("sectionAchievements", hasData);
}


/* =========================================================
   REMOVE DYNAMIC ITEM
========================================================= */

function removeItem(id) {

    const item =
        document.getElementById(id);

    if (item) {
        item.remove();
    }

    updateResume();
}


/* =========================================================
   TEMPLATE
========================================================= */

function changeTemplate(template, button) {

    const resume =
        document.getElementById("resume");

    if (!resume) return;

    resume.className =
        "resume template-" + template;

    document
        .querySelectorAll(".template-btn")
        .forEach(btn => {
            btn.classList.remove("active");
        });

    if (button) {
        button.classList.add("active");
    }
}


/* =========================================================
   PHOTO
========================================================= */

function handlePhotoUpload(event) {

    const file =
        event?.target?.files?.[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) {

        alert("Please select a valid image.");

        event.target.value = "";
        return;
    }

    const reader = new FileReader();

    reader.onload = function(e) {

        currentPhotoData =
            e.target.result;

        const previewPhoto =
            document.getElementById("previewPhoto");

        const photoBox =
            document.getElementById("photoBox");

        if (previewPhoto) {

            previewPhoto.src =
                currentPhotoData;

            previewPhoto.style.display =
                "block";
        }

        if (photoBox) {

            photoBox.style.display =
                "block";
        }
    };

    reader.onerror = function() {

        alert(
            "Unable to load the selected photo."
        );
    };

    reader.readAsDataURL(file);
}


/* =========================================================
   MAIN UPDATE
========================================================= */

function updateResume() {

    updatePersonal();
    updateSummary();
    updateEducation();
    updateExperience();
    updateInternships();
    updateProjects();
    updateCertificates();
    updateSkills();
    updateLanguages();
    updateAchievements();
}


/* =========================================================
   AI
========================================================= */

function showAIComingSoon() {

    alert(
        "AI Resume Assistant will be available in the next version."
    );
}


/* =========================================================
   CLEAR EVERYTHING
========================================================= */

function clearResume() {

    const confirmed =
        confirm(
            "Clear all resume information?"
        );

    if (!confirmed) return;


    /*
     * Clear normal inputs
     */

    document
        .querySelectorAll(
            "input, textarea, select"
        )
        .forEach(field => {

            if (
                field.type === "button" ||
                field.type === "submit"
            ) {
                return;
            }

            if (
                field.type === "checkbox" ||
                field.type === "radio"
            ) {
                field.checked = false;
            } else if (
                field.type === "file"
            ) {
                field.value = "";
            } else {
                field.value = "";
            }
        });


    /*
     * Remove dynamic items
     */

    [
        "educationContainer",
        "experienceContainer",
        "internshipContainer",
        "projectContainer",
        "certificateContainer",
        "languageContainer",
        "achievementContainer"
    ].forEach(id => {

        const container =
            document.getElementById(id);

        if (container) {
            container.innerHTML = "";
        }
    });


    /*
     * Reset counters
     */

    educationCount = 0;
    experienceCount = 0;
    internshipCount = 0;
    certificateCount = 0;
    projectCount = 0;
    languageCount = 0;
    achievementCount = 0;


    /*
     * Remove photo
     */

    currentPhotoData = "";

    const photo =
        document.getElementById("previewPhoto");

    if (photo) {

        photo.src = "";
        photo.style.display = "none";
    }

    const photoBox =
        document.getElementById("photoBox");

    if (photoBox) {
        photoBox.style.display = "none";
    }


    /*
     * Reset template
     */

    const resume =
        document.getElementById("resume");

    if (resume) {

        resume.className =
            "resume template-1";
    }


    document
        .querySelectorAll(".template-btn")
        .forEach(btn => {
            btn.classList.remove("active");
        });


    /*
     * Hide resume sections
     */

    [
        "sectionSummary",
        "sectionEducation",
        "sectionExperience",
        "sectionInternships",
        "sectionProjects",
        "sectionCertificates",
        "sectionSkills",
        "sectionLanguages",
        "sectionAchievements"
    ].forEach(id => {
        showSection(id, false);
    });


    updateResume();


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/*
 * Compatibility aliases
 */

function clearAll() {
    clearResume();
}

function resetResume() {
    clearResume();
}

/* =========================================================
   RESUMECRAFT — PDF + DOWNLOAD RANGE + SHARE
========================================================= */


/* =========================================================
   PDF FILE NAME
========================================================= */

function getResumeFileName() {

    const name = getValue("name") || "Resume";

    const safe = name
        .replace(/[^a-z0-9]/gi, "_")
        .replace(/_+/g, "_")
        .replace(/^_+|_+$/g, "");

    return (safe || "Resume") + "_Resume.pdf";
}


/* =========================================================
   CREATE RESUME CANVAS
========================================================= */

async function createResumeCanvas() {

    updateResume();

    if (typeof html2canvas === "undefined") {
        throw new Error(
            "html2canvas library is not loaded."
        );
    }

    const resume =
        document.getElementById("resume");

    if (!resume) {
        throw new Error(
            "Resume preview not found."
        );
    }

    await new Promise(resolve => {
        setTimeout(resolve, 300);
    });


    /*
     * Clone resume so the original preview
     * is never modified.
     */

    const clone =
        resume.cloneNode(true);

    clone.id =
        "resume-pdf-copy";


    /*
     * Force A4 width.
     */

    clone.style.position = "absolute";
    clone.style.left = "-100000px";
    clone.style.top = "0";

    clone.style.width = "794px";
    clone.style.height = "auto";

    clone.style.minHeight = "1123px";
    clone.style.maxHeight = "none";

    clone.style.overflow = "visible";

    clone.style.transform = "none";
    clone.style.display = "block";
    clone.style.visibility = "visible";

    clone.style.background = "#ffffff";
    clone.style.boxShadow = "none";


    document.body.appendChild(clone);


    try {

        await new Promise(resolve => {

            requestAnimationFrame(() => {

                requestAnimationFrame(resolve);

            });

        });


        const canvas =
            await html2canvas(
                clone,
                {
                    scale: 2,

                    useCORS: true,
                    allowTaint: false,

                    backgroundColor: "#ffffff",

                    logging: false,

                    width:
                        clone.scrollWidth,

                    height:
                        clone.scrollHeight,

                    windowWidth:
                        clone.scrollWidth,

                    windowHeight:
                        clone.scrollHeight,

                    scrollX: 0,
                    scrollY: 0
                }
            );


        if (
            !canvas ||
            canvas.width <= 0 ||
            canvas.height <= 0
        ) {

            throw new Error(
                "Could not create resume image."
            );
        }


        return canvas;


    } finally {

        if (clone.parentNode) {

            clone.parentNode.removeChild(
                clone
            );
        }
    }
}


/* =========================================================
   GET TOTAL PDF PAGES
========================================================= */

function calculateTotalPages(canvas) {

    const pageWidth = 210;
    const pageHeight = 297;

    const imageHeight =
        canvas.height *
        pageWidth /
        canvas.width;

    return Math.max(
        1,
        Math.ceil(
            imageHeight /
            pageHeight
        )
    );
}


/* =========================================================
   PARSE PAGE RANGE
========================================================= */

function getSelectedPageNumbers(totalPages) {

    const selected =
        document.querySelector(
            'input[name="pageRange"]:checked'
        );


    /*
     * If no selection,
     * download all pages.
     */

    if (!selected) {

        return Array.from(
            { length: totalPages },
            (_, index) => index + 1
        );
    }


    /*
     * ALL PAGES
     */

    if (selected.value === "all") {

        return Array.from(
            { length: totalPages },
            (_, index) => index + 1
        );
    }


    /*
     * PAGE 1
     */

    if (selected.value === "1") {

        return totalPages >= 1
            ? [1]
            : [];
    }


    /*
     * PAGE 2
     */

    if (selected.value === "2") {

        return totalPages >= 2
            ? [2]
            : [];
    }


    /*
     * CUSTOM RANGE
     */

    if (selected.value === "custom") {

        const input =
            document.getElementById(
                "customPages"
            );

        if (!input) {

            throw new Error(
                "Custom page range field not found."
            );
        }


        const value =
            input.value.trim();


        if (!value) {

            throw new Error(
                "Please enter a page range."
            );
        }


        const pages = new Set();


        /*
         * Supports:
         *
         * 1
         * 1,2
         * 1-3
         * 1,3
         * 1-2,4
         */

        const parts =
            value.split(",");


        parts.forEach(part => {

            const clean =
                part.trim();


            if (!clean) return;


            /*
             * Range
             */

            if (
                clean.includes("-")
            ) {

                const range =
                    clean.split("-");


                if (range.length !== 2) {

                    throw new Error(
                        "Invalid page range."
                    );
                }


                const start =
                    parseInt(
                        range[0].trim(),
                        10
                    );

                const end =
                    parseInt(
                        range[1].trim(),
                        10
                    );


                if (
                    Number.isNaN(start) ||
                    Number.isNaN(end)
                ) {

                    throw new Error(
                        "Invalid page range."
                    );
                }


                if (
                    start < 1 ||
                    end < 1 ||
                    start > totalPages ||
                    end > totalPages ||
                    start > end
                ) {

                    throw new Error(
                        `Please enter pages between 1 and ${totalPages}.`
                    );
                }


                for (
                    let page = start;
                    page <= end;
                    page++
                ) {

                    pages.add(page);
                }


            } else {

                /*
                 * Single page
                 */

                const page =
                    parseInt(
                        clean,
                        10
                    );


                if (
                    Number.isNaN(page) ||
                    page < 1 ||
                    page > totalPages
                ) {

                    throw new Error(
                        `Please enter pages between 1 and ${totalPages}.`
                    );
                }


                pages.add(page);
            }

        });


        if (pages.size === 0) {

            throw new Error(
                "Please enter a valid page range."
            );
        }


        return Array.from(pages)
            .sort((a, b) => a - b);
    }


    return Array.from(
        { length: totalPages },
        (_, index) => index + 1
    );
}


/* =========================================================
   CREATE PDF BLOB
========================================================= */

async function createPDFBlob(pageNumbers = null) {

    const canvas =
        await createResumeCanvas();


    if (
        !window.jspdf ||
        !window.jspdf.jsPDF
    ) {

        throw new Error(
            "jsPDF library is not loaded."
        );
    }


    const {
        jsPDF
    } = window.jspdf;


    /*
     * A4
     */

    const pageWidth = 210;
    const pageHeight = 297;


    const imageHeight =
        canvas.height *
        pageWidth /
        canvas.width;


    const totalPages =
        Math.max(
            1,
            Math.ceil(
                imageHeight /
                pageHeight
            )
        );


    /*
     * If pageNumbers are not supplied,
     * export all pages.
     */

    if (
        !Array.isArray(pageNumbers) ||
        pageNumbers.length === 0
    ) {

        pageNumbers =
            Array.from(
                {
                    length: totalPages
                },
                (_, index) => index + 1
            );
    }


    const pdf =
        new jsPDF({
            orientation: "portrait",
            unit: "mm",
            format: "a4",
            compress: true
        });


    const image =
        canvas.toDataURL(
            "image/jpeg",
            0.95
        );


    /*
     * IMPORTANT:
     *
     * Each selected original page
     * becomes one PDF page.
     *
     * So:
     *
     * [1]     => 1 PDF page
     * [2]     => 1 PDF page
     * [1,2]   => 2 PDF pages
     * [2,3]   => 2 PDF pages
     */

    pageNumbers.forEach(
        (originalPage, index) => {

            if (index > 0) {

                pdf.addPage(
                    "a4",
                    "portrait"
                );
            }


            const y =
                -(
                    (originalPage - 1) *
                    pageHeight
                );


            pdf.addImage(
                image,
                "JPEG",
                0,
                y,
                pageWidth,
                imageHeight,
                undefined,
                "FAST"
            );
        }
    );


    return pdf.output("blob");
}


/* =========================================================
   DOWNLOAD BLOB
========================================================= */

function savePDFBlob(blob) {

    const url =
        URL.createObjectURL(blob);


    const link =
        document.createElement("a");


    link.href = url;

    link.download =
        getResumeFileName();


    document.body.appendChild(link);

    link.click();

    link.remove();


    setTimeout(() => {

        URL.revokeObjectURL(url);

    }, 3000);
}


/* =========================================================
   DOWNLOAD ALL PDF
========================================================= */

async function downloadResumePDF() {

    try {

        const canvas =
            await createResumeCanvas();


        const totalPages =
            calculateTotalPages(
                canvas
            );


        const pages =
            Array.from(
                {
                    length: totalPages
                },
                (_, index) => index + 1
            );


        const blob =
            await createPDFBlob(
                pages
            );


        savePDFBlob(blob);


    } catch (error) {

        console.error(
            "PDF download error:",
            error
        );


        alert(
            error.message ||
            "PDF download failed."
        );
    }
}


/* =========================================================
   DOWNLOAD MODAL
========================================================= */

function openDownloadModal() {

    const modal =
        document.getElementById(
            "downloadModal"
        );


    if (!modal) {

        downloadResumePDF();

        return;
    }


    modal.style.display =
        "flex";


    document.body.style.overflow =
        "hidden";


    /*
     * Default = All Pages
     */

    const all =
        document.querySelector(
            'input[name="pageRange"][value="all"]'
        );


    if (all) {

        all.checked = true;
    }


    const customBox =
        document.getElementById(
            "customPageBox"
        );


    if (customBox) {

        customBox.style.display =
            "none";
    }


    const customInput =
        document.getElementById(
            "customPages"
        );


    if (customInput) {

        customInput.value =
            "";
    }
}


/* =========================================================
   CLOSE DOWNLOAD MODAL
========================================================= */

function closeDownloadModal() {

    const modal =
        document.getElementById(
            "downloadModal"
        );


    if (modal) {

        modal.style.display =
            "none";
    }


    document.body.style.overflow =
        "";
}


/* =========================================================
   CUSTOM PAGE TOGGLE
========================================================= */

function toggleCustomPages() {

    const selected =
        document.querySelector(
            'input[name="pageRange"]:checked'
        );


    const box =
        document.getElementById(
            "customPageBox"
        );


    if (!selected || !box) {
        return;
    }


    if (
        selected.value === "custom"
    ) {

        box.style.display =
            "block";

    } else {

        box.style.display =
            "none";
    }
}


/* =========================================================
   DOWNLOAD SELECTED PAGES
========================================================= */

async function downloadSelectedPages() {

    const button =
        document.querySelector(
            ".generate-pdf-btn"
        );


    try {

        if (button) {

            button.disabled = true;

            button.textContent =
                "Creating PDF...";
        }


        /*
         * First create canvas so we know
         * the REAL number of pages.
         */

        const canvas =
            await createResumeCanvas();


        const totalPages =
            calculateTotalPages(
                canvas
            );


        /*
         * Get ONLY selected pages.
         */

        const selectedPages =
            getSelectedPageNumbers(
                totalPages
            );


        if (
            !selectedPages ||
            selectedPages.length === 0
        ) {

            throw new Error(
                "No valid pages selected."
            );
        }


        /*
         * Create PDF containing
         * ONLY those pages.
         */

        const blob =
            await createPDFBlob(
                selectedPages
            );


        /*
         * Download.
         */

        savePDFBlob(blob);


        closeDownloadModal();


    } catch (error) {

        console.error(
            "Selected PDF error:",
            error
        );


        alert(
            error.message ||
            "PDF download failed."
        );


    } finally {

        if (button) {

            button.disabled = false;

            button.textContent =
                "⬇ Generate & Download PDF";
        }
    }
}


/*
 * Compatibility
 */

function downloadResume() {

    openDownloadModal();
}


/* =========================================================
   PREVIEW PDF
========================================================= */

async function openPDFPreview() {

    const modal =
        document.getElementById(
            "pdfPreviewModal"
        );


    if (!modal) {

        openDownloadModal();

        return;
    }


    modal.style.display =
        "flex";


    const loading =
        document.getElementById(
            "pdfPreviewLoading"
        );


    const frame =
        document.getElementById(
            "pdfPreviewFrame"
        );


    if (loading) {

        loading.style.display =
            "block";

        loading.textContent =
            "Creating PDF preview...";
    }


    if (frame) {

        frame.style.display =
            "none";
    }


    try {

        /*
         * Preview modal has its own
         * page range controls.
         */

        const canvas =
            await createResumeCanvas();


        const totalPages =
            calculateTotalPages(
                canvas
            );


        const rangeSelect =
            document.getElementById(
                "pdfPageRange"
            );


        let pages =
            Array.from(
                {
                    length: totalPages
                },
                (_, index) => index + 1
            );


        if (
            rangeSelect &&
            rangeSelect.value === "custom"
        ) {

            const custom =
                document.getElementById(
                    "customPageRange"
                );


            if (custom && custom.value.trim()) {

                pages =
                    parsePreviewPageRange(
                        custom.value,
                        totalPages
                    );
            }
        }


        const blob =
            await createPDFBlob(
                pages
            );


        const url =
            URL.createObjectURL(blob);


        if (frame) {

            frame.src = url;

            frame.style.display =
                "block";
        }


        if (loading) {

            loading.style.display =
                "none";
        }


    } catch (error) {

        console.error(
            "Preview error:",
            error
        );


        if (loading) {

            loading.textContent =
                error.message ||
                "Unable to create preview.";
        }
    }
}


/* =========================================================
   PREVIEW PAGE RANGE PARSER
========================================================= */

function parsePreviewPageRange(
    value,
    totalPages
) {

    const pages = new Set();


    value
        .split(",")
        .forEach(part => {

            const clean =
                part.trim();


            if (!clean) return;


            if (
                clean.includes("-")
            ) {

                const parts =
                    clean.split("-");


                if (parts.length !== 2) {

                    throw new Error(
                        "Invalid page range."
                    );
                }


                const start =
                    parseInt(
                        parts[0].trim(),
                        10
                    );


                const end =
                    parseInt(
                        parts[1].trim(),
                        10
                    );


                if (
                    Number.isNaN(start) ||
                    Number.isNaN(end) ||
                    start < 1 ||
                    end < 1 ||
                    start > end ||
                    end > totalPages
                ) {

                    throw new Error(
                        `Pages must be between 1 and ${totalPages}.`
                    );
                }


                for (
                    let i = start;
                    i <= end;
                    i++
                ) {

                    pages.add(i);
                }


            } else {

                const page =
                    parseInt(
                        clean,
                        10
                    );


                if (
                    Number.isNaN(page) ||
                    page < 1 ||
                    page > totalPages
                ) {

                    throw new Error(
                        `Pages must be between 1 and ${totalPages}.`
                    );
                }


                pages.add(page);
            }
        });


    return Array.from(pages)
        .sort((a, b) => a - b);
}


/* =========================================================
   PREVIEW RANGE TOGGLE
========================================================= */

document.addEventListener(
    "change",
    function(event) {

        if (
            event.target &&
            event.target.id ===
            "pdfPageRange"
        ) {

            const box =
                document.getElementById(
                    "customPageRangeBox"
                );


            if (!box) return;


            box.style.display =
                event.target.value === "custom"
                    ? "block"
                    : "none";
        }


        /*
         * Download modal
         */

        if (
            event.target &&
            event.target.name ===
            "pageRange"
        ) {

            toggleCustomPages();
        }
    }
);


/* =========================================================
   PREVIEW DOWNLOAD BUTTON
========================================================= */

async function downloadSelectedPDF() {

    const button =
        document.querySelector(
            ".pdf-download-confirm"
        );


    try {

        if (button) {

            button.disabled = true;

            button.textContent =
                "Creating PDF...";
        }


        const canvas =
            await createResumeCanvas();


        const totalPages =
            calculateTotalPages(
                canvas
            );


        const rangeSelect =
            document.getElementById(
                "pdfPageRange"
            );


        let pages =
            Array.from(
                {
                    length: totalPages
                },
                (_, index) => index + 1
            );


        if (
            rangeSelect &&
            rangeSelect.value === "custom"
        ) {

            const input =
                document.getElementById(
                    "customPageRange"
                );


            if (!input || !input.value.trim()) {

                throw new Error(
                    "Please enter a page range."
                );
            }


            pages =
                parsePreviewPageRange(
                    input.value,
                    totalPages
                );
        }


        const blob =
            await createPDFBlob(
                pages
            );


        savePDFBlob(blob);


        closePDFPreview();


    } catch (error) {

        console.error(error);


        alert(
            error.message ||
            "PDF download failed."
        );


    } finally {

        if (button) {

            button.disabled = false;

            button.textContent =
                "⬇ Download PDF";
        }
    }
}


/* =========================================================
   CLOSE PDF PREVIEW
========================================================= */

function closePDFPreview() {

    const modal =
        document.getElementById(
            "pdfPreviewModal"
        );


    if (modal) {

        modal.style.display =
            "none";
    }


    const frame =
        document.getElementById(
            "pdfPreviewFrame"
        );


    if (frame) {

        const oldURL =
            frame.src;


        frame.src =
            "";


        if (
            oldURL &&
            oldURL.startsWith("blob:")
        ) {

            URL.revokeObjectURL(
                oldURL
            );
        }
    }
}


/* =========================================================
   SHARE MODAL
========================================================= */

function shareResume() {

    const modals =
        document.querySelectorAll(
            "#shareModal"
        );


    if (!modals.length) {

        alert(
            "Share option is unavailable."
        );

        return;
    }


    /*
     * HTML currently contains duplicate
     * shareModal IDs.
     *
     * Hide all first.
     */

    modals.forEach(modal => {

        modal.style.display =
            "none";
    });


    /*
     * Use the last share modal,
     * because that one contains
     * WhatsApp + Email + LinkedIn.
     */

    const modal =
        modals[modals.length - 1];


    modal.style.display =
        "flex";


    document.body.style.overflow =
        "hidden";
}


/* =========================================================
   CLOSE SHARE MODAL
========================================================= */

function closeShareModal() {

    document
        .querySelectorAll(
            "#shareModal"
        )
        .forEach(modal => {

            modal.style.display =
                "none";
        });


    document.body.style.overflow =
        "";
}


/* =========================================================
   CREATE PDF FOR SHARING
========================================================= */

async function createSharePDF() {

    /*
     * Share ALL resume pages.
     *
     * If later you want share range,
     * this can be connected to the
     * download range selector.
     */

    const canvas =
        await createResumeCanvas();


    const totalPages =
        calculateTotalPages(
            canvas
        );


    const pages =
        Array.from(
            {
                length: totalPages
            },
            (_, index) => index + 1
        );


    const blob =
        await createPDFBlob(
            pages
        );


    return new File(
        [blob],
        getResumeFileName(),
        {
            type: "application/pdf"
        }
    );
}


/* =========================================================
   NATIVE PDF SHARE
========================================================= */

async function sharePDFFile() {

    const file =
        await createSharePDF();


    /*
     * Modern Android / iPhone browsers
     *
     * This opens the native share sheet.
     * WhatsApp / Gmail / other apps can
     * receive the actual PDF attachment.
     */

    if (
        navigator.share &&
        navigator.canShare
    ) {

        const shareData = {
            title:
                `${getValue("name") || "My"} Resume`,

            text:
                "Please find my resume attached.",

            files: [file]
        };


        if (
            navigator.canShare({
                files: [file]
            })
        ) {

            await navigator.share(
                shareData
            );

            return true;
        }
    }


    return false;
}


/* =========================================================
   WHATSAPP
========================================================= */

async function shareToWhatsApp() {

    try {

        closeShareModal();


        const shared =
            await sharePDFFile();


        if (shared) {

            return;
        }


        /*
         * Browser does not support
         * sharing PDF files.
         *
         * Download it first.
         */

        const canvas =
            await createResumeCanvas();


        const totalPages =
            calculateTotalPages(
                canvas
            );


        const pages =
            Array.from(
                {
                    length: totalPages
                },
                (_, index) => index + 1
            );


        const blob =
            await createPDFBlob(
                pages
            );


        savePDFBlob(blob);


        setTimeout(() => {

            const text =
                encodeURIComponent(
                    "Please find my resume attached."
                );


            window.open(
                `https://wa.me/?text=${text}`,
                "_blank"
            );


        }, 800);


        alert(
            "PDF downloaded. Attach the downloaded PDF in WhatsApp."
        );


    } catch (error) {

        if (
            error &&
            error.name === "AbortError"
        ) {

            return;
        }


        console.error(
            "WhatsApp share error:",
            error
        );


        alert(
            "Unable to share the PDF."
        );
    }
}


/* =========================================================
   EMAIL
========================================================= */

async function shareToEmail() {

    try {

        closeShareModal();


        const shared =
            await sharePDFFile();


        if (shared) {

            return;
        }


        /*
         * Email clients cannot receive
         * a local PDF attachment through
         * mailto automatically.
         *
         * So download first.
         */

        const canvas =
            await createResumeCanvas();


        const totalPages =
            calculateTotalPages(
                canvas
            );


        const pages =
            Array.from(
                {
                    length: totalPages
                },
                (_, index) => index + 1
            );


        const blob =
            await createPDFBlob(
                pages
            );


        savePDFBlob(blob);


        setTimeout(() => {

            const subject =
                encodeURIComponent(
                    `${getValue("name") || "My"} Resume`
                );


            const body =
                encodeURIComponent(
                    "Please find my resume attached."
                );


            window.location.href =
                `mailto:?subject=${subject}&body=${body}`;


        }, 800);


        alert(
            "PDF downloaded. Attach the downloaded PDF to your email."
        );


    } catch (error) {

        if (
            error &&
            error.name === "AbortError"
        ) {

            return;
        }


        console.error(
            "Email share error:",
            error
        );


        alert(
            "Unable to share the PDF."
        );
    }
}


/* =========================================================
   LINKEDIN
========================================================= */

async function shareToLinkedIn() {

    try {

        closeShareModal();


        const shared =
            await sharePDFFile();


        if (shared) {

            return;
        }


        const canvas =
            await createResumeCanvas();


        const totalPages =
            calculateTotalPages(
                canvas
            );


        const pages =
            Array.from(
                {
                    length: totalPages
                },
                (_, index) => index + 1
            );


        const blob =
            await createPDFBlob(
                pages
            );


        savePDFBlob(blob);


        setTimeout(() => {

            window.open(
                "https://www.linkedin.com/",
                "_blank"
            );

        }, 800);


        alert(
            "PDF downloaded. Upload the PDF on LinkedIn."
        );


    } catch (error) {

        if (
            error &&
            error.name === "AbortError"
        ) {

            return;
        }


        console.error(
            "LinkedIn share error:",
            error
        );


        alert(
            "Unable to share the PDF."
        );
    }
}


/* =========================================================
   COPY BUTTON
========================================================= */

async function copyText(text) {

    if (!text) return;


    try {

        await navigator.clipboard.writeText(
            text
        );


        alert(
            "Copied successfully."
        );


    } catch (error) {

        const textarea =
            document.createElement(
                "textarea"
            );


        textarea.value =
            text;


        textarea.style.position =
            "fixed";


        textarea.style.opacity =
            "0";


        document.body.appendChild(
            textarea
        );


        textarea.select();


        document.execCommand(
            "copy"
        );


        textarea.remove();


        alert(
            "Copied successfully."
        );
    }
}


/* =========================================================
   MODAL OUTSIDE CLICK
========================================================= */

document.addEventListener(
    "click",
    function(event) {

        const downloadModal =
            document.getElementById(
                "downloadModal"
            );


        if (
            downloadModal &&
            event.target === downloadModal
        ) {

            closeDownloadModal();
        }


        const shareModals =
            document.querySelectorAll(
                "#shareModal"
            );


        shareModals.forEach(modal => {

            if (
                event.target === modal
            ) {

                closeShareModal();
            }
        });


        const previewModal =
            document.getElementById(
                "pdfPreviewModal"
            );


        if (
            previewModal &&
            event.target === previewModal
        ) {

            closePDFPreview();
        }
    }
);


/* =========================================================
   ESCAPE KEY
========================================================= */

document.addEventListener(
    "keydown",
    function(event) {

        if (
            event.key !== "Escape"
        ) {

            return;
        }


        closeDownloadModal();
        closeShareModal();
        closePDFPreview();
    }
);


/* =========================================================
   BUTTON SAFETY
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        /*
         * Prevent accidental form submission.
         */

        document
            .querySelectorAll("button")
            .forEach(button => {

                if (
                    !button.hasAttribute(
                        "type"
                    )
                ) {

                    button.setAttribute(
                        "type",
                        "button"
                    );
                }
            });


        /*
         * Prevent image dragging.
         */

        document
            .querySelectorAll("img")
            .forEach(img => {

                img.setAttribute(
                    "draggable",
                    "false"
                );
            });


        updateResume();
    }
);


/* =========================================================
   SELECTSTART PROTECTION
========================================================= */

document.addEventListener(
    "selectstart",
    function(event) {

        const target =
            event.target;


        if (
            target &&
            target.closest &&
            target.closest(
                "button, .btn, .button, .template-btn, .share-option"
            )
        ) {

            event.preventDefault();
        }
    }
);


/* =========================================================
   DISABLED BUTTON PROTECTION
========================================================= */

document.addEventListener(
    "click",
    function(event) {

        const button =
            event.target.closest &&
            event.target.closest(
                "button"
            );


        if (!button) return;


        if (button.disabled) {

            event.preventDefault();

            event.stopPropagation();
        }
    },
    true
);

              
         
  
        

                      