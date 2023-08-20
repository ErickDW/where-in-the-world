
<h1 align="center">Where in the world?</h1>
<p align="center">
  <svg aria-label="Next.js logomark" class="next-mark_root__iLw9v" height="180" role="img" viewBox="0 0 180 180" width="180"><mask height="180" id=":R0:mask0_408_134" maskUnits="userSpaceOnUse" style="mask-type:alpha" width="180" x="0" y="0"><circle cx="90" cy="90" fill="black" r="90"></circle></mask><g mask="url(#:R0:mask0_408_134)"><circle cx="90" cy="90" data-circle="true" fill="black" r="90"></circle><path d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z" fill="url(#:R0:paint0_linear_408_134)"></path><rect fill="url(#:R0:paint1_linear_408_134)" height="72" width="12" x="115" y="54"></rect></g><defs><linearGradient gradientUnits="userSpaceOnUse" id=":R0:paint0_linear_408_134" x1="109" x2="144.5" y1="116.5" y2="160.5"><stop stop-color="white"></stop><stop offset="1" stop-color="white" stop-opacity="0"></stop></linearGradient><linearGradient gradientUnits="userSpaceOnUse" id=":R0:paint1_linear_408_134" x1="121" x2="120.799" y1="54" y2="106.875"><stop stop-color="white"></stop><stop offset="1" stop-color="white" stop-opacity="0"></stop></linearGradient></defs></svg>
</p>

<p align="center">
  Explore the world with "Where in the World," a sample project that demonstrates how to consume an external API. This project allows you to view partial information about each country on the main page and access additional details by clicking on individual country items.
</p>


## Proposed Architecture

The project follows a clean architecture aiming to maintain a clear separation of concerns and facilitate maintenance and scalability. Below are the key layers and components of the architecture:

### Presentation Layer (UI)

- The `Tailwind CSS` framework is used for composing the page layout.
- The `NextUI` library is employed to style functional components like buttons, inputs, dropdowns, etc., customized to the project's style.

### Components Layer

- The `components` folder houses global components that can be reused throughout the project.
- In some pages, specific components are located in separate folders. Components that accept props have `.props` files describing required input data.

### Pages and Routes Layer

- The `app` folder contains the project's pages and routes.
- Some pages have their own internal components and manage presentation logic.

### Data Layer

- An internal API is implemented in the frontend to consume backend microservices.
- The `utils` folder contains general-purpose functions used throughout the project, with the requirement of being useful for at least two pages.
- Within the `utils` folder, you'll also find the `mocks` and `interfaces` folders.

### Themes and Customization Layer

- The `themes` folder includes custom CSS files for light and dark themes, allowing visual changes based on user preference.

### Configuration and Management

- The `.env` file is provided to manage environment variables.
- The `routes` folder contains a `routes` file that maps project names and routes.

## Approach to Solving the Challenge

1. **Clean Architecture:** Implemented an architecture that separates concerns, enhancing modularity and maintainability.
2. **Microservices and Internal API:** Established an API in the frontend for communication with backend microservices.
3. **Component Reusability:** Designed reusable components following SOLID principles.
4. **Custom Styling:** Used `Tailwind CSS` and `NextUI` for consistent and modern styles.
5. **Efficient Organization:** Folder structure designed for intuitive navigation.
6. **Theme Management:** Provided custom styles for light and dark themes.
7. **Utilities and General Functions:** Centralized general-purpose functions in the `utils` folder.
8. **Future-Proof Routing:** Prepared a route scheme for potential project growth.
## Installation

```bash
npm install
# or
npm i
```
## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
