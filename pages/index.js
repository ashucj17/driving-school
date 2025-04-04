


//   Swiper JS
var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    slidesPerView: 1,
    spaceBetween: 50,
    breakpoints:{
     599:{
           slidesPerView: 3,
     }
    }
  });


  //  Animate on scroll

  AOS.init();


// ============================ Package Toggle ============================


const packagesButtons = document.querySelectorAll('.packages__buttons button')
const packagesTableBody = document.querySelector('.packages tbody')

const removeActiveClassFromButtons = () =>{
    packagesButtons.forEach(button => {
        button.classList.remove('active')
    })
}

packagesButtons.forEach(button => {
    button.addEventListener('click', () => {
        removeActiveClassFromButtons()
        if(button.classList.contains('students')) {
            button.classList.add('active')
            packagesTableBody.innerHTML = `<tr>
          <td>Reular with standard licence</td>
          <td>6 weeks</td>
          <td>4,000</td>
        </tr>
        <tr>
          <td>Reular with premimum licence</td>
          <td>6 weeks</td>
          <td>4,900</td>
        </tr>
        <tr>
          <td>Express without licence</td>
          <td>4 weeks</td>
          <td>3,000</td>
        </tr>
        <tr>
          <td>Express with standard licence</td>
          <td>4 weeks</td>
          <td>5,500</td>
        </tr>
        <tr>
          <td>Express with preminum licence</td>
          <td>4 weeks</td>
          <td>7,000</td>
        </tr>`
        } else if(button.classList.contains('licence')) {
            button.classList.add('active')
            packagesTableBody.innerHTML = `<tr>
          <td>Reular with standard licence</td>
          <td>6 weeks</td>
          <td>4,000</td>
        </tr>
          <td>Express without licence</td>
          <td>4 weeks</td>
          <td>3,000</td>
        </tr>`
        } else if(button.classList.contains('non__students')) {
            button.classList.add('active')
            packagesTableBody.innerHTML = `<tr>
          <td>Reular with standard licence</td>
          <td>6 weeks</td>
          <td>4,000</td>
        </tr>
        <tr>
          <td>Reular with premimum licence</td>
          <td>6 weeks</td>
          <td>4,900</td>
        </tr>
        <tr>
          <td>Express without licence</td>
          <td>4 weeks</td>
          <td>3,000</td>
        </tr>`
        }
    })
})