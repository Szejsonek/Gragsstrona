document.addEventListener('DOMContentLoaded', function() {
    // Load news dynamically
    const newsContainer = document.getElementById('newsContainer');
    const newsData = [
        {
            title: "Uroczystości Dnia Księstwa",
            date: "15 maja 2023",
            excerpt: "W tym roku obchody Dnia Księstwa odbędą się z szczególnym rozmachem. Zapraszamy wszystkich obywateli na główny plac stolicy.",
            image: "images/news1.jpg"
        },
        {
            title: "Nowy Marszałek Wojsk Gragasowych",
            date: "3 maja 2023",
            excerpt: "Generał Marcin Kowalski został mianowany nowym Marszałkiem Wojsk Gragasowych. Ceremonia odbyła się w Pałacu Książęcym.",
            image: "images/news2.jpg"
        },
        {
            title: "Otwarcie Muzeum Historii Księstwa",
            date: "22 kwietnia 2023",
            excerpt: "Po latach przygotowań, wreszcie otwarto nowoczesne Muzeum Historii Księstwa Gragasowego. Zapraszamy do zwiedzania!",
            image: "images/news3.jpg"
        }
    ];

    newsData.forEach(news => {
        const newsCard = document.createElement('div');
        newsCard.className = 'news-card';
        newsCard.innerHTML = `
            <img src="${news.image}" alt="${news.title}" class="news-image">
            <div class="news-content">
                <h3>${news.title}</h3>
                <p class="news-date">${news.date}</p>
                <p>${news.excerpt}</p>
            </div>
        `;
        newsContainer.appendChild(newsCard);
    });

    // Explore button functionality
    const exploreBtn = document.getElementById('exploreBtn');
    if (exploreBtn) {
        exploreBtn.addEventListener('click', function() {
            window.location.href = 'pages/historia.html';
        });
    }

    // Mobile menu toggle (would be added if we had a mobile menu)
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

// Functionality for military page
if (window.location.pathname.includes('wojskowosc.html')) {
    document.addEventListener('DOMContentLoaded', function() {
        const ranks = [
            {
                title: "Marszałek Gragasowy",
                description: "Najwyższy stopień wojskowy w Wielkim Księstwie Gragasowym. Marszałek odpowiada za całość sił zbrojnych i podlega jedynie Wielkiemu Księciu.",
                image: "images/marszalek.png"
            },
            {
                title: "Generał",
                description: "Stopień generalski przysługujący dowódcom armii. Generałowie odpowiadają za poszczególne rodzaje sił zbrojnych.",
                image: "images/general.png"
            },
            {
                title: "Pułkownik",
                description: "Dowódca pułku, podstawowej jednostki taktycznej wojsk lądowych. Odpowiada za szkolenie i gotowość bojową podległych jednostek.",
                image: "images/pulkownik.png"
            }
        ];

        const ranksContainer = document.getElementById('ranksContainer');
        if (ranksContainer) {
            ranks.forEach(rank => {
                const rankElement = document.createElement('div');
                rankElement.className = 'military-rank';
                rankElement.innerHTML = `
                    <img src="${rank.image}" alt="${rank.title}" style="float: left; margin-right: 20px; width: 100px; height: 100px; object-fit: cover; border-radius: 5px;">
                    <h3>${rank.title}</h3>
                    <p>${rank.description}</p>
                    <div style="clear: both;"></div>
                `;
                ranksContainer.appendChild(rankElement);
            });
        }
    });
}

// Functionality for history page (timeline)
if (window.location.pathname.includes('historia.html')) {
    document.addEventListener('DOMContentLoaded', function() {
        const timelineEvents = [
            {
                year: "1023",
                title: "Założenie Księstwa",
                description: "Wielki Książę Gragas I zjednoczył plemiona zamieszkujące te tereny i proklamował powstanie Księstwa Gragasowego."
            },
            {
                year: "1245",
                title: "Wojna z Królestwem Północy",
                description: "Trwająca 7 lat wojna zakończona zwycięstwem Gragasowych i przyłączeniem nowych terytoriów."
            },
            {
                year: "1567",
                title: "Złoty Wiek",
                description: "Okres rozkwitu gospodarczego i kulturalnego. Powstanie Akademii Gragasowej i rozwój sztuki."
            },
            {
                year: "1812",
                title: "Konstytucja Księstwa",
                description: "Wprowadzenie pierwszej konstytucji, która zreformowała system władzy i prawa obywatelskie."
            },
            {
                year: "1945",
                title: "Modernizacja",
                description: "Powojenna industrializacja i modernizacja kraju. Rozwój infrastruktury i przemysłu."
            }
        ];

        const timelineContainer = document.getElementById('timelineContainer');
        if (timelineContainer) {
            timelineEvents.forEach((event, index) => {
                const timelineItem = document.createElement('div');
                timelineItem.className = `timeline-item ${index % 2 === 0 ? 'left' : 'right'}`;
                timelineItem.innerHTML = `
                    <div class="timeline-content">
                        <h3>${event.year} - ${event.title}</h3>
                        <p>${event.description}</p>
                    </div>
                `;
                timelineContainer.appendChild(timelineItem);
            });
        }
    });
}
