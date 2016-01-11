---
layout: docs
title: Copia commissione
permalink: /docs/rpt-copia-commissione/
---

<div class="note warning">
  <h5>Valido solo per il modulo wTrendy</h5>
  <p>
   Questo report viene visualizzato solo se si dispone del modulo wTrendy per la gestione delle taglie / colori
  </p>
</div>

Tale report comprende i seguenti segnaposti, popolati dinamicamente dall'applicazione:

  * \{\{#rows\}\} ... \{\{#/rows\}\} : sezione contenente la lista di ordini salvati. Per ogni elemento della lista, vengono mostrati i seguenti campi:
    * \{\{codArt\}\} : valorizzato con il codice articolo a cui la riga ordine si riferisce.
    * \{\{desArt\}\} :  valorizzato con la descrizione articolo a cui la riga ordine si riferisce.
    * \{\{desExt\}\} :  valorizzato con la descrizione dei materiali/colori o variante/combinazione della riga ordine.
    * \{\{campione\}\} : valorizzato con un carattere che indica se il dettaglio di riga è un campione.
    * \{\{desAssort\}\} : valorizzato con la descrizione dell'assortimento relativo al dettaglio di riga.
    * \{\{nAssort\}\} : valorizzato con il numero di assortimenti relativi al dettaglio di riga.
    * \{\{totPaia\}\} : valorizzato con il totale delle paia ordinate.
    * \{\{paiaCartone\}\} : valorizzato con il totale delle paia nell'assortimento.
    * \{\{campione\}\} : valorizzato con un flag che indica se la riga in oggetto è di tipo campione.
    * \{\{prz\}\} : valorizzato con il prezzo unitario.
    * \{\{przRetail\}\} : valorizzato con il prezzo retail dell'articolo a cui l'ordine afferisce.
    * \{\{img\}\} : valorizzato con il sorgente dell'immagine associata all'articolo.
    * \{\{#taglieRiga.withPosition(taglieRiga.taglie)\}\} ... \{\{/taglieRiga.withPosition(taglieRiga.taglie) \}\} : sezione contenente la lista di quantità delle taglie presenti nella numerata.
      * \{\{qtaTaglia\}\} : valorizzato con la quantità relativa ad una taglia.

  * \{\{appLogoSrc\}\} : valorizzato con il sorgente del logo visualizzato nel report.
  * \{\{appName\}\} : valorizzato con il nome dell'applicazione.
  * \{\{title\}\} : valorizzato con il titolo del report.
  * \{\{alertMessage\}\} : valorizzato con un messaggio di alert ("documento senza valore fiscale").
  * \{\{printDate\}\} : valorizzato con la data di creazione del documento.
  * \{\{noteTestata\}\} : valorizzato con le note di testata dell'ordine.
  * \{\{dataConsegna\}\} : valorizzato con la data di consegna presente nella testata dell'ordine.
  * \{\{desPagamento\}\} : valorizzato con la descrizione della condizione di pagamento presente nella testata dell'ordine.
  * \{\{desDestinazione\}\} : valorizzato con la descrizione della destinazione presente nella testata dell'ordine.
  * \{\{desScatola\}\} : valorizzato con  la descrizione della scatola presente nella testata dell'ordine.
  * \{\{desEtichetta\}\} : valorizzato con la descrizione dell'etichetta presente nella testata dell'ordine.
  * \{\{desPorto\}\} : valorizzato con la descrizione del porto presente nella testata dell'ordine.
  * \{\{desModalitaSpedizione\}\} : valorizzato con la descrizione della modalità di spedizione presente nella testata dell'ordine.
  * \{\{sconti\}\} : valorizzato con la lista di sconti presenti nella testata dell'ordine.
  * \{\{codAgente\}\} : valorizzato con il codice agente dell'utente loggato.
  * \{\{desAgente\}\} : valorizzato con la descrizione dell'utente loggato.
  * \{\{ragSocCliente\}\} : valorizzato con la ragione sociale del cliente a cui si riferisce l'ordine.
  * `\{\{#taglieIndexes.withPosition(taglieIndexes.indexes) \}\} ... \{\{/taglieIndexes.withPosition(taglieIndexes.indexes) \}\} : sezione contenente la lista di indici relativi alle taglie (numerata).
  * \{\{indirizzoCliente\}\} : valorizzato con l'indirizzo della destinazione del cliente.
  * \{\{capCliente\}\} : valorizzato con il cap del cliente.
  * \{\{cittaCliente\}\} : valorizzato con la citta del cliente.
  * \{\{provCliente\}\} : valorizzato con la provincia del cliente.
  * \{\{nazioneCliente\}\} : valorizzato con la nazione del cliente.
  * \{\{telefonoCliente\}\} : valorizzato con il telefono del cliente.
  * \{\{faxCliente\}\} : valorizzato con il fax del cliente.
  * \{\{emailCliente\}\} : valorizzato con l'email del cliente.
  * \{\{iban\}\} : valorizzato con l'iban del cliente.
  * \{\{codFiscCliente\}\} : valorizzato con il codice fiscale del cliente.
  * \{\{canaleVenditaCliente\}\} : valorizzato con il canale di vendita del cliente.
  * \{\{categoriaCliente\}\} : valorizzato con la categoria del cliente.
  * \{\{classeScontoCliente\}\} : valorizzato con la classe di sconto del cliente.
  * \{\{noteCliente\}\} : valorizzato con le note del cliente.
  * \{\{partitaIvaCliente\}\} : valorizzato con la partita iva del cliente.
  * \{\{ragSocConsegna\}\} : valorizzato con la ragione sociale riferita alla consegna.
  * \{\{indirizzoConsegna\}\} : valorizzato con l'indirizzo di consegna.
  * \{\{cittaConsegna\}\} : valorizzato con la citta di consegna.
  * \{\{capConsegna\}\} : valorizzato con il cap di consegna.
  * \{\{provConsegna\}\} : valorizzato con la provincia di consegna.
  * \{\{nazioneConsegna\}\} : valorizzato con la nazione di consegna.
  * \{\{telConsegna\}\} : valorizzato con il telefono di consegna.
  * \{\{faxConsegna\}\} : valorizzato con il fax di consegna.
  * \{\{cellConsegna\}\} : valorizzato con il cell di consegna.
  * \{\{portoConsegna\}\} : valorizzato con il porto di consegna.
  * \{\{desPag\}\} : valorizzato con la descrizione del pagamento.
  * \{\{index\}\} : valorizzato con l'indice relativo a una taglia.
  * \{\{total\}\} : valorizzato con il totale del documento.
