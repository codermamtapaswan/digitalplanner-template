document.addEventListener("DOMContentLoaded", function () {


    // Black and light mode code ============ start =====>
    const toggleBtn = document.querySelector(".toggleBtn");
    const header = document.querySelector("header");
    const svgElements = document.querySelectorAll("svg");

    function toggleDarkMode() {
        document.body.classList.toggle("light-mode");
        const isDarkMode = document.body.classList.contains("light-mode");
        if (isDarkMode) {
            document.documentElement.style.setProperty("--primary-color", "#fff");
            document.documentElement.style.setProperty("--secondry-color", "#fff");
            document.documentElement.style.setProperty("--white", "#000");
            header.style.backgroundColor = "#fff";
        } else {
            document.documentElement.style.setProperty("--primary-color", "#002737");
            document.documentElement.style.setProperty("--secondry-color", "#00212e");
            document.documentElement.style.setProperty("--white", "#fff");
            header.style.backgroundColor = "";
            document.body.style.backgroundColor = "";
        }
    }
    toggleBtn.addEventListener("click", toggleDarkMode);




    // sticky header on scroll ============ start =====>
    const headers = document.querySelector("header");
    function handleScroll() {
        if (window.scrollY > 0) {
            headers.classList.add("sticky-header");
        } else {
            headers.classList.remove("sticky-header");
        }
    }

    window.addEventListener("scroll", handleScroll);




    // mobile menu code ============ start =====>
    let searchIcon = document.querySelector(".search-icon");
    let searchForm = document.querySelector(".search-form");
    let svg1 =
        '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M7.333 12.667A5.333 5.333 0 1 0 7.333 2a5.333 5.333 0 0 0 0 10.667ZM14 14l-2.9-2.9" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>';
    let svg2 =
        '<svg fill="#fff" xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>';
    let isSvg1 = true;
    searchIcon.addEventListener("click", function () {
        searchIcon.innerHTML = isSvg1 ? svg2 : svg1;
        isSvg1 = !isSvg1;

        searchForm.classList.toggle("search-bar-show");
    });

    function toggleButtons() {
        const toggleBtn = document.querySelector(".toggle-slide-btn");
        const cancelBtn = document.querySelector(".cancel-btn");
        const headerUl = document.querySelector("header ul");

        headerUl.classList.toggle("show-ul");
        toggleBtn.style.display = toggleBtn.style.display === "none" ? "block" : "none";
        cancelBtn.style.display = cancelBtn.style.display === "block" ? "none" : "block";
    }

    const toggleBtnheader = document.querySelector(".toggle-slide-btn");
    toggleBtnheader.addEventListener("click", toggleButtons);

    const cancelBtn = document.querySelector(".cancel-btn");
    cancelBtn.addEventListener("click", toggleButtons);



    // mobile Dropdown  ============ start =====>
    const dropdowns = document.querySelectorAll(".dropdown");
    function toggleDropdown(e) {
       e.preventDefault();
       e.stopPropagation();
 
       const li = e.target.parentNode;
 
       dropdowns.forEach((dropdown) => {
          if (dropdown !== li && !dropdown.contains(li)) {
             dropdown.classList.remove("showMenu");
          }
       });
 
       li.classList.toggle("showMenu");
    }
 
    dropdowns.forEach((dropdown) => {
       dropdown.addEventListener("click", toggleDropdown);
    });
 
    // // Add a click event listener to the document to close dropdowns when clicking outside
    document.addEventListener("click", (e) => {
       const isMenuActive = menuNav.classList.contains("show_menu");
       const targetElement = toggleBtn.querySelector(e.target.tagName);
 
 
       if (
          ![...dropdowns].some((dropdown) => dropdown.contains(e.target)) &&
          !targetElement
       ) {
          dropdowns.forEach((dropdown) => {
             dropdown.classList.remove("showMenu");
          });
 
 
          menuNav.classList.remove("show_menu");
          if (isMenuActive) {
             toggleBtn.innerHTML = isMenuActive ? svg.bar1 : svg.cross;
          }
 
       }
    });
    // var dropdowns = document.querySelectorAll("header ul li");
    // function toggleDropdown(e) {
    //     var dropdownParent = e.currentTarget;
    //     dropdowns.forEach(function (dropdown) {
    //         if (dropdown !== dropdownParent) {
    //             dropdown.classList.remove("showMenu");
    //         }
    //     });
    //     dropdownParent.classList.toggle("showMenu");
    // }
    // dropdowns.forEach(function (dropdown) {
    //     dropdown.addEventListener("click", toggleDropdown);
    // });



    // Scroll to top   ============ start =====>
    let mybutton = document.getElementById("myBtn");
    window.onscroll = function () {
        scrollFunction();
    };

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
    }
    function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    mybutton.addEventListener("click", topFunction);




    // Table Of Content   ============ start =====>
    const tableHeader = document.querySelector(".toc-header");
    const tableCrossBtn = document.querySelector(".arrow");
    const tableOfcontentBody = document.querySelector(".tableofcontent .toc-body");
    // Function to check if it's a mobile device
    function isMobileDevice() {
        return window.innerWidth <= 768; // Adjust the width as needed
    }
    // Function to hide table of content on mobile devices
    function hideTableOfContentOnMobile() {
        if (isMobileDevice()) {
            tableOfcontentBody.classList.add("hidden");
        }
    }
    // Initial check to hide on page load if it's a mobile device
    hideTableOfContentOnMobile();
    tableHeader.addEventListener("click", function () {
        if (tableOfcontentBody.classList.contains("hidden")) {
            tableOfcontentBody.classList.remove("hidden");
            tableCrossBtn.style.transform = "rotate(0deg)";
        } else {
            tableOfcontentBody.classList.add("hidden");
            tableCrossBtn.style.transform = "rotate(270deg)";
        }
    });
    // Check on window resize to adjust visibility
    window.addEventListener("resize", hideTableOfContentOnMobile);

    const tableOfContentItems = document.querySelectorAll(".tableofcontent ul li a");
    tableOfContentItems.forEach((link) => {
        link.addEventListener("click", scrollToSection);
    });

    function scrollToSection(event) {
        event.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            const offset = targetElement.offsetTop - 100;
            const top = offset > 0 ? offset : 0;
            window.scrollTo({
                top: top,
                behavior: "smooth",
            });
        }
    }
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                const targetId = entry.target.getAttribute("id");
                const link = document.querySelector(`.tableofcontent ul li a[href="#${targetId}"]`);
                if (entry.isIntersecting) {
                    link?.parentElement.classList.add("active");
                } else {
                    link?.parentElement.classList.remove("active");
                }
            });
        },
        {
            threshold: 0.5,
        }
    );
    document.querySelectorAll("h2, h3, h4, h5, h6").forEach((element) => {
        observer.observe(element);
    });




    // accordion code  ============ start =====>
    const detailsElements = document.querySelectorAll("details");
    const summaryElements = document.querySelectorAll("summary");
    summaryElements.forEach((summary, index) => {
        summary.addEventListener("click", () => {
            // Close other open details elements and remove 'active' class
            detailsElements.forEach((details, i) => {
                if (i !== index) {
                    details.open = false;
                }
            });
            summaryElements.forEach((s, i) => {
                if (i !== index) {
                    s.classList.remove("active");
                }
            });
            // Toggle 'active' class on the clicked summary
            summary.classList.toggle("active");
        });
    });




});
