# Job Copilot 🎯
**An AI-powered job search platform that treats your job search like a product problem.**

🔗 **Prototype demo:** [myjobcopilot.lovable.app](https://myjobcopilot.lovable.app)

> ⚠️ **Note:** This is a product prototype built to explore UX, information architecture, and AI-integrated workflows. Authentication and live data persistence are not yet implemented. The demo showcases the product vision and design — not a production-ready system.

---

## Why I built this

Job searching is a high-stakes, multi-threaded operation — and most people manage it with a spreadsheet and good intentions. Between tracking applications, tailoring resumes for ATS systems, preparing for three different interview formats, and knowing who in your network to activate, the operational overhead is enormous.

I built Job Copilot during my own job search after leaving Walmart. I wanted to apply the same systems thinking I'd used to build enterprise platforms — unified data, clear feedback loops, actionable signals — to the job search itself. One place. One source of truth. AI handling the repetitive analysis so I could focus on actual preparation and real conversations.

---

## What it does

### 📊 Dashboard
A real-time command center for your entire job search pipeline. Tracks:
- **ATS Success Rate** — how well your resume passes automated screening
- **Interview Conversion Rate** — first-round rate from applications submitted
- **Offer Rate** — full-loop conversion
- **Median Response Time** — how long companies are taking to respond
- **Job Match Analysis** — profile match % across target companies, visualized
- **Job Search Readiness Score** — composite score across resume, network, and interview prep

### 📄 Resume Optimization
- Upload a master resume as your base
- Get scored across Keywords, Format, and Content Quality
- ATS optimization tab surfaces gaps before you apply
- Template library for tailoring to specific roles

### 💼 Job Opportunities
- Matched job listings ranked by profile fit (Skills, Experience, Location)
- Average match rate across tracked opportunities
- One-click job tracking directly from the opportunity view
- Search and filter by company, role, or keywords

### 🎤 Interview Prep
Three interview formats, each with structured guidance:
- **Behavioral** — STAR framework with practice questions by category (Leadership, Decision Making, etc.)
- **Product Sense** — Product thinking and design questions
- **Product Analytical** — Metrics, experimentation, and data questions

### 🤝 Network Analysis
- Track past connections by role and company
- Identify PM connections relevant to target companies
- "Who to Connect" recommendations based on target roles
- Direct messaging prompts to reactivate dormant relationships

---

## What I learned building it

This project was as much an exercise in AI-native product design as it was a personal tool. A few things stood out:

**The dashboard is the hardest screen to design.** It's tempting to show everything. The real PM decision is choosing which 4 numbers matter most and building the information hierarchy around them. ATS score, interview conversion, offer rate, and response time ended up being the right four — they map to the actual funnel.

**Prompt design is product design.** The quality of AI-generated interview questions and resume feedback depended entirely on how well the inputs were structured. Poorly framed prompts produced generic outputs. This is just UX with different primitives — the same discipline applies.

**Scope is a feature.** The first version tried to automate too much. Cutting back to focus on the core tracking, scoring, and prep loop made the product significantly more usable. The Settings module is deliberately staged for a later version.

**People don't want a tool — they want confidence.** The Job Search Readiness score (78% overall, broken down by Resume/Network/Interview Prep) wasn't a technical decision. It was a product decision to give users a single number they could act on, rather than a list of tasks to complete.

---

## Tech stack

Built with **Lovable**, **React**, **TypeScript**, **Supabase**, **Tailwind CSS**, and **shadcn-ui**.

Designed, prompted, and iterated by a product manager — not an engineer.

---

## Status

**Prototype** — UI and product architecture complete. Authentication and live data persistence are in progress. Built to validate the product concept and demonstrate AI-native PM workflow thinking.

---

## About the builder

Enterprise PM with 8+ years at Walmart and Meta, specializing in large-scale platform modernization, data architecture, and AI-integrated product design. This project is part of a deliberate transition into AI-native product development.

[LinkedIn](https://www.linkedin.com/in/lan-yun/) · [GitHub](https://github.com/Lanyun009)
