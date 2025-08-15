# 🧮 Calculator App

A simple, responsive calculator built with **HTML**, **JavaScript**, and **Tailwind CSS**.  
It supports basic arithmetic operations and has smooth button interaction styles.

---

## 🚀 Features

- **Basic operations**: Addition, subtraction, multiplication, division, and percentage.
- **Clear (AC)**: Resets the input.
- **Delete (DEL)**: Removes the last character.
- **Chained operations**: Perform multiple calculations without resetting.
- **Responsive UI**: Styled with Tailwind CSS for a modern look.
- **Button interaction effects**: Changes color on click/hover for a better user experience.

---

## 🛠️ Tech Stack

- **HTML5** – Structure of the calculator.
- **Tailwind CSS** – Styling and responsiveness.
- **Vanilla JavaScript (ES6)** – Logic for calculations and interactions.

---

## 📂 Project Structure

.
├── src/
│ ├── index.css # Tailwind CSS file
│ ├── Script.js # Calculator logic
├── index.html # Main HTML page
└── README.md # Project documentation

## 🎯 Usage

- Click on **number buttons** to input numbers.
- Click on **operator buttons** (`+`, `-`, `*`, `/`, `%`) to add operations.
- Click `=` to evaluate the expression.
- Click `AC` to reset everything.
- Click `DEL` to remove the last digit/operator.

---

## ⚙️ JavaScript Overview

**Key functions in `Script.js`:**

- `addOperation(value)` → Adds numbers/operators to the current expression.
- `resetOperation()` → Clears the entire input.
- `setOperation(value)` → Sets the input to a specific value (used after evaluation).
- `onClick()` / `offClick()` → Handles button press visual feedback.

**Event listeners for:**

- Click (numbers, operators, equals, clear, delete)
- Hover & mouse press effects

---

## 🎨 Tailwind Styling Highlights

- **Rounded buttons**: `rounded-xl`
- **Hover effects**: `hover:bg-fmediumgray`
- **Color theme**: Custom Tailwind color palette (`fwhite`, `fdarkgray`, `fdarkturquoise`, etc.)
- **Shadow effects**: `shadow-lg`, `shadow-sm`

## 📸 Preview

_(Include a screenshot here)_  
Example:  
<img src="./src/screenshots/Screenshot%202025-08-15%20at%204.39.13 PM.png" alt="Calculator Preview" width="300">
<img src="./src/screenshots/Screenshot 2025-08-15 at 4.39.24 PM.png" alt="Calculator Preview" width="300">
