---
layout: docs
title: Connettore
permalink: /docs/connettore/
---
Il connettore svolge principalmente 2 funzioni:

1. Esporta i dati per gli ipad (es. anagrafiche clienti, fornitori, listini, ecc...).
2. Importa i dati di ritorno dagli iPad (es. ordini, mod. anagrafiche, nuovi leads, ecc...)

I files creati dal connettore, sono depositati in una cartella dropbox che ha una specifica naming convention:

    c:\dropbox\[nomeazienda]\gestionali

Tale cartella è condivisa con l'AppManager che controlla periodicamente il contenuto per importare i dati e renderli disponibili agli iPad attraverso specifici web services.

I files devono seguire le seguenti specifiche:

* Il separatore dei campi e' il pipe
* I files devono avere tutti le intestazione di colonna (Es: COD_DITTA|CHIAVE|...ecc)
* Le date devono avere il formato ddmmyyyy e riempimento a sx con zeri (es: per 10 gennaio 2013, 10012013)
* Il separatore decimale è la virgola
* La data di ultima modifica (DAT_ULT_MOD) è obsoleta e va impostata a 01011900000000 per motivi di compatibilità.
* Le righe non devono concludersi con un separatore (es: DAT_ULT_MOD, no DAT_ULT_MOD|)
* I testi NON devono MAI contenere il carattere separatore | (pipe).
* Eventuali newline (chr(10, char(13), presenti nei testi devono essere sostituiti con il carattere §
* I testi non devono mai superare i 4000 caratteri

Esempio (file io_citta.dat):

```
|CHIAVE     | COD_DITTA | CODICE | DESCRIZIONE           | CAP   | PROVINCIA | DAT_ULT_MOD
| --
|ACMNE§A001 | ACMNE     | A001   | ABANO TERME           | 35031 | PD        | 01011900000000
|ACMNE§A002 | ACMNE     | A002   | ABBADIA               |       | CO        | 01011900000000
|ACMNE§A002A| ACMNE     | A002A  | ABBADIA SOPRA ADDA    |       | CO        | 01011900000000
|ACMNE§A003 | ACMNE     | A003   | ABBADIA               |       | TO        | 01011900000000
|ACMNE§A003A| ACMNE     | A003A  | ABBADIA ALPINA        |       | TO        | 01011900000000
|ACMNE§A004 | ACMNE     | A004   | ABBADIA CERRETO       | 26834 | LO        | 01011900000000
|ACMNE§A005 | ACMNE     | A005   | ABBADIA LARIANA       | 23821 | LC        | 01011900000000
|ACMNE§A006 | ACMNE     | A006   | ABBADIA SAN SALVATORE | 53021 | SI        | 01011900000000
|ACMNE§A007 | ACMNE     | A007   | ABBASANTA             | 09071 | OR        | 01011900000000

```
