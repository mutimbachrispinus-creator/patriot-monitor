const posts = [
    { title: "The Patriot Monitor", date: "November 22, 2025", file: "posts/post1.html", excerpt: "Independent truth. No filters. No agenda." },
    { title: "Why We Watch", date: "November 20, 2025", file: "posts/post2.html", excerpt: "Because someone has to." },

    // ←←← ADD YOUR NEW POST BELOW THIS LINE (copy-paste exactly) ←←←
    // { title: "Your Title Here", date: "November 24, 2025", file: "posts/your-file-name.html", excerpt: "Short teaser text..." },
    // ←←← ADD AS MANY AS YOU WANT — just remember a comma after each except the last one ←←←

];

function loadPosts(search = "") {
    const container = document.getElementById("posts");
    container.innerHTML = "";
    const filtered = posts.filter(p =>
        p.title.toLowerCase().includes(search.toLowerCase()) ||
        p.excerpt.toLowerCase().includes(search)
    );
    filtered.forEach((post, i) => {
        const div = document.createElement("article");
        div.className = "post";
        div.innerHTML = `
      <h2><a href="${post.file}">${post.title}</a></h2>
      <p class="date">${post.date}</p>
      <p>${post.excerpt}</p>
      <a href="${post.file}">Read more →</a>
    `;
        container.appendChild(div);
        setTimeout(() => div.classList.add("show"), i * 100);
    });
}

// Dark / Light mode toggle
document.getElementById("theme-toggle").addEventListener("click", () => {
    document.body.classList.toggle("dark");
    const isDark = document.body.classList.contains("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
    document.getElementById("theme-toggle").textContent = isDark ? "Light Mode" : "Dark Mode";
});

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    document.getElementById("theme-toggle").textContent = "Light Mode";
}

// Search
document.getElementById("search").addEventListener("input", e => loadPosts(e.target.value));

// Mobile menu
document.querySelector(".mobile-menu").addEventListener("click", () => {
    document.querySelector("nav").classList.toggle("show");
});

// Start
loadPosts();