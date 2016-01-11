---
layout: docs
title: io_art.dat
permalink: /docs/io_art/
---

Tabella anagrafica che contiene tutti i prodotti

1. **CHIAVE** - Character - Max Length: 250
  * *Chiave univoca del record composta dai dati di origine*
2. **COD_DITTA** - Character - Max Length: 50
  * *Codice della ditta. Identifica univocamente una ditta dentro il gestionale che, nel caso sia multisocietario, può contenere dati di più aziende*
3. **COD_ART** - Character - Max Length: 25
  * *Codice dell'articolo*
4. **DES_ART** - Character - Max Length: 255
  * *Descrizione dell'articolo*
5. **COD_FAM** - Character - Max Length: 4
  * *Codice della famiglia degli articoli*
6. **DES_FAM** - Character - Max Length: 30
  * *Descrizione della famiglia*
7. **COD_SFAM** - Character - Max Length: 4
  * *Codice della sottofamiglia degli articoli*
8. **DES_SFAM** - Character - Max Length: 30
  * *Descrizione della sottofamiglia*
9. **COD_GRUPPO1** - Character - Max Length: 4
  * *Codice del Gruppo merceologico dell'articolo (1)*
10. **DES_GRUPPO1** - Character - Max Length: 30
  * *Descrizione del gruppo merceologico dell'articolo (1)*
11. **COD_GRUPPO2** - Character - Max Length: 4
  * *Codice del Gruppo merceologico dell'articolo (2)*
12. **DES_GRUPPO2** - Character - Max Length: 30
  * *Descrizione del gruppo merceologico dell'articolo (2)*
13. **UM1** - Character - Max Length: 3
  * *Unità di misura 1*
14. **UM2** - Character - Max Length: 3
  * *Seconda unità di misura*
15. **COD_STATO** - Character - Max Length: 50
  * *Codice dello stato articolo (BLK = Bloccato)*
16. **DES_STATO** - Character - Max Length: 255
  * *Descrizione dello stato articolo (Es. Bloccato)*
17. **FATTORE_CONVERSIONE** - Decimal - Max Length: 16,10
  * *Fattore di conversione. Coefficiente che se moltiplicato alla quantità 1 riporta la quantità di una seconda unità di misura. Per passare dalla unità di misura 2 alla unità di misura 1 occorre eseguire una divisione*
18. **DES_GR_STAT1** - Character - Max Length: 30
  * *Descrizione del gruppo statico dell'articolo (1)*
19. **DES_GR_STAT2** - Character - Max Length: 30
  * *Descrizione del gruppo statico dell'articolo (2)*
20. **QTA_MIN_VEND** - Decimal - Max Length: 25,8
  * *Quantità minima di vendita*
21. **COD_CLASSE_SCONTO** - Character - Max Length: 50
  * *Codice identificativo della classe sconto del cliente*
22. **COD_DEPERIBILITA** - Character - Max Length: 50
  * *Codice identificativo della deperibilità dell'articolo. Questo codice viene utilizzato per determinare la rottura degli ordini. Ad esempio per l'art.62 gli articoli di tipo deperibile non possono essere messi in ordini con articoli non deperibili.*
23. **PREZZO_MIN_VEN** - Decimal - Max Length: 28,8
  * *prezzo minimo di vendita*
24. **SCONTO_MAX_VEN** - Decimal - Max Length: 14,6
  * *massimo sconto di vendita*
25. **MAX_EXTRA_SCONTO** - Decimal - Max Length: 14,6
  * *massimo extra sconto consentito*
26. **COD_SVILUPPO_BASE** - Character - Max Length: 255
  * *Codice sviluppo base (wtrendy)*
27. **PREZZO_RETAIL** - Decimal - Max Length: 28,8
  * *Prezzo del retail (usato suli su wTrendy)*
28. **DES_FILTRO1** - Character - Max Length: 255
  * *Stringa usata per filtro per la selezione degli articoli*
29. **DES_FILTRO2** - Character - Max Length: 255
  * *Stringa usata per filtro per la selezione degli articoli*
30. **DES_FILTRO3** - Character - Max Length: 255
  * *Stringa usata per filtro per la selezione degli articoli*
31. **FLG_MOD_UM_DEFAULT** - Integer - Max Length: 2
  * *Flag che identifica la possibilità di modificare l'unità di misura di default in fase di inserimento ordine
Valori consentiti: 0 = Modificabile (default), -1 = Non modificabile*
32. **DAT_ULT_MOD** - DateTime - Max Length: 16
  * *Data di ultima modifica del record. Attenzione: Questa data deve essere composta nel seguente formato: Giorno (2 caratteri) + Mese (2 caratteri) + Anno (4 caratteri) + Ore (2 caratteri) + Minuti (2 caratteri) + Secondi (2 caratteri).*

