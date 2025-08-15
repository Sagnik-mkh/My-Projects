# 🏷️ Tier List Creator

A simple **Tier List** web app where you can:
- Create new tiers with random background colors
- Add images via URL
- Drag-and-drop images between tiers
- Double-click images in tiers to move them back to the **non-tier** list

## 📸 Features
- **Add Tier** – Enter a tier name and click *Submit* to create a new tier row.
- **Random Colors** – Each new tier gets a unique random background color.
- **Add Image** – Paste an image URL to add it to the **non-tier** image list.
- **Drag & Drop** – Move images between tiers and the **non-tier** section.
- **Double Click** – Move images from a tier back to the non-tier list.

## 🛠️ How It Works
1. **Tier Creation**
   - The `tier-add-btn` click event reads the tier name, creates a new tier container, and initializes drop zones for it.
2. **Image Creation**
   - The `img-add-btn` click event reads the URL, creates an image container, and initializes it with drag and double-click behavior.
3. **Drag and Drop**
   - Drag events store the current dragged image in `currDragItem`.
   - Drop events append the dragged element to the new tier or section.
4. **Double Click**
   - On double-click, the image’s parent container is moved back to the non-tier section.

## 📂 Project Structure
.
├── index.html      # Main HTML file
├── style.css       # TailwindCSS styles
├── script.js       # JS logic for tiers, images, drag & drop
└── README.md       # Project documentation

## 🚀 Getting Started
1. Clone or download this repository.
2. Open `index.html` in your browser.
3. Start adding tiers and images!

## 💡 Notes
- The image URLs must be accessible.
- Drag-and-drop is implemented using HTML5 Drag & Drop API.