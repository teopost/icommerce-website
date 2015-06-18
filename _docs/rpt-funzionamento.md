---
layout: docs
title: Funzionamento
permalink: /docs/rpt-funzionamento/
---

L'applicazione iPad consente - a partire dalla versione 4.1.0 - la generazione, visualizzazione e condivisione di report. Tali report vengono scaricati durante la sincronizzazione (sezione _Generali_ - _Modelli report_).
La generazione dei report avviene a partire da un template, editale da _AppManager_.

Il template è un foglio HTML (comprensivo anche di regole di stile) integrato con alcuni segnaposti. I segnaposti consentono all'applicazione di popolare il report dinamicamente con valori opportuni. La loro sintassi è: {{nomesegnaposto}}.

<div class="note warning">
  <h5>Fare una copia del report prima di modificarli</h5>
  <p>
  La modifica errata del report potrebbe causare una errata visualizzazione del report e, in casi particolari,
  il crash dell'applicazione.
  Si consiglia di effettuare una copia di backup del template prima di iniziarne l'editing.
  </p>
</div>

## Segnaposti di base

I seguenti segnaposti sono utilizzati dall'app per il rendering della pagina html:

* \{\{#documentHeader\}\} ...  \{\{/documentHeader\}\}
* \{\{#pageHeader\}\}     ...  \{\{/pageHeader\}\}
* \{\{#pageContent\}\}    ...  \{\{/pageContent\}\}
* \{\{#pageFooter\}\}     ...  \{\{/pageFooter\}\}
* \{\{#pageNumber\}\}     ...  \{\{/pageNumber\}\}


È possibile modificare il codice contenuto in tali segnaposti, inserendo direttive html.
Si consiglia di non rimuovere tali segnaposti.

## Contesti
L'applicazione supporta la generazione di report nei seguenti contesti. Per ogni contesto viene elencato l'elenco di voci che l'applicazione provvede a valorizzare.
È a discrezione di chi modifica il report la scelta di cosa far vedere/non far vedere, ed eventualmente la modifica delle regole di stile/layout html.

## Dimensione del logo
I report standard prevedono un logo di 512x512 pixel con estensione PNG. Questa è la dimensione consigliata ma,
ovviamente, se si effettua una personalizzazione del report, è probabilmente necessario adattare anche la dimensione
del logo.
