# Codex Build Prompt — Saudi Masala Supplier Website

You are building a premium, mobile-responsive website for **Saudi Masala**, a Saudi Arabia–based importer, supplier, and wholesale distributor of Indian/Kerala spice brands such as Eastern, Double Horse, Aachi, MTR, etc.

Use the provided image assets in this package as the visual reference. The file `01_full_design/saudi_masala_full_homepage_mockup.png` is the full approved design direction. Recreate this as a real responsive website, not just an image.

## Main Goal
Build a polished B2B spice supplier website that helps Saudi Masala collect enquiries from supermarkets, hypermarkets, grocery stores, restaurants, hotels, cafeterias, distributors, and wholesale buyers across Saudi Arabia.

The company is **not manufacturing its own spice packets**. Position it as a trusted **importer / distributor / supplier of authentic Indian and Kerala spice brands**.

## Tech Expectations
- Use clean HTML/CSS/JS or the current project framework if already set up.
- If using React/Next.js, create reusable components for Header, Hero, BrandCards, Categories, ProductCards, WhyChooseUs, Coverage, CTA, Footer, WhatsAppChatbot.
- Fully responsive for desktop, tablet, and mobile.
- Use semantic HTML and SEO-friendly structure.
- Use optimized images from the provided folders.
- Keep the design close to the approved mockup.

## Design Style
- Premium supplier/wholesale website.
- Warm spice colors: deep maroon/red, saffron yellow, cream, warm brown, subtle Saudi green.
- Clean typography, rounded cards, subtle shadows, smooth hover effects.
- Avoid clutter. Keep spacing professional.
- Make it look trustworthy and suitable for B2B supply.

Suggested colors:
- Deep Maroon: #7A170F or #8F1D13
- Spice Red: #B72217
- Saffron Gold: #D99A24
- Cream Background: #FFF7EA
- Dark Brown: #2B160D
- Saudi Green Accent: #176A3A
- Border Cream: #E9D5B8

## Required Homepage Sections

### 1. Top Utility Bar
Create a thin top bar with:
- Imported Indian Spices
- Wholesale Supply
- Saudi-wide Delivery
- Phone: +966 55 123 4567
- Language switch: EN | العربية

### 2. Header / Navigation
Logo text: **SAUDI MASALA**
Subline: **Indian & Kerala Spice Brands Supplier in Saudi Arabia**
Navigation:
- Home
- Brands
- Categories
- Wholesale
- About Us
- Contact Us
CTA button: **Get Wholesale Quote**

Mobile:
- Use hamburger menu.
- Sticky header on scroll.
- Menu should slide down or slide from right smoothly.

### 3. Hero Section
Headline:
**Trusted Indian Spice Brands. Supplied Across Saudi Arabia.**

Subtext:
Your reliable partner for authentic Indian & Kerala spice brands. Supplying supermarkets, grocery stores, restaurants, hotels and bulk buyers across Riyadh, Jeddah, Dammam and beyond.

Buttons:
- View Brands
- Request Catalogue

Feature badges:
- 100% Authentic Imported Spices
- Trusted by 500+ Retailers
- Competitive Wholesale Prices
- On-time Delivery Across KSA

Hero visual:
Use the hero image/product-spice visual from `02_section_images/02_hero_visual_products_spices.png` or recreate using the separate product assets. The hero must show branded spice packs and spice bowls.

### 4. Featured Brands
Title: **Featured Brands**
Cards:
- Eastern — Pure Spices
- Double Horse — Kerala’s Trusted Taste
- Aachi — The Mother of Good Taste
- MTR — Pure & Perfect
- Optional: Kitchen Treasures / Melam / Nirapara if needed

Use the brand tile images in `03_brand_tiles/` as visual references.

### 5. Shop by Category
Title: **Shop by Category**
Categories:
- Chilli Powder
- Turmeric Powder
- Coriander Powder
- Garam Masala
- Biriyani Masala
- Meat / Fish Masala

Each card should have an image, icon badge, category name, and “View Products →”.
Use assets in `04_category_cards/`.

### 6. Popular Products / Fast Moving Brands
Title: **Popular Products / Fast Moving Brands**
Show product cards with:
- Product pack image
- Product name
- Pack size
- From SAR price
- Wholesale Price label
- Enquire Now button

Products:
- Eastern Chilli Powder — 100g — From SAR 3.25
- Eastern Turmeric Powder — 100g — From SAR 2.85
- Eastern Coriander Powder — 100g — From SAR 2.95
- Double Horse Biriyani Masala — 100g — From SAR 3.75
- Double Horse Garam Masala — 50g — From SAR 3.25
- Aachi Chicken Masala — 100g — From SAR 3.50

Use assets in `05_product_cards/`.

### 7. Why Choose Saudi Masala
Benefits:
- Genuine & Trusted Brands
- Import Expertise
- Competitive Bulk Pricing
- Fast Delivery Across Saudi Arabia
- Retail & Restaurant Supply

Use simple line icons or lucide icons. Add subtle spice decorations, but keep it clean.

### 8. Coverage Section
Title: **Supplying Across Saudi Arabia**
Text:
Saudi Masala is a leading importer and wholesaler of Indian & Kerala spice brands, serving businesses across the Kingdom.

Cities:
- Riyadh
- Jeddah
- Dammam
- All Major Cities

Add a Saudi map-style visual or simple coverage cards.
Stats:
- 500+ Happy Business Clients
- 1000+ Retail Outlets Served
- 50+ Product SKUs Available
- 98% On-time Delivery Rate

### 9. Bulk Order CTA
Title:
**Need a Bulk Order or Dealership?**
Text:
Partner with Saudi Masala for authentic Indian spice brands and grow your business with us.

Buttons:
- Request Wholesale Quote
- Download Product Catalogue

### 10. Footer
Include:
- Logo and description
- Contact number
- Email: sales@saudimasala.com
- Location: Riyadh, Kingdom of Saudi Arabia
- Quick links
- Categories
- Popular brands
- Email subscribe field
- Social icons

## Mobile Responsiveness Requirements
- Hero should stack: text first, image second.
- Product cards should become 2 columns on tablet and 1 column on small mobile.
- Category cards should be swipeable horizontally on mobile or 2-column grid.
- Header should become sticky mobile header with hamburger.
- Buttons must be large enough for touch.
- Keep font sizes readable:
  - Mobile hero title: 34–42px depending on width
  - Body: 15–17px
  - Buttons: minimum 44px height
- Avoid horizontal overflow.
- Images must use `max-width: 100%` and proper object-fit.

## Scroll-Based Animation
Add smooth, premium animations:
- Use IntersectionObserver or Framer Motion / GSAP if available.
- Hero text fades up on load.
- Hero product image gently scales/fades in.
- Brand cards fade up with stagger.
- Category cards fade up with stagger.
- Product cards fade up with stagger.
- Stats count up when visible.
- CTA band fades in from bottom.
- Keep animations subtle and fast, not distracting.

Suggested animation timing:
- Duration: 500–800ms
- Easing: cubic-bezier(0.22, 1, 0.36, 1)
- Stagger: 80–120ms

## Smooth Scrolling
- Enable smooth scrolling for anchor links.
- Header links should scroll to sections.
- Add offset for sticky header.
- Add active state for current section if possible.

## WhatsApp Chatbot / Enquiry Flow
Add a floating WhatsApp chatbot button at bottom-right.

Behavior:
1. Floating WhatsApp button visible on all pages.
2. On click, open a small chat-style panel, not immediately redirect.
3. Panel title: **Saudi Masala Enquiry**
4. Show quick options:
   - Wholesale Price List
   - Product Catalogue
   - Bulk Order Enquiry
   - Restaurant / Hotel Supply
   - Become a Dealer
5. When user clicks an option, open WhatsApp with a pre-filled message.

Use this number placeholder:
`+966551234567`

Example WhatsApp message:
Hello Saudi Masala, I am interested in wholesale spice supply. Please share the product catalogue and price list.

For each product card, “Enquire Now” should open WhatsApp with product-specific message:
Hello Saudi Masala, I am interested in [Product Name]. Please share wholesale price and availability.

## Enquiry Form
Add a simple B2B enquiry form section or modal:
Fields:
- Name
- Company Name
- Phone / WhatsApp
- City
- Business Type dropdown: Supermarket, Grocery Store, Restaurant, Hotel, Distributor, Other
- Interested Products
- Message

On submit:
- If backend is not available, redirect to WhatsApp with all details in pre-filled message.
- Also keep form validation.

## SEO Requirements
Use proper meta title and description.

Meta title:
Saudi Masala | Indian & Kerala Spice Supplier in Saudi Arabia

Meta description:
Saudi Masala supplies authentic Indian and Kerala spice brands including chilli powder, turmeric powder, coriander powder, biriyani masala and garam masala to supermarkets, restaurants and wholesale buyers across Saudi Arabia.

Use H1 only once in hero.
Use descriptive alt text for images.
Use clean URLs/anchors.

## Performance Requirements
- Compress images where possible.
- Use lazy loading for below-the-fold images.
- Avoid heavy animation libraries unless already installed.
- Keep Lighthouse mobile performance high.

## Final Output Expected
Build the homepage exactly in this supplier-focused direction, using the provided image assets. The result should look premium enough to share with a Saudi-based wholesale spice supplier client for approval and development.
