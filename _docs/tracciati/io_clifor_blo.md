---
layout: docs
title: io_clifor_blo.dat
permalink: /docs/io_clifor_blo/
---

Tabella di anagrafica del blocco di un cliente/fornitore

1. **CHIAVE** - Character - Max Length: 250
  * *Chiave univoca del record composta dai dati di origine*
2. **COD_DITTA** - Character - Max Length: 50
  * *Codice della ditta. Identifica univocamente una ditta dentro il gestionale che, nel caso sia multisocietario, può contenere dati di più aziende*
3. **TIPO_CLIFOR** - Integer - Max Length: 1
  * *Tipologia (0=Cliente, 1=Fornitore)*
4. **COD_CLIFOR** - Character - Max Length: 50
  * *Codice Cliente / Fornitore*
5. **COD_BLOCCO** - Integer - Max Length: 2
  * *Codice blocco *
6. **TIPO_BLOCCO** - Character - Max Length: 15
  * *Tipologia del blocco *
7. **NOTA_BLOCCO** - Character - Max Length: 4000
  * *Descrizione del blocco del cliente/fornitore*
8. **DATA_BLOCCO** - Date - Max Length: 10
  * *Data blocco *
9. **DAT_ULT_MOD** - DateTime - Max Length: 16
  * *Data di ultima modifica del record*

