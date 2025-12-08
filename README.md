# Illumi - Content Acquisition Dashboard

**Illumi** is a modern, high-performance dashboard designed for content acquisition teams to track deal flow, manage contracts, and analyze financial performance.

## Visual Identity: "The Editorial"

The application features a distinct **Editorial/Minimalist** design system (`v2.1`), blending premium aesthetics with functional clarity.

*   **Themes:** 
    *   **Light:** Warm, paper-like background (`#F5F4F0`) with sharp dark text.
    *   **Dark:** Deep, immersive charcoal backgrounds (`#0F0F0F`) with high-contrast text.
*   **Typography:** *Playfair Display* (Serif) & *Inter* (Sans-serif).
*   **Palette:** Curated accents (Emerald, Burgundy, Terracotta, Violet, Gold) used consistently across themes.

## Key Features

### 1. **Dashboard (`index.html`)**
*   **Deal Pipeline:** At-a-glance view of active negotiations.
*   **Priority Actions:** Stacked list of urgent tasks requiring attention.
*   **Quick Stats:** Key metrics like Active Deals and Total Value.

### 2. **Contract Management (`contracts.html`)**
*   **Responsive Data Grid:** Searchable and filterable table of all agreements.
*   **Horizontal Scrolling:** optimized for mobile viewing without data loss.
*   **Advanced Filtering:** Sort by Status, Type, and Region.

### 3. **Negotiation Workspace (`negotiations.html`)**
*   **Kanban Board:** Drag-and-drop style column layout (stacks vertically on mobile).
*   **Deal Cards:** Rich previews including probability, value, and assigned team.
*   **Interactive Modals:** Detailed views for managing specific deal stages.

### 4. **Analytics Suite (`analytics.html`)**
*   **Interactive Charts:** Bar and Line charts for spend analysis (using SVG).
*   **Category Distribution:** Visual breakdown of spend by content type.
*   **Responsive Layout:** Grids adapt seamlessly from 1 to 4 columns based on device size.

### 5. **Resources**
*   **Templates (`templates.html`):** Library of standard contract templates.
*   **Reports (`reports.html`):** Generated financial and compliance report repository.
*   **New Contract (`new-contract.html`):** Multi-step creation flow for new agreements.

## Mobile Responsiveness

The entire application is fully responsive, ensuring a seamless experience on tablets and mobile devices:
*   **Mobile Navigation:** Slide-out drawer menu with hamburger toggle.
*   **Adaptive Grids:** Layouts reflow automatically for vertical reading on smaller screens.
*   **Touch Optimizations:** Larger touch targets for buttons and form inputs.

## Tech Stack

*   **Core:** HTML5, Vanilla JavaScript (ES6+)
*   **Styling:** Tailwind CSS (via CDN) + Custom CSS Variables for theming.
*   **Icons:** Lucide Icons (Dynamic switching for dark mode).
*   **Fonts:** Google Fonts (Playfair Display, Inter).

## Deployment

Check it out! - https://illumi.up.railway.app/
