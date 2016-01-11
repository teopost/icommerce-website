---
layout: docs
title: io_lead_note.dat
permalink: /docs/io_lead_note/
---

Note dei leads. Ricordarsi che nelle note i campi descrittivi non possono superare i 4000 caratteri. I newline devono essere sostituiti con il carattere §

1. **CHIAVE** - Character - Max Length: 250
  * *Chiave univoca del record composta dai dati di origine*
2. **COD_DITTA** - Character - Max Length: 50
  * *Codice della ditta. Identifica univocamente una ditta dentro il gestionale che, nel caso sia multisocietario, può contenere dati di più aziende*
3. **COD_LEAD** - Character - Max Length: 50
  * *Codice lead*
4. **PROGRESSIVO** - Integer - Max Length: 3
  * *Progressivo di nota*
5. **TIPO_NOTA** - Character - Max Length: 4000
  * *Tipologia di nota (es: resp acquisti)*
6. **NOTA** - Character - Max Length: 4000
  * *Note libere*
7. **DAT_ULT_MOD** - DateTime - Max Length: 16
  * *Data di ultima modifica del record*

