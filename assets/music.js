/* ============================================================
 *  9. Music Page (source: music page)
 * ============================================================ */
(function() {
  'use strict';

  var METING_API = 'https://api.i-meto.com/meting/api';
  var PAGE_SIZE = 24;
  var CACHE_PREFIX = 'music_pl_';
  var CACHE_TTL = 3600000;

  function escapeHtml(str) {
    var div = document.createElement('div');
    div.textContent = str || '';
    return div.innerHTML;
  }

  function getSongLink(song) {
    if (song.url) {
      var m = song.url.match(/[?&]id=(\d+)/);
      if (m) return 'https://music.163.com/#/song?id=' + m[1];
    }
    return null;
  }

  function createSongCard(song) {
    var songName = song.title || song.name || '未知歌曲';
    var songArtist = song.author || song.artist || '未知艺术家';
    var cover = song.pic || song.cover || '';

    var link = getSongLink(song);
    var el = document.createElement(link ? 'a' : 'div');
    el.className = 'music-song-card';
    if (link) { el.href = link; el.target = '_blank'; el.rel = 'noopener'; }

    el.innerHTML =
      '<img class="music-song-cover" src="' + cover + '" alt="" loading="lazy" ' +
      'onerror="this.style.display=\'none\'">' +
      '<div class="music-song-info">' +
        '<div class="music-song-name">' + escapeHtml(songName) + '</div>' +
        '<div class="music-song-artist">' + escapeHtml(songArtist) + '</div>' +
      '</div>';
    return el;
  }

  function fetchPlaylist(server, type, id) {
    var cacheKey = CACHE_PREFIX + id;
    try {
      var cached = localStorage.getItem(cacheKey);
      if (cached) {
        var data = JSON.parse(cached);
        if (data.timestamp && (Date.now() - data.timestamp < CACHE_TTL) && Array.isArray(data.songs)) {
          return Promise.resolve(data.songs);
        }
      }
    } catch(e) {}

    var url = METING_API +
      '?server=' + encodeURIComponent(server) +
      '&type=' + encodeURIComponent(type) +
      '&id=' + encodeURIComponent(id);
    return fetch(url).then(function(resp) {
      if (!resp.ok) throw new Error('HTTP ' + resp.status);
      return resp.json();
    }).then(function(songs) {
      try {
        localStorage.setItem(cacheKey, JSON.stringify({ timestamp: Date.now(), songs: songs }));
      } catch(e) {}
      return songs;
    });
  }

  function getUniqueArtists(songs) {
    var seen = {};
    var artists = [];
    songs.forEach(function(s) {
      var artist = s.author || s.artist || '未知艺术家';
      if (!seen[artist]) { seen[artist] = true; artists.push(artist); }
    });
    artists.sort(function(a, b) { return a.localeCompare(b, 'zh'); });
    return artists;
  }

  function createFilterBar(container, songs, artists, renderFn) {
    var bar = document.createElement('div');
    bar.className = 'music-filter-bar';

    // artist dropdown
    var selectHtml = '<select class="music-filter-select"><option value="">全部艺术家</option>';
    artists.forEach(function(a) {
      selectHtml += '<option value="' + escapeHtml(a) + '">' + escapeHtml(a) + '</option>';
    });
    selectHtml += '</select>';

    // search input
    var searchHtml = '<input class="music-search-input" type="text" placeholder="搜索歌曲或艺术家...">';

    bar.innerHTML = selectHtml + searchHtml;
    container.appendChild(bar);

    var select = bar.querySelector('.music-filter-select');
    var search = bar.querySelector('.music-search-input');

    function doFilter() {
      var artistFilter = select.value;
      var keyword = search.value.trim().toLowerCase();

      var filtered = songs.filter(function(s) {
        var artist = s.author || s.artist || '';
        var title = s.title || s.name || '';
        if (artistFilter && artist !== artistFilter) return false;
        if (keyword && title.toLowerCase().indexOf(keyword) === -1 && artist.toLowerCase().indexOf(keyword) === -1) return false;
        return true;
      });

      renderFn(filtered);
    }

    select.addEventListener('change', doFilter);
    search.addEventListener('input', doFilter);
  }

  function createPagination(container, totalPages, currentPage, goFn) {
    var pag = document.createElement('div');
    pag.className = 'music-pagination';

    if (totalPages <= 1) { container.appendChild(pag); return; }

    function makeBtn(label, page, disabled) {
      var btn = document.createElement('button');
      btn.className = 'music-page-btn';
      btn.textContent = label;
      btn.disabled = !!disabled;
      if (!disabled) btn.addEventListener('click', function() { goFn(page); });
      return btn;
    }

    pag.appendChild(makeBtn('上一页', currentPage - 1, currentPage <= 1));

    var start = Math.max(1, currentPage - 2);
    var end = Math.min(totalPages, currentPage + 2);
    if (start > 1) { pag.appendChild(makeBtn('1', 1)); if (start > 2) { var dots = document.createElement('span'); dots.className = 'music-page-dots'; dots.textContent = '...'; pag.appendChild(dots); } }
    for (var p = start; p <= end; p++) {
      var btn = makeBtn(String(p), p, p === currentPage);
      if (p === currentPage) btn.classList.add('active');
      pag.appendChild(btn);
    }
    if (end < totalPages) { if (end < totalPages - 1) { var dots2 = document.createElement('span'); dots2.className = 'music-page-dots'; dots2.textContent = '...'; pag.appendChild(dots2); } pag.appendChild(makeBtn(String(totalPages), totalPages)); }

    pag.appendChild(makeBtn('下一页', currentPage + 1, currentPage >= totalPages));

    container.appendChild(pag);
  }

  function renderGrid(grid, songs) {
    grid.innerHTML = '';
    if (!songs || songs.length === 0) {
      grid.innerHTML = '<div class="music-empty">没有匹配的歌曲</div>';
      return;
    }
    songs.forEach(function(song) { grid.appendChild(createSongCard(song)); });
  }

  function initPlaylist(container) {
    var id = container.dataset.id;
    var server = container.dataset.server || 'netease';
    var type = container.dataset.type || 'playlist';
    var title = container.dataset.title || '歌单 ' + id;

    // title bar
    var titleEl = document.createElement('h2');
    titleEl.className = 'music-playlist-title';
    titleEl.innerHTML =
      '<span>' + escapeHtml(title) + '</span>' +
      '<a class="music-platform-link" href="https://music.163.com/#/playlist?id=' +
      escapeHtml(id) + '" target="_blank" rel="noopener">在网易云打开 →</a>';
    container.appendChild(titleEl);

    // loading
    var loading = document.createElement('div');
    loading.className = 'music-loading';
    loading.textContent = '加载中...';
    container.appendChild(loading);

    fetchPlaylist(server, type, id).then(function(songs) {
      loading.remove();
      if (!songs || !Array.isArray(songs) || songs.length === 0) {
        container.innerHTML += '<div class="music-empty">该歌单暂无歌曲</div>';
        return;
      }

      var allSongs = songs;
      var artists = getUniqueArtists(allSongs);
      var currentFiltered = allSongs.slice();
      var currentPage = 1;

      // grid
      var grid = document.createElement('div');
      grid.className = 'music-song-grid';
      container.appendChild(grid);

      // info bar
      var info = document.createElement('div');
      info.className = 'music-info-bar';
      container.appendChild(info);

      // pagination container
      var pagContainer = document.createElement('div');
      container.appendChild(pagContainer);

      function goToPage(page) {
        currentPage = page;
        var start = (page - 1) * PAGE_SIZE;
        var pageSongs = currentFiltered.slice(start, start + PAGE_SIZE);
        renderGrid(grid, pageSongs);
        info.textContent = '共 ' + currentFiltered.length + ' 首，第 ' + page + '/' + Math.ceil(currentFiltered.length / PAGE_SIZE) + ' 页';
        pagContainer.innerHTML = '';
        createPagination(pagContainer, Math.ceil(currentFiltered.length / PAGE_SIZE), page, goToPage);
        grid.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }

      function applyFilter(filtered) {
        currentFiltered = filtered;
        goToPage(1);
      }

      createFilterBar(container, allSongs, artists, applyFilter);
      goToPage(1);

    }).catch(function(err) {
      loading.textContent = '加载失败，请刷新页面重试';
      loading.className = 'music-error';
      console.error('歌单加载失败:', err);
    });
  }

  function initMusicPage() {
    var playlists = document.querySelectorAll('.music-playlist');
    if (playlists.length === 0) return;
    for (var i = 0; i < playlists.length; i++) {
      initPlaylist(playlists[i]);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMusicPage);
  } else {
    initMusicPage();
  }
})();
