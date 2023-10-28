function openInstagramPage() {
  var instagramURL = "https://www.instagram.com/kaannmetee";
  window.open(instagramURL, "_blank");
}
function openLinkedInPage() {
  var linkedInURL =
    "https://tr.linkedin.com/in/kaan-mete-p-58b352255?trk=people-guest_people_search-card";
  window.open(linkedInURL, "_blank");
}
function openGithubPage() {
  var githubURL = "https://github.com/kaanmetep";
  window.open(githubURL, "_blank");
}

document
  .getElementById("iletisimButton")
  .addEventListener("click", function () {
    window.location.href =
      "mailto:kaanpmete@gmail.com?subject=Konu&body=Merhaba, buraya mesajınızı yazın.";
  });
const links = document.querySelectorAll(".link");
links.forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    const targetElement = document.querySelector(
      event.target.getAttribute("href")
    );
    targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});
function buttonClicked() {
  window.alert("Mesajiniz gonderildi.");
}
