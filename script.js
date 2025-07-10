document.addEventListener("DOMContentLoaded", () => {
  const form        = document.getElementById("new-article-form");
  const blogSection = document.getElementById("blog-articles");

  form.addEventListener("submit", (e) => {
    e.preventDefault();          

    
    const title = document.getElementById("article-title").value.trim();
    const body  = document.getElementById("article-body").value.trim();
    if (!title || !body) return; // Nothing to add

    // build a new article
    const articleDiv = document.createElement("div");

    const h2 = document.createElement("h2");
    h2.textContent = title;

    const p = document.createElement("p");
    p.textContent = body;

    articleDiv.appendChild(h2);
    articleDiv.appendChild(p);

    //attach to the end of the list
    blogSection.appendChild(articleDiv);

    //reset form
    form.reset();
    document.getElementById("article-title").focus();
  });
});
