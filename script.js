document.addEventListener("DOMContentLoaded", function() {
    const repoOwner = 'your-github-username'; // Replace with your GitHub username
    const repoName = 'your-repo-name'; // Replace with your repository name

    fetch(`https://api.github.com/repos/${repoOwner}/${repoName}/issues`)
        .then(response => response.json())
        .then(issues => {
            const blogContainer = document.getElementById('blog-posts');
            issues.forEach(issue => {
                const postElement = document.createElement('article');
                postElement.classList.add('blog-post');
                postElement.innerHTML = `
                    <h3><a href="${issue.html_url}" target="_blank">${issue.title}</a></h3>
                    <p>${issue.body ? issue.body.substring(0, 200) + '...' : 'No content'}</p>
                `;
                blogContainer.appendChild(postElement);
            });
        })
        .catch(error => console.error('Error fetching issues:', error));
});
