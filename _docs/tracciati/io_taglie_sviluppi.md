---
layout: docs
title: io_taglie_sviluppi.dat
permalink: /docs/io_taglie_sviluppi/
---

Tracciato con gli sviluppi taglie

1. **CHIAVE** - Character - Max Length: 250
  * *Chiave univoca del record composta dai dati di origine*
2. **COD_DITTA** - Character - Max Length: 50
  * *Codice della ditta. Identifica univocamente una ditta dentro il gestionale che, nel caso sia multisocietario, può contenere dati di più aziende*
3. **COD_SVILUPPO** - Character - Max Length: 255
  * *Chiave dello sviluppo*
4. **DES_SVILUPPO** - Character - Max Length: 255
  * *Sviluppo predefinito (in Modwin e' sul singolo articolo. Quello predefinito con il quale raccogliere l'ordine se non viene specificato uno diverso - UK) - 1; 1,5; 2, ecc..*
5. **COD_TAGLIA** - Character - Max Length: 255
  * *Descrivi il contenuto del campo*
6. **DES_TAGLIA** - Character - Max Length: 255
  * *Descrivi il contenuto del campo*
7. **ORDINAMENTO** - Integer - Max Length: 9
  * *Ordinamento con il quale mostrare le taglie (all'interno dello stesso sviluppo)*
8. **FLG_PREFERENZIALE** - Integer - Max Length: 2
  * *Identifica lo sviluppo preferenziale. 0 per non preferenziale, -1 per preferenziale*
9. **COD_TAGLIA_GUIDA** - Character - Max Length: 255
  * *Descrivi il contenuto del campo*
10. **FLG_VISIBILE** - Integer - Max Length: 2
  * *Se impostato a -1 devo dare la possibilità di inserire la taglia, altrimento 0*
11. **DAT_ULT_MOD** - DateTime - Max Length: 16
  * *Data di ultima modifica del record*

