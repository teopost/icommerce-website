---
layout: docs
title: io_lead_righoff.dat
permalink: /docs/io_lead_righoff/
---

Righe delle offerte associate ai leads

1. **CHIAVE** - Character - Max Length: 250
  * *Chiave univoca del record composta dai dati di origine*
2. **CHIAVE_TESTATA** - Character - Max Length: 250
  * *Chiave della relativa testata offerta*
3. **COD_DITTA** - Character - Max Length: 50
  * *Codice della ditta. Identifica univocamente una ditta dentro il gestionale che, nel caso sia multisocietario, può contenere dati di più aziende*
4. **COD_LEAD** - Character - Max Length: 50
  * *Codice Cliente / Fornitore*
5. **PRG_RIGA** - Integer - Max Length: 6
  * *Progressivo di riga*
6. **COD_RIGA** - Character - Max Length: 50
  * *Codice riga (es. R3IRB; 02661; F94PA13150; F7CSTP; F6SC10510)
*
7. **DES_RIGA** - Character - Max Length: 3900
  * *Descrizione riga*
8. **COD_UM** - Character - Max Length: 50
  * *Codice unità di misura (es: KG, PZ, CT)*
9. **QTA** - Decimal - Max Length: 25,8
  * *Quantità*
10. **PRZ_LORDO** - Decimal - Max Length: 28,8
  * *Prezzo lordo, comprensivo di IVA del prodotto (non visibile in IPAD)*
11. **PRZ_NETTO** - Decimal - Max Length: 28,8
  * *Prezzo Netto del prodotto (non visibile in IPAD)*
12. **COD_VALUTA** - Character - Max Length: 50
  * *Codice della valuta*
13. **IMPORTO** - Decimal - Max Length: 28,8
  * *Importo della riga del documento*
14. **SC_1** - Decimal - Max Length: 14,6
  * *Percentuale di SCONTO 1*
15. **SC_2** - Decimal - Max Length: 14,6
  * *Percentuale Sconto 2*
16. **SC_3** - Decimal - Max Length: 14,6
  * *Percentuale Sconto 3*
17. **SC_4** - Decimal - Max Length: 14,6
  * *Percentuale Sconto 4*
18. **SC_5** - Decimal - Max Length: 14,6
  * *Percentuale Sconto 5*
19. **SC_6** - Decimal - Max Length: 14,6
  * *Percentuale Sconto 6*
20. **DATA_CONFERMA** - Date - Max Length: 10
  * *Data del documento*
21. **COD_CLIFOR** - Character - Max Length: 50
  * *Codice Cliente / Fornitore*
22. **DAT_ULT_MOD** - DateTime - Max Length: 16
  * *Data di ultima modifica del record*

