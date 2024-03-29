# Please read before grading


This project is made with Next.js version 13.2, Typescript and tailwind hosted on Netlify and Vercel(recomended). I have contacted teachers and gained permission to use this tech for this specific assignment.

The reason for this choice is because there is a demand for Next.js 13 and Typescript on the market.

- LINK TO PROJECT VERCEL: https://next13-ts-ca-jr.vercel.app/
- LINK TO PROJECT NETLIFY: https://js-frameworks-ca-jr.netlify.app/
- LINK TO GITHUB: https://github.com/johannranudd/next13-ts-ca-jr

Furthermore, Vercel seems to handle Next.js better than Netlify, although it works fine on Netlify as well. When it comes to use of a router, next.js has a slightly different routing system which is based on file location and name. 

The cart on the checkout/cart page is based on how many items with similar IDs are in the localstorage instead of directly putting the fetched data in the localstorage and giving them an amountInCart property. The reason for this choice is to avoid fetching and manipulating large amounts of data on initial render, and rather create the cart as the user enters the cart/checkout page. If the API was much bigger this would save a lot of computing power.

-------------------------------------------------------------------------------------------------------------
Bellow is an older project to prove that i understand routing in normal React.js and styled components:

- Netlify link: https://react-cart-johann-ranudd.netlify.app/
- Github repo: https://github.com/johannranudd/cart


## Getting Started

### Installing


1. Clone the repo:

```bash
git clone https://github.com/johannranudd/next13-ts-ca-jr.git
```

2. Install the dependencies:

```
npm install
```

### Running


To run the app, run the following commands:

```bash
npm run start
```
