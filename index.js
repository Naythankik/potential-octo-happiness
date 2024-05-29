const container = document.querySelector(".bottom-container");

const jobListings = async () => {
  const res = await fetch("./data.json");
  const jobs = await res.json();

  jobs.forEach((element) => {
    const article = document.createElement("article");
    const langContainer = document.createElement("div");
    langContainer.setAttribute("class", "article-right-side");
    const role = document.createElement("span");
    role.setAttribute("class", "tags");
    role.innerHTML = element.role;
    langContainer.appendChild(role);

    const level = document.createElement("span");
    level.setAttribute("class", "tags");
    level.innerHTML = element.level;
    langContainer.appendChild(level);

    for (const tools of element.tools) {
      const span = document.createElement("span");
      span.setAttribute("class", "tags");
      span.innerHTML = tools;
      langContainer.appendChild(span);
    }

    for (const language of element.languages) {
      const span = document.createElement("span");
      span.setAttribute("class", "tags");
      span.innerHTML = language;
      langContainer.appendChild(span);
    }
    article.innerHTML = `
          <div class="article-left-side">
            <div class="image-container">
              <img src="${element.logo}" alt="${element.company}" />
            </div>
            <div class="article-details">
              <div class="top-details">
                <p>${element.company}</p>
                <span class="${element.new ? "d-block" : "d-none"}">${
      element.new ? "New!" : ""
    }</span>
                <span class="featured ${
                  element.featured ? "d-block" : "d-none"
                }">${element.featured ? "Featured" : ""}</span>
              </div>
              <h2 class="article-title">${element.position}</h2>
              <ul class="bottom-details">
                <li>${element.postedAt}</li>
                <li>${element.contract}</li>
                <li>${element.location}</li>
              </ul>
            </div>
          </div>
          
          </div>
    `;

    article.appendChild(langContainer);

    container.appendChild(article);
  });
};

jobListings();
