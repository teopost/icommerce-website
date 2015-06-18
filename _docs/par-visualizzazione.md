---
layout: docs
title: Param. visualizzazione
permalink: /docs/par-visualizzazione/
---

### Mostra la giacenza

<div class="note info">
  <h5>TO BE COMPLETE</h5>
  <p>Ancora un po di pazienza. Stiamo completando la documentazione</p>
</div>


### Mostra tutti i dati anche se sono agente

La visualizzazione della lista dei clienti sul dispositivo è governata dalla combinazione di due parametri:

* L'associazione dell'utente dell'iPad con il codice agente
* Il flag Mostra tutti i dati anche se sono agente

Nel modulo ordini, della **Scheda Ordini**, la visualizzazione della lista clienti è controllata dall'associazione dell'utente con il codice agente.

* Codice agente ASSOCIATO all'utente: Vengono mostrati solo i clienti associati all'agente
* Codice agente NON ASSOCIATO (campo vuoto): Vengono mostrati tutti i clienti

Nella **Scheda clienti**, vale la stessa regola definita per la Scheda Ordini ma è possibile gestire una eccezione agendo sul parametro "Mostra tutti i dati anche se sono agente".

* Se il parametro è SELEZIONATO: Vengono mostrati tutti i clienti anche se è presente l'associazione. In prativa viene escluso il filtro.
* Se il parametri NON SELEZIONATO: Vengono mostrati solo i clienti associati.

Par fare un esempio, se si vogliono vedere TUTTI i clienti nelle schede e solo i clienti ASSOCIATI al mio codice agente, devo configurare il license in questo modo:

* Flag Mostra tutti i dati anche se sono agente a TRUE
* Codice agente associato all'operatore


### Mostra UM secondaria invece della primaria in storico

<div class="note info">
  <h5>TO BE COMPLETE</h5>
  <p>Ancora un po di pazienza. Stiamo completando la documentazione</p>
</div>


### Consenti modifica prezzo in inserimento ordine
* Verifica quantità ordinabile per colli
* Mostra la disponibilità
* Mostra ultimo prezzo acquisto in inserimento ordine
* Mostra ultimo prezzo rilevato da DDT
* Consenti modifica sconti in Inserimento ordine
