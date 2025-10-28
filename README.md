# 🎀 Ultra-Cute Birthday Card Website 🎂

A magical, pastel, animated birthday website built with React, Tailwind CSS, and Framer Motion.

## ✨ Features

- **Dreamy Pastel Aesthetic**: Soft pink, lavender, cream, baby blue, mint, and gold shimmer colors
- **Hero Section**: Full-screen gradient with floating balloons, bows, and typewriter animation
- **Live Age Counter**: Real-time counter showing years, months, days, hours, minutes, and seconds since April 1, 2005
- **Interactive Cake**: Clickable candles that blow out with sparkle effects and confetti burst
- **Surprise Gift Modal**: Animated gift box that opens with floating hearts
- **Warm Wishes Card**: Heartfelt messages with floating decorations
- **Particle Effects**: Drifting sparkles, hearts, and stars throughout the page
- **Custom Cursor**: Heart cursor with sparkle trail
- **Click Hearts**: Click anywhere to spawn floating hearts
- **Smooth Animations**: Framer Motion spring animations for bouncy, soft feel

## 🚀 Getting Started

### Install Dependencies

```powershell
npm install
```

### Run Development Server

```powershell
npm run dev
```

Open your browser to `http://localhost:5173`

### Build for Production

```powershell
npm run build
```

## 🎨 Customization

### Change Birth Date

Edit the birth date in `src/components/Sections/AgeCounter.jsx`:

```javascript
const birthDate = '2005-04-01'; // Change to desired date
```

### Update Name

Edit the title in `src/components/Sections/HeroSection.jsx`:

```javascript
<h1>🎀 Happy Birthday [Name]! 🎂</h1>
```

### Customize Messages

Edit messages in `src/components/Sections/WishesCard.jsx`

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop (1920px+)
- Tablet (768px - 1919px)
- Mobile (320px - 767px)

Particle count automatically adjusts for performance on smaller devices.

## 🎭 Technologies Used

- **React 18** - UI framework
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Custom SVG Components** - Decorative elements

## 💖 Made with Love

Created as a special digital birthday card experience.

Enjoy! 🌸✨
