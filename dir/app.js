// DOM Elements
const backToTopButton = document.getElementById("backToTop");
const navigation = document.querySelector("nav");
const rsvpButton = document.getElementById("rsvpButton");
const venueColumns = document.querySelectorAll(".col");
const detailsContainer = document.querySelector(".detailsContainer");
const venueDetailContainer = document.querySelector(".venueDetailContainer");
const venueInfoContainer = document.querySelector(".venueInfoContainer");
const userIDForm = document.querySelector("#userIDForm");
const accomdationContainers = document.querySelectorAll(
  ".accomodationContainer"
);
const timelineItems = document.querySelectorAll(".timelineItem");
const aboutUsContentContainer = document.querySelector(
  ".aboutUs .contentContainer"
);
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
//  Helper function for scrolling to element
const scrollToElement = (element, applyOffset = false) => {
  const offset = applyOffset === true ? navigation.clientHeight : 0;
  window.scrollTo({
    top: element.offsetTop - offset,
    left: 0,
    behavior: "smooth",
  });
};
// Scroll to section
const scrollToSection = (event) => {
  event.preventDefault();
  if (event.target.hash === "#aboutUs") {
    scrollToElement(aboutUsSection, true);
  } else if (event.target.hash === "#location") {
    scrollToElement(locationSection, true);
  } else if (event.target.hash === "#details") {
    scrollToElement(detailSection, true);
  } else if (event.target.hash === "#rsvp") {
    scrollToElement(rsvpSection, true);
  } else if (event.target.hash === "#accomodations") {
    scrollToElement(linkSection, true);
  } else {
    scrollToElement(headerSection);
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
  setTimeout(() => {
    timelineItems[0].classList.remove("hidden");
  }, 0);
  setTimeout(() => {
    timelineItems[1].classList.remove("hidden");
  }, 300);
  setTimeout(() => {
    timelineItems[2].classList.remove("hidden");
  }, 600);
  setTimeout(() => {
    timelineItems[3].classList.remove("hidden");
  }, 900);
  setTimeout(() => {
    timelineItems[4].classList.remove("hidden");
  }, 1200);
  setTimeout(() => {
    timelineItems[5].classList.remove("hidden");
  }, 1500);
};
// Animating the accomodations
const showAccomodations = () => {
  setTimeout(() => {
    accomdationContainers[0].classList.add("show");
  }, 0);
  setTimeout(() => {
    accomdationContainers[1].classList.add("show");
  }, 600);
};
//  Changing active nav on scroll
const changeActiveSection = (height) => {
  const navigationElements = navigation.children[0].children;

  if (
    height > 0 &&
    height < aboutUsSection.offsetTop - navigation.clientHeight
  ) {
    //  HEADER SECTION
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
// ----- NAMESPACE OBJECT -----
const weddingObj = {
  init: () => {
    // ----- Event Listeners -----
    // Navigation
    navigation.addEventListener("click", scrollToSection);
    // Header RSVP Button
    rsvpButton.addEventListener("click", () =>
      scrollToElement(rsvpSection, true)
    );
    // Scroll to Top Button
    backToTopButton.addEventListener("click", () =>
      scrollToElement(headerSection)
    );
    // Applying Scroll Effects
    document.addEventListener("scroll", (event) => {
      changeActiveSection(window.scrollY);
    });
    // Carousel
    nextSlide.addEventListener("click", () => changeSlide("forward"));
    prevSlide.addEventListener("click", () => changeSlide());
    //  RSVP Forms
    userIDForm.addEventListener("submit", (e) => {
      e.preventDefault();
      userIDForm.classList.add("none");
      setTimeout(() => {
        document
          .getElementById("userConfirmationForm")
          .classList.remove("hidden");
      }, 150);
    });

    // ----- UI Changes -----
    // Navigatioon - ensures the navigation is visble when page is refreshed
    // from a location other than the top of the page
    changeActiveSection(window.scrollY);
    // Header
    headerSection.children[1].classList.add("show");
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
