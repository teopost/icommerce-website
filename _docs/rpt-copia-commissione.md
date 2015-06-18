---
layout: docs
title: Copia commissione
permalink: /docs/rpt-copia-commissione/
---

Tale report comprende i seguenti segnaposti, popolati dinamicamente dall'applicazione:

* \{\{#rows\}\} ... \{\{#/rows\}\} : sezione contenente la lista di incassi effettuati. Per ogni elemento della lista, vengono mostrati i seguenti campi:
    * \{\{codCliente\}\} : codice del cliente a cui l'incasso si riferisce.
    * \{\{ragScociale\}\} :  ragione sociale del cliente a cui l'incasso si riferisce.
    * \{\{numDoc\}\} :  numero documento a cui l'incasso si riferisce.
    * \{\{dataDoc\}\} :  data del documento a cui l'incasso si riferisce.
    * \{\{dataScad\}\} :  data di scadenza del documento a cui l'incasso si riferisce.
    * \{\{tipoInc\}\} : tipo di incasso.
    * \{\{dataInc\}\} : data in cui l'incasso è avvenuto.
    * \{\{impScad\}\} : valorizzato l'importo della scadenza a cui l'incasso si riferisce.
    * \{\{impInc\}\} : valorizzato con l'importo incassato.

* \{\{appLogoSrc\}\} : sorgente del logo visualizzato nel report.
* \{\{appName\}\} : nome dell'applicazione.
* \{\{title\}\} : titolo del report.
* \{\{startDate\}\} : data da cui parte il periodo di visualizzazione delle scadenze.
* \{\{startDate\}\} : data da cui finisce il periodo di visualizzazione delle scadenze.
* \{\{printDate\}\} : data di creazione del documento.
* \{\{codAgente\}\} : codice agente dell'utente loggato.
* \{\{desAgente\}\} : descrizione dell'agebte loggato.
* \{\{total\}\} : totale del documento.
