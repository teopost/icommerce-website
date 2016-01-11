---
layout: docs
title: io_clifor_detcon.dat
permalink: /docs/io_clifor_detcon/
---

Tabella di anagrafica dei dettagli contatto di un cliente/fornitore

1. **CHIAVE** - Character - Max Length: 250
  * *Chiave univoca del record composta dai dati di origine*
2. **COD_DITTA** - Character - Max Length: 50
  * *Codice della ditta. Identifica univocamente una ditta dentro il gestionale che, nel caso sia multisocietario, può contenere dati di più aziende*
3. **TIPO_CLIFOR** - Integer - Max Length: 1
  * *Tipologia (0=Cliente, 1=Fornitore)*
4. **COD_CLIFOR** - Character - Max Length: 50
  * *Codice Cliente / Fornitore*
5. **ID_CONTATTO** - Integer - Max Length: 8
  * *Identificativo univoco del contatto*
6. **TIPO_CONTATTO** - Character - Max Length: 40
  * *Tipologia del contatto (es: uff. acquisti)*
7. **PREF** - Integer - Max Length: 1
  * *Preferenziale (1 o 0)*
8. **COGNOME** - Character - Max Length: 50
  * *Cognome del contatto*
9. **NOME** - Character - Max Length: 255
  * *Nome del contatto*
10. **INDIRIZZO** - Character - Max Length: 50
  * *indirizzo*
11. **CAP** - Character - Max Length: 8
  * *Codice Avviamento Postale*
12. **CITTA** - Character - Max Length: 50
  * *Città*
13. **PR** - Character - Max Length: 2
  * *Provincia*
14. **ORARIO_LAVORO** - Character - Max Length: 100
  * *Orario di Lavoro*
15. **TELEFONO1** - Character - Max Length: 20
  * *Numero di telefono 1*
16. **TELEFONO2** - Character - Max Length: 20
  * *Numero di telefono 2*
17. **CELLULARE1** - Character - Max Length: 20
  * *Numero di telefono cellulare 1*
18. **CELLULARE2** - Character - Max Length: 20
  * *Numero di telefono cellulare 2*
19. **TELEF_CASA** - Character - Max Length: 20
  * *Numero di telefono casa*
20. **FAX** - Character - Max Length: 20
  * *Numero di FAX*
21. **EMAIL1** - Character - Max Length: 100
  * *Indirizzo e-mail del contatto 1*
22. **EMAIL2** - Character - Max Length: 100
  * *Indirizzo e-mail del contatto 2*
23. **ALTRO_INDIRIZZO1** - Character - Max Length: 50
  * *Altro indirizzo 1*
24. **ALTRO_INDIRIZZO2** - Character - Max Length: 50
  * *Altro indirizzo 2*
25. **NOTE** - Character - Max Length: 9999
  * *Campo Note Libero*
26. **DAT_ULT_MOD** - DateTime - Max Length: 16
  * *Data di ultima modifica del record*

