// Tax & Legal Guide - Main JS

const articles = [
  {
    title: "How to Start an LLC in 2026: The Complete Step-by-Step Guide",
    tag: "LLC Formation",
    category: "llc",
    excerpt: "Everything you need to know about forming an LLC in 2026 — from choosing a state to filing Articles of Organization, EIN, and operating agreements.",
    url: "articles/how-to-start-llc-2026.html",
    date: "May 29, 2026",
    readTime: "12 min read"
  },
  {
    title: "US Tax Filing Guide for Freelancers & Independent Contractors",
    tag: "Tax Guides",
    category: "tax",
    excerpt: "A complete walkthrough of tax obligations for freelancers — estimated quarterly taxes, Schedule C deductions, self-employment tax, and more.",
    url: "articles/freelancer-tax-guide-2026.html",
    date: "May 28, 2026",
    readTime: "14 min read"
  },
  {
    title: "10 Tax Deductions Every Small Business Owner Should Know",
    tag: "Save Money",
    category: "savemoney",
    excerpt: "Don't leave money on the table. Here are the most overlooked small business tax deductions that could save you thousands this year.",
    url: "articles/small-business-tax-deductions.html",
    date: "May 27, 2026",
    readTime: "8 min read"
  },
  {
    title: "IRS Audit Triggers: What Raises Red Flags (and How to Avoid Them)",
    tag: "IRS & Compliance",
    category: "irs",
    excerpt: "Learn the most common IRS audit triggers — and practical steps to reduce your audit risk while staying fully compliant with tax laws.",
    url: "articles/irs-audit-triggers-avoid.html",
    date: "May 29, 2026",
    readTime: "10 min read"
  },
  {
    title: "LLC vs S-Corp vs C-Corp: Which Business Structure Is Right for You?",
    tag: "Small Business",
    category: "business",
    excerpt: "A clear comparison of the three most popular business structures — tax implications, liability protection, costs, and which one fits your situation.",
    url: "articles/llc-vs-scorp-vs-ccorp-comparison.html",
    date: "May 29, 2026",
    readTime: "11 min read"
  },
  {
    title: "Understanding 1099 Forms: A Complete Guide for 2026",
    tag: "Tax Guides",
    category: "tax",
    excerpt: "Your ultimate guide to 1099 forms — 1099-NEC, 1099-MISC, 1099-K, and more. Who sends them, who gets them, and how to file them correctly.",
    url: "articles/1099-forms-guide-2026.html",
    date: "May 29, 2026",
    readTime: "9 min read"
  },
  {
    title: "Self-Employment Tax 2026: Complete Guide for Freelancers",
    tag: "Tax Guides",
    category: "tax",
    excerpt: "Everything freelancers and independent contractors need to know about self-employment tax — rates, calculations, deductions, quarterly payments, and filing.",
    url: "articles/self-employment-tax-2026-guide.html",
    date: "May 30, 2026",
    readTime: "10 min read"
  }
];

function loadArticles() {
  const container = document.getElementById('latest-articles');
  if (!container) return;

  articles.forEach(article => {
    const card = document.createElement('div');
    card.className = 'article-card';
    card.innerHTML = `
      <span class="tag">${article.tag}</span>
      <h3><a href="${article.url}">${article.title}</a></h3>
      <p>${article.excerpt}</p>
      <div class="meta">
        <span>${article.date}</span>
        <span>${article.readTime}</span>
      </div>
    `;
    container.appendChild(card);
  });

  // Category filter functionality
  document.querySelectorAll('.cat-tag').forEach(tag => {
    tag.addEventListener('click', function() {
      document.querySelectorAll('.cat-tag').forEach(t => t.classList.remove('active'));
      this.classList.add('active');
    });
  });
}

document.addEventListener('DOMContentLoaded', loadArticles);
