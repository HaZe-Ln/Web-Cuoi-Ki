    // Initialize Lucide icons
    lucide.createIcons();
    
    // Filter posts by category
    function filterPosts(category) {
      const posts = document.querySelectorAll('#posts-container .card');
      const buttons = document.querySelectorAll('.flex-wrap .button');
      
      // Update active button
      buttons.forEach(button => {
        if (button.textContent.trim().toLowerCase() === (category === 'all' ? 'tất cả' : category)) {
          button.classList.remove('button-outline');
          button.classList.add('button-default');
        } else {
          button.classList.remove('button-default');
          button.classList.add('button-outline');
        }
      });
      
      // Show/hide posts
      posts.forEach(post => {
        if (category === 'all' || post.dataset.category === category) {
          post.style.display = 'block';
        } else {
          post.style.display = 'none';
        }
      });
    }