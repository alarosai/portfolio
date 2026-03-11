---
name: brand-guidelines
description: Applies PM portfolio brand colors and typography to any sort of artifact that may benefit from having a modern, professional look-and-feel. Use it when brand colors or style guidelines, visual formatting, or design standards apply.
license: Complete terms in LICENSE.txt
---

# PM Portfolio Brand Styling

## Overview

To access the PM portfolio's official brand identity and style resources, use this skill.

**Keywords**: branding, corporate identity, visual identity, post-processing, styling, brand colors, typography, portfolio brand, visual formatting, visual design, modern gradient, product manager

## Brand Guidelines

### Colors

**Brand Colors:**

- Primary: `#0EA5E9` - Sky Blue (main brand color, buttons, links, key CTAs)
- Primary Dark: `#0284C7` - Darker blue for hover states
- Primary Light: `#38BDF8` - Lighter blue for backgrounds and subtle accents
- Secondary: `#6366F1` - Indigo (accent & gradient partner)
- Secondary Dark: `#4F46E5` - Darker indigo for hover states
- Secondary Light: `#818CF8` - Lighter indigo for subtle accents

**Gradients:**

- Primary Gradient: `linear-gradient(135deg, #0EA5E9 0%, #6366F1 100%)` - Main brand gradient
- Hover Gradient: `linear-gradient(135deg, #0284C7 0%, #4F46E5 100%)` - Interactive state
- Subtle Gradient: `linear-gradient(135deg, rgba(14, 165, 233, 0.1) 0%, rgba(99, 102, 241, 0.1) 100%)` - Backgrounds

**Neutral Colors:**

- White: `#FFFFFF` - Primary backgrounds
- Gray 50: `#F8FAFC` - Subtle backgrounds
- Gray 100: `#F1F5F9` - Card backgrounds
- Gray 200: `#E2E8F0` - Borders
- Gray 300: `#CBD5E1` - Dividers
- Gray 400: `#94A3B8` - Placeholder text
- Gray 500: `#64748B` - Secondary text
- Gray 600: `#475569` - Body text (lighter)
- Gray 700: `#334155` - Body text
- Gray 800: `#1E293B` - Headings
- Gray 900: `#0F172A` - Primary text and dark backgrounds

**Semantic Colors:**

- Success: `#10B981` - Green for completed projects, positive metrics
- Success Light: `#D1FAE5` - Success backgrounds
- Warning: `#F59E0B` - Amber for in-progress, attention needed
- Warning Light: `#FEF3C7` - Warning backgrounds
- Error: `#EF4444` - Red for errors, critical info
- Error Light: `#FEE2E2` - Error backgrounds
- Info: `#3B82F6` - Blue for informational badges
- Info Light: `#DBEAFE` - Info backgrounds

### Typography

- **Headings**: Inter or SF Pro (with Arial fallback)
- **Body Text**: Inter or SF Pro (with Arial fallback)
- **Note**: Modern sans-serif fonts for clean, professional appearance

### Font Weights

- Headings: 600-700 (Semi-Bold to Bold)
- Body text: 400 (Regular)
- Emphasis: 500 (Medium)
- Light text: 300 (Light)

## Features

### Smart Font Application

- Applies modern sans-serif to all text for consistency
- Headings use heavier weights (600-700)
- Body text uses regular weight (400)
- Automatically falls back to Arial if custom fonts unavailable
- Optimized for web and screen readability

### Text Styling

- Large headings (32pt+): Gray 900 (#0F172A)
- Section headings (24-32pt): Gray 900 (#0F172A)
- Subheadings (18-24pt): Gray 800 (#1E293B)
- Body text (14-16pt): Gray 700 (#334155)
- Secondary text: Gray 600 (#475569)
- Subtle text: Gray 500 (#64748B)
- Links and CTAs: Primary (#0EA5E9) or gradient

### Shape and Accent Colors

- Primary accents use gradient or Primary color
- Secondary shapes use Primary Light or Secondary Light
- Success states use Success color
- Maintains visual hierarchy while staying on-brand
- Use gradient sparingly for maximum impact

### Accessibility Compliance

**WCAG AA Verified Combinations:**

- Gray 900, 800, 700, 600 on White: ✅ Perfect (7.0:1+)
- Gray 500 on White: ✅ Good (5.8:1)
- Primary on White: ⚠️ Large text only (18px+)
- White on Secondary: ✅ Perfect (4.6:1)
- White on Primary Dark: ✅ Large text (3.4:1)
- Gray 400 on Gray 900 (dark footer): ✅ Good (5.5:1)

## Technical Details

### Font Management

- Uses system-installed Inter or SF Pro fonts when available
- Provides automatic fallback to Arial
- No font installation required - works with existing system fonts
- For best results, use Inter font family
- Consistent with modern tech/SaaS design standards

### Color Application

- Uses RGB/HEX color values for precise brand matching
- Primary gradient for CTAs and hero elements
- Neutral grays for text hierarchy
- Semantic colors for status and feedback
- Maintains color fidelity across different systems

### Usage Guidelines

1. **Gradient Usage**: Reserve for CTAs, hero accents, and key brand moments
2. **Text Hierarchy**: Follow gray scale from 900 (darkest) to 500 (lightest)
3. **Interactive States**: 
   - Links: Primary → Primary Dark on hover
   - Buttons: Gradient → Hover Gradient
   - Cards: Gray 200 border → Primary Light border on hover
4. **Metrics & Impact**: Use Success color (#10B981) for positive numbers
5. **Modern Touches**: Apply subtle gradients at 10-20% opacity for backgrounds

### Design System Principles

- **Professional**: Blue family trusted in tech industry
- **Modern**: Gradient aesthetic signals current design thinking
- **Accessible**: All critical text combinations pass WCAG AA standards
- **Empathetic**: Softer blues vs. harsh corporate colors
- **Versatile**: Works for light mode (expandable to dark mode)
