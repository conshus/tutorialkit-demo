let applicationId = "";
let sessionId = "";
let token = "";  
let session;
let audioToggle;
let videoToggle;

// ********** STEP 6 CODE GOES HERE **********
     

// ********** STEP 12 CODE GOES HERE **********


// Initialize a Vonage Session object
function initializeSession() {
// ********** STEP 3 CODE GOES HERE **********


// Set session and token (and optionally properties) for Web Components
// ********** STEP 7 CODE GOES HERE **********
   
  
// ********** STEP 9 CODE GOES HERE **********

   
// ********** STEP 13 CODE GOES HERE **********



}


function getCredentials() {
  // Get credentials from backend server
  fetch(window.location.href + 'session')
  .then((response) => response.json())
  .then((json) => {
  // ********** STEP 2 CODE GOES HERE **********

  
    initializeSession();
  })
  .catch((error) => {
    // handleError(error);
    console.log("error: ", error);
    alert(
      'Failed to get Vonage Video sessionId and token. Make sure you have updated the config.js file.'
    );
  });
}

getCredentials();