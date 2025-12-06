# Illumi - Content Acquisition Dashboard

**Illumi** is a modern, high-performance dashboard designed for content acquisition teams to track deal flow, manage contracts, and analyze financial performance.

## 🎨 Visual Identity: "The Editorial"

The application features a distinct **Editorial/Minimalist** design system (`v2.0`), moving away from traditional SaaS aesthetics to a warm, premium, paper-like interface.

*   **Theme:** Warm Light (`#F9F8F6`)
*   **Typography:** *Playfair Display* (Serif) & *Inter* (Sans-serif)
*   **Palette:** Curated pastel accents (Purple, Pink, Teal, Brown) against sharp dark text.

## 🚀 Key Features

### 1. **Dashboard (`index.html`)**
*   **Visual Wave Chart:** A purely CSS-constructed visualization of contract value over time.
*   **Immediate Actions:** A prioritized list of tasks (e.g., expiring term sheets) with hover-state interactions.
*   **Negotiation Velocity:** Tracking the average time to close deals.

### 2. **Contract Management (`contracts.html`)**
*   **Editorial Data Grid:** A clean, spacious table design for browsing active agreements.
*   **Smart Filtering:** Filter by Region (Global, EMEA, APAC, NA) and Status (Active, Pending, Expiring).
*   **Status Badges:** Color-coded indicators using the custom pastel palette.

### 3. **Analytics Suite (`analytics.html`)**
*   **Performance Metrics:** Visual breakdown of acquisition spend vs. budget.
*   **Regional Distribution:** Progress bar visualizations for territory-based spending.
*   **Contract Lifecycle:** Donut chart breakdown of deals by stage.

## 🛠️ Technology Stack

*   **Core:** HTML5, Vanilla JavaScript (ES6+)
*   **Styling:** Tailwind CSS (via CDN) + Custom CSS Variables
*   **Icons:** Lucide Icons
*   **Fonts:** Google Fonts (Playfair Display, Inter)

## 📦 visual_overhaul_summary.md
For a detailed breakdown of the design changes from the previous "Hex.tech" version, see [visual_overhaul_summary.md](./visual_overhaul_summary.md).

## 🏃‍♂️ Running Locally

1.  Clone the repository.
2.  Start a local server:
    ```bash
    python -m http.server 8002
    ```
3.  Open `http://localhost:8002` in your browser.
