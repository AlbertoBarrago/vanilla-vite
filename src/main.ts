import './style.css'
import home from "./routes/home.ts";
import about from "./routes/about.ts";
import contact from "./routes/contact.ts";
document.addEventListener('DOMContentLoaded', () => {
    const app = document.getElementById('app')!;


    const routes: {
        [key: string]: string;
    } = {
        '/': `${home()}`,
        '/about': `${about()}`,
        '/contact': `${contact()}`,
    };

    const render = (path: string) => {
        app.innerHTML = routes[path] || '<h1>404—Not Found</h1>';
    };

    window.onpopstate = () => render(window.location.pathname);

    document.addEventListener('click', (e: MouseEvent) => {
        const target = e.target as HTMLAnchorElement
        if (target.tagName === 'A' && target.href.startsWith(window.location.origin)) {
            e.preventDefault();
            const path = target.getAttribute('href');
            window.history.pushState({}, path!, window.location.origin + path);
            render(path!);
        }
    });

    render(window.location.pathname);
});
