---
layout: docs
title: io_clifor_scadoc.dat
permalink: /docs/io_clifor_scadoc/
---

tabella delle scadenze dei documenti del cliente/fornitore

1. **CHIAVE** - Character - Max Length: 154
  * *Chiave univoca del record composta dai dati di origine*
2. **COD_DITTA** - Character - Max Length: 50
  * *Codice della ditta. Identifica univocamente una ditta dentro il gestionale che, nel caso sia multisocietario, può contenere dati di più aziende*
3. **NUM_REG** - Character - Max Length: 12
  * *Numero di registrazione del documento (numero di collegamento alla testata del documento)*
4. **COD_RATA** - Character - Max Length: 7
  * *Codice della rata*
5. **DAT_SCAD** - Date - Max Length: 10
  * *Data di scadenza*
6. **IMPORTO** - Decimal - Max Length: 28,8
  * *Importo della scadenza*
7. **DES_TIPO** - Character - Max Length: 255
  * *Descrizione del tipo (es: Rim.diretta; Ric. banc.; Bonifico)*
8. **DES_STATO** - Character - Max Length: 255
  * *Descrizione dello stato (Puo' valere solo questi Chiuso o Aperto)*
9. **DES_OPERAZIONE** - Character - Max Length: 255
  * *#NON Visibile in IPAD # Descrizione dell'operazione (es: Pag/Risc; Chiusura; Creazione; Insoluto)*
10. **DES_BANCA_AGENZIA** - Character - Max Length: 255
  * *#NON Visibile in IPAD #  Descrizione banca / agenzia*
11. **DES_SCAD** - Character - Max Length: 255
  * *Descrizione della scadenza (viene riportata nell'ipad)*
12. **COD_CLIFOR** - Character - Max Length: 50
  * *Codice Cliente / Fornitore*
13. **TIPO_CLIFOR** - Integer - Max Length: 1
  * *Tipologia (0=Cliente, 1=Fornitore)*
14. **DATA_DOC** - Date - Max Length: 10
  * *Data del documento*
15. **NUM_DOC** - Character - Max Length: 20
  * *Numero del dcumento*
16. **COD_VALUTA** - Character - Max Length: 50
  * *Codice della valuta*
17. **DAT_ULT_MOD** - DateTime - Max Length: 16
  * *Data di ultima modifica del record*

