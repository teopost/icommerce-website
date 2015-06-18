---
layout: docs
title: Importare dati
permalink: /docs/import-dati/
---

## Ordini

I files di import (verso gli ipad), vengono creati dall'appmanager e depositati nella cartella c:\dropbox\nomeazienda\appmanager.
Devono seguire le seguenti specifiche:

* Il separatore dei campi e' il pipe
* I files NON hanno l'intestazione di colonna
* Le date hanno il formato ddmmyyyy (es: per 10 gennaio 2013, 10012013)
* Il separatore decimale è la virgola
* Le righe terminano senza separatore (es: FILLER20, no FILLER20\|)
* I testi NON contengono MAI il carattere separatore \| (pipe).
* Eventuali newline chr(10) + char(13), presenti nei testi sono sostituiti con il carattere speciale §
* I testi non superano MAI i 4000 caratteri


## Lista dei campi

| Campo              | Descrizione |
|-
| COD_DITTA          | Codice della Ditta (obsoleto non più usato) |
| COD_EXT_ORD        | Codice dell'ordine assegnato del dispositivo  |
| T_DAT_ORDINE       | Data dell'ordine |
| NR_ORD_ORIG        | Numero dell'ordine assegnato dal dispositivo |
| T_COD_CLIFOR       | Codice cliente |
| T_COD_AGENTE       | Codice agente |
| T_DAT_CONS_TES     | Data di consegna |
| R_DES_NOTE         | Nota di riga (inserita dall'agente durante l'acquizizione dell'ordine) |
| T_COD_DEST         | Codice della destinazione |
| R_IND_TIPO_RIGA    | Tipologia di riga ordine (0=Articolo, 2=Riga Descrittiva) |
| R_COD_ART          | Codice dell'articolo |
| R_DES_RIGA_ORD     | Descrizione della riga articolo |
| R_CDA_UM1          | Codice dell' unità di misura principale (se l'ordine viene preso con la UM2, viene presa l'UM1 del tracciato io_art_um.dat) |
| R_CDA_UM2          | Codice dell' unità di misura secondaria |
| R_QTA_1            | Quantità dell' unità di misura principale (se l'ordine viene preso con la UM2, viene calcolato usando il fattore di conversione) |
| R_QTA_2            | Quantità dell' unità di misura secondaria |
| R_PREZZO_1         | Prezzo del'unità di misura 1 |
| R_PREZZO_2         | Prezzo del'unità di misura 1 |
| TIPO_UM            | Tipo univa di misura (1=Principale, 2=Secondaria, 3=Confezione) |
| R_IND_TIPO_OM      | Tipologia di omaggio (0=Nessuno, 1=Con rivalsa, 2=Senza rivalsa, 3=Sconto merce) |
| R_SCONTO_1         | Sconto 1 di riga (in percentuale) |
| R_SCONTO_2         | Sconto 2 di riga (in percentuale) |
| R_SCONTO_3         | Sconto 3 di riga (in percentuale) |
| R_SCONTO_4         | Sconto 4 di riga (in percentuale) |
| R_SCONTO_5         | Sconto 5 di riga (in percentuale) |
| R_SCONTO_6         | Sconto 6 di riga (in percentuale) |
| R_SCONTO_IMP       | Sconto di riga a importo  |
| R_MAG_PERC1        | Maggiorazione di riga 1 in percentuale |
| R_MAG_PERC2        | Maggiorazione di riga 2 in percentuale |
| R_MAG_IMP          | Maggiorazione di riga a importo |
| R_COD_CONF         | Codice della confezione con cui è stato preso l'ordine |
| R_QTA_COLLI        | Quantità dei colli |
| T_COD_COND_PAG     | Codice condizione di pagamento dell' ordine |
| T_COD_COND_PAG_DEP | Codice condizione di pagamento per articoli deperibili |
| T_COD_OPERATORE    | Codice operatore |
| T_DAT_CONS_RIG     | Data di consegna di riga |
| FILLER5            | Non usato |
| FILLER6            | Non usato |
| FILLER7            | Non usato |
| FILLER8            | Non usato |
| FILLER9            | Non usato |
| FILLER10           | Non usato |
| FILLER11           | Non usato |
| FILLER12           | Non usato |
| FILLER13           | Non usato |
| FILLER14           | Non usato |
| FILLER15           | Non usato |
| FILLER16           | Non usato |
| FILLER17           | Non usato |
| FILLER18           | Non usato |
| FILLER19           | Non usato |
| FILLER20           | Non usato |
