
function renderFinal() {

  function aboutMeHandler() {
    $('#aboutMe').click(function(e) {
    e.preventDefault();
    $('main').html(`
      <p>
      "I am a web developer and recent graduate of the Full Stack Web
      Development Career Path bootcamp at Thinkful. I am based out of the
      Portland, Oregon area. I love my Jeep, my Camera, and my Netflix account.
      I am dedicated to continued learning and using my skills to further my
      career in Web Development. When I am not buried in my laptop coding,
      learning, or digitally restoring old family photos, I spend my time with
       my wonderful Dog & Cat."
       </p>
      `);
    });
  }

  function projectsHandler() {
    $('#projects').click(function(e) {
      e.preventDefault();
  //quizapp content shots need alt attributes for a11y
      $('main').html(`
        <h2>My Projects</h2>
        <h3>Quiz App</h3>
        <p>
        "This project is a simple radio button quiz, designed to manipulate the
         DOM to travel through the quiz, without form submission. In this project,
          I showcased my ability to create a interactive, responsive web page
           with simple design. I used JQuery, HTML, and CSS (all vanilla) to create this quiz."
        </p>
        <p><a href="https://definitelynotjonathan.github.io/QuizApp/">Live page
          </a>
          <br>
          <br>
          <a href="https://github.com/DefinitelyNotJonathan/QuizApp">Repo</a>
        </p>
        <p>
        Landing Page:
        <img class="quizShot" src="./landingPage.jpg">
        <br>
        <br>
        Questions Page:
        <img class="quizShot" src="./questionPage.jpg">
        <br>
        <br>
        Correct Answer Page:
        <img class="quizShot" src="./correctPage.jpg">
        <br>
        <br>
        Incorrect Answer Page:
        <img class="quizShot" src="./incorrectPage.jpg">
        <br>
        <br>
        Quiz Passed Page:
        <img class="quizShot" src="./passPage.jpg">
        <br>
        <br>
        Quiz Failed Page:
        <img class="quizShot" src="./failPage.jpg">
    `);
  });

  }

  function githubHandler() {
    $('#github').click(function(e) {
    e.preventDefault();
    $('main').html(`
      <p>
        <a href="https://github.com/DefinitelyNotJonathan">Check me out on Github!
        </a>
      </p>
      `);
    });
  }

  function linkedInHandler() {
    $('#linkedIn').click(function(e) {
    e.preventDefault();
    $('main').html(`
      <p>
        <a href="https://www.linkedin.com/in/jonathan-retchless-0b868718a/">
        Check me out on LinkedIn!
        </a>
      </p>
      `);
    });


  }

  function contactsHandler() {
    $('#contacts').click(function(e) {
    e.preventDefault();
    $('main').html(`
      <p>
        Phone: (360) 909-4974
      </p>
      <p>
        Email: Jonretchless@gmail.com
      </p>
      `);
    });

  }

  aboutMeHandler();
  projectsHandler();
  githubHandler();
  linkedInHandler();
  contactsHandler();

}

renderFinal();

//about me click removes main element content and adds bio

//projects click removes main element content and adds quiz app content

//Github click removes main element content and adds link to Github

//LinkedIn click removes main element content and adds link to LinkedIn

//Contact click removes main element content and adds contact information
