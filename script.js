document.addEventListener("DOMContentLoaded", () => {
  const form        = document.getElementById("new-article-form");
  const blogSection = document.getElementById("blog-articles");

  /* Add new article */
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const title = document.getElementById("article-title").value.trim();
    const body  = document.getElementById("article-body").value.trim();
    if (!title || !body) return;

    /* Build the article wrapper */
    const articleDiv = document.createElement("div");

    /* Build the heading with a delete button inside */
    const h2  = document.createElement("h2");
    h2.textContent = title + " ";      

    const delBtn = document.createElement("button");
    delBtn.className = "delete-btn";
    delBtn.setAttribute("aria-label", "Delete article");
    delBtn.textContent = "🗑️";

    h2.appendChild(delBtn);

    /* Paragraph */
    const p = document.createElement("p");
    p.textContent = body;

    /* Assemble and insert */
    articleDiv.appendChild(h2);
    articleDiv.appendChild(p);
    blogSection.appendChild(articleDiv);

    form.reset();
    document.getElementById("article-title").focus();
  });

  blogSection.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete-btn")) {
      const articleDiv = e.target.closest("div");
      if (articleDiv) articleDiv.remove();
    }
  });
});
