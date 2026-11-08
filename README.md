# Hallo Möbel

Statisches Möbelportal für GitHub + Vercel. Keine Laufzeit-Datenbank und keine externen JavaScript-Abhängigkeiten.

## Lokal

Node.js 20 oder neuer. `npm test`, dann `npm run build:preview`. `dist` mit einem beliebigen statischen Webserver bereitstellen.

## Daten

`data/angebote.csv` ist der importierte Stand der zentralen Recherchedatei `Hallo_Moebel_Schnaeppchen_2026-11-08.csv`, Library-ID `libfile_a37d80c3f1348191bca39bb470d56b4e`, Version 2 (08.11.2026). Die ursprüngliche Recherchedatei wird durch die Website nicht verändert. Es besteht noch keine automatische Synchronisation: Aktualisierungen aus der zentralen Recherche müssen bewusst in diese Build-Eingabe übernommen werden. Kein zweiter Recherchebestand.

Der Build verarbeitet die gesamte CSV. Inaktive Produkte bleiben immer ausgeblendet. `npm run build` veröffentlicht ausschließlich Datensätze mit `veroeffentlichungsstatus=Freigegeben`. `npm run build:preview` zeigt auch Entwürfe. Aktuell sind alle aktiven Datensätze Entwürfe; Vercel ist ausdrücklich im Vorschau-Modus konfiguriert.

UVP wird nur bei ausdrücklich dokumentiertem Nachweis und Quellen-URL verwendet. Unbekannte Versandkosten bleiben unbekannt. UVP-Rabatte sind keine Marktpreisersparnis. Produktbilder fehlen in der Quelle; die Oberfläche zeigt ausdrücklich bezeichnete Kategorie-Symbole.

## Vor öffentlichem Start

- Exakten Domainnamen bestätigen und im Vercel-Projekt hinzufügen; angezeigte DNS-Werte bei All-Inkl setzen. Bestehende E-Mail-DNS-Einträge erhalten.
- Anbieterangaben, Kontakt und Datenschutz vervollständigen.
- Angebote redaktionell prüfen und freigeben; Produktbilder mit geklärten Nutzungsrechten ergänzen.
- Vercel-Build auf `npm run build` umstellen, Vorschaubanner entfernen und Indexierung erst nach Abnahme aktivieren (HTML, robots.txt und vercel.json).
- Canonical-URLs und Sitemap nach Bestätigung der Domain ergänzen.
- Affiliate-Links und Kennzeichnung bei Aktivierung ergänzen. Aktuell nur reguläre Händlerlinks, kein Tracking und kein Newsletter-Versand.

Die Merkliste speichert ausschließlich Produkt-IDs im lokalen Browser. Es werden keine Newsletter-Adressen gesammelt. Die Vorschau hat noindex; das ist kein Zugriffsschutz.
