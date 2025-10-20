console.log("OUR TEAM");

const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png",
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png",
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png",
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png",
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png",
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png",
  },
];

//  acquizio oggetti dalla lista array
const container = document.getElementById("teamContainer");

// scorro array e recupro singolo membro
for (let i = 0; i < teamMembers.length; i++) {
  const member = teamMembers[i];

  //   creo un contenitore card dove inserisco il contenuto html
  const card = document.createElement("div");
  card.classList.add("teamCard");

  card.innerHTML = `
  <img src="${member.img}" alt="${member.name}">
  <div class='teamInfo'>
   <h3>${member.name.toUpperCase()}</h3>
   <p>${member.role}</p>
   <a href="mailto:${member.email}">${member.email}</a>
  </div>
  `;
  container.appendChild(card);
}
