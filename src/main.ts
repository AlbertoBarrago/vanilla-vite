import './style.css'
document.addEventListener('DOMContentLoaded', () => {
    const app = document.getElementById('app')!;

    const routes: {
        [key: string]: string;
    } = {
        '/': '<h1>Home Page</h1>',
        '/about': '<h1>About Page</h1>',
        '/contact': '<h1>Contact Page</h1>',
    };

    const render = (path: string) => {
        app.innerHTML = routes[path] || '<h1>404—Not Found</h1>';
    };

    window.onpopstate = () => render(window.location.pathname);

    document.addEventListener('click', (e: any) => {
        if (e.target?.tagName === 'A' && e.target?.href.startsWith(window.location.origin)) {
            e.preventDefault();
            const path = e.target.getAttribute('href');
            window.history.pushState({}, path, window.location.origin + path);
            render(path);
        }
    });

    render(window.location.pathname);
});
