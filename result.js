//Extract the url parameter from query string
var getUrlParameter = function getUrlParameter(sParam) {
  var sPageURL = window.location.search.substring(1),
    sURLVariables = sPageURL.split('&'),
    sParameterName,
    i;

  for (i = 0; i < sURLVariables.length; i++) {
    sParameterName = sURLVariables[i].split('=');

    if (sParameterName[0] === sParam) {
      return sParameterName[1] === undefined
        ? true
        : decodeURIComponent(sParameterName[1]);
    }
  }
};
var email = getUrlParameter('email');

// Define our button click listener
$(document).ready(function () {
  $('#loading').show(); //show loading image
  $('.displayDetails').hide();
  $('.findRightPerson').addClass(
    'd-none d-md-block d-lg-none d-xl-none marginTop'
  );

  const output = async () => {
    let result;

    try {
      result = await $.ajax({
        url: `https://cors-anywhere.herokuapp.com/https://ltv-data-api.herokuapp.com/api/v1/records.json?email=${email}`,
        type: 'GET',
      });
      $('#loading').hide();

      let temp;
      if (!Array.isArray(result)) {
        const {
          email,
          first_name,
          last_name,
          address,
          description,
          phone_numbers,
          relatives,
        } = result;
        temp = `

      <div class="pl-3 pt-1 d-flex flex-column">
       <h2>${first_name} ${last_name}, 35</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        </p>
      </div>
      <div class="d-flex flex-column flex-md-row">

    
        <div class="d-flex flex-column col-md-6">
            <!------>
          <div class="d-flex">
            
          
            <div class="col-md-8">
              <h5>
                Address
              </h5>
              <p>
              ${address}
              </p>
            </div>
  
          </div>
          <!------>
          <div class="d-flex">
            
            <div class="col-md-8">
              <h5>
              Email
              </h5>
              <p>
              ${email}
              </p>
            </div>
  
          </div>
  
            <!------>
            
            <!------>
        </div>
        <div class="d-flex flex-column col-md-6">
          <div class="d-flex">
            
            <div class="col-md-8">
              <h5>
                Phone Numbers
              </h5>
              ${
                phone_numbers.length > 0
                  ? phone_numbers
                      .map(
                        (phone) => `<div style="color: #004A80;">${phone}</div>`
                      )
                      .join('')
                  : `<div></div>`
              }
            </div>
            
          </div>
          <!---------->
          <div class="d-flex">
            
          
            <div class="col-md-8 mt-2 mb-2">
              <h5>
              Relatives
              </h5>
              ${
                relatives.length > 0
                  ? relatives
                      .map((relative) => `<div>${relative}</div>`)
                      .join('')
                  : `<div></div>`
              }
             
              
              
            </div>
  
          </div>
          <!---------->
        
        </div>
      
      </div>`;

        //Populate the result found section
        $('#result_found').html(temp);
      } else {
        //Hide the result section
        $('#test_result').hide();
        temp = `<h1>0 Results</h1>
          <p>Try starting a new search below</p>`;
        //Populate the result found section
        $('#result_zero').html(temp);
      }
      $('#loading').hide();

      $('.findRightPerson').removeClass(
        'd-none d-md-block d-lg-none d-xl-none marginTop'
      );

      $('.findRightPerson').addClass('d-none d-md-block d-lg-block d-xl-block');
      $('.displayDetails').show();

      return result;
    } catch (error) {
      console.error(error);
    }
  };
  output();
});
