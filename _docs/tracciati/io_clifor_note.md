---
layout: docs
title: io_clifor_note.dat
permalink: /docs/io_clifor_note/
---

tabella delle note di un cliente/fornitore

1. **CHIAVE** - Character - Max Length: 250
  * *Chiave univoca del record composta dai dati di origine*
2. **COD_DITTA** - Character - Max Length: 50
  * *Codice della ditta. Identifica univocamente una ditta dentro il gestionale che, nel caso sia multisocietario, può contenere dati di più aziende*
3. **TIPO_CLIFOR** - Integer - Max Length: 1
  * *Tipologia (0=Cliente, 1=Fornitore)*
4. **COD_CLIFOR** - Character - Max Length: 50
  * *Codice Cliente / Fornitore*
5. **PROGRESSIVO** - Integer - Max Length: 3
  * *Progressivo di nota*
6. **TIPO_NOTA** - Character - Max Length: 4000
  * *Tipologia di nota (es: resp acquisti)*
7. **NOTA** - Character - Max Length: 4000
  * *Note libere*
8. **DAT_ULT_MOD** - DateTime - Max Length: 16
  * *Data di ultima modifica del record*

