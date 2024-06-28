import './style.css'
document.addEventListener('DOMContentLoaded', () => {
    const app = document.getElementById('app')!;

    const navigation = () => `
      <nav>
          <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
    `

    const footer = () => `
        <footer>
            <p>Copyright 2021</p>
        </footer>
     `

    const template = (content: string) => `
    ${navigation()} ${content} ${footer()}`;

    const routes: {
        [key: string]: string;
    } = {
        '/': `${template('<h1>Home Page</h1>')}`,
        '/about': `${template('<h1>About Page</h1>')}`,
        '/contact': `${template('<h1>Contact Page</h1>')}`,
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
