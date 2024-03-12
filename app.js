const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controlls');
const allSections = document.querySelector('.main-content');

function pageTransitions() {
  const sectBtn = document.querySelectorAll('.control'); // Define sectBtn inside the function

  for (let i = 0; i < sectBtn.length; i++) {
    sectBtn[i].addEventListener('click', function () {
      let currentBtn = document.querySelectorAll('.active-btn');
      currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
      this.classList.add('active-btn');
    })
  }

  allSections.addEventListener('click', (e) =>{
    const id = e.target.dataset.id;
    if(id){
      sectBtns.forEach((btn) =>{
        btn.classList.remove('active')
      })
      e.target.classList.add('active')

      sections.forEach((section)=>{
        section.classList.remove('active')
      })

      const element = document.getElementById(id);
      element.classList.add('active')
    }
  })

  const themeBtn = document.querySelector('.theme-btn');
  themeBtn.addEventListener('click', () =>{
    let element = document.body;
    element.classList.toggle('light-mode')
  })
}



pageTransitions();


function downloadCV() {
  // Open a new window/tab with the download link
  window.open('resume.pdf', '_blank');
}