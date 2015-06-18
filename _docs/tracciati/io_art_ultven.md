---
layout: docs
title: io_art_ultven.dat
permalink: /docs/io_art_ultven/
---

Tabella di anagrafica del prodotto ultima vendita del cliente

1. **CHIAVE** - Character - Max Length: 250
  * *Chiave univoca del record composta dai dati di origine*
2. **COD_DITTA** - Character - Max Length: 50
  * *Codice della ditta. Identifica univocamente una ditta dentro il gestionale che, nel caso sia multisocietario, può contenere dati di più aziende*
3. **COD_ART** - Character - Max Length: 25
  * *Codice dell'articolo*
4. **PROG** - Integer - Max Length: 3
  * *Numero progressivo*
5. **VALUTA** - Character - Max Length: 4
  * *Valuta*
6. **PRZ** - Decimal - Max Length: 28,8
  * *Prezzo*
7. **DATA_DOC** - Date - Max Length: 10
  * *Data del documento di riferimento*
8. **NUM_DOC** - Integer - Max Length: 7
  * *Numero del documento di riferimento*
9. **COD_CLFOR** - Character - Max Length: 50
  * *Codice Cliente / Fornitore*
10. **DAT_ULT_MOD** - DateTime - Max Length: 16
  * *Data di ultima modifica del record. Attenzione: Questa data deve essere composta nel seguente formato: Giorno (2 caratteri) + Mese (2 caratteri) + Anno (4 caratteri) + Ore (2 caratteri) + Minuti (2 caratteri) + Secondi (2 caratteri).*

