/* =====================================================
   COUNTERS
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

function escapeHTML(text) {

    return String(text || "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}


function getValue(id, fallback = "") {

    const element = document.getElementById(id);

    if (!element) {
        return fallback;
    }

    return element.value.trim() || fallback;
}


/* =====================================================
   ADD EDUCATION
===================================================== */

function addEducation() {

    educationCount++;

    const container =
        document.getElementById("educationContainer");

    const item =
        document.createElement("div");

    item.className = "dynamic-item";

    item.id =
        `education-${educationCount}`;

    item.innerHTML = `

        <div class="dynamic-header">

            <strong>
                Education ${educationCount}
            </strong>

            <button
                class="remove-btn"
                onclick="removeItem('education-${educationCount}')">

                Remove

            </button>

        </div>


        <div class="dynamic-grid">

            <div class="form-group">

                <label>
                    Degree / Course
                </label>

                <input
                    class="edu-degree"
                    placeholder="M.Sc Computer Science"
                    oninput="updateResume()">

            </div>


            <div class="form-group">

                <label>
                    Institution
                </label>

                <input
                    class="edu-institution"
                    placeholder="Government Arts College"
                    oninput="updateResume()">

            </div>


            <div class="form-group">

                <label>
                    Start Year
                </label>

                <input
                    class="edu-start"
                    placeholder="2024"
                    oninput="updateResume()">

            </div>


            <div class="form-group">

                <label>
                    End Year
                </label>

                <input
                    class="edu-end"
                    placeholder="2026"
                    oninput="updateResume()">

            </div>


            <div class="form-group full">

                <label>
                    CGPA / Percentage
                </label>

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


/* =====================================================
   ADD EXPERIENCE
===================================================== */

function addExperience() {

    experienceCount++;

    const container =
        document.getElementById("experienceContainer");

    const item =
        document.createElement("div");

    item.className = "dynamic-item";

    item.id =
        `experience-${experienceCount}`;

    item.innerHTML = `

        <div class="dynamic-header">

            <strong>
                Experience ${experienceCount}
            </strong>

            <button
                class="remove-btn"
                onclick="removeItem('experience-${experienceCount}')">

                Remove

            </button>

        </div>


        <div class="dynamic-grid">

            <div class="form-group">

                <label>
                    Job Title
                </label>

                <input
                    class="exp-role"
                    placeholder="Software Developer"
                    oninput="updateResume()">

            </div>


            <div class="form-group">

                <label>
                    Company
                </label>

                <input
                    class="exp-company"
                    placeholder="Company Name"
                    oninput="updateResume()">

            </div>


            <div class="form-group">

                <label>
                    Start Year
                </label>

                <input
                    class="exp-start"
                    placeholder="2025"
                    oninput="updateResume()">

            </div>


            <div class="form-group">

                <label>
                    End Year
                </label>

                <input
                    class="exp-end"
                    placeholder="Present"
                    oninput="updateResume()">

            </div>


            <div class="form-group full">

                <label>
                    Description
                </label>

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


/* =====================================================
   ADD INTERNSHIP
===================================================== */

function addInternship() {

    internshipCount++;

    const container =
        document.getElementById("internshipContainer");

    const item =
        document.createElement("div");

    item.className = "dynamic-item";

    item.id =
        `internship-${internshipCount}`;

    item.innerHTML = `

        <div class="dynamic-header">

            <strong>
                Internship ${internshipCount}
            </strong>

            <button
                class="remove-btn"
                onclick="removeItem('internship-${internshipCount}')">

                Remove

            </button>

        </div>


        <div class="dynamic-grid">

            <div class="form-group">

                <label>
                    Role
                </label>

                <input
                    class="intern-role"
                    placeholder="Python Developer Intern"
                    oninput="updateResume()">

            </div>


            <div class="form-group">

                <label>
                    Company
                </label>

                <input
                    class="intern-company"
                    placeholder="Company Name"
                    oninput="updateResume()">

            </div>


            <div class="form-group">

                <label>
                    Duration
                </label>

                <input
                    class="intern-duration"
                    placeholder="3 Months"
                    oninput="updateResume()">

            </div>


            <div class="form-group">

                <label>
                    Verify Link
                </label>

                <input
                    class="intern-link"
                    type="url"
                    placeholder="https://..."
                    oninput="updateResume()">

            </div>


            <div class="form-group full">

                <label>
                    Description
                </label>

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


/* =====================================================
   ADD CERTIFICATE
===================================================== */

function addCertificate() {

    certificateCount++;

    const container =
        document.getElementById("certificateContainer");

    const item =
        document.createElement("div");

    item.className = "dynamic-item";

    item.id =
        `certificate-${certificateCount}`;

    item.innerHTML = `

        <div class="dynamic-header">

            <strong>
                Certificate ${certificateCount}
            </strong>

            <button
                class="remove-btn"
                onclick="removeItem('certificate-${certificateCount}')">

                Remove

            </button>

        </div>


        <div class="dynamic-grid">

            <div class="form-group">

                <label>
                    Certificate Name
                </label>

                <input
                    class="cert-name"
                    placeholder="Python Basics"
                    oninput="updateResume()">

            </div>


            <div class="form-group">

                <label>
                    Issuing Organization
                </label>

                <input
                    class="cert-issuer"
                    placeholder="IBM"
                    oninput="updateResume()">

            </div>


            <div class="form-group">

                <label>
                    Date
                </label>

                <input
                    class="cert-date"
                    placeholder="2026"
                    oninput="updateResume()">

            </div>


            <div class="form-group">

                <label>
                    Verify Certificate Link
                </label>

                <input
                    class="cert-link"
                    type="url"
                    placeholder="https://verify..."
                    oninput="updateResume()">

            </div>

        </div>
    `;

    container.appendChild(item);

    updateResume();
}


/* =====================================================
   ADD PROJECT
===================================================== */

function addProject() {

    projectCount++;

    const container =
        document.getElementById("projectContainer");

    const item =
        document.createElement("div");

    item.className = "dynamic-item";

    item.id =
        `project-${projectCount}`;

    item.innerHTML = `

        <div class="dynamic-header">

            <strong>
                Project ${projectCount}
            </strong>

            <button
                class="remove-btn"
                onclick="removeItem('project-${projectCount}')">

                Remove

            </button>

        </div>


        <div class="dynamic-grid">

            <div class="form-group">

                <label>
                    Project Name
                </label>

                <input
                    class="project-name"
                    placeholder="Resume Builder"
                    oninput="updateResume()">

            </div>


            <div class="form-group">

                <label>
                    Technologies
                </label>

                <input
                    class="project-tech"
                    placeholder="HTML, CSS, JavaScript"
                    oninput="updateResume()">

            </div>


            <div class="form-group full">

                <label>
                    Project / GitHub Link
                </label>

                <input
                    class="project-link"
                    type="url"
                    placeholder="https://github.com/..."
                    oninput="updateResume()">

            </div>


            <div class="form-group full">

                <label>
                    Description
                </label>

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


/* =====================================================
   ADD ACHIEVEMENT
===================================================== */

function addAchievement() {

    achievementCount++;

    const container =
        document.getElementById("achievementContainer");

    const item =
        document.createElement("div");

    item.className = "dynamic-item";

    item.id =
        `achievement-${achievementCount}`;

    item.innerHTML = `

        <div class="dynamic-header">

            <strong>
                Achievement ${achievementCount}
            </strong>

            <button
                class="remove-btn"
                onclick="removeItem('achievement-${achievementCount}')">

                Remove

            </button>

        </div>


        <div class="dynamic-grid">

            <div class="form-group">

                <label>
                    Achievement Title
                </label>

                <input
                    class="achievement-title"
                    placeholder="Hackathon Finalist"
                    oninput="updateResume()">

            </div>


            <div class="form-group">

                <label>
                    Year
                </label>

                <input
                    class="achievement-year"
                    placeholder="2026"
                    oninput="updateResume()">

            </div>


            <div class="form-group full">

                <label>
                    Description
                </label>

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


/* =====================================================
   REMOVE ITEM
===================================================== */

function removeItem(id) {

    const item =
        document.getElementById(id);

    if (item) {

        item.remove();

        updateResume();
    }
}


/* =====================================================
   PERSONAL INFORMATION
===================================================== */

function updatePersonal() {

    document.getElementById("previewName")
        .textContent =
        getValue("name", "John Doe");

    document.getElementById("previewJob")
        .textContent =
        getValue(
            "job",
            "Software Developer"
        );

    document.getElementById("previewEmail")
        .textContent =
        getValue(
            "email",
            "john@example.com"
        );

    document.getElementById("previewPhone")
        .textContent =
        getValue(
            "phone",
            "+91 98765 43210"
        );

    document.getElementById("previewLocation")
        .textContent =
        getValue(
            "location",
            "Coimbatore, India"
        );


    /* =========================
       LINKEDIN
    ========================= */

const linkedin = getValue("linkedin");

const linkedinElement =
    document.getElementById("previewLinkedin");

if (linkedin) {
    linkedinElement.href = linkedin;
    linkedinElement.textContent =
        linkedin.replace(/^https?:\/\//, "")
                .replace(/^www\./, "");
} else {
    linkedinElement.href = "#";
    linkedinElement.textContent =
        "linkedin.com/in/username";
}


const github = getValue("github");

const githubElement =
    document.getElementById("previewGithub");

if (github) {
    githubElement.href = github;
    githubElement.textContent =
        github.replace(/^https?:\/\//, "")
              .replace(/^www\./, "");
} else {
    githubElement.href = "#";
    githubElement.textContent =
        "github.com/username";
}    

   

/* =====================================================
   SUMMARY
===================================================== */

function updateSummary() {

    document.getElementById(
        "previewSummary"
    ).textContent =
        getValue(
            "summary",
            "Motivated and detail-oriented software developer with a passion for building user-friendly applications and learning modern technologies."
        );
}


/* =====================================================
   EDUCATION
===================================================== */

function updateEducation() {

    const preview =
        document.getElementById(
            "previewEducation"
        );

    const items =
        document.querySelectorAll(
            "#educationContainer .dynamic-item"
        );

    preview.innerHTML = "";


    if (items.length === 0) {

        preview.innerHTML = `

            <div class="resume-item">

                <div class="resume-item-top">

                    <div>

                        <strong>
                            M.Sc Computer Science
                        </strong>

                        <div class="resume-company">
                            Government Arts College
                        </div>

                        <div class="resume-cgpa">
                            CGPA: 8.5
                        </div>

                    </div>

                    <span class="resume-date">
                        2024 - 2026
                    </span>

                </div>

            </div>
        `;

        return;
    }


    items.forEach(item => {

        const degree =
            item.querySelector(
                ".edu-degree"
            ).value.trim();

        const institution =
            item.querySelector(
                ".edu-institution"
            ).value.trim();

        const start =
            item.querySelector(
                ".edu-start"
            ).value.trim();

        const end =
            item.querySelector(
                ".edu-end"
            ).value.trim();

        const score =
            item.querySelector(
                ".edu-score"
            ).value.trim();


        if (!degree && !institution) return;


        const div =
            document.createElement("div");

        div.className =
            "resume-item";


        div.innerHTML = `

            <div class="resume-item-top">

                <div>

                    <strong>
                        ${escapeHTML(
                            degree ||
                            "Degree / Course"
                        )}
                    </strong>

                    <div class="resume-company">
                        ${escapeHTML(
                            institution
                        )}
                    </div>

                    ${
                        score
                        ?
                        `
                        <div class="resume-cgpa">
                            ${escapeHTML(score)}
                        </div>
                        `
                        :
                        ""
                    }

                </div>

                <span class="resume-date">

                    ${escapeHTML(start)}

                    ${
                        start || end
                        ? " - "
                        : ""
                    }

                    ${escapeHTML(end)}

                </span>

            </div>

        `;

        preview.appendChild(div);
    });
}


/* =====================================================
   EXPERIENCE
===================================================== */

function updateExperience() {

    const preview =
        document.getElementById(
            "previewExperience"
        );

    const items =
        document.querySelectorAll(
            "#experienceContainer .dynamic-item"
        );

    preview.innerHTML = "";


    if (items.length === 0) {

        preview.innerHTML = `

            <div class="resume-item">

                <div class="resume-item-top">

                    <div>

                        <strong>
                            Software Developer
                        </strong>

                        <div class="resume-company">
                            Tech Solutions
                        </div>

                    </div>

                    <span class="resume-date">
                        2025 - Present
                    </span>

                </div>

                <p>
                    Worked on web applications,
                    user interfaces and JavaScript
                    based functionality.
                </p>

            </div>
        `;

        return;
    }


    items.forEach(item => {

        const role =
            item.querySelector(
                ".exp-role"
            ).value.trim();

        const company =
            item.querySelector(
                ".exp-company"
            ).value.trim();

        const start =
            item.querySelector(
                ".exp-start"
            ).value.trim();

        const end =
            item.querySelector(
                ".exp-end"
            ).value.trim();

        const description =
            item.querySelector(
                ".exp-description"
            ).value.trim();


        if (!role && !company) return;


        const div =
            document.createElement("div");

        div.className =
            "resume-item";


        div.innerHTML = `

            <div class="resume-item-top">

                <div>

                    <strong>
                        ${escapeHTML(role)}
                    </strong>

                    <div class="resume-company">
                        ${escapeHTML(company)}
                    </div>

                </div>

                <span class="resume-date">

                    ${escapeHTML(start)}

                    ${
                        start || end
                        ? " - "
                        : ""
                    }

                    ${escapeHTML(end)}

                </span>

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
   INTERNSHIPS
===================================================== */

function updateInternships() {

    const preview =
        document.getElementById(
            "previewInternships"
        );

    const items =
        document.querySelectorAll(
            "#internshipContainer .dynamic-item"
        );

    preview.innerHTML = "";


    if (items.length === 0) {

        preview.innerHTML = `

            <div class="resume-item">

                <div class="resume-item-top">

                    <div>

                        <strong>
                            Python Developer Intern
                        </strong>

                        <div class="resume-company">
                            ABC Technologies
                        </div>

                    </div>

                    <span class="resume-date">
                        3 Months
                    </span>

                </div>

                <p>
                    Developed Python applications
                    and worked with basic AI concepts.
                </p>

                <a class="resume-link"
                   href="#">

                    Verify Internship ↗

                </a>

            </div>
        `;

        return;
    }


    items.forEach(item => {

        const role =
            item.querySelector(
                ".intern-role"
            ).value.trim();

        const company =
            item.querySelector(
                ".intern-company"
            ).value.trim();

        const duration =
            item.querySelector(
                ".intern-duration"
            ).value.trim();

        const description =
            item.querySelector(
                ".intern-description"
            ).value.trim();

        const link =
            item.querySelector(
                ".intern-link"
            ).value.trim();


        if (!role && !company) return;


        const div =
            document.createElement("div");

        div.className =
            "resume-item";


        div.innerHTML = `

            <div class="resume-item-top">

                <div>

                    <strong>
                        ${escapeHTML(role)}
                    </strong>

                    <div class="resume-company">
                        ${escapeHTML(company)}
                    </div>

                </div>

                <span class="resume-date">
                    ${escapeHTML(duration)}
                </span>

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
                `
                <a
                    class="resume-link"
                    href="${escapeHTML(link)}"
                    target="_blank">

                    Verify Internship ↗

                </a>
                `
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

function updateCertificates() {

    const preview =
        document.getElementById(
            "previewCertificates"
        );

    const items =
        document.querySelectorAll(
            "#certificateContainer .dynamic-item"
        );

    preview.innerHTML = "";


    if (items.length === 0) {

        preview.innerHTML = `

            <div class="resume-item">

                <div class="resume-item-top">

                    <div>

                        <strong>
                            Python Basics
                        </strong>

                        <div class="resume-company">
                            IBM
                        </div>

                    </div>

                    <span class="resume-date">
                        2026
                    </span>

                </div>

                <a class="resume-link"
                   href="#">

                    Verify Certificate ↗

                </a>

            </div>
        `;

        return;
    }


    items.forEach(item => {

        const name =
            item.querySelector(
                ".cert-name"
            ).value.trim();

        const issuer =
            item.querySelector(
                ".cert-issuer"
            ).value.trim();

        const date =
            item.querySelector(
                ".cert-date"
            ).value.trim();

        const link =
            item.querySelector(
                ".cert-link"
            ).value.trim();


        if (!name && !issuer) return;


        const div =
            document.createElement("div");

        div.className =
            "resume-item";


        div.innerHTML = `

            <div class="resume-item-top">

                <div>

                    <strong>
                        ${escapeHTML(name)}
                    </strong>

                    <div class="resume-company">
                        ${escapeHTML(issuer)}
                    </div>

                </div>

                <span class="resume-date">
                    ${escapeHTML(date)}
                </span>

            </div>

            ${
                link
                ?
                `
                <a
                    class="resume-link"
                    href="${escapeHTML(link)}"
                    target="_blank">

                    Verify Certificate ↗

                </a>
                `
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

function updateProjects() {

    const preview =
        document.getElementById(
            "previewProjects"
        );

    const items =
        document.querySelectorAll(
            "#projectContainer .dynamic-item"
        );

    preview.innerHTML = "";


    if (items.length === 0) {

        preview.innerHTML = `

            <div class="resume-item">

                <div class="resume-item-top">

                    <strong>
                        Resume Builder
                    </strong>

                </div>

                <div class="resume-company">
                    HTML • CSS • JavaScript
                </div>

                <p>
                    A responsive resume builder
                    that allows users to create
                    professional resumes with
                    live preview.
                </p>

                <a class="resume-link"
                   href="#">

                    View Project ↗

                </a>

            </div>
        `;

        return;
    }


    items.forEach(item => {

        const name =
            item.querySelector(
                ".project-name"
            ).value.trim();

        const tech =
            item.querySelector(
                ".project-tech"
            ).value.trim();

        const description =
            item.querySelector(
                ".project-description"
            ).value.trim();

        const link =
            item.querySelector(
                ".project-link"
            ).value.trim();


        if (!name) return;


        const div =
            document.createElement("div");

        div.className =
            "resume-item";


        div.innerHTML = `

            <div class="resume-item-top">

                <strong>
                    ${escapeHTML(name)}
                </strong>

            </div>

            ${
                tech
                ?
                `
                <div class="resume-company">
                    ${escapeHTML(tech)}
                </div>
                `
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
                `
                <a
                    class="resume-link"
                    href="${escapeHTML(link)}"
                    target="_blank">

                    View Project ↗

                </a>
                `
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

function updateAchievements() {

    const preview =
        document.getElementById(
            "previewAchievements"
        );

    const items =
        document.querySelectorAll(
            "#achievementContainer .dynamic-item"
        );

    preview.innerHTML = "";


    if (items.length === 0) {

        preview.innerHTML = `

            <ul class="achievement-list">

                <li>
                    Academic Excellence Award
                </li>

                <li>
                    Hackathon Finalist
                </li>

            </ul>
        `;

        return;
    }


    const list =
        document.createElement("ul");

    list.className =
        "achievement-list";


    items.forEach(item => {

        const title =
            item.querySelector(
                ".achievement-title"
            ).value.trim();

        const year =
            item.querySelector(
                ".achievement-year"
            ).value.trim();

        const description =
            item.querySelector(
                ".achievement-description"
            ).value.trim();


        if (!title) return;


        const li =
            document.createElement("li");


        li.innerHTML = `

            <strong>
                ${escapeHTML(title)}
            </strong>

            ${
                year
                ?
                ` (${escapeHTML(year)})`
                :
                ""
            }

            ${
                description
                ?
                ` — ${escapeHTML(description)}`
                :
                ""
            }

        `;


        list.appendChild(li);
    });


    preview.appendChild(list);
}


/* =====================================================
   SKILLS
===================================================== */

function updateSkills() {

    const preview =
        document.getElementById(
            "previewSkills"
        );

    const skills =
        getValue("skills");


    preview.innerHTML = "";


    if (!skills) {

        preview.innerHTML = `

            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>Python</span>
            <span>SQL</span>

        `;

        return;
    }


    skills
        .split(",")
        .map(skill => skill.trim())
        .filter(skill => skill !== "")
        .forEach(skill => {

            const span =
                document.createElement("span");

            span.textContent =
                skill;

            preview.appendChild(span);

        });
}


/* =====================================================
   UPDATE EVERYTHING
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
   DOWNLOAD
===================================================== */

function downloadResume() {

    updateResume();

    window.print();
}


/* =====================================================
   CLEAR
===================================================== */

function clearResume() {

    const confirmClear =
        confirm(
            "Clear all entered information?"
        );

    if (!confirmClear) {
        return;
    }


    document
        .querySelectorAll("input, textarea")
        .forEach(element => {

            element.value = "";

        });


    const containers = [

        "educationContainer",
        "experienceContainer",
        "internshipContainer",
        "certificateContainer",
        "projectContainer",
        "achievementContainer"

    ];


    containers.forEach(id => {

        document.getElementById(id)
            .innerHTML = "";

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
   INITIAL LOAD
===================================================== */

updateResume();