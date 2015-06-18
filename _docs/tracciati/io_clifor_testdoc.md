---
layout: docs
title: io_clifor_testdoc.dat
permalink: /docs/io_clifor_testdoc/
---

tabella anagrafica delle testate dei documenti di cliente/fornitore

1. **CHIAVE** - Character - Max Length: 250
  * *Chiave univoca del record composta dai dati di origine*
2. **COD_DITTA** - Character - Max Length: 50
  * *Codice della ditta. Identifica univocamente una ditta dentro il gestionale che, nel caso sia multisocietario, può contenere dati di più aziende*
3. **TIPO_CLIFOR** - Integer - Max Length: 1
  * *Tipologia (0=Cliente, 1=Fornitore)*
4. **COD_CLIFOR** - Character - Max Length: 50
  * *Codice Cliente / Fornitore*
5. **COD_TIPODOC** - Integer - Max Length: 2
  * *Codice tipo documento*
6. **COD_STIPODOC** - Integer - Max Length: 2
  * *Codice sottotipo documento*
7. **FLGDAEVADERE** - Integer - Max Length: 10
  * *Flag da evadere*
8. **DATADOC** - Date - Max Length: 10
  * *Data del documento*
9. **NUMREG** - Character - Max Length: 12
  * *Numero di registrazione del documento utilizzato come collegamento tra la testata e le righe*
10. **TIPODOC** - Character - Max Length: 14
  * *Tipo documento gestionale (CLS-DDT; CLS-ORDINE; CLP-ORDINE)*
11. **TIPO** - Character - Max Length: 20
  * *Tipo (es:DdT; Ordine Cl.)*
12. **SOTTOTIPO** - Character - Max Length: 20
  * *Sottotipo (es: Ven/Acq; Normale)*
13. **NUM_DOC** - Character - Max Length: 20
  * *Numero del documento*
14. **COD_VALUTA** - Character - Max Length: 50
  * *Codice della valuta*
15. **VALUTA** - Character - Max Length: 4
  * *Valuta*
16. **TOTALEDOC** - Decimal - Max Length: 28,8
  * *Totale del documento*
17. **TIPOSTATO_DOC** - Integer - Max Length: 2
  * *Tipo stato documento*
18. **DESSTATO_DOC** - Character - Max Length: 100
  * *Sottotipo (es: Ven/Acq; Normale)*
19. **DATA_FATTURA** - Date - Max Length: 10
  * *Data della fattura*
20. **NUM_FATTURA** - Character - Max Length: 20
  * *Numero di fattura*
21. **DES_NOTE** - Character - Max Length: 4000
  * *Note libere*
22. **DATA_CONFERMA** - Date - Max Length: 10
  * *Data del documento*
23. **DAT_ULT_MOD** - DateTime - Max Length: 16
  * *Data di ultima modifica del record*
24. **DES_DOC** - Character - Max Length: 255
  * *Note libere*

