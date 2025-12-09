 /**
  * Modal for Get started
  */
  const modal = document.getElementById("authModal");
  const openModalBtn = document.getElementById("openModalBtn");
  const closeModalBtn = document.getElementById("closeModalBtn");
  const continueBtn = document.getElementById("continueBtn");

  const loginTab = document.getElementById("loginTab");
  const signupTab = document.getElementById("signupTab");
  const modalTitle = document.getElementById("modalTitle");

  // Show modal
  openModalBtn.addEventListener("click", () => {
    modal.classList.remove("hidden");
  });

  // Close modal
  closeModalBtn.addEventListener("click", () => {
    modal.classList.add("hidden");
  });

  // Close by clicking outside modal
  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.classList.add("hidden");
  });

  // Toggle Login / Signup
  loginTab.addEventListener("click", () => {
    loginTab.classList.add("active-tab");
    signupTab.classList.remove("active-tab");
    modalTitle.textContent = "Welcome Back";
  });

  signupTab.addEventListener("click", () => {
    signupTab.classList.add("active-tab");
    loginTab.classList.remove("active-tab");
    modalTitle.textContent = "Create Account";
  });

  // Continue button → go to dashboard
  continueBtn.addEventListener("click", () => {
    window.location.href = "dashboard.html";
  });
    
    /**Hambuger .js */
     const menuBtn = document.getElementById("menu-btn");
      const mobileMenu = document.getElementById("mobile-menu");

      menuBtn.addEventListener("click", () => {
        mobileMenu.classList.toggle("hidden");
      });



      
      