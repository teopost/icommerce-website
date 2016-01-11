---
layout: docs
title: io_lead_accessi.dat
permalink: /docs/io_lead_accessi/
---

Associazione lead operatore. Ogni operatore vede i lead associati in questa tabella

1. **CHIAVE** - Character - Max Length: 250
  * *Chiave univoca del record composta dai dati di origine*
2. **COD_DITTA** - Character - Max Length: 50
  * *Codice della ditta. Identifica univocamente una ditta dentro il gestionale che, nel caso sia multisocietario, può contenere dati di più aziende*
3. **COD_OPERATORE** - Character - Max Length: 50
  * *Codice operatore*
4. **COD_LEAD** - Character - Max Length: 50
  * *Codice Cliente / Fornitore*
5. **FLG_VISUALIZZA** - Character - Max Length: 10
  * *flag di visualizzaizone*
6. **FLG_MODIFICA** - Character - Max Length: 10
  * *flag di modifica*
7. **DAT_ULT_MOD** - DateTime - Max Length: 16
  * *Data di ultima modifica del record*

