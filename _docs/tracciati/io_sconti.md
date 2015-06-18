---
layout: docs
title: io_sconti.dat
permalink: /docs/io_sconti/
---

Tabella di anagrafica degli sconti

1. **CHIAVE** - Character - Max Length: 250
  * *Chiave univoca del record composta dai dati di origine*
2. **COD_DITTA** - Character - Max Length: 50
  * *Codice della ditta. Identifica univocamente una ditta dentro il gestionale che, nel caso sia multisocietario, può contenere dati di più aziende*
3. **COD_ART** - Character - Max Length: 50
  * *Codice dell'articolo*
4. **TIPO_CLIFOR** - Integer - Max Length: 2
  * *Tipologia (0=Cliente, 1=Fornitore)*
5. **COD_CLIFOR** - Character - Max Length: 50
  * *Codice Cliente / Fornitore*
6. **CLASSE_ARTICOLO** - Character - Max Length: 50
  * *Codice identificativo del deposito*
7. **DES_CLASSE_ARTICOLO** - Character - Max Length: 255
  * *descrizione della classe articolo*
8. **CLASSE_CLIENTE** - Character - Max Length: 50
  * *Codice identificativo del deposito*
9. **DES_CLASSE_CLIENTE** - Character - Max Length: 255
  * *descrizione della classe cliente*
10. **COD_PROMO** - Character - Max Length: 50
  * *Codice dell'articolo*
11. **QUANTITA_INIZIO** - Decimal - Max Length: 25,8
  * *Quantità minima di vendita*
12. **QUANTITA_FINE** - Decimal - Max Length: 25,8
  * *Quantità minima di vendita*
13. **DATA_INIZIO** - Date - Max Length: 10
  * *Data di inizio validità del listino*
14. **DATA_FINE** - Date - Max Length: 10
  * *Data di fine validità del listino*
15. **PRIORITA** - Integer - Max Length: 9
  * *Identifica il listino con priorità di importanz *
16. **SCONTO1** - Decimal - Max Length: 14,6
  * *Ultimo sconto percentuale 1*
17. **SCONTO2** - Decimal - Max Length: 14,6
  * *Ultimo sconto percentuale 1*
18. **SCONTO3** - Decimal - Max Length: 14,6
  * *Ultimo sconto percentuale 1*
19. **SCONTO4** - Decimal - Max Length: 14,6
  * *Ultimo sconto percentuale 1*
20. **SCONTO5** - Decimal - Max Length: 14,6
  * *Ultimo sconto percentuale 1*
21. **SCONTO6** - Decimal - Max Length: 14,6
  * *Ultimo sconto percentuale 1*
22. **TIPO_SCONTO1** - Character - Max Length: 5
  * *Tipologia di sconto S = sostitutivo C = cumulativo*
23. **TIPO_SCONTO2** - Character - Max Length: 5
  * *Tipologia di sconto S = sostitutivo C = cumulativo*
24. **TIPO_SCONTO3** - Character - Max Length: 5
  * *Tipologia di sconto S = sostitutivo C = cumulativo*
25. **TIPO_SCONTO4** - Character - Max Length: 5
  * *Tipologia di sconto S = sostitutivo C = cumulativo*
26. **TIPO_SCONTO5** - Character - Max Length: 5
  * *Tipologia di sconto S = sostitutivo C = cumulativo*
27. **TIPO_SCONTO6** - Character - Max Length: 5
  * *Tipologia di sconto S = sostitutivo C = cumulativo*
28. **COD_VALUTA** - Character - Max Length: 50
  * *Codice della valuta*
29. **DAT_ULT_MOD** - DateTime - Max Length: 16
  * *Data di ultima modifica del record*

