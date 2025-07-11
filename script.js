document.addEventListener("DOMContentLoaded", () => {
  const form        = document.getElementById("new-article-form");
  const blogSection = document.getElementById("blog-articles");
  const colorInput  = document.getElementById("bg-color-input");

  /* ---------- BACKGROUND COLOR PICKER ---------- */
  if (colorInput) {
    colorInput.addEventListener("input", (e) => {
      document.body.style.backgroundColor = e.target.value;
    });
  }

  /* ---------- ADD NEW ARTICLE ---------- */
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const title = document.getElementById("article-title").value.trim();
    const body  = document.getElementById("article-body").value.trim();
    if (!title || !body) return;

    /* Create wrapper */
    const articleDiv = document.createElement("div");

    /* Heading with Delete + Edit buttons */
    const h2 = document.createElement("h2");
    const titleNode = document.createTextNode(title + " ");
    h2.appendChild(titleNode);

    const delBtn = document.createElement("button");
    delBtn.className = "delete-btn";
    delBtn.setAttribute("aria-label", "Delete article");
    delBtn.textContent = "🗑️";
    h2.appendChild(delBtn);

    const editBtn = document.createElement("button");
    editBtn.className = "edit-btn";
    editBtn.setAttribute("aria-label", "Edit article");
    editBtn.textContent = "✏️";
    h2.appendChild(editBtn);

    /* Paragraph */
    const p = document.createElement("p");
    p.textContent = body;

    /* Assemble & insert */
    articleDiv.appendChild(h2);
    articleDiv.appendChild(p);
    blogSection.appendChild(articleDiv);

    form.reset();
    document.getElementById("article-title").focus();
  });

  /* ---------- DELETE & EDIT via event delegation ---------- */
  blogSection.addEventListener("click", (e) => {
    const btn = e.target;

    /* Remove article */
    if (btn.classList.contains("delete-btn")) {
      const articleDiv = btn.closest("div");
      if (articleDiv) articleDiv.remove();
    }

    /* Edit article */
    if (btn.classList.contains("edit-btn")) {
      const articleDiv = btn.closest("div");
      if (!articleDiv) return;

      /* Grab existing elements */
      const h2 = articleDiv.querySelector("h2");
      const p  = articleDiv.querySelector("p");

      const titleNode = h2.childNodes[0];
      const currentTitle = titleNode.nodeValue.trim();
      const currentBody  = p.textContent;

      const newTitle = prompt("Edit title:", currentTitle);
      if (newTitle === null) return;
      const newBody  = prompt("Edit paragraph:", currentBody);
      if (newBody === null) return;

      titleNode.nodeValue = newTitle + " ";
      p.textContent = newBody;
    }
  });
});
