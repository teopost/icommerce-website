---
layout: docs
title: io_clifor_age.dat
permalink: /docs/io_clifor_age/
---

tabella di anagrafica agenti di un cliente/fornitore

1. **CHIAVE** - Character - Max Length: 250
  * *Chiave univoca del record composta dai dati di origine*
2. **COD_DITTA** - Character - Max Length: 50
  * *Codice della ditta. Identifica univocamente una ditta dentro il gestionale che, nel caso sia multisocietario, può contenere dati di più aziende*
3. **TIPO_CLIFOR** - Integer - Max Length: 1
  * *Tipologia (0=Cliente, 1=Fornitore)*
4. **COD_CLIFOR** - Character - Max Length: 50
  * *Codice Cliente / Fornitore*
5. **COD_AGE** - Character - Max Length: 50
  * *Codice dell'agente*
6. **RAGSOC_AGE** - Character - Max Length: 40
  * *Ragione sociale dell'agente*
7. **PREFERENZIALE** - Integer - Max Length: 1
  * *Flag agente preferenziale (1 o 0)*
8. **DAT_ULT_MOD** - DateTime - Max Length: 16
  * *Data di ultima modifica del record*

