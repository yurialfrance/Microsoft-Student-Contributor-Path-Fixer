document.getElementById('contributor-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const contributorId = document.getElementById('contributor-id').value.trim();
    const originalLink = document.getElementById('original-link').value.trim();
    
    // List of allowed domains
    const allowedDomains = [
        "azure.microsoft.com",
        "code.visualstudio.com",
        "devblogs.microsoft.com",
        "developer.microsoft.com",
        "dotnet.microsoft.com",
        "imaginecup.microsoft.com",
        "learn.microsoft.com",
        "microsoft.com/microsoft-cloud/blog",
        "microsoft.com/startups",
        "mvp.microsoft.com",
        "techcommunity.microsoft.com"
    ];
    
    try {
        // Extract and validate the domain
        const url = new URL(originalLink);
        const domain = url.hostname.toLowerCase();

        // Check if the domain is allowed
        const isAllowedDomain = allowedDomains.some(allowedDomain => domain.endsWith(allowedDomain));

        if (!isAllowedDomain) {
            showError("Error: The link must be from one of the following Microsoft domains:\n\n" + allowedDomains.join("\n"));
            return;
        }

        // Remove language locale from the URL path if present
        let path = url.pathname;
        path = path.replace(/\/[a-z]{2}-[a-z]{2}\//, '/'); // e.g., /en-us/ to /

        // Construct the fixed link
        let fixedLink = `${url.origin}${path}${url.search}`;
        
        // Check if the URL already has a query parameter
        if (url.search) {
            fixedLink += `&wt.mc_id=${contributorId}`;
        } else {
            fixedLink += `?wt.mc_id=${contributorId}`;
        }

        document.getElementById('generated-link').textContent = fixedLink;
        document.getElementById('result').style.display = 'block';
        hideError();
    } catch (e) {
        showError("Error: Invalid URL format.");
    }
});

// Function to show error message
function showError(message) {
    const errorMessage = document.getElementById('error-message');
    errorMessage.textContent = message;
    errorMessage.classList.add('visible');
}

// Function to hide error message
function hideError() {
    const errorMessage = document.getElementById('error-message');
    errorMessage.classList.remove('visible');
}

// Copy to clipboard functionality
document.getElementById('copy-button').addEventListener('click', function() {
    const generatedLink = document.getElementById('generated-link').textContent;
    navigator.clipboard.writeText(generatedLink).then(function() {
        alert("Link copied to clipboard!");
    }, function() {
        alert("Failed to copy link.");
    });
});
