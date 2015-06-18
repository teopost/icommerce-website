---
layout: docs
title: Ordini veloci
permalink: /docs/rpt-ordini-veloci/
---

Tale report comprende i seguenti segnaposti, popolati dinamicamente dall'applicazione:

* \{\{#rows\}\} ... \{\{#/rows\}\} : sezione contenente la lista di ordini salvati da ordini veloci. Per ogni elemento della lista, vengono mostrati i seguenti campi:
    * \{\{codArt\}\} : codice articolo a cui la riga ordine si riferisce.
    * \{\{desArt\}\} :  descrizione articolo a cui la riga ordine si riferisce.
    * \{\{dataConsegna\}\} :  data di consegna a cui la riga ordine si riferisce.
    * \{\{prz1\}\} :  prezzo in unità di misura principale a cui la riga ordine si riferisce.
    * \{\{qta1\}\} :  quantità in unità di misura principale a cui la riga ordine si riferisce.
    * \{\{importoRiga\}\} : importo della riga ordine.
    * \{\{umRiga\}\} : unità di misura secondaria.
    * \{\{qtaRiga\}\} : quantità in unità di misura secondaria.
    * \{\{#scontiRiga.withPosition(scontiRiga.sconti) \}\} ... \{\{/scontiRiga.withPosition(scontiRiga.sconti) \}\} : contenente la lista degli sconti applicati alla riga ordine.
    * \{\{sconto\}\} : contenente il singolo sconto.

* \{\{appLogoSrc\}\} : sorgente del logo visualizzato nel report.
* \{\{appName\}\} : nome dell'applicazione.
* \{\{title\}\} : titolo del report.
* \{\{alertMessage\}\} : valorizzato con un messaggio di alert ("documento senza valore fiscale").
* \{\{printDate\}\} : data di creazione del documento.
* \{\{codAgente\}\} : codice agente dell'utente loggato.
* \{\{desAgente\}\} : descrizione dell'utente loggato.
* \{\{codCliente\}\} : codice del cliente relativo all'ordine.
* \{\{ragSocCliente\}\} : la ragione sociale del cliente relativo all'ordine.
* \{\{indirizzoCliente\}\}  indirizzo del cliente relativo all'ordine.
* \{\{capCliente\}\}  CAP del cliente relativo all'ordine.
* \{\{cittaCliente\}\}  città del cliente relativo all'ordine.
* \{\{provCliente\}\}  provincia del cliente relativo all'ordine.
* \{\{telefonoCliente\}\}  telefono del cliente relativo all'ordine.
* \{\{faxCliente\}\}  fax del cliente relativo all'ordine.
* \{\{emailCliente\}\}  email del cliente relativo all'ordine.
* \{\{#scontiIndexes.withPosition(scontiIndexes.indexes)\}\} ... \{\{/scontiIndexes.withPosition(scontiIndexes.indexes)\}\} : sezione contenente la lista di sconti applicati sull'ordine.
* \{\{index\}\} : indice relativo ad uno sconto.
* \{\{total\}\} : totale del documento.
