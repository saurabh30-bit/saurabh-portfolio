document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('themeToggle');
    const greetingElement = document.getElementById('greeting');
    
    // --- Theme Handling ---
    // Check for saved theme or system preference
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    const setTheme = (theme) => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    };

    if (savedTheme) {
        setTheme(savedTheme);
    } else if (systemPrefersDark) {
        setTheme('dark');
    } else {
        setTheme('light');
    }

    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        setTheme(currentTheme === 'dark' ? 'light' : 'dark');
    });

    // --- Dynamic Greeting ---
    const updateGreeting = () => {
        const hour = new Date().getHours();
        let greeting = '';
        let emoji = '';

        if (hour >= 5 && hour < 12) {
            greeting = 'Good Morning!';
            emoji = '🌅';
        } else if (hour >= 12 && hour < 17) {
            greeting = 'Good Afternoon!';
            emoji = '☀️';
        } else if (hour >= 17 && hour < 21) {
            greeting = 'Good Evening!';
            emoji = '🌇';
        } else {
            greeting = 'Good Night!';
            emoji = '🌙';
        }

        greetingElement.textContent = `${greeting} ${emoji}`;
    };

    updateGreeting();
    // Update greeting every minute
    setInterval(updateGreeting, 60000);
});
