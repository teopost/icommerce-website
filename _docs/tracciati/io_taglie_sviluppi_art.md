---
layout: docs
title: io_taglie_sviluppi_art.dat
permalink: /docs/io_taglie_sviluppi_art/
---

Tracciato associativo sviluppo

1. **CHIAVE** - Character - Max Length: 250
  * *Chiave univoca del record composta dai dati di origine*
2. **COD_DITTA** - Character - Max Length: 50
  * *Codice della ditta. Identifica univocamente una ditta dentro il gestionale che, nel caso sia multisocietario, può contenere dati di più aziende*
3. **COD_ARTICOLO** - Character - Max Length: 255
  * *Codice dell'articolo*
4. **COD_SVILUPPO** - Character - Max Length: 255
  * *Chiave dello sviluppo*
5. **COD_TAGLIA** - Character - Max Length: 255
  * *Descrivi il contenuto del campo*
6. **FLG_VISIBILE** - Integer - Max Length: 2
  * *Se impostato a -1 devo dare la possibilità di inserire la taglia, altrimenti 0*
7. **DAT_ULT_MOD** - DateTime - Max Length: 16
  * *Data di ultima modifica del record*

