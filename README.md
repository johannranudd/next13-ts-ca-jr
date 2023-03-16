# Read before grading!!!

This project is made with Next.js version 13.2, Typescript and tailwind hosted on Vercel instead of Netlify. I have contacted teachers and gained permission to use this tech for this specific assignment.

The reason for this choice is because there is a demand for Next.js 13 and Typescript on the market, and the reason we go to school is to get a job.

Furthermore, Vercel seems to handle Next.js better than netlify, although it works fine on Netlify as well.
When it comes to use of a router, next.js has a slightly different routing system which is based on file location and name. Bellow is an older project to prove that i understand routing in normal React.js:

- Netlify link: https://react-cart-johann-ranudd.netlify.app/
- Github repo: https://github.com/johannranudd/cart

The cart is based on how many items with similar IDs are in the localstorage, instead of directly putting it in the localstorage and giving them an amountInCart property.
The reason for this choice is to avoid fetching and manipulating large amounts of data on initial render, and rather create the cart as the user enters the cart/checkout page.
If the API was much bigger this would save a lot of computing power.

---

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

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

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
