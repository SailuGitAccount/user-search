$(document).ready(function () {
  //Header Template
  var header = `<div class="col-12">
  <nav class="navbar navbar-expand">
    <a href="#" class="pl-md-5 navbar-brand"
      ><img src="./assets/PNGs/Logo@2x.png" alt="search icon"
    /></a>
   
    <ul class="navbar-nav ml-auto pr-md-5">
      <li class="nav-item ml-2">
        <a href="index.html" class="nav-link"
          ><img
            width="23px"
            height="23px"
            src="./assets/PNGs/icn_search@2x.png"
            alt="search icon"
        /></a>
      </li>
      <li class="nav-item pl-2 pr-md-3">
        <a href="#" class="nav-link"
          ><img
            width="23px"
            height="23px"
            src="./assets/PNGs/icn_person@2x.png"
            alt="person icon"
        /></a>
      </li>
    </ul>
   
  </nav>
</div>
`;
  $('.header').html(header);

  //Footer Template
  var footer = `<div class="row pt-3 pb-3 pl-3 pr-1">
  <div class="col-md-8 text-left pl-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  </div>  
  <div class="col-md-4 d-flex justify-content-center justify-content-md-end justify-content-lg-center mt-3 mt-md-0">
    <ul class="nav pr-md-5 pr-lg-0">
      <li class="nav-item align-self-sm-center">
        <a href="#">Terms</a>
      </li>
      <li class="nav-item align-self-sm-center">
        <a href="#">Privacy</a>
      </li>
    </ul>
  </div>
</div>`;
  $('.footer').html(footer);

  $('#submitBtn').click(function () {
    var inputValue = $('#emailSearch').val();

    if (emailValidate(inputValue) === true) {
      var url = 'result.html?email=' + encodeURIComponent(inputValue);
      location.href = url;
    } else {
      $('#emailSearch').css('border', '2px solid #DC0015');
      $('#errorText').css('display', 'inline-block');
    }
  });
});

function emailValidate(emailText) {
  let pattern = /^[a-zA-Z0-9\-_]+(\.[a-zA-Z0-9\-_]+)*@[a-z0-9]+(\-[a-z0-9]+)*(\.[a-z0-9]+(\-[a-z0-9]+)*)*\.[a-z]{2,4}$/;
  return pattern.test(emailText) ? true : false;
}
