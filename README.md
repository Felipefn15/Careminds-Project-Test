```markdown
# 💼 Careminds Investment Dashboard

Welcome to the Careminds technical challenge repository!

This project is an investment dashboard built with **React** and **Next.js**, designed to visualize mock financial data. The application was developed as part of the Careminds selection process to demonstrate skills in component architecture, data handling, and UI development.

## 📌 Project Overview

The application provides a clean and functional interface where users can:

- View a list of **wallets** with summarized financial information.
- Click on a wallet to display its **assets** and additional data.
- Navigate smoothly between views using well-structured components.

## 📁 Provided Assets

The challenge included:

- `portfolio.json`: a file containing mock investment data (three different wallets and their respective assets).
- `mockup.png`: a reference user interface layout to guide design and UX decisions.

## 🚀 Features

- ⚙️ **Built with Next.js** for server-side rendering and routing.
- 🧩 **Component-based architecture** using React.
- 🔄 **Dynamic data rendering** from a local JSON file.
- 🎨 **Responsive layout** inspired by the provided mockup (with a few UX/UI improvements).
- ♻️ **Reusable components** for scalability and readability.

## 📹 Demo Video

A short demo video (under 5 minutes) is available, showcasing:

1. My thought process and architectural decisions.
2. An overview of the code structure.
3. The app running in the browser.

## 🏗️ Project Structure

```
📂 src
 ┣ 📂 components
 ┃ ┣ 📄 WalletList.tsx
 ┃ ┣ 📄 WalletCard.tsx
 ┃ ┗ 📄 AssetList.tsx
 ┣ 📂 data
 ┃ ┗ 📄 portfolio.json
 ┣ 📂 pages
 ┃ ┣ 📄 index.tsx
 ┃ ┗ 📄 [walletId].tsx
 ┗ 📂 styles
    ┗ 📄 globals.css
```

## ⏱️ Estimated Time

Total development time: **~2 hours**

## 📦 Getting Started

To run the project locally:

```bash
# Clone the repository
git clone https://github.com/Felipefn15/Careminds-Project-Test.git

# Install dependencies
npm install

# Run the development server
npm run dev
```
[Demo](https://v0-careminds-task.vercel.app/)

```
