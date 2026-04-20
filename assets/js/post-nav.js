(function () {
  // Only run on blog post pages (have dcterms.date meta)
  if (!document.querySelector('meta[name="dcterms.date"]')) return;

  const searchUrl = new URL('../search.json', window.location.href).href;

  fetch(searchUrl)
    .then((res) => res.json())
    .then((data) => {
      // Filter to root-level post pages only (no section anchors)
      const seen = new Set();
      const posts = data
        .filter((entry) => {
          const href = entry.href || '';
          return href.startsWith('posts/') && !href.includes('#');
        })
        .filter((entry) => {
          if (seen.has(entry.href)) return false;
          seen.add(entry.href);
          return true;
        });

      // Sort chronologically by date in filename (YYYY-MM-DD prefix)
      posts.sort((a, b) => {
        const dateA = (a.href.match(/posts\/(\d{4}-\d{2}-\d{2})-/) || [])[1] || '';
        const dateB = (b.href.match(/posts\/(\d{4}-\d{2}-\d{2})-/) || [])[1] || '';
        return dateA.localeCompare(dateB);
      });

      // Find current post (strip leading '/')
      const currentHref = window.location.pathname.replace(/^\//, '');
      const idx = posts.findIndex((p) => p.href === currentHref);
      if (idx === -1) return;

      const prev = idx > 0 ? posts[idx - 1] : null;
      const next = idx < posts.length - 1 ? posts[idx + 1] : null;
      if (!prev && !next) return;

      // Build navigation HTML
      const makeCard = (post, direction) => {
        const relHref = post.href.replace('posts/', '');
        const arrow = direction === 'prev' ? '&#8592;' : '&#8594;';
        const label = direction === 'prev' ? `${arrow} Previous` : `Next ${arrow}`;
        return `
          <div class="post-nav-${direction}">
            <a href="${relHref}" class="post-nav-link post-nav-link--${direction}">
              <span class="post-nav-direction">${label}</span>
              <span class="post-nav-title">${post.title}</span>
            </a>
          </div>`;
      };

      const navHtml = `
        <nav class="post-nav" aria-label="Post navigation">
          ${prev ? makeCard(prev, 'prev') : '<div class="post-nav-prev"></div>'}
          ${next ? makeCard(next, 'next') : '<div class="post-nav-next"></div>'}
        </nav>`;

      const container = document.getElementById('quarto-document-content');
      if (container) {
        container.insertAdjacentHTML('beforeend', navHtml);
      }
    })
    .catch(() => {
      // Silently fail — don't break post layout
    });
})();
