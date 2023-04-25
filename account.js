const personalAccountUser = JSON.parse(localStorage.personalAccountUser)
const tabs = document.querySelectorAll('.tab')
const listItems = document.querySelectorAll('.notices-list-item')
const dataSentsSpan = document.querySelectorAll('.data-sent')

// do arrow !!!!!!!!!!!!!!!!!!!!!!!!?

fillPage()
sectionSelect.onchange = showTab


listItems.forEach((item) => {
  item.addEventListener('click', () => {
    const details = item.querySelector('.notices-list-item-details');
    details.hidden = !details.hidden;
    if (!details.hidden) {
      item.style.backgroundColor = '#F9F9F9'
      item.classList.add('item-active')
    }
    else{
      item.style.backgroundColor = 'inherit'
      item.classList.remove('item-active')
    }
  })
})

function fillPage() {
  initial.innerText = personalAccountUser.initial
  clientName.innerText = personalAccountUser.name
  submitdate.innerText = personalAccountUser.submitdate
  receiptId.innerText = personalAccountUser.receiptdate
 
  dataSentsSpan.forEach(dtspan => {
    dtspan.innerText = personalAccountUser.datesend
  })

  listItems.forEach(listItem => {
    if (personalAccountUser.rows == 5) {
      listItem.hidden = false
      rowsNumber.innerHTML = '(5 of 5)'
    }
  })
}

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
