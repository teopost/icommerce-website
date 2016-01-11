---
layout: docs
title: io_art_um.dat
permalink: /docs/io_art_um/
---

Unità di misura degli articoli

1. **CHIAVE** - Character - Max Length: 250
  * *Chiave univoca del record composta dai dati di origine*
2. **COD_DITTA** - Character - Max Length: 50
  * *Codice della ditta. Identifica univocamente una ditta dentro il gestionale che, nel caso sia multisocietario, può contenere dati di più aziende*
3. **COD_ART** - Character - Max Length: 50
  * *Codice dell'articolo*
4. **UM** - Character - Max Length: 50
  * *Unità di misura*
5. **DESC_UM** - Character - Max Length: 1000
  * *Descrizione Unita di misura*
6. **FAT_CONV** - Decimal - Max Length: 15,5
  * *Fattore di conversione. Coefficiente che se moltiplicato alla quantità 1 riporta la quantità di una seconda unità di misura. Per passare dalla unità di misura 2 alla unità di misura 1 occorre eseguire una divisione (vuoto per unità di misura 1)*
7. **TIPO_UM** - Integer - Max Length: 1
  * *Tipo unita di misura (1= Principale, 2=Secondarie, 3=Confezione)*
8. **FLG_DEFAULT** - Integer - Max Length: 2
  * *Flag che identifica l'unità di misura di default, ovvero quella che deve essere proposta quando si inserisce un nuovo ordine.
In molti gestionali è chiamata unità di misura di Vendita. 
Valori consentiti: 0 = Normale (default), -1 = Predefinita*
9. **DAT_ULT_MOD** - DateTime - Max Length: 16
  * *Data di ultima modifica del record*

