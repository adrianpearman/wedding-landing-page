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
const userIDForm = document.querySelector("#userIDForm");
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
// ----- NAMESPACE OBJECT -----
const weddingObj = {
  init: () => {
    // ----- Event Listeners -----
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
