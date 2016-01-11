---
layout: docs
title: io_custom_fields.dat
permalink: /docs/io_custom_fields/
---

Questo tracciato viene utilizzato solo per aggiungere campi personalizzati. Per il dettaglio delle specifiche contattare il personale Apex-net.

Il campo VISUAL_MASK indica con una maschera di bit, il luogo in cui puo' essere visualizzato il dato.

Visual_mask (partendo da destra): 

* pos. 0 : modulo schede
* pos. 1 : modulo ordini
* pos. 2 : modulo CRM

Esempi:

* vis_mask: 100 visibile nel tab CRM
* vis_mask: 1 visibile nel tab schede
* vis_mask: 11 visibile nel tab schede e ordini 

1. **CHIAVE** - Character - Max Length: 250
  * *Chiave univoca del record composta dai dati di origine*
2. **COD_DITTA** - Character - Max Length: 50
  * *Codice della ditta. Identifica univocamente una ditta dentro il gestionale che, nel caso sia multisocietario, può contenere dati di più aziende*
3. **NOME** - Character - Max Length: 255
  * *nome del campo personalizzato*
4. **VALORE** - Character - Max Length: 4000
  * *valore del campo personalizzato*
5. **TIPO** - Integer - Max Length: 50
  * *tipologia (0=group, 1=item,....)*
6. **CHIAVE_PADRE** - Character - Max Length: 250
  * *chiave de*
7. **CONTESTO** - Character - Max Length: 255
  * *Identifica il contesto in cui devonon essere mostrati i dati (in minuscolo). Valori possibili: (clienti,fornitori,prodotti,leads)*
8. **VISUAL_MASK** - Character - Max Length: 255
  * *Indica in quale posto deve essere visualizzato il dato.*
9. **COD_EXT** - Character - Max Length: 50
  * *codice dell'elemento  associato a questa customizzazione (es. codice  del lead)*
10. **ORIENTAMENTO_NOME** - Integer - Max Length: 2
  * *orientamento del campo rispetto a quello precedente (orrizzontale starà di fianco, verticale starà sotto)*
11. **ORIENTAMENTO_VALORE** - Integer - Max Length: 2
  * *orientamento del valore rispetto al nome campo (normalmente è orrizzontale, mentre può essere verticale per i campi note che sono più alti)*
12. **ORDINAMENTO** - Character - Max Length: 50
  * *ordinamento dei vari campi*
13. **TIPO_DATO** - Integer - Max Length: 2
  * *tipo di dato (string, date, datetime, number, currency)*
14. **DAT_ULT_MOD** - DateTime - Max Length: 16
  * *Data di ultima modifica del record*

