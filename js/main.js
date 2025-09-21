// skills bar animation - creative aspect
document.addEventListener('DOMContentLoaded', function() {
    const skillBtn = document.getElementById('skill-btn');
    const skillContainer = document.getElementById('skill-container');
    
    if (skillBtn && skillContainer) {
        skillBtn.addEventListener('click', function() {
            if (skillContainer.style.display === 'none') {
                skillContainer.style.display = 'block';
                skillBtn.textContent = 'Hide Skills';
                
                const skillBars = document.querySelectorAll('.skill-bar');
                skillBars.forEach((bar, index) => {
                    const width = bar.getAttribute('data-width');
                    
                    setTimeout(() => {
                        bar.style.width = '0%';
                        bar.style.backgroundColor = '#0d6efd';
                        bar.style.transition = 'width 1s ease-in-out';
                        
                        setTimeout(() => {
                            bar.style.width = width + '%';
                        }, 100);
                    }, index * 200);
                });
            } else {
                skillContainer.style.display = 'none';
                skillBtn.textContent = 'Show My Tech Skills';
            }
        });
    }
});