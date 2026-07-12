/**
 * theme.js
 * ----------------------------------------------------------------------
 * Light/Dark theme toggle, shared across every page.
 * The actual color swap happens purely in CSS via
 *   :root[data-theme="light"] { ... }
 * in portfolio-theme.css — this file only flips the attribute and
 * remembers the choice in localStorage. The very first paint is
 * handled by a tiny inline script in each page's <head> (reads
 * localStorage before first render, so there's no flash of the wrong
 * theme).
 * ---------------------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', function () {
  const btn = document.getElementById('theme-toggle');
  if (btn) {
    btn.addEventListener('click', function () {
      const isLight = document.documentElement.getAttribute('data-theme') === 'light';
      if (isLight) {
        document.documentElement.removeAttribute('data-theme');
        try { localStorage.setItem('portfolio-theme', 'dark'); } catch (e) { /* ignore */ }
      } else {
        document.documentElement.setAttribute('data-theme', 'light');
        try { localStorage.setItem('portfolio-theme', 'light'); } catch (e) { /* ignore */ }
      }
    });
  }
});

/**
 * Robust "download" handling for every <a download> link on the site
 * (resume buttons, etc). The plain HTML `download` attribute is
 * ignored by some browsers/webviews under certain conditions (e.g.
 * some in-app browsers, or files opened via file://). This upgrades
 * the click to fetch the file as a blob and force-save it; if that
 * fails for any reason, it falls back to simply opening the file in
 * a new tab so the visitor can always still get the resume.
 */
document.addEventListener('click', function (e) {
  const link = e.target.closest('a[download]');
  if (!link) return;

  const url = link.getAttribute('href');
  const filename = link.getAttribute('download') || (url ? url.split('/').pop() : 'download');
  if (!url) return;

  e.preventDefault();

  fetch(url)
    .then(function (response) {
      if (!response.ok) throw new Error('Network response was not ok');
      return response.blob();
    })
    .then(function (blob) {
      const blobUrl = URL.createObjectURL(blob);
      const tempLink = document.createElement('a');
      tempLink.href = blobUrl;
      tempLink.download = filename;
      document.body.appendChild(tempLink);
      tempLink.click();
      document.body.removeChild(tempLink);
      setTimeout(function () { URL.revokeObjectURL(blobUrl); }, 2000);
    })
    .catch(function () {
      // Fallback: open the file directly so the user can still save/view it.
      window.open(url, '_blank', 'noopener');
    });
});
