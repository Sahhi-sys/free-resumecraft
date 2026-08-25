/* =========================================================
   PROFESSIONAL RESUME BUILDER
   FULL SCRIPT.JS REPLACEMENT
   ========================================================= */


/* =========================================================
   COUNTERS
========================================================= */

let educationCount = 0;
let experienceCount = 0;
let internshipCount = 0;
let certificateCount = 0;
let projectCount = 0;
let languageCount = 0;
let achievementCount = 0;


/* =========================================================
   START CRAFTING
========================================================= */

function startCrafting() {

    const landing =
        document.getElementById("landingPage");

    const builder =
        document.getElementById("builderPage");

    if (!landing || !builder) return;

    landing.style.display = "none";
    builder.style.display = "block";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    updateResume();
}


/* =========================================================
   HELPERS
========================================================= */

function getValue(id, fallback = "") {

    const element =
        document.getElementById(id);

    if (!element) return fallback;

    return String(element.value || "").trim();
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

    url = url.trim();

    if (
        url.startsWith("http://") ||
        url.startsWith("https://")
    ) {
        return url;
    }

    return "https://" + url;
}


function showSection(id, show) {

    const section =
        document.getElementById(id);

    if (!section) return;

    section.style.display =
        show ? "block" : "none";
}


/* =========================================================
   PERSONAL DETAILS
========================================================= */

function updatePersonal() {

    const name =
        getValue("name");

    const job =
        getValue("job");

    const email =
        getValue("email");

    const phone =
        getValue("phone");

    const location =
        getValue("location");


    const previewName =
        document.getElementById("previewName");

    const previewJob =
        document.getElementById("previewJob");

    const previewEmail =
        document.getElementById("previewEmail");

    const previewPhone =
        document.getElementById("previewPhone");

    const previewLocation =
        document.getElementById("previewLocation");


    if (previewName)
        previewName.textContent = name;

    if (previewJob)
        previewJob.textContent = job;

    if (previewEmail)
        previewEmail.textContent = email;

    if (previewPhone)
        previewPhone.textContent = phone;

    if (previewLocation)
        previewLocation.textContent = location;


    /* LinkedIn */

    const linkedin =
        getValue("linkedin");

    const linkedinPreview =
        document.getElementById(
            "previewLinkedin"
        );


    if (linkedinPreview) {

        if (linkedin) {

            linkedinPreview.style.display =
                "inline-block";

            linkedinPreview.href =
                normalizeURL(linkedin);

            linkedinPreview.target =
                "_blank";

            linkedinPreview.rel =
                "noopener noreferrer";

            linkedinPreview.textContent =
                linkedin
                    .replace(/^https?:\/\//, "")
                    .replace(/^www\./, "");

        } else {

            linkedinPreview.style.display =
                "none";

        }
    }


    /* GitHub */

    const github =
        getValue("github");

    const githubPreview =
        document.getElementById(
            "previewGithub"
        );


    if (githubPreview) {

        if (github) {

            githubPreview.style.display =
                "inline-block";

            githubPreview.href =
                normalizeURL(github);

            githubPreview.target =
                "_blank";

            githubPreview.rel =
                "noopener noreferrer";

            githubPreview.textContent =
                github
                    .replace(/^https?:\/\//, "")
                    .replace(/^www\./, "");

        } else {

            githubPreview.style.display =
                "none";

        }
    }
}


/* =========================================================
   SUMMARY
========================================================= */

function updateSummary() {

    const summary =
        getValue("summary");

    const preview =
        document.getElementById(
            "previewSummary"
        );

    if (!preview) return;

    preview.textContent =
        summary;

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
        document.getElementById(
            "educationContainer"
        );

    if (!container) return;


    const id =
        `education-${educationCount}`;


    const item =
        document.createElement("div");

    item.className =
        "dynamic-item";

    item.id =
        id;


    item.innerHTML = `

        <div class="dynamic-header">

            <strong>
                Education ${educationCount}
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
        document.getElementById(
            "previewEducation"
        );

    if (!preview) return;

    preview.innerHTML = "";

    let hasData = false;


    document
        .querySelectorAll(
            "#educationContainer .dynamic-item"
        )
        .forEach(item => {

            const degree =
                item.querySelector(
                    ".edu-degree"
                )?.value.trim() || "";

            const institution =
                item.querySelector(
                    ".edu-institution"
                )?.value.trim() || "";

            const start =
                item.querySelector(
                    ".edu-start"
                )?.value.trim() || "";

            const end =
                item.querySelector(
                    ".edu-end"
                )?.value.trim() || "";

            const score =
                item.querySelector(
                    ".edu-score"
                )?.value.trim() || "";


            if (!degree && !institution)
                return;


            hasData = true;


            const div =
                document.createElement("div");

            div.className =
                "resume-item";


            div.innerHTML = `

                <div class="resume-item-top">

                    <div>

                        ${
                            degree
                            ? `<strong>
                                ${escapeHTML(degree)}
                              </strong>`
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


    showSection(
        "sectionEducation",
        hasData
    );
}


/* =========================================================
   EXPERIENCE
========================================================= */

function addExperience() {

    experienceCount++;

    const container =
        document.getElementById(
            "experienceContainer"
        );

    if (!container) return;


    const id =
        `experience-${experienceCount}`;


    const item =
        document.createElement("div");

    item.className =
        "dynamic-item";

    item.id =
        id;


    item.innerHTML = `

        <div class="dynamic-header">

            <strong>
                Experience ${experienceCount}
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
        document.getElementById(
            "previewExperience"
        );

    if (!preview) return;

    preview.innerHTML = "";

    let hasData = false;


    document
        .querySelectorAll(
            "#experienceContainer .dynamic-item"
        )
        .forEach(item => {

            const role =
                item.querySelector(
                    ".exp-role"
                )?.value.trim() || "";

            const company =
                item.querySelector(
                    ".exp-company"
                )?.value.trim() || "";

            const start =
                item.querySelector(
                    ".exp-start"
                )?.value.trim() || "";

            const end =
                item.querySelector(
                    ".exp-end"
                )?.value.trim() || "";

            const description =
                item.querySelector(
                    ".exp-description"
                )?.value.trim() || "";


            if (!role && !company && !description)
                return;


            hasData = true;


            const div =
                document.createElement("div");

            div.className =
                "resume-item";


            div.innerHTML = `

                <div class="resume-item-top">

                    <div>

                        ${
                            role
                            ? `<strong>
                                ${escapeHTML(role)}
                              </strong>`
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
                    ? `<p>
                        ${escapeHTML(description)}
                       </p>`
                    : ""
                }

            `;


            preview.appendChild(div);

        });


    showSection(
        "sectionExperience",
        hasData
    );
}


/* =========================================================
   INTERNSHIP
========================================================= */

function addInternship() {

    internshipCount++;

    const container =
        document.getElementById(
            "internshipContainer"
        );

    if (!container) return;


    const id =
        `internship-${internshipCount}`;


    const item =
        document.createElement("div");

    item.className =
        "dynamic-item";

    item.id =
        id;


    item.innerHTML = `

        <div class="dynamic-header">

            <strong>
                Internship ${internshipCount}
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
        document.getElementById(
            "previewInternships"
        );

    if (!preview) return;

    preview.innerHTML = "";

    let hasData = false;


    document
        .querySelectorAll(
            "#internshipContainer .dynamic-item"
        )
        .forEach(item => {

            const role =
                item.querySelector(
                    ".intern-role"
                )?.value.trim() || "";

            const company =
                item.querySelector(
                    ".intern-company"
                )?.value.trim() || "";

            const duration =
                item.querySelector(
                    ".intern-duration"
                )?.value.trim() || "";

            const link =
                item.querySelector(
                    ".intern-link"
                )?.value.trim() || "";

            const description =
                item.querySelector(
                    ".intern-description"
                )?.value.trim() || "";


            if (!role && !company && !description)
                return;


            hasData = true;


            const div =
                document.createElement("div");

            div.className =
                "resume-item";


            div.innerHTML = `

                <div class="resume-item-top">

                    <div>

                        ${
                            role
                            ? `<strong>
                                ${escapeHTML(role)}
                              </strong>`
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
                    ? `<p>
                        ${escapeHTML(description)}
                       </p>`
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


    showSection(
        "sectionInternships",
        hasData
    );
}


/* =========================================================
   PROJECTS
========================================================= */

function addProject() {

    projectCount++;

    const container =
        document.getElementById(
            "projectContainer"
        );

    if (!container) return;


    const id =
        `project-${projectCount}`;


    const item =
        document.createElement("div");

    item.className =
        "dynamic-item";

    item.id =
        id;


    item.innerHTML = `

        <div class="dynamic-header">

            <strong>
                Project ${projectCount}
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
        document.getElementById(
            "previewProjects"
        );

    if (!preview) return;

    preview.innerHTML = "";

    let hasData = false;


    document
        .querySelectorAll(
            "#projectContainer .dynamic-item"
        )
        .forEach(item => {

            const name =
                item.querySelector(
                    ".project-name"
                )?.value.trim() || "";

            const tech =
                item.querySelector(
                    ".project-tech"
                )?.value.trim() || "";

            const link =
                item.querySelector(
                    ".project-link"
                )?.value.trim() || "";

            const description =
                item.querySelector(
                    ".project-description"
                )?.value.trim() || "";


            if (!name && !description)
                return;


            hasData = true;


            const div =
                document.createElement("div");

            div.className =
                "resume-item";


            div.innerHTML = `

                ${
                    name
                    ? `<strong>
                        ${escapeHTML(name)}
                       </strong>`
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
                    ? `<p>
                        ${escapeHTML(description)}
                       </p>`
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


    showSection(
        "sectionProjects",
        hasData
    );
}


/* =========================================================
   CERTIFICATES
========================================================= */

function addCertificate() {

    certificateCount++;

    const container =
        document.getElementById(
            "certificateContainer"
        );

    if (!container) return;


    const id =
        `certificate-${certificateCount}`;


    const item =
        document.createElement("div");

    item.className =
        "dynamic-item";

    item.id =
        id;


    item.innerHTML = `

        <div class="dynamic-header">

            <strong>
                Certificate ${certificateCount}
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
        document.getElementById(
            "previewCertificates"
        );

    if (!preview) return;

    preview.innerHTML = "";

    let hasData = false;


    document
        .querySelectorAll(
            "#certificateContainer .dynamic-item"
        )
        .forEach(item => {

            const name =
                item.querySelector(
                    ".cert-name"
                )?.value.trim() || "";

            const issuer =
                item.querySelector(
                    ".cert-issuer"
                )?.value.trim() || "";

            const date =
                item.querySelector(
                    ".cert-date"
                )?.value.trim() || "";

            const link =
                item.querySelector(
                    ".cert-link"
                )?.value.trim() || "";


            if (!name && !issuer)
                return;


            hasData = true;


            const div =
                document.createElement("div");

            div.className =
                "resume-item";


            div.innerHTML = `

                <div class="resume-item-top">

                    <div>

                        ${
                            name
                            ? `<strong>
                                ${escapeHTML(name)}
                              </strong>`
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


    showSection(
        "sectionCertificates",
        hasData
    );
}


/* =========================================================
   SKILLS
========================================================= */

function updateSkills() {

    const preview =
        document.getElementById(
            "previewSkills"
        );

    if (!preview) return;

    preview.innerHTML = "";


    const skills =
        getValue("skills");


    if (!skills) {

        showSection(
            "sectionSkills",
            false
        );

        return;

    }


    let count = 0;


    skills
        .split(",")
        .map(skill => skill.trim())
        .filter(Boolean)
        .forEach(skill => {

            count++;


            const span =
                document.createElement("span");

            span.textContent =
                skill;

            preview.appendChild(span);

        });


    showSection(
        "sectionSkills",
        count > 0
    );
}


/* =========================================================
   LANGUAGES
========================================================= */

function addLanguage() {

    languageCount++;

    const container =
        document.getElementById(
            "languageContainer"
        );

    if (!container) return;


    const id =
        `language-${languageCount}`;


    const item =
        document.createElement("div");

    item.className =
        "dynamic-item";

    item.id =
        id;


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
        document.getElementById(
            "previewLanguages"
        );

    if (!preview) return;

    preview.innerHTML = "";

    let hasData = false;


    document
        .querySelectorAll(
            "#languageContainer .dynamic-item"
        )
        .forEach(item => {

            const name =
                item.querySelector(
                    ".language-name"
                )?.value.trim() || "";

            const level =
                item.querySelector(
                    ".language-level"
                )?.value.trim() || "";


            if (!name)
                return;


            hasData = true;


            const div =
                document.createElement("div");

            div.className =
                "language-item";


            div.innerHTML = `

                <strong>
                    ${escapeHTML(name)}
                </strong>

                ${
                    level
                    ? `<span>
                        — ${escapeHTML(level)}
                       </span>`
                    : ""
                }

            `;


            preview.appendChild(div);

        });


    showSection(
        "sectionLanguages",
        hasData
    );
}


/* =========================================================
   ACHIEVEMENTS
========================================================= */

function addAchievement() {

    achievementCount++;

    const container =
        document.getElementById(
            "achievementContainer"
        );

    if (!container) return;


    const id =
        `achievement-${achievementCount}`;


    const item =
        document.createElement("div");

    item.className =
        "dynamic-item";

    item.id =
        id;


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
        document.getElementById(
            "previewAchievements"
        );

    if (!preview) return;

    preview.innerHTML = "";

    let hasData = false;


    document
        .querySelectorAll(
            "#achievementContainer .dynamic-item"
        )
        .forEach(item => {

            const title =
                item.querySelector(
                    ".achievement-title"
                )?.value.trim() || "";

            const year =
                item.querySelector(
                    ".achievement-year"
                )?.value.trim() || "";

            const description =
                item.querySelector(
                    ".achievement-description"
                )?.value.trim() || "";


            if (!title)
                return;


            hasData = true;


            const div =
                document.createElement("div");

            div.className =
                "resume-item";


            div.innerHTML = `

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


                ${
                    description
                    ? `<p>
                        ${escapeHTML(description)}
                       </p>`
                    : ""
                }

            `;


            preview.appendChild(div);

        });


    showSection(
        "sectionAchievements",
        hasData
    );
}


/* =========================================================
   REMOVE ITEM
========================================================= */

function removeItem(id) {

    const element =
        document.getElementById(id);

    if (element) {

        element.remove();

    }

    updateResume();
}


/* =========================================================
   TEMPLATE
========================================================= */

function changeTemplate(
    template,
    button
) {

    const resume =
        document.getElementById("resume");

    if (!resume) return;


    resume.className =
        "resume template-" +
        template;


    document
        .querySelectorAll(".template-btn")
        .forEach(btn => {

            btn.classList.remove(
                "active"
            );

        });


    if (button) {

        button.classList.add(
            "active"
        );

    }


    updateResume();
}


/* =========================================================
   AI
========================================================= */

function showAIComingSoon() {

    alert(
        "AI Resume Assistant will be connected in the next version."
    );
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
   PHOTO
========================================================= */

function handlePhotoUpload(event) {

    const file =
        event?.target?.files?.[0];

    if (!file) return;


    if (!file.type.startsWith("image/")) {

        alert(
            "Please select a valid image."
        );

        return;
    }


    const photoBox =
        document.getElementById(
            "photoBox"
        );

    const previewPhoto =
        document.getElementById(
            "previewPhoto"
        );


    const reader =
        new FileReader();


    reader.onload =
        function(e) {

            if (previewPhoto) {

                previewPhoto.src =
                    e.target.result;

                previewPhoto.style.display =
                    "block";

            }


            if (photoBox) {

                photoBox.style.display =
                    "block";

            }

        };


    reader.onerror =
        function() {

            alert(
                "Unable to load the selected photo."
            );

        };


    reader.readAsDataURL(file);
}


/* =========================================================
   WHATSAPP
========================================================= */

function shareToWhatsApp() {

    const name =
        getValue("name") ||
        "My";


    const text =
        `Hi! I'm sharing my resume - ${name}.`;


    const url =
        "https://wa.me/?text=" +
        encodeURIComponent(text);


    window.open(
        url,
        "_blank",
        "noopener,noreferrer"
    );
}


/* =========================================================
   EMAIL
========================================================= */

function shareToEmail() {

    const name =
        getValue("name") ||
        "My";


    const subject =
        `${name} - Resume`;


    const body =
`Hi,

I'm sharing my resume with you.

Regards,
${name}`;


    const mailto =
        "mailto:?subject=" +
        encodeURIComponent(subject) +
        "&body=" +
        encodeURIComponent(body);


    window.location.href =
        mailto;
}


/* =========================================================
   LINKEDIN
========================================================= */

function shareToLinkedIn() {

    const name =
        getValue("name") ||
        "My";


    const text =
        `I'm sharing my resume - ${name}.`;


    const linkedinURL =
        "https://www.linkedin.com/feed/?shareActive=true&text=" +
        encodeURIComponent(text);


    window.open(
        linkedinURL,
        "_blank",
        "noopener,noreferrer"
    );
}


/* =========================================================
   SHARE MODAL
   Handles duplicate shareModal safely.
========================================================= */

function shareResume() {

    const modals =
        document.querySelectorAll(
            "#shareModal"
        );


    if (!modals.length) {

        createShareModal();

        return;

    }


    /*
     * Show the last modal because
     * your HTML currently contains
     * two shareModal elements.
     */

    const modal =
        modals[modals.length - 1];


    modal.style.display =
        "flex";
}


function closeShareModal() {

    document
        .querySelectorAll(
            "#shareModal"
        )
        .forEach(modal => {

            modal.style.display =
                "none";

        });
}


/* =========================================================
   CREATE SHARE MODAL IF MISSING
========================================================= */

function createShareModal() {

    const modal =
        document.createElement("div");

    modal.id =
        "shareModal";

    modal.className =
        "share-modal";


    modal.innerHTML = `

        <div class="share-box">

            <div class="share-header">

                <div>

                    <h3>
                        Share Resume
                    </h3>

                    <p>
                        Choose where you want to share your resume
                    </p>

                </div>


                <button
                    type="button"
                    class="share-close"
                    onclick="closeShareModal()">

                    ×

                </button>

            </div>


            <div class="share-options">

                <button
                    type="button"
                    class="share-option whatsapp"
                    onclick="shareToWhatsApp()">

                    <span class="share-icon">
                        💬
                    </span>

                    <span>

                        <strong>
                            WhatsApp
                        </strong>

                        <small>
                            Share your resume
                        </small>

                    </span>

                </button>


                <button
                    type="button"
                    class="share-option email"
                    onclick="shareToEmail()">

                    <span class="share-icon">
                        ✉️
                    </span>

                    <span>

                        <strong>
                            Email
                        </strong>

                        <small>
                            Send your resume
                        </small>

                    </span>

                </button>


                <button
                    type="button"
                    class="share-option linkedin"
                    onclick="shareToLinkedIn()">

                    <span class="share-icon">
                        in
                    </span>

                    <span>

                        <strong>
                            LinkedIn
                        </strong>

                        <small>
                            Share your resume
                        </small>

                    </span>

                </button>

            </div>

        </div>

    `;


    document.body.appendChild(modal);

    modal.style.display =
        "flex";
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

        alert(
            "Download window not found."
        );

        return;

    }


    modal.style.display =
        "flex";


    document.body.style.overflow =
        "hidden";


    /*
     * Reset selection
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

}


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


    if (!selected || !box)
        return;


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
   BUILD RESUME CANVAS
========================================================= */

async function createResumeCanvas() {

    updateResume();


    if (
        typeof html2canvas ===
        "undefined"
    ) {

        throw new Error(
            "html2canvas library is not loaded."
        );

    }


    const resume =
        document.getElementById(
            "resume"
        );


    if (!resume) {

        throw new Error(
            "Resume preview not found."
        );

    }


    await new Promise(resolve =>
        setTimeout(resolve, 250)
    );


    const clone =
        resume.cloneNode(true);


    clone.id =
        "resume-pdf-copy";


    clone.style.position =
        "absolute";

    clone.style.left =
        "-100000px";

    clone.style.top =
        "0";

    clone.style.width =
        "794px";

    clone.style.height =
        "auto";

    clone.style.minHeight =
        "1123px";

    clone.style.maxHeight =
        "none";

    clone.style.overflow =
        "visible";

    clone.style.transform =
        "none";

    clone.style.display =
        "block";

    clone.style.visibility =
        "visible";

    clone.style.background =
        "#ffffff";

    clone.style.boxShadow =
        "none";


    document.body.appendChild(
        clone
    );


    try {

        await new Promise(resolve => {

            requestAnimationFrame(() => {

                requestAnimationFrame(
                    resolve
                );

            });

        });


        const canvas =
            await html2canvas(
                clone,
                {

                    scale: 2,

                    useCORS: true,

                    allowTaint: false,

                    backgroundColor:
                        "#ffffff",

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
   GET FILE NAME
========================================================= */

function getResumeFileName() {

    const name =
        getValue("name") ||
        "Resume";


    const safe =
        name
            .replace(
                /[^a-z0-9]/gi,
                "_"
            )
            .replace(
                /_+/g,
                "_"
            )
            .replace(
                /^_+|_+$/g,
                ""
            );


    return (
        safe ||
        "Resume"
    ) +
    "_Resume.pdf";
}


/* =========================================================
   PARSE PAGE RANGE
========================================================= */

function parsePageRange(
    input,
    totalPages
) {

    const pages =
        new Set();


    if (!input)
        return [];


    input
        .split(",")
        .map(x => x.trim())
        .filter(Boolean)
        .forEach(part => {


            if (part.includes("-")) {

                const values =
                    part
                        .split("-")
                        .map(x =>
                            parseInt(
                                x.trim(),
                                10
                            )
                        );


                if (
                    values.length !== 2 ||
                    isNaN(values[0]) ||
                    isNaN(values[1])
                ) {

                    return;

                }


                const start =
                    Math.max(
                        1,
                        Math.min(
                            values[0],
                            values[1]
                        )
                    );


                const end =
                    Math.min(
                        totalPages,
                        Math.max(
                            values[0],
                            values[1]
                        )
                    );


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
                        part,
                        10
                    );


                if (
                    !isNaN(page) &&
                    page >= 1 &&
                    page <= totalPages
                ) {

                    pages.add(page);

                }

            }

        });


    return [...pages]
        .sort((a, b) => a - b);
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

            button.disabled =
                true;

            button.textContent =
                "⏳ Creating PDF...";

        }


        const selected =
            document.querySelector(
                'input[name="pageRange"]:checked'
            );


        if (!selected) {

            throw new Error(
                "Please select a page range."
            );

        }


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


        const pageSizeElement =
            document.getElementById(
                "pdfPageSize"
            );


        const orientationElement =
            document.getElementById(
                "pdfOrientation"
            );


        const pageSize =
            pageSizeElement
                ? pageSizeElement.value
                : "a4";


        const orientation =
            orientationElement
                ? orientationElement.value
                : "portrait";


        const {
            jsPDF
        } = window.jspdf;


        const pdf =
            new jsPDF({

                orientation:
                    orientation,

                unit:
                    "mm",

                format:
                    pageSize,

                compress:
                    true

            });


        const pageWidth =
            pdf.internal.pageSize.getWidth();


        const pageHeight =
            pdf.internal.pageSize.getHeight();


        const image =
            canvas.toDataURL(
                "image/jpeg",
                0.95
            );


        const imageWidth =
            pageWidth;


        const imageHeight =
            canvas.height *
            imageWidth /
            canvas.width;


        /*
         * Calculate actual number
         * of PDF pages.
         */

        const pageHeightPx =
            canvas.width *
            pageHeight /
            pageWidth;


        const totalPages =
            Math.max(
                1,
                Math.ceil(
                    canvas.height /
                    pageHeightPx
                )
            );


        let selectedPages = [];


        /*
         * ALL
         */

        if (
            selected.value === "all"
        ) {

            selectedPages =
                Array.from(
                    {
                        length:
                            totalPages
                    },
                    (_, i) =>
                        i + 1
                );

        }


        /*
         * PAGE 1 / PAGE 2
         */

        else if (
            selected.value === "1" ||
            selected.value === "2"
        ) {

            const page =
                Number(
                    selected.value
                );


            if (
                page > totalPages
            ) {

                throw new Error(
                    `This resume has only ${totalPages} page(s).`
                );

            }


            selectedPages =
                [page];

        }


        /*
         * CUSTOM
         */

        else if (
            selected.value === "custom"
        ) {

            const input =
                document.getElementById(
                    "customPages"
                );


            if (!input) {

                throw new Error(
                    "Custom page input not found."
                );

            }


            selectedPages =
                parsePageRange(
                    input.value.trim(),
                    totalPages
                );


            if (
                !selectedPages.length
            ) {

                throw new Error(
                    `Invalid page range. Your resume has ${totalPages} page(s).`
                );

            }

        }


        /*
         * ADD SELECTED PAGES
         */

        selectedPages.forEach(
            (pageNumber, index) => {


                if (index > 0) {

                    pdf.addPage();

                }


                const y =
                    -(
                        (pageNumber - 1) *
                        imageHeight
                    );


                pdf.addImage(

                    image,

                    "JPEG",

                    0,

                    y,

                    imageWidth,

                    imageHeight,

                    undefined,

                    "FAST"

                );

            }
        );


        /*
         * DOWNLOAD
         */

        pdf.save(
            getResumeFileName()
        );


        closeDownloadModal();


    } catch (error) {

        console.error(
            "DOWNLOAD ERROR:",
            error
        );


        alert(
            error.message ||
            "PDF download failed. Please try again."
        );


    } finally {

        if (button) {

            button.disabled =
                false;

            button.textContent =
                "⬇ Generate & Download PDF";

        }

    }

}


/* =========================================================
   COMPATIBILITY
   Top navbar button calls downloadResume()
========================================================= */

function downloadResume() {

    openDownloadModal();

}


/* =========================================================
   PDF PREVIEW MODAL
   Existing preview button support
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

    }


    if (frame) {

        frame.style.display =
            "none";

    }


    try {

        const canvas =
            await createResumeCanvas();


        const {
            jsPDF
        } = window.jspdf;


        const pdf =
            new jsPDF({

                orientation:
                    "portrait",

                unit:
                    "mm",

                format:
                    "a4"

            });


        const pageWidth =
            pdf.internal.pageSize.getWidth();


        const pageHeight =
            pdf.internal.pageSize.getHeight();


        const image =
            canvas.toDataURL(
                "image/jpeg",
                0.95
            );


        const imageHeight =
            canvas.height *
            pageWidth /
            canvas.width;


        let remaining =
            imageHeight;


        let position = 0;


        pdf.addImage(
            image,
            "JPEG",
            0,
            position,
            pageWidth,
            imageHeight,
            undefined,
            "FAST"
        );


        remaining -=
            pageHeight;


        while (remaining > 0) {

            position =
                -(imageHeight - remaining);


            pdf.addPage();


            pdf.addImage(
                image,
                "JPEG",
                0,
                position,
                pageWidth,
                imageHeight,
                undefined,
                "FAST"
            );


            remaining -=
                pageHeight;

        }


        const blobURL =
            URL.createObjectURL(
                pdf.output("blob")
            );


        if (frame) {

            frame.src =
                blobURL;

            frame.style.display =
                "block";

        }


        if (loading) {

            loading.style.display =
                "none";

        }


    } catch (error) {

        console.error(
            "Preview Error:",
            error
        );


        if (loading) {

            loading.textContent =
                "Unable to create preview.";

        }

    }

}


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

        frame.src =
            "";

    }

}


/* =========================================================
   PDF PAGE RANGE DROPDOWN SUPPORT
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


            if (
                event.target.value ===
                "custom"
            ) {

                box.style.display =
                    "block";

            } else {

                box.style.display =
                    "none";

            }

        }

    }
);


/* =========================================================
   DOWNLOAD MODAL OUTSIDE CLICK
========================================================= */

document.addEventListener(
    "click",
    function(event) {

        const modal =
            document.getElementById(
                "downloadModal"
            );


        if (
            modal &&
            event.target === modal
        ) {

            closeDownloadModal();

        }

    }
);


/* =========================================================
   INITIAL LOAD
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        updateResume();

    }
);
