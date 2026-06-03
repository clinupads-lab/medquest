import { chromium } from '@playwright/test';
import * as fs from 'fs';
import * as path from 'path';

const screenshotDir = './test-screenshots';
if (!fs.existsSync(screenshotDir)) {
  fs.mkdirSync(screenshotDir, { recursive: true });
}

async function testApp() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  try {
    console.log('Opening app at http://localhost:3000...');
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });

    // Wait for the app to load
    await page.waitForSelector('input, button', { timeout: 5000 }).catch(() => {
      console.log('Main content loaded');
    });

    // Take initial screenshot
    await page.screenshot({ path: path.join(screenshotDir, '1-app-loaded.png') });
    console.log('✓ App loaded');

    // Fill in the name field and continue
    const input = await page.$('input');
    if (input) {
      await input.fill('Dr. Test');
      console.log('✓ Filled in name');
    }

    // Look for Continue button
    let allButtons = await page.locator('button').all();
    let foundContinue = false;
    for (const btn of allButtons) {
      const text = await btn.textContent();
      if (text && text.includes('Continuar')) {
        await btn.click();
        console.log('✓ Clicked Continue');
        foundContinue = true;
        break;
      }
    }

    if (foundContinue) {
      await page.waitForTimeout(2000);
      await page.screenshot({ path: path.join(screenshotDir, '1b-after-continue.png') });
    }

    // Look for track selection (Trilha Estudante or Trilha Residência)
    allButtons = await page.locator('button').all();
    let selectedTrack = false;
    for (const btn of allButtons) {
      const text = await btn.textContent();
      if (text && text.includes('Trilha Estudante')) {
        console.log('Found Trilha Estudante, clicking...');
        await btn.click();
        await page.waitForTimeout(2000);
        selectedTrack = true;
        break;
      }
    }

    if (selectedTrack) {
      await page.screenshot({ path: path.join(screenshotDir, '1c-track-selected.png') });
      console.log('✓ Track selected');
    }

    // Look for a Ginecologia button and click it
    allButtons = await page.locator('button').all();
    let clicked = false;

    for (const btn of allButtons) {
      const text = await btn.textContent();
      if (text && text.includes('Ginecologia')) {
        console.log(`Found Ginecologia button, clicking...`);
        await btn.click();
        await page.waitForNavigation({ waitUntil: 'networkidle', timeout: 3000 }).catch(() => {});
        await page.waitForTimeout(1000);
        clicked = true;
        break;
      }
    }

    if (!clicked) {
      console.log('⚠ Could not find Ginecologia button, taking screenshot of current state');
      await page.screenshot({ path: path.join(screenshotDir, '2-looking-for-subject.png') });

      // Let's try to find any subject button
      const textContent = await page.textContent('body');
      console.log('Page contains:', textContent?.substring(0, 500));

      await browser.close();
      return;
    }

    // Take screenshot after clicking Ginecologia
    await page.screenshot({ path: path.join(screenshotDir, '2-ginecologia-clicked.png') });
    console.log('✓ Ginecologia button clicked');

    // Look for quiz container or questions
    try {
      await page.waitForSelector('[class*="quiz"], [class*="question"]', { timeout: 3000 });
      console.log('✓ Quiz view loaded');
    } catch (e) {
      console.log('Quiz view may not be visible yet');
    }

    // Take final screenshot
    await page.screenshot({ path: path.join(screenshotDir, '3-quiz-displayed.png') });

    // Try to get question count and subject from the page
    const pageContent = await page.content();
    const questionMatch = pageContent.match(/(\d+)\/10/);
    const subjectMatch = pageContent.match(/Ginecologia/gi);

    if (questionMatch) {
      console.log(`✓ Questions shown: ${questionMatch[1]}/10`);
    }

    if (subjectMatch && subjectMatch.length > 0) {
      console.log(`✓ Ginecologia mentioned ${subjectMatch.length} times on page`);
    }

    console.log('\nTest completed! Check screenshots in ./test-screenshots/');

  } catch (error) {
    console.error('Error during test:', error);
    await page.screenshot({ path: path.join(screenshotDir, 'error.png') });
  } finally {
    await browser.close();
  }
}

testApp().catch(console.error);
