/*navbar*/
let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
    document.body.classList.toggle('active');
}

window.onscroll = () => {
    if (window.innerWidth < 991) {
        menu.classList.remove('fa-times');
        navbar.classList.remove('active');
        document.body.classList.remove('active');
    }


    document.querySelectorAll('section').forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            document.querySelectorAll('.header .navbar a').forEach(links => {
                links.classList.remove('active');

                document.querySelector('.header .navbar a[href*=' + id + ']').classList.add('active');
            });
        };
    });
}


/*scroll top */
const up = document.getElementById('lower');


up.addEventListener('click', () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
})


/*team */
var swiper = new Swiper(".team-slider", {
  slidesPerView: 1,
  grabCursor: true,
  loop:true,
  spaceBetween: 10,
  breakpoints: {
    0: {
        slidesPerView: 1,
    },
    700: {
      slidesPerView: 2,
    },
    1050: {
      slidesPerView: 3,
    },    
  },
  autoplay:{
    delay: 2000,
    disableOnInteraction:false,
}
});

/*contact*/
function my() {
  const params = {
      from_name: document.getElementById("name").value,
      email_id: document.getElementById("email").value,
      number: document.getElementById("number").value,
      state_id: document.getElementById("state").value,
      message: document.getElementById("msg").value,
      reply_to: document.getElementById('email').value,
  };

  emailjs
      .send("service_bmis8qt", "template_nwrvibx", params)
      .then(function (res) {
        
         res.status;
         resetform();
      });
}

/*google sheet */
const scriptURL = 'https://script.google.com/macros/s/AKfycbxOpNYMQm7Eg_PGnRS_T2def-R7JGROyh14j4sdnLIxX0E673lYaQ4H_qDyyIpSUTH1/exec'
        const form = document.forms['google-sheets']
      
        form.addEventListener('submit', e => {
          e.preventDefault()
          fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response => alert(
              "Roger that! A hot and delicious, high quality, affordable quotation is on its way for you. THANK YOU!"))
            .catch(error => alert(
              "Roger that! A hot and delicious, high quality, affordable quotation is on its way for you. OOPs! something wrong in website server."))
        })

        function resetform(){
            document.getElementById('myform').reset();
        }