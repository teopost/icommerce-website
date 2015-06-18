---
layout: docs
title: io_lead_sconti.dat
permalink: /docs/io_lead_sconti/
---

Sconti associati ai leads

1. **CHIAVE** - Character - Max Length: 250
  * *Chiave univoca del record composta dai dati di origine*
2. **COD_DITTA** - Character - Max Length: 50
  * *Codice della ditta. Identifica univocamente una ditta dentro il gestionale che, nel caso sia multisocietario, può contenere dati di più aziende*
3. **COD_ART** - Character - Max Length: 50
  * *Codice dell'articolo*
4. **COD_LEAD** - Character - Max Length: 50
  * *Codice lead*
5. **CLASSE_ARTICOLO** - Character - Max Length: 50
  * *Codice identificativo del deposito*
6. **DES_CLASSE_ARTICOLO** - Character - Max Length: 255
  * *descrizione della classe articolo*
7. **QUANTITA_INIZIO** - Decimal - Max Length: 25,8
  * *Quantità minima di vendita*
8. **QUANTITA_FINE** - Decimal - Max Length: 25,8
  * *Quantità minima di vendita*
9. **DATA_INIZIO** - Date - Max Length: 10
  * *Data di inizio validità del listino*
10. **DATA_FINE** - Date - Max Length: 10
  * *Data di fine validità del listino*
11. **SCONTO1** - Decimal - Max Length: 14,6
  * *Ultimo sconto percentuale 1*
12. **TIPO_SCONTO1** - Character - Max Length: 5
  * *Ttipologia di sconto S = sostitutivo C = cumulativo*
13. **SCONTO2** - Decimal - Max Length: 14,6
  * *Ultimo sconto percentuale 1*
14. **TIPO_SCONTO2** - Character - Max Length: 5
  * *Ttipologia di sconto S = sostitutivo C = cumulativo*
15. **SCONTO3** - Decimal - Max Length: 14,6
  * *Ultimo sconto percentuale 1*
16. **TIPO_SCONTO3** - Character - Max Length: 5
  * *Ttipologia di sconto S = sostitutivo C = cumulativo*
17. **SCONTO4** - Decimal - Max Length: 14,6
  * *Ultimo sconto percentuale 1*
18. **TIPO_SCONTO4** - Character - Max Length: 5
  * *Ttipologia di sconto S = sostitutivo C = cumulativo*
19. **SCONTO5** - Decimal - Max Length: 14,6
  * *Ultimo sconto percentuale 1*
20. **TIPO_SCONTO5** - Character - Max Length: 5
  * *Ttipologia di sconto S = sostitutivo C = cumulativo*
21. **SCONTO6** - Decimal - Max Length: 14,6
  * *Ultimo sconto percentuale 1*
22. **TIPO_SCONTO6** - Character - Max Length: 5
  * *Ttipologia di sconto S = sostitutivo C = cumulativo*
23. **PRIORITA** - Integer - Max Length: 9
  * *Identifica il listino con priorità di importanz *
24. **DAT_ULT_MOD** - DateTime - Max Length: 16
  * *Data di ultima modifica del record*

