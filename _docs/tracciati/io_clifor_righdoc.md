---
layout: docs
title: io_clifor_righdoc.dat
permalink: /docs/io_clifor_righdoc/
---

Tabella di anagrafica per le righe documento di un cliente/fornitore

1. **CHIAVE** - Character - Max Length: 250
  * *Chiave univoca del record composta dai dati di origine*
2. **COD_DITTA** - Character - Max Length: 50
  * *Codice della ditta. Identifica univocamente una ditta dentro il gestionale che, nel caso sia multisocietario, può contenere dati di più aziende*
3. **NUM_REG** - Character - Max Length: 12
  * *Numero di registrazione del documento*
4. **DATA_DOC** - Date - Max Length: 10
  * *Data del documento*
5. **PRG_RIGA** - Integer - Max Length: 6
  * *Progressivo di riga*
6. **COD_RIGA** - Character - Max Length: 25
  * *Codice riga (es. R3IRB; 02661; F94PA13150; F7CSTP; F6SC10510)*
7. **DES_RIGA** - Character - Max Length: 1600
  * *Descrizione riga*
8. **COD_UM** - Character - Max Length: 3
  * *Codice unità di misura (es: KG, PZ, CT)*
9. **QTA** - Decimal - Max Length: 25,8
  * *Quantità*
10. **PRZ_LORDO** - Decimal - Max Length: 28,8
  * *Prezzo lordo, comprensivo di IVA del prodotto *
11. **PRZ_NETTO** - Decimal - Max Length: 28,8
  * *Prezzo Netto del prodotto *
12. **COD_VALUTA** - Character - Max Length: 50
  * *Codice della valuta*
13. **IMPORTO** - Decimal - Max Length: 28,8
  * *Importo della riga del documento*
14. **SC_1** - Decimal - Max Length: 6,3
  * *Sconto 1 in percentuale*
15. **SC_2** - Decimal - Max Length: 6,3
  * *Sconto 2 in percentuale*
16. **DATA_CONFERMA** - Date - Max Length: 10
  * *Data del documento*
17. **TIPO_CLIFOR** - Integer - Max Length: 1
  * *Tipologia (0=Cliente, 1=Fornitore)*
18. **COD_CLIFOR** - Character - Max Length: 50
  * *Codice Cliente / Fornitore*
19. **DAT_ULT_MOD** - DateTime - Max Length: 16
  * *Data di ultima modifica del record*

