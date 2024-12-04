/* 
 * Name: Noel Miranda
 * JS for bioSite project 
 * Status: Completed.
 */

// Wait for the entire HTML document to load before running the script
document.addEventListener('DOMContentLoaded', () => {
    // Selects all <a> elements within <header> within <nav> within <ul> within <li>
    const links = document.querySelectorAll('header nav ul li a');

    // Gets the current page's file name from the URL (e.g., "about.html" or "index.html")
    const currentPath = window.location.pathname.split('/').pop();

    // Loops through each link to check if it matches the current page
    links.forEach(link => {
        // Gets the 'href' attribute of the link (e.g., "index.html" or "about.html")
        const linkPath = link.getAttribute('href');
        
        // Adds the 'active' class if the link matches the current page
        // Also handles the case where 'currentPath' is empty (root page) and the link points to 'index.html'
        if (linkPath === currentPath || (currentPath === '' && linkPath === 'index.html')) {
            // Highlights the current page link through css
            link.classList.add('active');
        }
    });
});

