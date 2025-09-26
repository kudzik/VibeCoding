#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');

console.log('🔍 Sprawdzanie plików przed commitem...\n');

try {
  // Pobierz staged pliki .md
  const stagedFiles = execSync('git diff --cached --name-only --diff-filter=ACM "*.md"', { encoding: 'utf8' })
    .trim()
    .split('\n')
    .filter(file => file && fs.existsSync(file));

  if (stagedFiles.length === 0) {
    console.log('✅ Brak plików markdown do sprawdzenia');
    process.exit(0);
  }

  console.log(`📝 Sprawdzanie ${stagedFiles.length} plików markdown:\n`);

  let hasErrors = false;

  // Sprawdź formatowanie prettier
  for (const file of stagedFiles) {
    try {
      execSync(`npx prettier --check "${file}"`, { stdio: 'pipe' });
      console.log(`✅ ${file} - formatowanie OK`);
    } catch (error) {
      console.log(`❌ ${file} - wymaga formatowania`);
      hasErrors = true;
    }
  }

  // Sprawdź markdownlint
  console.log('\n🔍 Sprawdzanie reguł markdown...\n');
  
  for (const file of stagedFiles) {
    try {
      execSync(`npx markdownlint "${file}"`, { stdio: 'pipe' });
      console.log(`✅ ${file} - markdown OK`);
    } catch (error) {
      console.log(`❌ ${file} - błędy markdown:`);
      console.log(error.stdout.toString());
      hasErrors = true;
    }
  }

  if (hasErrors) {
    console.log('\n💡 Napraw automatycznie: npm run precommit-fix');
    console.log('📝 Lub otwórz problematyczne pliki i popraw ręcznie\n');
    process.exit(1);
  }

  console.log('\n✅ Wszystkie pliki są poprawne!');
  
} catch (error) {
  console.error('❌ Błąd podczas sprawdzania:', error.message);
  process.exit(1);
}