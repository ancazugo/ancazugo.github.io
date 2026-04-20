(function () {
  const LISTING_ID = 'listing-listing';

  function addFirstLast() {
    const list = window['quarto-listings'] && window['quarto-listings'][LISTING_ID];
    if (!list) return;

    const listingEl = document.getElementById(LISTING_ID);
    if (!listingEl) return;

    const paginationEl = listingEl.querySelector('.pagination');
    if (!paginationEl || !paginationEl.children.length) {
      setTimeout(addFirstLast, 50);
      return;
    }

    // Remove previously inserted buttons to avoid duplicates
    paginationEl.querySelectorAll('.ql-first, .ql-last').forEach((el) => el.remove());

    const totalPages = Math.ceil(list.matchingItems.length / list.page);
    if (totalPages <= 1) return;

    const activeLink = paginationEl.querySelector('li.active a[data-i]');
    const currentPage = activeLink ? parseInt(activeLink.getAttribute('data-i'), 10) : 1;

    const makeBtn = (label, page) => {
      const li = document.createElement('li');
      li.className = `page-item ${label === '⟨⟨' ? 'ql-first' : 'ql-last'}`;
      if (page === currentPage) li.classList.add('disabled');

      const a = document.createElement('a');
      a.className = 'page page-link';
      a.href = '#';
      // Set data-i and data-page so Quarto's refreshPaginationHandlers works correctly
      // when it replaces our onclick. Both handlers call list.show with identical args.
      a.setAttribute('data-i', page);
      a.setAttribute('data-page', list.page);
      a.setAttribute('aria-label', label === '⟨⟨' ? 'First' : 'Last');
      a.textContent = label;

      // Use onclick (not addEventListener) so Quarto's refreshPaginationHandlers
      // can replace it — Quarto reads data-i which we've set correctly above,
      // so both handlers navigate to the same page.
      a.onclick = (e) => {
        e.preventDefault();
        if (li.classList.contains('disabled')) return false;
        list.show((page - 1) * list.page + 1, list.page);
        // Mirror Quarto's setPageHash format: listing-listing-page=N
        const hash = `${LISTING_ID}-page=${page}`;
        window.history.pushState(null, null, `#${hash}`);
        return false;
      };

      li.appendChild(a);
      return li;
    };

    paginationEl.prepend(makeBtn('⟨⟨', 1));
    paginationEl.append(makeBtn('⟩⟩', totalPages));
  }

  function setup() {
    const list = window['quarto-listings'] && window['quarto-listings'][LISTING_ID];
    if (!list) return;

    list.on('updated', () => setTimeout(addFirstLast, 0));
    addFirstLast();
  }

  // Wrap quarto-listing-loaded to hook in after Quarto initializes the listing
  const original = window['quarto-listing-loaded'];
  window['quarto-listing-loaded'] = function () {
    if (original) original();
    setup();
  };

  // Fallback: if quarto-listing-loaded already fired before this script ran
  if (window['quarto-listings'] && window['quarto-listings'][LISTING_ID]) {
    setup();
  }
})();
