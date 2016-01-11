---
layout: docs
title: io_listini_full.dat
permalink: /docs/io_listini_full/
---

Tabella di anagrafica dei listini per prodotto completa.
Questa tabella va riempita con tutti i prezzi lordi. Le colonne sono gli elementi discriminanti (filtri) che partecipano alla selezione del prezzo.
Un valore null in uno di questi campi significa che il prezzo indicato vale per tutti i valori possibili.{br}
Esempio 1:
* COD_CLIFOR = 10
* COD_ART = null (empty string)
* PREZZO 20
In questo caso, il prezzo è 20 per il cliente 10 e per tutti gli articoli.

Esempio 2:
* COD_CLIFOR = 10
* COD_ART = ART02
* PREZZO 25
Se fosse presente una seconda riga con questi valori, nel caso in cui l'articolo vale ART02, il prezzo e' 25. Per tutti gli altri articoli vale 20.

Il funzionamento sull'algoritmo di calcolo dei listini è descritto nell'articolo [iOrder-Gestione-listini|Gestione listini]


1. **CHIAVE** - Character - Max Length: 250
  * *Chiave univoca del record composta dai dati di origine*
2. **COD_DITTA** - Character - Max Length: 50
  * *Codice della ditta. Identifica univocamente una ditta dentro il gestionale che, nel caso sia multisocietario, può contenere dati di più aziende*
3. **TIPO_LISTINO** - Character - Max Length: 50
  * **
4. **COD_ART** - Character - Max Length: 50
  * *Codice dell'articolo*
5. **TIPO_CLIFOR** - Integer - Max Length: 2
  * *Tipologia (0=Cliente, 1=Fornitore)*
6. **COD_CLIFOR** - Character - Max Length: 50
  * *Codice Cliente / Fornitore*
7. **COD_DEPOSITO** - Character - Max Length: 50
  * *Codice identificativo del deposito*
8. **COD_MACROAREA** - Character - Max Length: 50
  * *Codice della Macroarea*
9. **COD_AREA** - Character - Max Length: 50
  * *Codice dell'area*
10. **COD_ZONA** - Character - Max Length: 50
  * *Codice dell'area*
11. **COD_MACROCATEGORIA** - Character - Max Length: 50
  * *Codice della Macroarea*
12. **COD_CATEGORIA** - Character - Max Length: 50
  * *Codice della Macroarea*
13. **COD_SOTTOCATEGORIA** - Character - Max Length: 50
  * *Codice della Macroarea*
14. **COD_FAM_INIZIO** - Character - Max Length: 50
  * *Famiglia di partenza*
15. **COD_FAM_FINE** - Character - Max Length: 50
  * *Famiglia di partenza*
16. **COD_SFAM_INIZIO** - Character - Max Length: 50
  * *Famiglia di partenza*
17. **COD_SFAM_FINE** - Character - Max Length: 50
  * *Famiglia di partenza*
18. **COD_GRUPPO_INIZIO** - Character - Max Length: 50
  * *Gruppo di partenza*
19. **COD_GRUPPO_FINE** - Character - Max Length: 50
  * *Gruppo di fine selezione*
20. **COD_SGRUPPO_INIZIO** - Character - Max Length: 50
  * *Gruppo di partenza*
21. **COD_SGRUPPO_FINE** - Character - Max Length: 50
  * *Gruppo di partenza*
22. **COD_LISTINO** - Character - Max Length: 50
  * *Codice del listino*
23. **COD_CAMPAGNA** - Character - Max Length: 50
  * *Codice della campagna*
24. **COD_DESTINAZIONE** - Character - Max Length: 50
  * *Codice destinazione*
25. **COD_CLASSE** - Character - Max Length: 50
  * *Codice classe*
26. **COD_COMBINAZIONE** - Character - Max Length: 255
  * *Codice della combinazione sulla gestione taglie e colori (Mettere null se la gestione taglie e colori non è utilizzata)*
27. **COD_VALUTA** - Character - Max Length: 50
  * *Definire il codice della valuta per la gestione del listino in valuta estera*
28. **FLG_ESCLUDI_SCONTI** - Character - Max Length: 16
  * *Flag che identifica un prezzo al quale non bisogna applicare gli scontidefiniti nel tracciato sconti*
29. **QUANTITA_INIZIO** - Decimal - Max Length: 25,8
  * *Quantità minima di vendita*
30. **QUANTITA_FINE** - Decimal - Max Length: 25,8
  * *Quantità minima di vendita*
31. **DATA_INIZIO** - Date - Max Length: 10
  * *Data di inizio validità del listino*
32. **DATA_FINE** - Date - Max Length: 10
  * *Data di fine validità del listino*
33. **PREZZO** - Decimal - Max Length: 28,8
  * *Prezzo dell'articolo per il listino in corso (lordo)*
34. **PRIORITA** - Integer - Max Length: 9
  * *Identifica il listino con priorità di importanz *
35. **SCONTO1** - Decimal - Max Length: 14,6
  * *Sconto in percentuale (Impostare a zero se si usa il tracciato sconti)*
36. **SCONTO2** - Decimal - Max Length: 14,6
  * *Sconto in percentuale (Impostare a zero se si usa il tracciato sconti)*
37. **SCONTO3** - Decimal - Max Length: 14,6
  * *Sconto in percentuale (Impostare a zero se si usa il tracciato sconti)*
38. **SCONTO4** - Decimal - Max Length: 14,6
  * *Sconto in percentuale (Impostare a zero se si usa il tracciato sconti)*
39. **SCONTO5** - Decimal - Max Length: 14,6
  * *Sconto in percentuale (Impostare a zero se si usa il tracciato sconti)*
40. **SCONTO6** - Decimal - Max Length: 14,6
  * *Sconto in percentuale (Impostare a zero se si usa il tracciato sconti)*
41. **SCONTO_IMP** - Decimal - Max Length: 28,8
  * *Sconto a importo*
42. **MAG_PERC1** - Decimal - Max Length: 14,6
  * *Maggiorazione 1 in percentuale (Impostare a zero se si usa il tracciato sconti)*
43. **MAG_PERC2** - Decimal - Max Length: 14,6
  * *Maggiorazione 2 in percentuale (Impostare a zero se si usa il tracciato sconti)*
44. **MAG_IMP** - Decimal - Max Length: 28,8
  * *Maggiorazione a importo (Impostare a zero se si usa il tracciato sconti)*
45. **IND_GES_PREZZO** - Character - Max Length: 5
  * *Indicatore gestione prezzo (Impostare a 4 se si usano gli sconti sul tracciato io_sconti.dat)*
46. **IND_GES_SC1_PER** - Character - Max Length: 5
  * *Indicatore gestione sconto 1 in percentuale (Impostare a zero se si usa il tracciato sconti)*
47. **IND_GES_SC2_PER** - Character - Max Length: 5
  * *Indicatore gestione sconto 2 in percentuale (Impostare a zero se si usa il tracciato sconti)*
48. **IND_GES_SC3_PER** - Character - Max Length: 5
  * *Indicatore gestione sconto 3 in percentuale (Impostare a zero se si usa il tracciato sconti)*
49. **IND_GES_SC4_PER** - Character - Max Length: 5
  * *Indicatore gestione sconto 4 in percentuale (Impostare a zero se si usa il tracciato sconti)*
50. **IND_GES_SC5_PER** - Character - Max Length: 5
  * *Indicatore gestione sconto 5 in percentuale (Impostare a zero se si usa il tracciato sconti)*
51. **IND_GES_SC6_PER** - Character - Max Length: 5
  * *Indicatore gestione sconto 6 in percentuale (Impostare a zero se si usa il tracciato sconti)*
52. **IND_GES_SC_IMP** - Character - Max Length: 5
  * *Indicatore gestione sconto importo (Impostare a zero se si usa il tracciato sconti)*
53. **IND_GES_MAG1_PER** - Character - Max Length: 5
  * *Indicatore gestione maggiorazione percentuale 1 (Impostare a zero se si usa il tracciato sconti)*
54. **IND_GES_MAG2_PER** - Character - Max Length: 5
  * *Indicatore gestione maggiorazione percentuale 2 (Impostare a zero se si usa il tracciato sconti)*
55. **IND_GES_MAG_IMP** - Character - Max Length: 5
  * *Indicatore gestione maggiorazione importo (Impostare a zero se si usa il tracciato sconti)*
56. **COD_CATALOGO** - Character - Max Length: 255
  * *Descrivi il contenuto del campo*
57. **COD_MATERIALE_COMB** - Character - Max Length: 255
  * *Descrivi il contenuto del campo*
58. **COD_MATERIALE1** - Character - Max Length: 255
  * *Codice materiale*
59. **COD_COLORE1** - Character - Max Length: 255
  * *Codice colore*
60. **COD_MATERIALE2** - Character - Max Length: 255
  * *Codice materiale*
61. **COD_COLORE2** - Character - Max Length: 255
  * *Codice colore*
62. **COD_MATERIALE3** - Character - Max Length: 255
  * *Codice materiale*
63. **COD_COLORE3** - Character - Max Length: 255
  * *Codice colore*
64. **COD_MATERIALE4** - Character - Max Length: 255
  * *Codice materiale*
65. **COD_COLORE4** - Character - Max Length: 255
  * *Codice colore*
66. **COD_MATERIALE5** - Character - Max Length: 255
  * *Codice materiale*
67. **COD_COLORE5** - Character - Max Length: 255
  * *Codice colore*
68. **COD_MATERIALE6** - Character - Max Length: 255
  * *Codice materiale*
69. **COD_COLORE6** - Character - Max Length: 255
  * *Codice colore*
70. **COD_MATERIALE7** - Character - Max Length: 255
  * *Codice materiale*
71. **COD_COLORE7** - Character - Max Length: 255
  * *Codice colore*
72. **COD_MATERIALE8** - Character - Max Length: 255
  * *Codice materiale*
73. **COD_COLORE8** - Character - Max Length: 255
  * *Codice colore*
74. **COD_MATERIALE9** - Character - Max Length: 255
  * *Codice materiale*
75. **COD_COLORE9** - Character - Max Length: 255
  * *Codice colore*
76. **COD_MATERIALE10** - Character - Max Length: 255
  * *Codice materiale*
77. **COD_COLORE10** - Character - Max Length: 255
  * *Codice colore*
78. **DAT_ULT_MOD** - DateTime - Max Length: 16
  * *Data di ultima modifica del record*

