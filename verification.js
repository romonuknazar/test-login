const personalAccountUser = JSON.parse(localStorage.personalAccountUser)

fillPage()

verifBtn.onclick = moveToPage

function fillPage() {
  statusDiv.classList.add('focus')
  verifEmailFirst.innerText = personalAccountUser.email
  verifEmailSecond.innerText = personalAccountUser.email
}

function moveToPage() {
  statusDiv.classList.remove('focus')
  window.location.href = 'dashboard.html';
}
