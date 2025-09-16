# Bezpieczeństwo i zgodność z regulacjami

**Prompt:**  
Przeanalizuj poniższy projekt aplikacji oraz środowisko wdrożeniowe i wygeneruj kompleksowy plan audytu bezpieczeństwa:

1. Zawsze uwzględnij zgodność z przepisami RODO/GDPR, metody zarządzania zgodą użytkownika oraz ochronę danych osobowych i lokalizacyjnych.
2. Zidentyfikuj używany stack technologiczny (frontend, backend, baza danych, hosting, CI/CD, system operacyjny).
3. Oceń ryzyka związane z dostępem zdalnym przez RDP (Remote Desktop Protocol), w tym:
   - kradzież poświadczeń,
   - brak widoczności sesji,
   - ruch lateralny w sieci,
   - nieautoryzowany dostęp do zasobów.
4. Zaproponuj środki zaradcze i narzędzia do monitorowania, kontroli i ochrony sesji RDP.
5. Wygeneruj listę testów bezpieczeństwa, które powinny zostać wykonane:
   - analiza konfiguracji RDP,
   - testy brute-force,
   - analiza logów sesji,
   - wykrywanie przejęcia sesji,
   - analiza zgodności z politykami bezpieczeństwa.
6. Uwzględnij narzędzia open-source i komercyjne (np. Fudo PAM, Devolutions, RDPGuard, osquery, Elastic SIEM).
7. Zaproponuj polityki dostępu uprzywilejowanego (PAM), rotację poświadczeń, nagrywanie sesji i alerty behawioralne.
8. Wygeneruj tabelę podsumowującą:

| Obszar | Ryzyko | Narzędzie | Test | Status |

Na końcu zaproponuj plan działania krok po kroku: od analizy środowiska po testy penetracyjne i wdrożenie zabezpieczeń.

Oto kod źródłowy aplikacji oraz opis środowiska:
[tu wklej repozytorium lub konfigurację systemu]
