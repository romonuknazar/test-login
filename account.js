const personalAccountUser = JSON.parse(localStorage.personalAccountUser)
const tabs = document.querySelectorAll('.tab')
const tablis = document.querySelectorAll('.tabli')



fillPage()


function fillPage() {
  initial.innerText = personalAccountUser.initial
  clientName.innerText = personalAccountUser.name
  submitdate.innerText = personalAccountUser.submitdate
  receiptId.innerText = personalAccountUser.receiptdate
  // datesend.innerText = personalAccountUser.datesend
  // rows.innerText = personalAccountUser.rows

  datasend.innerText = personalAccountUser.datesend

  tablis.forEach(tabli => {
    if (personalAccountUser.rows == 5){
      tabli.hidden = false
    }
  })
}

sectionSelect.onchange = showTab

function showTab(e) {
 const selectOption = e.target.value
 console.log(selectOption)

tabs.forEach(tab => {
  if (tab.id === selectOption) {
          tab.hidden = false;
        } else {
          tab.hidden = true;
        }
})
}

// // получаем элементы выбора и вкладок
// const select = document.getElementById('section-select');
// const tabs = document.querySelectorAll('.tab');

// // при выборе опции в select отображаем соответствующую вкладку
// select.addEventListener('change', (event) => {
//   const selectedOption = event.target.value;
//   tabs.forEach(tab => {
//     if (tab.id === selectedOption.toLowerCase().replace(' ', '-')) {
//       tab.style.display = 'block';
//     } else {
//       tab.style.display = 'none';
//     }
//   });
// });