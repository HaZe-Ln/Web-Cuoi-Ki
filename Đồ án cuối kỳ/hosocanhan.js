        // Initialize Lucide icons
        document.addEventListener('DOMContentLoaded', function() {
            if (typeof lucide !== 'undefined') {
                lucide.createIcons();
            }
        });

        // State management
        let isEditing = false;
        let originalData = {};

        // Form elements
        const formFields = [
            'firstName', 'lastName', 'email', 'phone', 
            'birthDate', 'gender', 'address', 'nationality', 
            'bio', 'preferredDestination', 'travelStyle'
        ];

        // UI elements
        let editToggleBtn, saveBtn, displayName, displayEmail;

        // Initialize when DOM is loaded
        document.addEventListener('DOMContentLoaded', function() {
            editToggleBtn = document.getElementById('editToggleBtn');
            saveBtn = document.getElementById('saveBtn');
            displayName = document.getElementById('displayName');
            displayEmail = document.getElementById('displayEmail');

            // Event listeners
            editToggleBtn.addEventListener('click', toggleEditMode);
            saveBtn.addEventListener('click', saveChanges);

            // Initialize
            storeOriginalData();
        });

        // Store original values
        function storeOriginalData() {
            originalData = {};
            formFields.forEach(fieldId => {
                const element = document.getElementById(fieldId);
                if (element) {
                    originalData[fieldId] = element.value;
                }
            });
        }

        // Toggle edit mode
        function toggleEditMode() {
            isEditing = !isEditing;
            
            if (isEditing) {
                storeOriginalData();
                enableEditing();
            } else {
                disableEditing();
                restoreOriginalData();
            }
        }

        // Enable editing
        function enableEditing() {
            formFields.forEach(fieldId => {
                const element = document.getElementById(fieldId);
                if (element) {
                    element.disabled = false;
                }
            });

            editToggleBtn.innerHTML = `
                <i data-lucide="x"></i>
                <span>Hủy chỉnh sửa</span>
            `;
            saveBtn.classList.remove('hidden');
            saveBtn.classList.add('flex');
            
            if (typeof lucide !== 'undefined') {
                lucide.createIcons();
            }
        }

        // Disable editing
        function disableEditing() {
            formFields.forEach(fieldId => {
                const element = document.getElementById(fieldId);
                if (element) {
                    element.disabled = true;
                }
            });

            editToggleBtn.innerHTML = `
                <i data-lucide="edit"></i>
                <span>Chỉnh sửa hồ sơ</span>
            `;
            saveBtn.classList.add('hidden');
            saveBtn.classList.remove('flex');
            
            if (typeof lucide !== 'undefined') {
                lucide.createIcons();
            }
        }

        // Restore original data
        function restoreOriginalData() {
            formFields.forEach(fieldId => {
                const element = document.getElementById(fieldId);
                if (element) {
                    element.value = originalData[fieldId];
                }
            });
            updateDisplayInfo();
        }

        // Update display information
        function updateDisplayInfo() {
            const firstName = document.getElementById('firstName').value;
            const lastName = document.getElementById('lastName').value;
            const email = document.getElementById('email').value;
            
            if (displayName && displayEmail) {
                displayName.textContent = `${firstName} ${lastName}`;
                displayEmail.textContent = email;
            }
        }

        // Save changes
        function saveChanges() {
            const formData = {};
            formFields.forEach(fieldId => {
                const element = document.getElementById(fieldId);
                if (element) {
                    formData[fieldId] = element.value;
                }
            });

            console.log('Saving profile:', formData);
            
            // Update display info
            updateDisplayInfo();
            
            // Show success message
            showSuccessMessage();
            
            // Disable editing
            isEditing = false;
            disableEditing();
        }

        // Show success message
        function showSuccessMessage() {
            const successDiv = document.createElement('div');
            successDiv.className = 'success-message';
            successDiv.textContent = 'Hồ sơ đã được cập nhật thành công!';
            
            document.body.appendChild(successDiv);
            
            setTimeout(() => {
                successDiv.remove();
            }, 3000);
        }

            document.addEventListener('DOMContentLoaded', function() {
    var btn = document.getElementById('accountBtn');
    var menu = btn.parentElement;
    btn.onclick = function(e) {
      e.stopPropagation();
      menu.classList.toggle('open');
    };
    document.addEventListener('click', function() {
      menu.classList.remove('open');
    });
  });

  document.getElementById("dichVuBtn").addEventListener("click", function () {
  const dropdown = document.getElementById("dichVuDropdown");
  dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
});

// Ẩn dropdown khi click ra ngoài
document.addEventListener("click", function (event) {
  const dichVuBtn = document.getElementById("dichVuBtn");
  const dichVuDropdown = document.getElementById("dichVuDropdown");
  if (!dichVuBtn.contains(event.target) && !dichVuDropdown.contains(event.target)) {
    dichVuDropdown.style.display = "none";
  }
});