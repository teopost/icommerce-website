---
layout: docs
title: io_clifor_gen.dat
permalink: /docs/io_clifor_gen/
---

tabella di anagrafica clienti/fornitore di un progetto o ditta (azienda) che viene importata in automatico; ogni riga è un cliente della ditta

1. **CHIAVE** - Character - Max Length: 250
  * *Chiave univoca del record composta dai dati di origine*
2. **COD_DITTA** - Character - Max Length: 50
  * *Codice della ditta. E' il codice che identifica univocamente una ditta dentro il gestionale che, nel caso sia multisocietario, può contenere dati di più aziende*
3. **TIPO_CLIFOR** - Integer - Max Length: 2
  * *Tipologia (0=Cliente, 1=Fornitore)*
4. **COD_CLIFOR** - Character - Max Length: 50
  * *Codice Cliente / Fornitore*
5. **RAG_SOC** - Character - Max Length: 255
  * *Ragione sociale*
6. **TAG** - Character - Max Length: 255
  * *TAG di Ricerca*
7. **INDIRIZZO** - Character - Max Length: 255
  * *Indirizzo*
8. **PARTITA_IVA** - Character - Max Length: 50
  * *Partita iva*
9. **CODICE_FISCALE** - Character - Max Length: 20
  * *Codice fiscale*
10. **TELEFONO1** - Character - Max Length: 255
  * *Numero di telefono 1 del cliente/fornitore*
11. **TELEFONO2** - Character - Max Length: 255
  * *Numero di telefono 2 del cliente/fornitore*
12. **FAX** - Character - Max Length: 255
  * *Fax*
13. **CELLULARE** - Character - Max Length: 255
  * *Telefono cellulare*
14. **EMAIL** - Character - Max Length: 255
  * *Indirizzo email*
15. **INTERNET** - Character - Max Length: 255
  * *WEB*
16. **CAP** - Character - Max Length: 20
  * *Codice di avviamento postale*
17. **CITTA** - Character - Max Length: 255
  * *Città*
18. **PROVINCIA** - Character - Max Length: 255
  * *Provincia*
19. **LATITUDINE** - Character - Max Length: 50,6
  * *Chiave univoca del record ereditata dai dati di origine*
20. **LONGITUDINE** - Character - Max Length: 50,6
  * *Chiave univoca del record ereditata dai dati di origine*
21. **COD_CLASSE_SCONTO** - Character - Max Length: 50
  * *Codice identificativo della classe sconto del cliente*
22. **FLG_MOD_NEL_DISP** - Integer - Max Length: 2
  * *flag per specificare se questo cliente o fornitore può essere modificato nel dispositivo*
23. **FLG_DEPERIBILITA** - Integer - Max Length: 2
  * *serve per attivare la gestione degli articoli deperibili e quindi suddividere gli ordini che arrivano dai dispositivi*
24. **COD_CAT_EXTRA_SCONTO** - Character - Max Length: 50
  * *Codice identificativo della categoria extra sconto (es. 01 = affiliati; 02 = non affilitati; 03= con griglia; 04=normali)*
25. **COD_SVILUPPO** - Character - Max Length: 255
  * *Chiave dello sviluppo*
26. **NAZIONE** - Character - Max Length: 255
  * *Descrizione della nazione*
27. **PAGAMENTO** - Character - Max Length: 255
  * *Pagamento (es: Rimessa diretta a vista fattura; R.D. 60 GG. DATA FATTURA)*
28. **BANCA** - Character - Max Length: 255
  * *Banca*
29. **AGENZIA** - Character - Max Length: 255
  * *Agenzia*
30. **LISTINO_ANAGRAFICO** - Character - Max Length: 255
  * *Listino anagrafico*
31. **VALUTA** - Character - Max Length: 50
  * *Descrizione della valuta (Es: Euro)*
32. **SCO_PERC1** - Decimal - Max Length: 14,6
  * *Sconto di testata 1*
33. **SCO_PERC2** - Decimal - Max Length: 14,6
  * *Sconto di testata 2*
34. **SCO_PERC3** - Decimal - Max Length: 14,6
  * *Sconto di testata 3*
35. **SCO_PERC4** - Decimal - Max Length: 14,6
  * *Sconto di testata 4*
36. **SCO_PERC5** - Decimal - Max Length: 14,6
  * *Sconto di testata 5*
37. **SCO_PERC6** - Decimal - Max Length: 14,6
  * *Sconto di testata 6*
38. **SCONTI_ANAG_PERC** - Character - Max Length: 255
  * *Sconti anagrafici in percentuale*
39. **SCONTI_ANAG_IMP** - Decimal - Max Length: 14,6
  * *Sconti anagrafica imponibile*
40. **MAGGIORAZIONE_ANAG_PERC** - Decimal - Max Length: 6,3
  * *Maggiorazione anagrafica percentuale*
41. **SCONTO_PIEDE** - Decimal - Max Length: 6,3
  * *Sconto piede*
42. **COD_LISTINO** - Character - Max Length: 50
  * *Codice del listino anagrafico*
43. **COD_CONDPAG** - Character - Max Length: 50
  * *Codice della condizione di pagamento*
44. **COD_VALUTA** - Character - Max Length: 50
  * **
45. **MACROAREA** - Character - Max Length: 255
  * *Macroarea di riferimento dell'azienda*
46. **DATA_CREAZIONE** - Date - Max Length: 10
  * *Data di creazione del record*
47. **AREA** - Character - Max Length: 255
  * *Area di appartenenza dell'azienda*
48. **ZONA** - Character - Max Length: 255
  * *Zona (campo descrittivo)*
49. **MACROCATEGORIA** - Character - Max Length: 255
  * *Macrocategoria di appartenenza dell'azienda*
50. **DATA_ULT_DOC_NO_FT** - Date - Max Length: 10
  * *Data dell'ultimo documento non fatturato*
51. **CATEGORIA** - Character - Max Length: 255
  * *Categoria di appartenenza dell'azienda*
52. **SOTTOCATEGORIA** - Character - Max Length: 255
  * *Categoria di appartenenza dell'azienda*
53. **DATA_ULT_DOC_FT** - Date - Max Length: 10
  * *Data ultimo documento fatturato*
54. **DATA_ULT_ORDINE** - Date - Max Length: 10
  * *Data dell'ultimo ordine*
55. **FIDO_AZIENDALE** - Decimal - Max Length: 15,2
  * *Fido aziendale*
56. **DES_RAGGR1** - Character - Max Length: 255
  * *Raggruppamento 1 (campo descrittivo)*
57. **DES_RAGGR2** - Character - Max Length: 255
  * *Raggruppamento 2 (campo descrittivo)*
58. **DES_RAGGR3** - Character - Max Length: 255
  * *Raggruppamento 3 (campo descrittivo)*
59. **COD_MACROAREA** - Character - Max Length: 50
  * *Codice della Macroarea*
60. **COD_AREA** - Character - Max Length: 50
  * *Codice dell'area*
61. **COD_ZONA** - Character - Max Length: 50
  * *Codice dell'area*
62. **COD_MACROCATEGORIA** - Character - Max Length: 50
  * *Codice della Macroarea*
63. **COD_CATEGORIA** - Character - Max Length: 50
  * *Codice della Macroarea*
64. **COD_SOTTOCATEGORIA** - Character - Max Length: 50
  * *Codice della Macroarea*
65. **FLG_NEW_CLIFOR** - Integer - Max Length: 2
  * *flag per specificare se questo cliente o fornitore deve abilitare l'inserimento di un nuovo cliente in fase di inserimento ordine*
66. **DAT_ULT_MOD** - DateTime - Max Length: 16
  * *Data di ultima modifica del record*

