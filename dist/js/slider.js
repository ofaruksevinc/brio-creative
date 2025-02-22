document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.features-slide');
    let currentSlide = 0;

    // İlk slaytı aktif yap
    slides[0].classList.add('active');

    function nextSlide() {
        // Mevcut slaytı çıkış animasyonuyla gizle
        slides[currentSlide].classList.remove('active');
        slides[currentSlide].classList.add('exit');
        
        // Animasyon süresinden sonra exit sınıfını kaldır
        setTimeout(() => {
            slides[currentSlide].classList.remove('exit');
        }, 500);

        // Sonraki slayta geç
        currentSlide = (currentSlide + 1) % slides.length;
        
        // Yeni slaytı göster
        slides[currentSlide].classList.add('active');
    }

    // Her 3 saniyede bir slayt değiştir
    setInterval(nextSlide, 3000);
}); 