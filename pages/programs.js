const programsMenu = document.querySelectorAll('.program')
const programDetail = document.querySelector('.programDetail')


const removeActiveClass= () =>{
    programsMenu.forEach(button =>{
        button.classList.remove('active')
    })
}

programsMenu.forEach(program     => {
    program.addEventListener('click', () =>{
        removeActiveClass()
        if(program.classList.contains('express')){
            program.classList.add('active')
            programDetail.innerHTML = `<div class="container programDetail__container">
    <div class="programDetail__left">
      <h2>Express Course</h2>
      <p>
        This training is for you if you have never operated a vehicle. After 26 days, you will be familiar with the fundamentals of traffic laws and have gained practical driving experience through simulations and on-road driving. Additionally, you will feel secure enough to take the RTO driving test in order to earn a permanent driving licence.
      </p>
      <div class="programDetail__images">
        <div><img src="../images/detail1.jpg" alt="Tranie image"></div>
        <div><img src="../images/detail8.jpg" alt="Graduate student"></div>
      </div>
      <h4>Maximise Your Driving Course Experience</h4>
      <p>services with added value that are tailored to you.</p>
      <article>
        <h5>Assistance on own car</h5>
        <p>Participate in three-hour practical lessons in your own vehicle to improve your learning.</p>
      </article>
      <article>
        <h5>License Assistance</h5>
        <p>Receive car assistance and a pick-up and drop-off service for the license test at RTO.</p>
      </article>
      <article>
        <h5>Training on Upgraded Car Models</h5>
        <p>Learn to drive the newer models, such as the Vitara Brezza, Ertiga, Corola, Etos, Dzire, and Swift.</p>
      </article>
      <a href="../pages/contact.html" class="btn primary">Get Started Now</a>
    </div>

    <div class="programDetail__right">
      <article>
        <h4>Standard Course without license</h4>
        <div>
          <h2>&#x20B9 3000 </h2>
          <p>For Non student</p>
        </div>
        <div>
          <h2>&#x20B9 2500 </h2>
          <p>For student</p>
        </div>
      </article>
      <article>
        <h4>Standard Course with license</h4>
        <div>
          <h2>&#x20B9 3500 </h2>
          <p>For Non student</p>
        </div>
        <div>
          <h2>&#x20B9 3000</h2>
          <p>For student</p>
        </div>
        <p>License will be issuesd by the respective RTO of the city</p>
      </article>
    </div>
  </div>`
        } else if(program.classList.contains('extended')){
            program.classList.add('active')
            programDetail.innerHTML =`<div class="container programDetail__container">
    <div class="programDetail__left">
      <h2>Extended Course</h2>
      <p>
        This course is intended for those who have never used a motor vehicle. After 26 days, you will be familiar with the fundamentals of traffic laws and able to drive on the road and in simulators. You'll also feel more confident when you take the RTO driving test to get a permanent licence.
      </p>
      <div class="programDetail__images">
        <div><img src="../images/detail2.jpeg" alt="Tranie image"></div>
        <div><img src="../images/detail9.jpg" alt="Graduate student"></div>
      </div>
      <h4>Maximise Your Driving Course Experience</h4>
      <p>services with added value that are tailored to you.</p>
      <article>
        <h5>Assistance on own car</h5>
        <p>Participate in three-hour practical lessons in your own vehicle to improve your learning.</p>
      </article>
      <article>
        <h5>License Assistance</h5>
        <p>Receive car assistance and a pick-up and drop-off service for the license test at RTO.</p>
      </article>
      <article>
        <h5>Training on Upgraded Car Models</h5>
        <p>Learn to drive the newer models, such as the Vitara Brezza, Ertiga, Corola, Etos, Dzire, and Swift.</p>
      </article>
      <a href="../pages/contact.html" class="btn primary">Get Started Now</a>
    </div>

    <div class="programDetail__right">
      <article>
        <h4>Standard Course without license</h4>
        <div>
          <h2>&#x20B9 4000 </h2>
          <p>For Non student</p>
        </div>
        <div>
          <h2>&#x20B9 3000 </h2>
          <p>For student</p>
        </div>
      </article>
      <article>
        <h4>Standard Course with license</h4>
        <div>
          <h2>&#x20B9 4500 </h2>
          <p>For Non student</p>
        </div>
        <div>
          <h2>&#x20B9 4000</h2>
          <p>For student</p>
        </div>
        <p>License will be issuesd by the respective RTO of the city</p>
      </article>
    </div>
  </div>`
        } else if (program.classList.contains('detailed')){
            program.classList.add('active')
            programDetail.innerHTML = `<div class="container programDetail__container">
    <div class="programDetail__left">
      <h2>Detailed Course</h2>
      <p>
        This course is intended for those who have never used a motor vehicle. After 26 days, you will be familiar with the fundamentals of traffic laws and able to drive on the road and in simulators. You'll also feel more confident when you take the RTO driving test to get a permanent licence.
      </p>
      <div class="programDetail__images">
        <div><img src="../images/detail3.jpeg" alt="Tranie image"></div>
        <div><img src="../images/detail10.jpg" alt="Graduate student"></div>
      </div>
      <h4>Maximise Your Driving Course Experience</h4>
      <p>services with added value that are tailored to you.</p>
      <article>
        <h5>Assistance on own car</h5>
        <p>Participate in three-hour practical lessons in your own vehicle to improve your learning.</p>
      </article>
      <article>
        <h5>License Assistance</h5>
        <p>Receive car assistance and a pick-up and drop-off service for the license test at RTO.</p>
      </article>
      <article>
        <h5>Training on Upgraded Car Models</h5>
        <p>Learn to drive the newer models, such as the Vitara Brezza, Ertiga, Corola, Etos, Dzire, and Swift.</p>
      </article>
      <a href="../pages/contact.html" class="btn primary">Get Started Now</a>
    </div>

    <div class="programDetail__right">
      <article>
        <h4>Standard Course without license</h4>
        <div>
          <h2>&#x20B9 5000 </h2>
          <p>For Non student</p>
        </div>
        <div>
          <h2>&#x20B9 4000 </h2>
          <p>For student</p>
        </div>
      </article>
      <article>
        <h4>Standard Course with license</h4>
        <div>
          <h2>&#x20B9 5500 </h2>
          <p>For Non student</p>
        </div>
        <div>
          <h2>&#x20B9 4500</h2>
          <p>For student</p>
        </div>
        <p>License will be issuesd by the respective RTO of the city</p>
      </article>
    </div>
  </div>`
        }  else if (program.classList.contains('corporate')){
            program.classList.add('active')
            programDetail.innerHTML = `<div class="container programDetail__container">
    <div class="programDetail__left">
      <h2>Corporate Course</h2>
      <p>
        Business Course Are you looking to hire a driver? Or Are you trying to improve your executives' skills? Make sure they enrol in this course. By the end of it, you will be able to assess the driver's skill on 25 different criteria, including the driver's ability to control a vehicle, follow traffic laws, and follow safety regulations, among others. Changing the CEOs' mindset and road culture is given particular attention.
      </p>
      <div class="programDetail__images">
        <div><img src="../images/detail4.png" alt="Tranie image"></div>
        <div><img src="../images/detail11.jpg" alt="Graduate student"></div>
      </div>
      <h4>Maximise Your Driving Course Experience</h4>
      <p>services with added value that are tailored to you.</p>
      <article>
        <h5>Assistance on own car</h5>
        <p>Participate in three-hour practical lessons in your own vehicle to improve your learning.</p>
      </article>
      <article>
        <h5>License Assistance</h5>
        <p>Receive car assistance and a pick-up and drop-off service for the license test at RTO.</p>
      </article>
      <article>
        <h5>Training on Upgraded Car Models</h5>
        <p>Learn to drive the newer models, such as the Vitara Brezza, Ertiga, Corola, Etos, Dzire, and Swift.</p>
      </article>
      <a href="../pages/contact.html" class="btn primary">Get Started Now</a>
    </div>

    <div class="programDetail__right">
      <article>
        <h4>Standard Course without license</h4>
        <div>
          <h2>&#x20B9 7000 </h2>
          <p>For Non student</p>
        </div>
        <div>
          <h2>&#x20B9 5500 </h2>
          <p>For student</p>
        </div>
      </article>
      <article>
        <h4>Standard Course with license</h4>
        <div>
          <h2>&#x20B9 8000 </h2>
          <p>For Non student</p>
        </div>
        <div>
          <h2>&#x20B9 6000</h2>
          <p>For student</p>
        </div>
        <p>License will be issuesd by the respective RTO of the city</p>
      </article>
    </div>
  </div>`
        } else if (program.classList.contains('standard')){
            program.classList.add('active')
            programDetail.innerHTML = ` <div class="container programDetail__container">
    <div class="programDetail__left">
      <h2>Standard Course</h2>
      <p>
        This training is for you if you have never operated a vehicle. After 21 days, you will be familiar with the fundamentals of traffic laws and have gained practical driving experience through simulations and on-road driving. Additionally, you will feel secure enough to take the RTO driving test in order to earn a permanent driving licence.
      </p>
      <div class="programDetail__images">
        <div><img src="../images/detail6.png" alt="Tranie image"></div>
        <div><img src="../images/detail7.jpg" alt="Graduate student"></div>
      </div>
      <h4>Maximise Your Driving Course Experience</h4>
      <p>services with added value that are tailored to you.</p>
      <article>
        <h5>Assistance on own car</h5>
        <p>Participate in three-hour practical lessons in your own vehicle to improve your learning.</p>
      </article>
      <article>
        <h5>License Assistance</h5>
        <p>Receive car assistance and a pick-up and drop-off service for the license test at RTO.</p>
      </article>
      <article>
        <h5>Training on Upgraded Car Models</h5>
        <p>Learn to drive the newer models, such as the Vitara Brezza, Ertiga, Corola, Etos, Dzire, and Swift.</p>
      </article>
      <a href="../pages/contact.html" class="btn primary">Get Started Now</a>
    </div>

    <div class="programDetail__right">
      <article>
        <h4>Standard Course without license</h4>
        <div>
          <h2>&#x20B9 3000 </h2>
          <p>For Non student</p>
        </div>
        <div>
          <h2>&#x20B9 2500 </h2>
          <p>For student</p>
        </div>
      </article>
      <article>
        <h4>Standard Course with license</h4>
        <div>
          <h2>&#x20B9 4000 </h2>
          <p>For Non student</p>
        </div>
        <div>
          <h2>&#x20B9 5000</h2>
          <p>For student</p>
        </div>
        <p>License will be issuesd by the respective RTO of the city</p>
      </article>
    </div>
  </div>`
        }
    })
})