// BaseURL for network requests
const baseURL = "http://localhost:9000";
// DOM Elements
// Navigation
const navigation = document.querySelector("nav");
const mobileNavigation = document.querySelector(".mobileNavContainer");
const mobileNavHamburgerOpen = document.getElementById("hamburgerOpen");
const mobileNavHamburgerClose = document.getElementById("hamburgerClose");
// About Us
const aboutUsContentContainer = document.querySelector(
  ".aboutUs .contentContainer"
);
// Venue
const venueColumns = document.querySelectorAll(".col");
const venueDetailContainer = document.querySelector(".venueDetailContainer");
const venueInfoContainer = document.querySelector(".venueInfoContainer");
// Details
const detailsContainer = document.querySelector(".detailsContainer");
const timelineContainer = document.querySelector(".timelineContainer");
const timelineContainerMobile = document.querySelector(
  ".timelineContainerMobile"
);
// RSVP
const userIDForm = document.getElementById("userIDForm");
const invitationError = document.getElementById("invitationError");
// Links
const accomdationContainers = document.querySelectorAll(
  ".accomodationContainer"
);
// General
const rsvpButton = document.getElementById("rsvpButton");
const backToTopButton = document.getElementById("backToTop");
// Sections
const headerSection = document.querySelector("header");
const aboutUsSection = document.getElementById("aboutUs");
const locationSection = document.getElementById("location");
const detailSection = document.getElementById("details");
const rsvpSection = document.getElementById("rsvp");
const linkSection = document.getElementById("accomodations");
const footerSection = document.querySelector("footer");
const allSections = [
  headerSection,
  aboutUsSection,
  locationSection,
  rsvpSection,
  linkSection,
];
// Carousel Slide Items
const slides = document.querySelectorAll(".slide");
const nextSlide = document.querySelector(".btn-next");
const prevSlide = document.querySelector(".btn-prev");
// Variables
let curSlide = 0; // current slide counter
let maxSlide = slides.length - 1; // maximum number of slides

// loop through slides and set each slides translateX
slides.forEach((slide, indx) => {
  slide.style.transform = `translateX(${indx * 100}%)`;
});

// ----- FUNCTIONS -----
// ----- REUSEABLE FUNCTIONS -----
const filteredArr = (array) => {
  return array.filter((email, i) => {
    const t =
      i ===
      array.findIndex((element) => {
        return element === email;
      });
    return t;
  });
};
// ----- ANIMATIONS -----
//  Helper function for scrolling to element
const scrollToElement = (e, element, applyOffset = false) => {
  const offset = applyOffset === true ? navigation.clientHeight : 0;
  window.scrollTo({
    top: element.offsetTop - offset,
    left: 0,
    behavior: "smooth",
  });
  // closeMobileNavigation(e);
};
// Scroll to section
const scrollToSection = (e) => {
  e.preventDefault();
  if (e.target.hash === "#aboutUs") {
    scrollToElement(e, aboutUsSection, true);
  } else if (e.target.hash === "#location") {
    scrollToElement(e, locationSection, true);
  } else if (e.target.hash === "#details") {
    scrollToElement(e, detailSection, true);
  } else if (e.target.hash === "#rsvp" || e.target.id === "rsvpButton") {
    scrollToElement(e, rsvpSection, true);
  } else if (e.target.hash === "#accomodations") {
    scrollToElement(e, linkSection, true);
  } else if (e.target.hash === "#header" || e.target.id === "backToTop") {
    scrollToElement(e, headerSection);
  }
};
// Carousel funtion
const changeSlide = (direction) => {
  // check if current slide is the last and reset current slide
  if (direction === "forward") {
    if (curSlide === maxSlide) {
      curSlide = 0;
    } else {
      curSlide++;
    }
  } else {
    if (curSlide === 0) {
      curSlide = maxSlide;
    } else {
      curSlide--;
    }
  }
  //   move slide by 100%
  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
};
// Animate Mobile Navigation
const closeMobileNavigation = (e) => {
  e.preventDefault();
  // e.stopPropagation();
  mobileNavigation.classList.remove("show");
};
const showMobileNavigation = () => {
  mobileNavigation.classList.add("show");
};
// Animate About Us section
const showAboutUsSection = () => {
  aboutUsContentContainer.classList.remove("hidden");
};
// Animating the venue columns
const showVenueColumns = () => {
  setTimeout(() => {
    venueColumns[0].classList.remove("col-hidden");
  }, 0);
  setTimeout(() => {
    venueColumns[1].classList.remove("col-hidden");
  }, 600);
  setTimeout(() => {
    venueColumns[2].classList.remove("col-hidden");
  }, 1200);
  setTimeout(() => {
    venueDetailContainer.classList.remove("hideVenueDetails");
  }, 1800);
};
//Animating Details Section
const showDetails = () => {
  detailsContainer.classList.remove("hidden");
};
// Animating Details SVGs
const showDetailSVGs = () => {
  const timelineItems = timelineContainer.children;
  const mobileTimelineItems = timelineContainerMobile.children;
  setTimeout(() => {
    timelineItems[0].classList.remove("hidden");
    mobileTimelineItems[0].classList.remove("hidden");
  }, 0);
  setTimeout(() => {
    timelineItems[1].classList.remove("hidden");
    mobileTimelineItems[1].classList.remove("hidden");
  }, 300);
  setTimeout(() => {
    timelineItems[2].classList.remove("hidden");
    mobileTimelineItems[2].classList.remove("hidden");
  }, 600);
  setTimeout(() => {
    timelineItems[3].classList.remove("hidden");
    mobileTimelineItems[3].classList.remove("hidden");
  }, 900);
  setTimeout(() => {
    timelineItems[4].classList.remove("hidden");
    mobileTimelineItems[4].classList.remove("hidden");
  }, 1200);
  setTimeout(() => {
    timelineItems[5].classList.remove("hidden");
    mobileTimelineItems[5].classList.remove("hidden");
  }, 1500);
};
// Animating the accomodations
const showAccomodations = () => {
  setTimeout(() => {
    accomdationContainers[0].classList.remove("hidden");
  }, 0);
  setTimeout(() => {
    accomdationContainers[1].classList.remove("hidden");
  }, 600);
  setTimeout(() => {
    accomdationContainers[2].classList.remove("hidden");
  }, 1200);
};
//  Changing active nav on scroll
const changeActiveSection = (height) => {
  const navigationElements = navigation.children[0].children;

  if (
    height > 0 &&
    height < aboutUsSection.offsetTop - navigation.clientHeight
  ) {
    //  HEADER SECTION
    document.activeElement.blur();
    navigation.classList.remove("active");
    navigationElements[1].children[0].classList.remove("active");
    navigationElements[2].children[0].classList.remove("active");
    navigationElements[3].children[0].classList.remove("active");
    navigationElements[4].children[0].classList.remove("active");
    navigationElements[5].children[0].classList.remove("active");
    backToTopButton.classList.remove("show");
  } else if (
    height >= aboutUsSection.offsetTop - navigation.clientHeight &&
    height < locationSection.offsetTop - navigation.clientHeight
  ) {
    // ABOUT US SECTION
    document.activeElement.blur();
    navigation.classList.add("active");
    navigationElements[1].children[0].classList.add("active");
    navigationElements[2].children[0].classList.remove("active");
    navigationElements[3].children[0].classList.remove("active");
    navigationElements[4].children[0].classList.remove("active");
    navigationElements[5].children[0].classList.remove("active");
    backToTopButton.classList.add("show");
    showAboutUsSection();
  } else if (
    height >= locationSection.offsetTop - navigation.clientHeight &&
    height < detailSection.offsetTop - navigation.clientHeight
  ) {
    // VENUE SECTION
    document.activeElement.blur();
    navigation.classList.add("active");
    navigationElements[1].children[0].classList.remove("active");
    navigationElements[2].children[0].classList.add("active");
    navigationElements[3].children[0].classList.remove("active");
    navigationElements[4].children[0].classList.remove("active");
    navigationElements[5].children[0].classList.remove("active");
    showVenueColumns();
    backToTopButton.classList.add("show");
  } else if (
    height >= detailSection.offsetTop - navigation.clientHeight &&
    height < rsvpSection.offsetTop - navigation.clientHeight
  ) {
    // DETAILS SECTION
    document.activeElement.blur();
    navigation.classList.add("active");
    navigationElements[1].children[0].classList.remove("active");
    navigationElements[2].children[0].classList.remove("active");
    navigationElements[3].children[0].classList.add("active");
    navigationElements[4].children[0].classList.remove("active");
    navigationElements[5].children[0].classList.remove("active");
    showDetails();
    showDetailSVGs();
    backToTopButton.classList.add("show");
  } else if (
    height >= rsvpSection.offsetTop - navigation.clientHeight &&
    height < linkSection.offsetTop - navigation.clientHeight
  ) {
    // RSVP
    document.activeElement.blur();
    navigation.classList.add("active");
    navigationElements[1].children[0].classList.remove("active");
    navigationElements[2].children[0].classList.remove("active");
    navigationElements[3].children[0].classList.remove("active");
    navigationElements[4].children[0].classList.add("active");
    navigationElements[5].children[0].classList.remove("active");
    backToTopButton.classList.add("show");
  } else if (
    height >= linkSection.offsetTop - navigation.clientHeight &&
    height < footerSection.offsetTop - navigation.clientHeight
  ) {
    // ACCOMODATIONS SECTION
    document.activeElement.blur();
    navigation.classList.add("active");
    navigationElements[1].children[0].classList.remove("active");
    navigationElements[2].children[0].classList.remove("active");
    navigationElements[3].children[0].classList.remove("active");
    navigationElements[4].children[0].classList.remove("active");
    navigationElements[5].children[0].classList.add("active");
    showAccomodations();
    backToTopButton.classList.add("show");
  }
};
// ----- RSVP FORM FUNCTIONS -----
// Fetches groups from DB
const fetchGroup = async (groupID) => {
  const url = new URL(`${baseURL}/api/group`);
  url.search = new URLSearchParams({ id: groupID });

  try {
    const guestData = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    return await guestData.json();
  } catch (error) {
    console.log(error);
  }
};
// Updates values from DB
const updateGuest = async (data, id) => {
  const url = new URL(`${baseURL}/api/update`);

  const requestOptions = {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ data, id }),
  };

  try {
    const updatedGuest = await fetch(url, requestOptions);
    return await updatedGuest.json();
  } catch (error) {
    console.log(error);
  }
};
// Email function
const submitEmail = async (email) => {
  const url = new URL(`${baseURL}/api/email`);

  try {
    const sendEmailResponse = await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: email,
      }),
    });
    return await sendEmailResponse.json();
  } catch (error) {
    console.log(error);
  }
};
const userIDFormAction = async (e) => {
  // stopping the default form action
  e.preventDefault();
  // accessing the value typed in
  const invitationFormData = e.target[0].value;
  // not allowiung form to submit with an empty value
  if (invitationFormData === "") {
    invitationError.innerText = "Please enter a Invitation ID";
    invitationError.classList.remove("hidden");
    return;
  }
  // accessing db to grab the groups
  const groupData = await fetchGroup(invitationFormData);

  // if there's an error with the invitation id
  if (groupData.data === false) {
    invitationError.innerText = groupData.msg;
    invitationError.classList.remove("hidden");
  } else {
    // if there's no error with the invitation id
    // hide invitation form on the page
    userIDForm.classList.add("none");
    const userConfirmationForm = document.getElementById(
      "userConfirmationForm"
    );
    // show the individual guest form
    setTimeout(() => {
      const userConfirmationList = userConfirmationForm.children[0];
      // template to display values on the page
      const userTemplate = ({ id, name, email, response_going }) => {
        const selectedOption = () => {
          if (response_going === true || response_going === null) {
            return `
                  <option value="${true}" selected >
                    Attending
                  </option>
                  <option value="${false}">
                    Unable to attend
                  </option>
                `;
          } else {
            return `
                  <option value="${true}">
                    Attending
                  </option>
                  <option value="${false}" selected>
                    Unable to attend
                  </option>
                `;
          }
        };

        return `
             <li id="${id}">
                <div class="textContainer">
                  <label for="name-${id}">Name: </label>
                  <input
                    id="name-${id}"
                    type="text"
                    placeholder="please enter your name"
                    value="${name ? name : ""}"
                  />
                </div>

                <div class="emailContainer">
                  <label for="email-${id}">Email: </label>
                  <input
                    id="email-${id}"
                    type="email"
                    placeholder="please enter your email"
                    value="${email ? email : ""}"
                  />
                </div>
                <p class="errorMessage hidden" id="error-${id}">Please enter a valid email</p>
                <div class="selectContainer">
                  <select>
                    ${selectedOption()}
                  </select>
                  <div class="iconContainer">
                    <i class="fa-solid fa-caret-down"></i>
                  </div>
                </div>
                </li>
            `;
      };
      // generating the values to be put on the page
      groupData.data.forEach((guest) => {
        const guestElement = userTemplate(guest);
        userConfirmationList.insertAdjacentHTML("beforeend", guestElement);
      });
      // showing the new html on the page
      userConfirmationForm.classList.remove("hidden");
    }, 150);
  }
};
const userConfirmationFormAction = async (e) => {
  // stopping the default action of the form
  e.preventDefault();
  // accessing thr values from the page
  const guestDetails = userConfirmationForm.children[0].children;
  // empty array to capture the emails
  const guestEmails = [];
  // looping through the elements on the page to grab the data
  for (const g of guestDetails) {
    // Gathering information from  the guest
    const currentDate = new Date();
    const guestID = g.id;
    const guestName = g.children[0].children[1].value;
    const guestEmail = g.children[1].children[1].value;
    const guestResponse =
      g.children[3].children[0].value.toLowerCase() === "true";
    // Validating whether the email is empty and show casing an error msg
    if (guestEmail === "") {
      g.children[2].classList.remove("hidden");
    } else {
      g.children[2].classList.add("hidden");
    }
    // pushing emails to the list
    guestEmails.push(guestEmail);
    // Updated data obj to be sent to database
    const data = {
      name: guestName,
      email: guestEmail,
      response_going: guestResponse,
      response_date: currentDate.toUTCString(),
    };
    // Sending the data to the  db
    const guest = await updateGuest(data, guestID);
    // Error handling relating to the submitted data
    if (guest.success === false) {
      alert("OOOOOOOOP");
    }
  }
  // Filter out duplicates from guest email array
  const filteredEmailList = filteredArr(guestEmails);

  filteredEmailList.forEach((email) => {
    // TODO: figure out how to send an email (sendgrid or mailgun)
    submitEmail(email);
  });

  userConfirmationForm.classList.add("none");
  document.querySelector(".thankYouContainer").classList.remove("hidden");
};
// ----- NAMESPACE OBJECT -----
const weddingObj = {
  init: () => {
    // ----- Event Listeners -----
    // Applying Scroll Effects
    document.addEventListener("scroll", () => {
      changeActiveSection(window.scrollY);
    });
    // Navigation
    navigation.addEventListener("click", scrollToSection);
    // Mobile Navigation
    mobileNavHamburgerOpen.addEventListener("click", showMobileNavigation);
    mobileNavHamburgerClose.addEventListener("click", (e) =>
      closeMobileNavigation(e)
    );
    mobileNavigation.addEventListener("click", (e) => closeMobileNavigation(e));

    // Header RSVP Button
    rsvpButton.addEventListener("click", (e) => scrollToSection(e));
    // Scroll to Top Button
    backToTopButton.addEventListener("click", (e) => {
      scrollToSection(e);
    });
    // Carousel
    nextSlide.addEventListener("click", () => changeSlide("forward"));
    prevSlide.addEventListener("click", () => changeSlide());
    //  RSVP Forms
    userIDForm.addEventListener("submit", userIDFormAction);
    userConfirmationForm.addEventListener("submit", userConfirmationFormAction);

    // ----- UI Changes -----
    // Navigation - ensures the navigation is visble when page is refreshed
    // from a location other than the top of the page
    changeActiveSection(window.scrollY);
    // Header
    headerSection.children[0].classList.add("show");
  },
};

weddingObj.init();

// let observer = new IntersectionObserver(
//   (sections, observer) => {
//     const navigationElements = navigation.children[0].children;
//     sections.forEach((section) => {
//       if (section.isIntersecting) {
//         if (section.target.id === "aboutUs") {
//           navigationElements[1].children[0].classList.add("active");
//           navigationElements[2].children[0].classList.remove("active");
//           navigationElements[3].children[0].classList.remove("active");
//           navigationElements[4].children[0].classList.remove("active");
//         } else if (section.target.id === "location") {
//           navigationElements[1].children[0].classList.remove("active");
//           navigationElements[2].children[0].classList.add("active");
//           navigationElements[3].children[0].classList.remove("active");
//           navigationElements[4].children[0].classList.remove("active");
//         } else if (section.target.id === "rsvp") {
//           navigationElements[1].children[0].classList.remove("active");
//           navigationElements[2].children[0].classList.remove("active");
//           navigationElements[3].children[0].classList.add("active");
//           navigationElements[4].children[0].classList.remove("active");
//         } else if (section.target.id === "links") {
//           navigationElements[1].children[0].classList.remove("active");
//           navigationElements[2].children[0].classList.remove("active");
//           navigationElements[3].children[0].classList.remove("active");
//           navigationElements[4].children[0].classList.add("active");
//         } else {
//           navigationElements[1].children[0].classList.remove("active");
//           navigationElements[2].children[0].classList.remove("active");
//           navigationElements[3].children[0].classList.remove("active");
//           navigationElements[4].children[0].classList.remove("active");
//         }
//       }
//     });
//   },
//   {
//     threshold: [0.8],
//   }
// );

// allSections.forEach((section) => {
//   observer.observe(section);
// });
