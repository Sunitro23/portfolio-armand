"""Regenerate both PDFs from current portfolio content: python3 generate-cv.py.
Requires Playwright and its Chromium browser (playwright install chromium).
"""
import os
from pathlib import Path
from playwright.sync_api import sync_playwright

root = Path(__file__).resolve().parent
with sync_playwright() as playwright:
    options = {'executable_path': os.environ['CHROMIUM_PATH']} if os.environ.get('CHROMIUM_PATH') else {}
    browser = playwright.chromium.launch(**options)
    page = browser.new_page()
    page.goto((root / 'index.html').as_uri())
    for language in ('fr', 'en'):
        page.select_option('#language', language)
        html = page.evaluate('''() => {
            const doc = document.implementation.createHTMLDocument('');
            buildCvDocument(doc);
            return '<!doctype html>' + doc.documentElement.outerHTML;
        }''')
        cv = browser.new_page()
        cv.set_content(html)
        cv.pdf(path=str(root / 'assets/documents' / f'CV_Armand_{language}.pdf'),
               prefer_css_page_size=True, display_header_footer=False, tagged=True)
        cv.close()
    browser.close()
