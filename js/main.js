document.addEventListener("DOMContentLoaded", () => {
    // Preloader
    const preloader = document.querySelector(".preloader")
    if (preloader) {
      window.addEventListener("load", () => {
        preloader.classList.add("hidden")
        setTimeout(() => {
          preloader.style.display = "none"
        }, 500)
      })
    }
  
    // Mobile Menu Toggle
    const menuToggle = document.querySelector(".menu-toggle")
    const mobileMenu = document.querySelector(".mobile-menu")
    const mobileMenuClose = document.querySelector(".mobile-menu-close")
    const mobileNavLinks = document.querySelectorAll(".mobile-nav-link")
  
    if (menuToggle && mobileMenu) {
      menuToggle.addEventListener("click", () => {
        mobileMenu.classList.add("show")
        document.body.style.overflow = "hidden"
      })
    }
  
    if (mobileMenuClose && mobileMenu) {
      mobileMenuClose.addEventListener("click", () => {
        mobileMenu.classList.remove("show")
        document.body.style.overflow = ""
      })
    }
  
    if (mobileNavLinks.length > 0 && mobileMenu) {
      mobileNavLinks.forEach((link) => {
        link.addEventListener("click", () => {
          mobileMenu.classList.remove("show")
          document.body.style.overflow = ""
        })
      })
    }
  
    // Search Overlay Toggle
    const searchToggle = document.querySelector(".search-toggle")
    const searchOverlay = document.querySelector(".search-overlay")
    const searchClose = document.querySelector(".search-close")
  
    if (searchToggle && searchOverlay) {
      searchToggle.addEventListener("click", () => {
        searchOverlay.classList.add("show")
        document.body.style.overflow = "hidden"
      })
    }
  
    if (searchClose && searchOverlay) {
      searchClose.addEventListener("click", () => {
        searchOverlay.classList.remove("show")
        document.body.style.overflow = ""
      })
    }
  
    // Hero Slider
    const heroSlides = document.querySelectorAll(".hero-slide")
    const heroDots = document.querySelectorAll(".hero-dot")
    let currentSlide = 0
    let heroInterval
  
    function showSlide(index) {
      heroSlides.forEach((slide) => slide.classList.remove("active"))
      heroDots.forEach((dot) => dot.classList.remove("active"))
  
      heroSlides[index].classList.add("active")
      heroDots[index].classList.add("active")
      currentSlide = index
    }
  
    function nextSlide() {
      currentSlide = (currentSlide + 1) % heroSlides.length
      showSlide(currentSlide)
    }
  
    if (heroSlides.length > 0) {
      // Initialize hero slider
      heroInterval = setInterval(nextSlide, 5000)
  
      // Hero slider controls
      heroDots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
          clearInterval(heroInterval)
          showSlide(index)
          heroInterval = setInterval(nextSlide, 5000)
        })
      })
    }
  
    // Region Map Points
    const mapPoints = document.querySelectorAll(".map-point")
    const regionCards = document.querySelectorAll(".region-card")
  
    if (mapPoints.length > 0 && regionCards.length > 0) {
      mapPoints.forEach((point) => {
        point.addEventListener("click", function () {
          const region = this.getAttribute("data-region")
  
          regionCards.forEach((card) => {
            card.classList.remove("active")
            if (card.getAttribute("data-region") === region) {
              card.classList.add("active")
            }
          })
        })
      })
    }
  
    // Dishes Slider Controls
    const dishSlider = document.querySelector(".dishes-slider")
    const dishCards = document.querySelectorAll(".dish-card")
    const dishDots = document.querySelectorAll(".dish-dot")
    const dishPrev = document.querySelector(".dish-arrow.prev")
    const dishNext = document.querySelector(".dish-arrow.next")
    let currentDish = 0
  
    function scrollToDish(index) {
      if (dishSlider && dishCards.length > 0) {
        const cardWidth = dishCards[0].offsetWidth
        const gap = 30 // Gap between cards in pixels
        const scrollPosition = index * (cardWidth + gap)
  
        dishSlider.scrollTo({
          left: scrollPosition,
          behavior: "smooth",
        })
  
        dishDots.forEach((dot, i) => {
          if (i === index) {
            dot.classList.add("active")
          } else {
            dot.classList.remove("active")
          }
        })
  
        currentDish = index
      }
    }
  
    if (dishDots.length > 0) {
      dishDots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
          scrollToDish(index)
        })
      })
    }
  
    if (dishPrev && dishCards.length > 0) {
      dishPrev.addEventListener("click", () => {
        if (currentDish > 0) {
          scrollToDish(currentDish - 1)
        }
      })
    }
  
    if (dishNext && dishCards.length > 0) {
      dishNext.addEventListener("click", () => {
        if (currentDish < dishCards.length - 1) {
          scrollToDish(currentDish + 1)
        }
      })
    }
  
    // Testimonial Slider
    const testimonialSlides = document.querySelectorAll(".testimonial-slide")
    const testimonialDots = document.querySelectorAll(".testimonial-dot")
    let currentTestimonial = 0
    let testimonialInterval
  
    function showTestimonial(index) {
      testimonialSlides.forEach((slide) => slide.classList.remove("active"))
      testimonialDots.forEach((dot) => dot.classList.remove("active"))
  
      testimonialSlides[index].classList.add("active")
      testimonialDots[index].classList.add("active")
  
      currentTestimonial = index
    }
  
    function nextTestimonial() {
      currentTestimonial = (currentTestimonial + 1) % testimonialSlides.length
      showTestimonial(currentTestimonial)
    }
  
    if (testimonialSlides.length > 0) {
      // Initialize testimonial slider
      testimonialInterval = setInterval(nextTestimonial, 5000)
  
      // Testimonial slider controls
      testimonialDots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
          clearInterval(testimonialInterval)
          showTestimonial(index)
          testimonialInterval = setInterval(nextTestimonial, 5000)
        })
      })
    }
  
    // Smooth Scroll for Navigation Links
    const navLinks = document.querySelectorAll(".nav-link, .mobile-nav-link, .scroll-down a")
  
    navLinks.forEach((link) => {
      link.addEventListener("click", function (e) {
        const targetId = this.getAttribute("href")
        if (targetId && targetId.startsWith("#") && targetId.length > 1) {
          e.preventDefault()
          const targetElement = document.querySelector(targetId)
          if (targetElement) {
            const headerHeight = document.querySelector(".header").offsetHeight
            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight
            window.scrollTo({
              top: targetPosition,
              behavior: "smooth",
            })
          }
        }
      })
    })
  
    // Back to Top Button
    const backToTopButton = document.getElementById("backToTop")
  
    if (backToTopButton) {
      window.addEventListener("scroll", () => {
        if (window.scrollY > 500) {
          backToTopButton.classList.add("show")
        } else {
          backToTopButton.classList.remove("show")
        }
      })
  
      backToTopButton.addEventListener("click", (e) => {
        e.preventDefault()
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      })
    }
  
    // Cookie Consent
    const cookieConsent = document.getElementById("cookieConsent")
    const acceptCookies = document.getElementById("acceptCookies")
    const rejectCookies = document.getElementById("rejectCookies")
  
    // Check if user has already made a choice
    if (cookieConsent && !localStorage.getItem("cookieConsent")) {
      // Show cookie consent if no choice has been made
      setTimeout(() => {
        cookieConsent.style.display = "block"
      }, 2000)
    }
  
    if (acceptCookies && cookieConsent) {
      acceptCookies.addEventListener("click", () => {
        localStorage.setItem("cookieConsent", "accepted")
        cookieConsent.style.display = "none"
      })
    }
  
    if (rejectCookies && cookieConsent) {
      rejectCookies.addEventListener("click", () => {
        localStorage.setItem("cookieConsent", "rejected")
        cookieConsent.style.display = "none"
      })
    }
  
    // Form Validation
    const forms = document.querySelectorAll("form")
  
    forms.forEach((form) => {
      form.addEventListener("submit", (e) => {
        if (!form.classList.contains("search-form")) {
          e.preventDefault()
  
          // Simple validation
          let isValid = true
          const formElements = form.elements
  
          for (let i = 0; i < formElements.length; i++) {
            if (formElements[i].hasAttribute("required") && !formElements[i].value) {
              formElements[i].classList.add("error")
              isValid = false
            } else {
              formElements[i].classList.remove("error")
            }
          }
  
          if (isValid) {
            // Simulate form submission
            const submitButton = form.querySelector('button[type="submit"]')
            if (submitButton) {
              const originalText = submitButton.textContent
              submitButton.disabled = true
              submitButton.textContent = "Gönderiliyor..."
  
              setTimeout(() => {
                form.reset()
                submitButton.disabled = false
                submitButton.textContent = originalText
  
                // Show success message
                const formSuccess = document.createElement("div")
                formSuccess.classList.add("form-success")
                formSuccess.innerHTML = '<i class="fas fa-check-circle"></i> Mesajınız başarıyla gönderildi.'
                form.appendChild(formSuccess)
  
                setTimeout(() => {
                  formSuccess.remove()
                }, 5000)
              }, 2000)
            }
          }
        }
      })
    })
  })
  
  document.addEventListener("DOMContentLoaded", () => {
    // Loader
    const loader = document.querySelector(".loader")
  
    if (loader) {
      setTimeout(() => {
        loader.classList.add("hidden")
      }, 2000)
    }
  
    // Custom Cursor
    const cursorDot = document.querySelector(".cursor-dot")
    const cursorOutline = document.querySelector(".cursor-outline")
  
    if (cursorDot && cursorOutline) {
      window.addEventListener("mousemove", (e) => {
        const posX = e.clientX
        const posY = e.clientY
  
        cursorDot.style.left = `${posX}px`
        cursorDot.style.top = `${posY}px`
  
        // Add a slight delay to the outline for a trailing effect
        setTimeout(() => {
          cursorOutline.style.left = `${posX}px`
          cursorOutline.style.top = `${posY}px`
        }, 50)
      })
  
      // Scale cursor on clickable elements
      const clickables = document.querySelectorAll("a, button, .gallery-item, .destination-card")
  
      clickables.forEach((element) => {
        element.addEventListener("mouseenter", () => {
          cursorOutline.style.transform = "translate(-50%, -50%) scale(1.5)"
          cursorOutline.style.opacity = "0.5"
        })
  
        element.addEventListener("mouseleave", () => {
          cursorOutline.style.transform = "translate(-50%, -50%) scale(1)"
          cursorOutline.style.opacity = "1"
        })
      })
  
      // Hide cursor when leaving window
      document.addEventListener("mouseleave", () => {
        cursorDot.style.opacity = "0"
        cursorOutline.style.opacity = "0"
      })
  
      document.addEventListener("mouseenter", () => {
        cursorDot.style.opacity = "1"
        cursorOutline.style.opacity = "1"
      })
    }
  
    // Navigation Scroll Effect
    const mainNav = document.querySelector(".main-nav")
  
    if (mainNav) {
      window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
          mainNav.classList.add("scrolled")
        } else {
          mainNav.classList.remove("scrolled")
        }
      })
    }
  
    // Mobile Menu Toggle
    const menuToggle = document.querySelector(".menu-toggle")
    const mobileMenu = document.querySelector(".mobile-menu")
    const mobileClose = document.querySelector(".mobile-close")
    const mobileLinks = document.querySelectorAll(".mobile-menu-link")
  
    if (menuToggle && mobileMenu) {
      menuToggle.addEventListener("click", () => {
        mobileMenu.classList.add("show")
        document.body.style.overflow = "hidden"
      })
    }
  
    if (mobileClose && mobileMenu) {
      mobileClose.addEventListener("click", () => {
        mobileMenu.classList.remove("show")
        document.body.style.overflow = ""
      })
    }
  
    if (mobileLinks.length > 0 && mobileMenu) {
      mobileLinks.forEach((link) => {
        link.addEventListener("click", () => {
          mobileMenu.classList.remove("show")
          document.body.style.overflow = ""
        })
      })
    }
  
    // Smooth Scroll for Navigation Links
    const navLinks = document.querySelectorAll(".nav-link, .mobile-menu-link")
  
    navLinks.forEach((link) => {
      link.addEventListener("click", function (e) {
        const targetId = this.getAttribute("href")
  
        if (targetId && targetId.startsWith("#") && targetId.length > 1) {
          e.preventDefault()
  
          const targetElement = document.querySelector(targetId)
  
          if (targetElement) {
            const headerHeight = mainNav.offsetHeight
            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight
  
            window.scrollTo({
              top: targetPosition,
              behavior: "smooth",
            })
          }
        }
      })
    })
  
    // Destinations Filter
    const filterButtons = document.querySelectorAll(".destinations-filter .filter-btn")
    const destinationCards = document.querySelectorAll(".destination-card")
  
    if (filterButtons.length > 0 && destinationCards.length > 0) {
      filterButtons.forEach((button) => {
        button.addEventListener("click", () => {
          // Remove active class from all buttons
          filterButtons.forEach((btn) => btn.classList.remove("active"))
  
          // Add active class to clicked button
          button.classList.add("active")
  
          // Get filter value
          const filterValue = button.getAttribute("data-filter")
  
          // Filter destinations
          destinationCards.forEach((card) => {
            if (filterValue === "all" || card.getAttribute("data-category") === filterValue) {
              card.style.display = "block"
            } else {
              card.style.display = "none"
            }
          })
        })
      })
    }
  
    // Experiences Slider
    const sliderTrack = document.querySelector(".slider-track")
    const sliderDots = document.querySelectorAll(".slider-dot")
    const sliderPrev = document.querySelector(".slider-arrow.prev")
    const sliderNext = document.querySelector(".slider-arrow.next")
    const slides = document.querySelectorAll(".experience-slide")
    let currentSlide = 0
  
    function updateSlider() {
      if (sliderTrack && slides.length > 0) {
        const slideWidth = slides[0].offsetWidth
        const slideMargin = Number.parseInt(window.getComputedStyle(slides[0]).marginRight)
        const slideOffset = slideWidth + slideMargin
  
        sliderTrack.style.transform = `translateX(-${currentSlide * slideOffset}px)`
  
        // Update dots
        sliderDots.forEach((dot, index) => {
          if (index === currentSlide) {
            dot.classList.add("active")
          } else {
            dot.classList.remove("active")
          }
        })
      }
    }
  
    if (sliderDots.length > 0) {
      sliderDots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
          currentSlide = index
          updateSlider()
        })
      })
    }
  
    if (sliderPrev) {
      sliderPrev.addEventListener("click", () => {
        if (currentSlide > 0) {
          currentSlide--
          updateSlider()
        }
      })
    }
  
    if (sliderNext) {
      sliderNext.addEventListener("click", () => {
        if (currentSlide < slides.length - 1) {
          currentSlide++
          updateSlider()
        }
      })
    }
  
    // Gallery Filter
    const galleryFilterButtons = document.querySelectorAll(".gallery-filter .filter-btn")
    const galleryItems = document.querySelectorAll(".gallery-item")
  
    if (galleryFilterButtons.length > 0 && galleryItems.length > 0) {
      galleryFilterButtons.forEach((button) => {
        button.addEventListener("click", () => {
          // Remove active class from all buttons
          galleryFilterButtons.forEach((btn) => btn.classList.remove("active"))
  
          // Add active class to clicked button
          button.classList.add("active")
  
          // Get filter value
          const filterValue = button.getAttribute("data-filter")
  
          // Filter gallery items
          galleryItems.forEach((item) => {
            if (filterValue === "all" || item.getAttribute("data-category") === filterValue) {
              item.style.display = "block"
            } else {
              item.style.display = "none"
            }
          })
        })
      })
    }
  
    // Lightbox
    const lightbox = document.getElementById("lightbox")
    const lightboxImage = document.querySelector(".lightbox-image")
    const lightboxClose = document.querySelector(".lightbox-close")
    const lightboxPrev = document.querySelector(".lightbox-arrow.prev")
    const lightboxNext = document.querySelector(".lightbox-arrow.next")
    const galleryZoomLinks = document.querySelectorAll(".gallery-zoom")
    let currentImageIndex = 0
    const galleryImages = []
  
    if (galleryZoomLinks.length > 0 && lightbox) {
      // Collect all gallery images
      galleryZoomLinks.forEach((link, index) => {
        galleryImages.push(link.getAttribute("href"))
  
        link.addEventListener("click", (e) => {
          e.preventDefault()
          currentImageIndex = index
          openLightbox(galleryImages[currentImageIndex])
        })
      })
  
      function openLightbox(imageSrc) {
        lightboxImage.src = imageSrc
        lightbox.classList.add("show")
        document.body.style.overflow = "hidden"
      }
  
      function closeLightbox() {
        lightbox.classList.remove("show")
        document.body.style.overflow = ""
      }
  
      if (lightboxClose) {
        lightboxClose.addEventListener("click", closeLightbox)
      }
  
      if (lightboxPrev) {
        lightboxPrev.addEventListener("click", () => {
          if (currentImageIndex > 0) {
            currentImageIndex--
          } else {
            currentImageIndex = galleryImages.length - 1
          }
          lightboxImage.src = galleryImages[currentImageIndex]
        })
      }
  
      if (lightboxNext) {
        lightboxNext.addEventListener("click", () => {
          if (currentImageIndex < galleryImages.length - 1) {
            currentImageIndex++
          } else {
            currentImageIndex = 0
          }
          lightboxImage.src = galleryImages[currentImageIndex]
        })
      }
  
      // Close lightbox on ESC key
      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && lightbox.classList.contains("show")) {
          closeLightbox()
        }
      })
    }
  
    // Video Modal
    const videoModal = document.getElementById("video-modal")
    const videoModalClose = document.querySelector("#video-modal .modal-close")
    const videoLinks = document.querySelectorAll('[data-modal="video"]')
    const videoIframe = document.querySelector(".video-container iframe")
  
    if (videoLinks.length > 0 && videoModal) {
      videoLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
          e.preventDefault()
  
          // Set video URL (in a real scenario, you would get this from data attribute)
          videoIframe.src = "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
  
          // Show modal
          videoModal.classList.add("show")
          document.body.style.overflow = "hidden"
        })
      })
  
      if (videoModalClose) {
        videoModalClose.addEventListener("click", () => {
          // Reset iframe src to stop video
          videoIframe.src = "about:blank"
  
          // Hide modal
          videoModal.classList.remove("show")
          document.body.style.overflow = ""
        })
      }
    }
  
    // Cookie Consent
    const cookieConsent = document.getElementById("cookieConsent")
    const acceptCookies = document.getElementById("acceptCookies")
    const rejectCookies = document.getElementById("rejectCookies")
  
    if (cookieConsent && !localStorage.getItem("cookieConsent")) {
      // Show cookie consent after 2 seconds
      setTimeout(() => {
        cookieConsent.style.display = "block"
      }, 2000)
    }
  
    if (acceptCookies) {
      acceptCookies.addEventListener("click", () => {
        localStorage.setItem("cookieConsent", "accepted")
        cookieConsent.style.display = "none"
      })
    }
  
    if (rejectCookies) {
      rejectCookies.addEventListener("click", () => {
        localStorage.setItem("cookieConsent", "rejected")
        cookieConsent.style.display = "none"
      })
    }
  
    // Scroll Animations
    const animateElements = document.querySelectorAll(".animate-on-scroll")
  
    function checkScroll() {
      const triggerBottom = window.innerHeight * 0.8
  
      animateElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top
  
        if (elementTop < triggerBottom) {
          element.classList.add("animated")
        }
      })
    }
  
    // Initial check
    checkScroll()
  
    // Check on scroll
    window.addEventListener("scroll", checkScroll)
  
    // Form Validation
    const contactForm = document.querySelector(".contact-form")
  
    if (contactForm) {
      contactForm.addEventListener("submit", (e) => {
        e.preventDefault()
  
        // Simple validation
        let isValid = true
        const formElements = contactForm.elements
  
        for (let i = 0; i < formElements.length; i++) {
          if (formElements[i].hasAttribute("required") && !formElements[i].value) {
            formElements[i].classList.add("error")
            isValid = false
          } else {
            formElements[i].classList.remove("error")
          }
        }
  
        if (isValid) {
          // Simulate form submission
          const submitButton = contactForm.querySelector('button[type="submit"]')
          submitButton.disabled = true
          submitButton.textContent = "Gönderiliyor..."
  
          setTimeout(() => {
            contactForm.reset()
            submitButton.disabled = false
            submitButton.textContent = "Gönder"
  
            // Show success message
            const successMessage = document.createElement("div")
            successMessage.classList.add("form-success")
            successMessage.innerHTML =
              '<i class="fas fa-check-circle"></i> Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız.'
            contactForm.appendChild(successMessage)
  
            setTimeout(() => {
              successMessage.remove()
            }, 5000)
          }, 2000)
        }
      })
    }
  
    // Parallax Effect
    const parallaxElements = document.querySelectorAll(".parallax")
  
    function updateParallax() {
      parallaxElements.forEach((element) => {
        const scrollPosition = window.pageYOffset
        const elementTop = element.offsetTop
        const elementHeight = element.offsetHeight
        const viewportHeight = window.innerHeight
  
        // Check if element is in viewport
        if (elementTop < scrollPosition + viewportHeight && elementTop + elementHeight > scrollPosition) {
          const distance = scrollPosition - elementTop
          const speed = element.getAttribute("data-speed") || 0.5
  
          element.style.transform = `translateY(${distance * speed}px)`
        }
      })
    }
  
    window.addEventListener("scroll", updateParallax)
    window.addEventListener("resize", updateParallax)
  
    // Initialize all sliders and animations
    updateSlider()
  })
  
  