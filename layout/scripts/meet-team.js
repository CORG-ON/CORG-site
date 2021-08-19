// local members data
const members = [
    {
        id: 1,
        name: "Alex Xu",
        job: "Founder",
        img:
            "/images/demo/person.png",
        text:
            "",
    },
    {
        id: 2,
        name: "Marcus Lee",
        job: "Founder",
        img:
            "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
        text:
            "",
    },
    {
        id: 3,
        name: "Thomas Wang",
        job: "Chief Technology Officer",
        img:
            "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
        text:
            "",
    },
    {
        id: 4,
        name: "Sophia Sun",
        job: "Chief Operating Officer",
        img:
            "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
        text:
            "",
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