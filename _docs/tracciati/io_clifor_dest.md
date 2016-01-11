---
layout: docs
title: io_clifor_dest.dat
permalink: /docs/io_clifor_dest/
---

Tabella di anagrafica della destinazione dei prodotti acquistati da un cliente/fornitore

1. **CHIAVE** - Character - Max Length: 250
  * *Chiave univoca del record composta dai dati di origine*
2. **COD_DITTA** - Character - Max Length: 50
  * *Codice della ditta. Identifica univocamente una ditta dentro il gestionale che, nel caso sia multisocietario, può contenere dati di più aziende*
3. **TIPO_CLIFOR** - Integer - Max Length: 1
  * *Tipologia (0=Cliente, 1= Fornitore)*
4. **COD_CLIFOR** - Character - Max Length: 50
  * *Codice Cliente/Fornitore*
5. **PREFERENZIALE** - Integer - Max Length: 10
  * *Flag di destinazione Preferenziale*
6. **COD_DEST** - Character - Max Length: 4
  * *Codice della Destinazione dei prodotti*
7. **RAG_SOC_DEST** - Character - Max Length: 8000
  * *Ragione Sociale della Destinazione dei pordotti*
8. **INDIRIZZO** - Character - Max Length: 8000
  * *Indirizzo di destinazione*
9. **CAP** - Character - Max Length: 8
  * *Codice Avviamento Postale della destinazione*
10. **CITTA** - Character - Max Length: 8000
  * *Citta di destinazione dei prodotti*
11. **PROVINCIA** - Character - Max Length: 2
  * *Provincia di destinazione*
12. **STAMPA_PREF_DOC** - Character - Max Length: 6
  * *Descrizione del tipo di stampa preferito per li documento*
13. **TELEFONO** - Character - Max Length: 20
  * *Recapito telefonico della destinazione dei prodotti*
14. **CELLULARE** - Character - Max Length: 20
  * *Recapito telefonico della destinazione dei prodotti*
15. **MAIL** - Character - Max Length: 40
  * *Recapito posta elettronica della destinazione dei prodotti*
16. **FAX** - Character - Max Length: 20
  * *Recapito fax della destinazione dei prodotti*
17. **NOTE_DEST** - Character - Max Length: 512
  * *Campo descrittivo libero per la destinazione dei prodotti*
18. **DAT_ULT_MOD** - DateTime - Max Length: 16
  * *Data di ultima modifica del record*

