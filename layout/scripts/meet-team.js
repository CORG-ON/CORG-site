// local members data
const members = [
    {
        id: 1,
        name: "Alex Xu",
        job: "Founder",
        img:
            "/images/demo/person.png",
        text:
            "Alex and Marcus manage the overall resources and operations of a company, make major corporate decisions, and act as the main point of contact between the board of directors, employees, and the public.",
    },
    {
        id: 2,
        name: "Marcus Lee",
        job: "Founder",
        img:
            "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
        text:
            "Alex and Marcus manage the overall resources and operations of a company, make major corporate decisions, and act as the main point of contact between the board of directors, employees, and the public.",
    },
    {
        id: 3,
        name: "Thomas Wang",
        job: "Chief Technology Officer",
        img:
            "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
        text:
            "Thomas Wang is responsible for overseeing the technical infrastructure within the organization, leading a team of IT staff, managing the design and implementation of IT infrastructure, and eliminating security risks.",
    },
    {
        id: 4,
        name: "Sophia Sun",
        job: "Chief Operating Officer",
        img:
            "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
        text:
            "Sophia Sun is responsible for the administration of all programs and services and events provided by CORG. This includes the drafting and planning processes and execution process for these services and events, such as webinars, workshops, and Hackathons.",
    },
    {
        id: 5,
        name: "Sophia Sun",
        job: "Chief Human Resources Officer",
        img:
            "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
        text:
            "John Doe works internally to build team engagement as well as externally for onboarding new applicants. He/She are constantly brainstorming new ideas and procedures to enhance the CORG experience for all members!",
    },
    {
        id: 6,
        name: "Sophia Sun",
        job: "Chief Financial Officer",
        img:
            "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
        text:
            "Bobby Bob serves as one of the main growth leaders of CORG, by coordinating various sponsorship pitches, organizing fundraisers, handling donations and creating innovative ideas as one of the key growth-maker within the organization.",
    },
    {
        id: 7,
        name: "Sophia Sun",
        job: "Chief Marketing Officer",
        img:
            "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
        text:
            "Jane Doe oversees all CORG promotional events and activities throughout the term. He/She represents CORG in a positive light, manages the social media presence and devises effective marketing tactics to execute in an optimal manner for success.",
    },
];
// select items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

// set starting item
let cur = 0;

// load initial item
window.addEventListener("DOMContentLoaded", function () {
    // DOMContentLoader is the event when a page is first loaded
    showPerson(cur);
})

prevBtn.addEventListener('click', function () {
    cur--;
    if (cur < 0)
        cur = members.length - 1;
    showPerson(cur);
})

nextBtn.addEventListener('click', function () {
    cur++;
    if (cur > members.length - 1)
        cur = 0;
    showPerson(cur);
})

// show person based on item
function showPerson(val) {
    const item = members[val];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
    rd = item.id - 1;
}