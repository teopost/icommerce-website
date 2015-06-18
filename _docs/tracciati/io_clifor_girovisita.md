---
layout: docs
title: io_clifor_girovisita.dat
permalink: /docs/io_clifor_girovisita/
---

Tracciato girovisite. In questo tracciato, per ogni agente, sono associati i clienti suddivisi per giorno della settimana. I dati qui contenuto vengono mostrati nella maschera di ricerca del cliente in fase di inserimento dell'ordine. In tale maschera i clienti sono suddivisi per giorno della settimana. In tal modo l'agente ha una sorta di agenda di quali clienti deve visitare in un determinato giorno.

1. **CHIAVE** - Character - Max Length: 250
  * *Chiave univoca del record composta dai dati di origine*
2. **COD_DITTA** - Character - Max Length: 50
  * *Codice della ditta. Identifica univocamente una ditta dentro il gestionale che, nel caso sia multisocietario, può contenere dati di più aziende*
3. **COD_CLIFOR** - Character - Max Length: 50
  * *Codice Cliente / Fornitore*
4. **COD_AGE** - Character - Max Length: 50
  * *Codice dell'agente*
5. **COD_DEST** - Character - Max Length: 50
  * *Codice della destinazione*
6. **GG_VISITA** - Integer - Max Length: 2
  * *Giorno definito per la visita dal cliente (1= Lunedì, 2=Martedì, ecc)*
7. **SEQUENZA** - Integer - Max Length: 9
  * *sequenza di vista in un determinato giorno*
8. **GG_ULT_VISITA** - Integer - Max Length: 2
  * *giorno dell'ultima visita fatta dal cliente*
9. **DAT_ULT_VISITA** - Date - Max Length: 10
  * *data dell'ultima vista fatta dal cliente*
10. **DAT_ULT_MOD** - DateTime - Max Length: 16
  * *Data di ultima modifica del record*

