const dropdown = document.querySelector('.dropdown');
const dropdownToggle = dropdown.querySelector('a');
const dropdownMenu = dropdown.querySelector('.dropdown-menu');
const menuItems = dropdownMenu.querySelectorAll('a');

dropdownToggle.addEventListener('focus', () => {
  dropdown.setAttribute('aria-expanded', 'true');
});

dropdownToggle.addEventListener('blur', () => {
  setTimeout(() => {
    if (!dropdown.contains(document.activeElement)) {
      dropdown.setAttribute('aria-expanded', 'false');
    }
  }, 150);
});

dropdownMenu.addEventListener('focusin', () => {
  dropdown.setAttribute('aria-expanded', 'true');
});

dropdownMenu.addEventListener('focusout', () => {
  setTimeout(() => {
    if (!dropdown.contains(document.activeElement)) {
      dropdown.setAttribute('aria-expanded', 'false');
    }
  }, 150);
});

dropdownToggle.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowDown') {
    e.preventDefault();
    menuItems[0].focus();
  }
});

menuItems.forEach((item, index) => {
  item.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      const next = menuItems[index + 1] || menuItems[0];
      next.focus();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      const prev = menuItems[index - 1] || menuItems[menuItems.length - 1];
      prev.focus();
    } else if (e.key === 'Escape') {
      dropdownToggle.focus();
      dropdown.setAttribute('aria-expanded', 'false');
    }
  });
});

function isSafari() {
    const userAgent = navigator.userAgent;
    return /^((?!chrome|android).)*safari/i.test(userAgent);
}

function showPopup() {
    document.getElementById("popup").style.display = "block";
    document.getElementById("overlay").style.display = "block";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
    document.getElementById("overlay").style.display = "none";
}

// Show the popup if the user is on Safari
if (isSafari()) {
    window.addEventListener("load", showPopup);
}