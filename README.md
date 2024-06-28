# Vanilla SPA Boilerplate

This is a boilerplate project for building a Single Page Application (SPA) using vanilla JavaScript and Vite as the build tool. It provides a basic setup for handling client-side routing and rendering, similar to how React or Angular handle it, but without using a full-fledged framework.

## Features

- **Vite**: A modern, fast, and lightweight build tool for development and production.
- **Client-side Routing**: Handles navigation and URL changes without full page reloads.
- **Rendering**: Renders different views based on the current URL path.
- **History API**: Utilizes the `history.pushState` API for updating the browser's URL and history.

## How it Works

1. The boilerplate sets up a click event listener on the document to handle navigation. When a user clicks on an anchor (`<a>`) tag with an internal URL (same origin), the default link behavior is prevented, and the following steps are taken:
    - The `href` attribute of the clicked link is extracted.
    - The browser's history is updated using `history.pushState` with the new URL path.
    - A custom `render` function is called, passing the new URL path as an argument.
2. The `render` function is responsible for rendering the appropriate content based on the provided URL path. In this boilerplate, the `render` function is just a placeholder and needs to be implemented according to your application's requirements.

Here's a simplified version of the code that handles the client-side routing:

```typescript
    document.addEventListener('click', (e: MouseEvent) => {
        const target = e.target as HTMLAnchorElement;
        if (target?.tagName === 'A' && target?.href.startsWith(window.location.origin)) {
            e.preventDefault();
            const path = target.getAttribute('href');
            window.history.pushState({}, path, window.location.origin + path);
            render(path);
        }
    });
``` 

# Vanilla SPA Boilerplate

This is a boilerplate project for building a Single Page Application (SPA) using vanilla JavaScript and Vite as the build tool. It provides a basic setup for handling client-side routing and rendering, similar to how React or Angular handle it, but without using a full-fledged framework.

## Features

- **Vite**: A modern, fast, and lightweight build tool for development and production.
- **Client-side Routing**: Handles navigation and URL changes without full page reloads.
- **Rendering**: Renders different views based on the current URL path.
- **History API**: Utilizes the `history.pushState` API for updating the browser's URL and history.

## How it Works

1. The boilerplate sets up a click event listener on the document to handle navigation. When a user clicks on an anchor (`<a>`) tag with an internal URL (same origin), the default link behavior is prevented, and the following steps are taken:
   - The `href` attribute of the clicked link is extracted.
   - The browser's history is updated using `history.pushState` with the new URL path.
   - A custom `render` function is called, passing the new URL path as an argument.
2. The `render` function is responsible for rendering the appropriate content based on the provided URL path. In this boilerplate, the `render` function is just a placeholder and needs to be implemented according to your application's requirements.

Here's a simplified version of the code that handles the client-side routing:

``` typescript
    document.addEventListener('click', (e: MouseEvent) => {
        const target = e.target as HTMLAnchorElement;
        if (target?.tagName === 'A' && target?.href.startsWith(window.location.origin)) {
            e.preventDefault();
            const path = target.getAttribute('href');
            window.history.pushState({}, path, window.location.origin + path);
            render(path);
        }
    });
```

