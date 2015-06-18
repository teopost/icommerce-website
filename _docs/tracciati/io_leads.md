---
layout: docs
title: io_leads.dat
permalink: /docs/io_leads/
---

Anagrafica dei leads

1. **CHIAVE** - Character - Max Length: 250
  * *Chiave univoca del record composta dai dati di origine*
2. **COD_DITTA** - Character - Max Length: 50
  * *Codice della ditta. Identifica univocamente una ditta dentro il gestionale che, nel caso sia multisocietario, può contenere dati di più aziende*
3. **COD_LEAD** - Character - Max Length: 50
  * *Codice Cliente / Fornitore*
4. **COD_CLIFOR** - Character - Max Length: 50
  * *Codice Cliente / Fornitore*
5. **DESCRIZIONE1** - Character - Max Length: 255
  * *Ragione sociale*
6. **DESCRIZIONE2** - Character - Max Length: 255
  * *Ragione sociale*
7. **INDIRIZZO** - Character - Max Length: 255
  * *Indirizzo*
8. **CITTA** - Character - Max Length: 255
  * *Città*
9. **CAP** - Character - Max Length: 20
  * *Codice di avviamento postale*
10. **PROVINCIA** - Character - Max Length: 255
  * *Sigla della Provincia (es: FC per Forlì)*
11. **DES_PROVINCIA** - Character - Max Length: 255
  * *Descrizione Provincia (Esempio Forlì)*
12. **NAZIONE** - Character - Max Length: 255
  * *NAZIONE*
13. **DES_NOTE** - Character - Max Length: 4000
  * *Note libere*
14. **PARTITA_IVA** - Character - Max Length: 50
  * *Partita iva*
15. **CODICE_FISCALE** - Character - Max Length: 20
  * *Codice fiscale*
16. **TELEFONO** - Character - Max Length: 255
  * *Numero di telefono 1 del cliente/fornitore*
17. **FAX** - Character - Max Length: 255
  * *Fax*
18. **CELLULARE** - Character - Max Length: 255
  * *Telefono cellulare*
19. **EMAIL** - Character - Max Length: 255
  * *Indirizzo email*
20. **INTERNET** - Character - Max Length: 255
  * *WEB*
21. **LATITUDINE** - Character - Max Length: 50,6
  * *Chiave univoca del record ereditata dai dati di origine*
22. **LONGITUDINE** - Character - Max Length: 50,6
  * *Chiave univoca del record ereditata dai dati di origine*
23. **FLG_MOD_NEL_DISP** - Integer - Max Length: 2
  * *flag per specificare se questo cliente o fornitore può essere modificato nel dispositivo*
24. **COD_STATUS** - Character - Max Length: 50
  * *codice stato del lead*
25. **STATUS** - Character - Max Length: 255
  * *descrizione dello stato del lead*
26. **COD_CATEGORIA** - Character - Max Length: 50
  * *Codice della Macroarea*
27. **CATEGORIA** - Character - Max Length: 255
  * *Categoria di appartenenza dell'azienda*
28. **COD_ZONA** - Character - Max Length: 50
  * *Codice dell'area*
29. **ZONA** - Character - Max Length: 255
  * *Zona (campo descrittivo)*
30. **DATA_ULT_OFFERTA** - Date - Max Length: 10
  * *Data dell'ultima offerta*
31. **DATA_CREAZIONE** - Date - Max Length: 10
  * *Data di creazione del record*
32. **BANCA1** - Character - Max Length: 255
  * *Banca*
33. **BANCA2** - Character - Max Length: 255
  * *Banca*
34. **COD_LISTINO** - Character - Max Length: 50
  * *Codice del listino anagrafico*
35. **LISTINO** - Character - Max Length: 255
  * *Listino anagrafico*
36. **FLG_PRIVACY** - Character - Max Length: 10
  * *flag di autorizzazione privacy*
37. **DES_PRIVACY** - Character - Max Length: 80
  * *descrizione per il flag di autorizzazione privacy*
38. **FLG_CONTATTATO** - Character - Max Length: 10
  * *flag già contattato*
39. **DES_CONTATTATO** - Character - Max Length: 255
  * *descrizione per il flag contattato*
40. **FLG_NON_INTERESSATO** - Character - Max Length: 10
  * *flag non interessato*
41. **DES_NON_INTERESSATO** - Character - Max Length: 255
  * *descrizione per il flag non interessato*
42. **DAT_ULT_MOD** - DateTime - Max Length: 16
  * *Data di ultima modifica del record*

