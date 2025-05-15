    const darkModeToggle = document.getElementById("darkModeToggle");
    const htmlEl = document.documentElement;
    const moonIcon = darkModeToggle.querySelector("i");

    
    if (
      localStorage.getItem("theme") === "dark" ||
      (!localStorage.getItem("theme") &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      htmlEl.classList.add("dark");
      moonIcon.classList.remove("fa-moon");
      moonIcon.classList.add("fa-sun");
    }

    darkModeToggle.addEventListener("click", () => {
      if (htmlEl.classList.contains("dark")) {
        htmlEl.classList.remove("dark");
        moonIcon.classList.remove("fa-sun");
        moonIcon.classList.add("fa-moon");
        localStorage.setItem("theme", "light");
      } else {
        htmlEl.classList.add("dark");
        moonIcon.classList.remove("fa-moon");
        moonIcon.classList.add("fa-sun");
        localStorage.setItem("theme", "dark");
      }
    });

    
    const pages = {
      home: document.getElementById("pageHome"),
      table: document.getElementById("pageTable"),
    };
    const navLinks = {
      home: document.getElementById("navHomeLink"),
      about: document.getElementById("navAboutLink"),
      contact: document.getElementById("navContactLink"),
      table: document.getElementById("navTableLink"),
      homeLogo: document.getElementById("navHome"),
    };

    function showPage(pageKey) {
      Object.keys(pages).forEach((key) => {
        if (key === pageKey) {
          pages[key].classList.add("active");
          pages[key].focus();
        } else {
          pages[key].classList.remove("active");
        }
      });
    }

    
    showPage("home");

    
    navLinks.home.addEventListener("click", () => showPage("home"));
    navLinks.about.addEventListener("click", () => showPage("home"));
    navLinks.contact.addEventListener("click", () => showPage("home"));
    navLinks.homeLogo.addEventListener("click", () => showPage("home"));
    navLinks.table.addEventListener("click", () => showPage("table"));

    
    const contactForm = document.getElementById("contactForm");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");
    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const messageError = document.getElementById("messageError");
    const formSuccess = document.getElementById("formSuccess");

    function validateEmail(email) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      let valid = true;

      if (nameInput.value.trim() === "") {
        nameError.classList.remove("hidden");
        valid = false;
      } else {
        nameError.classList.add("hidden");
      }

      if (!validateEmail(emailInput.value.trim())) {
        emailError.classList.remove("hidden");
        valid = false;
      } else {
        emailError.classList.add("hidden");
      }

      if (messageInput.value.trim() === "") {
        messageError.classList.remove("hidden");
        valid = false;
      } else {
        messageError.classList.add("hidden");
      }

      if (valid) {
        formSuccess.classList.remove("hidden");
        contactForm.reset();
        setTimeout(() => {
          formSuccess.classList.add("hidden");
        }, 5000);
      }
    });

    
    const loginBtn = document.getElementById("loginBtn");
    const loginModal = document.getElementById("loginModal");
    const closeLoginModal = document.getElementById("closeLoginModal");
    const loginForm = document.getElementById("loginForm");
    const loginEmail = document.getElementById("loginEmail");
    const loginPassword = document.getElementById("loginPassword");
    const loginEmailError = document.getElementById("loginEmailError");
    const loginPasswordError = document.getElementById("loginPasswordError");

    loginBtn.addEventListener("click", () => {
      loginModal.classList.remove("hidden");
      document.body.style.overflow = "hidden";
      loginEmail.focus();
    });

    closeLoginModal.addEventListener("click", () => {
      loginModal.classList.add("hidden");
      document.body.style.overflow = "auto";
      clearLoginErrors();
      loginForm.reset();
    });

    loginModal.addEventListener("click", (e) => {
      if (e.target === loginModal) {
        loginModal.classList.add("hidden");
        document.body.style.overflow = "auto";
        clearLoginErrors();
        loginForm.reset();
      }
    });

    function clearLoginErrors() {
      loginEmailError.classList.add("hidden");
      loginPasswordError.classList.add("hidden");
    }

    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      let valid = true;

      if (!validateEmail(loginEmail.value.trim())) {
        loginEmailError.classList.remove("hidden");
        valid = false;
      } else {
        loginEmailError.classList.add("hidden");
      }

      if (loginPassword.value.trim().length < 6) {
        loginPasswordError.classList.remove("hidden");
        valid = false;
      } else {
        loginPasswordError.classList.add("hidden");
      }

      if (valid) {
        alert("Login successful! Welcome to ClinicCare.");
        loginModal.classList.add("hidden");
        document.body.style.overflow = "auto";
        loginForm.reset();
        clearLoginErrors();
      }
    });

   
    const tableBody = document.getElementById("table-body");
    const dataForm = document.getElementById("dataForm");
    const inputTitle = document.getElementById("inputTitle");
    const inputBody = document.getElementById("inputBody");
    const rowIndexInput = document.getElementById("rowIndex");
    const formTitle = document.getElementById("formTitle");
    const submitBtn = document.getElementById("submitBtn");
    const cancelBtn = document.getElementById("cancelBtn");

   
    const initialData = [
      {
        title: "<span class='bg-blue-600 text-white'>quos dolorem</span> consequuntur expedita et cum reprehenderit",
        body: "molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet",
      },
      {
        title: "architecto",
        body: "est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil",
      },
      {
        title: "est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil",
        body: "et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae",
      },
      {
        title: "ullam et saepe reiciendis voluptatem adipisci sit amet autem assumenda provident rerum culpa quis hic commodi nesciunt rem",
        body: "tenetur doloremque ipsam iure quis sunt voluptatem rerum illo velit",
      },
      {
        title: "repudiandae veniam quaerat sunt sed alias aut fugiat sit autem sed est voluptatem omnis possimus esse voluptatibus quis est aut",
        body: "tenetur dolor neque",
      },
      {
        title: "ut aspernatur corporis harum nihil quis provident sequi mollitia nobis aliquid molestiae perspiciatis et ea nemo ab reprehenderit",
        body: "accusantium quas voluptate dolores velit et doloremque molestiae",
      },
      {
        title: "dolore placeat quibusdam ea quo vitae magni quis enim qui quis quo nemo aut saepe quidem repellat excepturi ut quia sunt ut",
        body: "sequi eos ea sed quas",
      },
      {
        title: "dignissimos aperiam dolorem qui eum facilis quibusdam animi sint suscipit qui sint possimus cum quaerat magni maiores",
        body: "excepturi ipsam ut commodi dolor voluptatum modi aut vitae",
      },
      {
        title: "consectetur animi nesciunt iure dolore enim quia ad veniam autem ut quam aut nobis et est aut quod aut provident voluptas autem voluptas",
        body: "",
      },
    ];

    
    function renderTable() {
      tableBody.innerHTML = "";
      initialData.forEach((item, index) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
          <td class="border border-black p-1 text-center align-top">${index + 1}</td>
          <td class="border border-black p-1 align-top">${item.title}</td>
          <td class="border border-black p-1 align-top">${item.body}</td>
          <td class="border border-black p-1 align-top text-center space-y-1">
            <button class="update-btn bg-gray-200 text-black text-[12px] px-2 py-[2px] rounded">Update</button>
            <button class="delete-btn bg-red-600 text-white text-[12px] px-2 py-[2px] rounded">Delete</button>
          </td>
        `;
        attachRowEvents(tr);
        tableBody.appendChild(tr);
      });
    }

    // Attach update and delete events to a row
    function attachRowEvents(row) {
      const updateBtn = row.querySelector(".update-btn");
      const deleteBtn = row.querySelector(".delete-btn");

      updateBtn.addEventListener("click", () => {
        const index = Array.from(tableBody.children).indexOf(row);
        rowIndexInput.value = index;
        // Remove HTML tags for editing
        const tempDiv = document.createElement("div");
        tempDiv.innerHTML = row.children[1].innerHTML;
        inputTitle.value = tempDiv.textContent || tempDiv.innerText || "";
        inputBody.value = row.children[2].textContent;
        formTitle.textContent = "Edit Row";
        submitBtn.textContent = "Save";
        scrollToForm();
      });

      deleteBtn.addEventListener("click", () => {
        if (confirm("Are you sure you want to delete this row?")) {
          row.remove();
          updateRowIndices();
        }
      });
    }

    // Update row indices after deletion
    function updateRowIndices() {
      Array.from(tableBody.children).forEach((row, i) => {
        row.children[0].textContent = i + 1;
      });
    }

    // Scroll to form smoothly
    function scrollToForm() {
      dataForm.scrollIntoView({ behavior: "smooth", block: "center" });
    }

    // Handle form submit for add/edit
    dataForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const titleVal = inputTitle.value.trim();
      const bodyVal = inputBody.value.trim();
      if (!titleVal || !bodyVal) {
        alert("Please fill in both Title and Body.");
        return;
      }
      const index = rowIndexInput.value;
      if (index === "") {
        // Add new row
        const tr = document.createElement("tr");
        tr.innerHTML = `
          <td class="border border-black p-1 text-center align-top">${tableBody.children.length + 1}</td>
          <td class="border border-black p-1 align-top">${escapeHtml(titleVal)}</td>
          <td class="border border-black p-1 align-top">${escapeHtml(bodyVal)}</td>
          <td class="border border-black p-1 align-top text-center space-y-1">
            <button class="update-btn bg-gray-200 text-black text-[12px] px-2 py-[2px] rounded">Update</button>
            <button class="delete-btn bg-red-600 text-white text-[12px] px-2 py-[2px] rounded">Delete</button>
          </td>
        `;
        attachRowEvents(tr);
        tableBody.appendChild(tr);
      } else {
        // Edit existing row
        const row = tableBody.children[index];
        if (row) {
          row.children[1].textContent = titleVal;
          row.children[2].textContent = bodyVal;
        }
      }
      resetForm();
    });

    // Cancel button resets form
    cancelBtn.addEventListener("click", () => {
      resetForm();
    });

    // Reset form to add mode
    function resetForm() {
      rowIndexInput.value = "";
      inputTitle.value = "";
      inputBody.value = "";
      formTitle.textContent = "Add New Row";
      submitBtn.textContent = "Add";
    }

    // Escape HTML to prevent injection
    function escapeHtml(text) {
      return text.replace(/[&<>"']/g, function (m) {
        return {
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#39;",
        }[m];
      });
    }

    // Initialize table on page load
    renderTable();

    // Book appointment button scrolls to contact form and shows home page
    const btnBookAppointment = document.getElementById("btnBookAppointment");
    btnBookAppointment.addEventListener("click", () => {
      showPage("home");
      setTimeout(() => {
        document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
      }, 300);
    });
