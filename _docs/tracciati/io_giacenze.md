---
layout: docs
title: io_giacenze.dat
permalink: /docs/io_giacenze/
---

Tabella delle giacenze dei prodotti

1. **CHIAVE** - Character - Max Length: 250
  * *Chiave univoca del record composta dai dati di origine*
2. **COD_DITTA** - Character - Max Length: 50
  * *Codice della ditta. Identifica univocamente una ditta dentro il gestionale che, nel caso sia multisocietario, può contenere dati di più aziende*
3. **COD_ARTICOLO** - Character - Max Length: 25
  * *Codice dell'articolo*
4. **COD_DEPOSITO** - Character - Max Length: 2
  * *Codice identificativo del deposito*
5. **DES_DEPOSITO** - Character - Max Length: 255
  * *Descrizione deposito*
6. **GIACENZA** - Decimal - Max Length: 25,8
  * *Quantità disponibile in giacenza*
7. **DISPONIBILITA** - Decimal - Max Length: 25,8
  * *disponibilità in giacenza*
8. **UM1** - Character - Max Length: 3
  * *Unità di misura 1*
9. **DAT_ULT_MOD** - DateTime - Max Length: 16
  * *Data di ultima modifica del record*

