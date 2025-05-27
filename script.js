window.addEventListener('DOMContentLoaded', () => {
  const filterButtons = document.querySelectorAll('.kategori-buttons button');
  const artikelCards = document.querySelectorAll('.artikel-card');

  // Fitur filter berdasarkan kategori
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Hapus 'active' dari semua tombol
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      // Ambil kategori dari button
      const kategori = button.textContent.trim().toUpperCase();

      artikelCards.forEach(card => {
        const tag = card.querySelector('.tag').textContent.trim().toUpperCase();

        if (kategori === 'SEMUA' || tag === kategori) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // Fitur klik artikel dengan data-url
  artikelCards.forEach(card => {
    const url = card.getAttribute('data-url');
    if (url) {
      card.style.cursor = 'pointer'; // bonus UX
      card.addEventListener('click', () => {
        window.location.href = url;
      });
    }
  });
});
