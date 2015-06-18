---
layout: docs
title: io_condpag.dat
permalink: /docs/io_condpag/
---

Condizioni di pagamento

1. **CHIAVE** - Character - Max Length: 250
  * *Chiave univoca del record composta dai dati di origine*
2. **COD_DITTA** - Character - Max Length: 50
  * *Codice della ditta. Identifica univocamente una ditta dentro il gestionale che, nel caso sia multisocietario, può contenere dati di più aziende*
3. **CODICE** - Character - Max Length: 6
  * *Codice condizioni di pagamento*
4. **DESCRIZIONE** - Character - Max Length: 40
  * *descrizione condizioni di pagamento*
5. **SCONTO1** - Decimal - Max Length: 14,6
  * *Ultimo sconto percentuale 1*
6. **DAT_ULT_MOD** - DateTime - Max Length: 16
  * *Data di ultima modifica del record*

