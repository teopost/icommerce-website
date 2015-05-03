---
layout: docs
title: Come funziona
permalink: /docs/how-work/
---
iOrder mostra i dati del gestionale con cui è integrata attraverso una architettura **cloud based** che coinvolge vari componenti software.

I dati inviati dagli iPad (es: ordini), subiscono lo stesso percorso descritto di seguito, ma in senso inverso.

| Componente      | Descrizione
| --
| Connettore      | Esporta ed importa i dati verso e da
| Dropbox         | Trasferimento dei dati verso AppManager
| AppManager      | Import i file esportati dal connettore e li espone verso gli iPad
| License Manager | Gestisce la configurazione e gli accessi degli utenti

![](come-funziona.png)

### Connettore

Il connettore si preoccupa di estrarre ed importare i dati verso e da l'ipad. I dati devono essere esportati sotto forma di file ASCII delimitati e devono rispettare i seguenti criteri:

I files creati dal connettore (che vanno verso gli ipad), devono essere creati dal connettore e depositati in una cartella che ha una specifica naming convention:

    c:\dropbox\[nomeazienda]\gestionali

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
CHIAVE     | COD_DITTA | CODICE | DESCRIZIONE           | CAP   | PROVINCIA | DAT_ULT_MOD
ACMNE§A001 | ACMNE     | A001   | ABANO TERME           | 35031 | PD        | 01011900000000
ACMNE§A002 | ACMNE     | A002   | ABBADIA               |       | CO        | 01011900000000
ACMNE§A002A| ACMNE     | A002A  | ABBADIA SOPRA ADDA    |       | CO        | 01011900000000
ACMNE§A003 | ACMNE     | A003   | ABBADIA               |       | TO        | 01011900000000
ACMNE§A003A| ACMNE     | A003A  | ABBADIA ALPINA        |       | TO        | 01011900000000
ACMNE§A004 | ACMNE     | A004   | ABBADIA CERRETO       | 26834 | LO        | 01011900000000
ACMNE§A005 | ACMNE     | A005   | ABBADIA LARIANA       | 23821 | LC        | 01011900000000
ACMNE§A006 | ACMNE     | A006   | ABBADIA SAN SALVATORE | 53021 | SI        | 01011900000000
ACMNE§A007 | ACMNE     | A007   | ABBASANTA             | 09071 | OR        | 01011900000000

```
*Nota: Per chiarezza, il file è stato riportato con l'allineamento delle colonne, ma gli spazi alla fine di ogni stringa non devono essere messi*

### Dropbox

I files creati dal connettore vengono trasferiti attraverso l'utilizzo di una cartella condivisa di dropbox, su un server chiamato **AppManager**
L'utilizzo di dropbox consente di ottimizzare l'utilizzo della banda. Infatti dropbox, rispetto all'utilizzo di un diverso sistema come ad esempio un trasferimento ftp, è in grado di:

* Trasferire i files solo se sono cambiati
* Trasferire, dei files, solo le parti modificate (chunk)

### AppManager

L'AppManager periodicamente controlla il contenuto della cartella e carica i files nel suo database.
Tali files vengono processati e resi disponibili agli iPad sotto forma di web service rest.

