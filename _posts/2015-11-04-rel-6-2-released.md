---
layout: news_item
title: Rilasciata la rel. 6.2
date: "2015-10-30 08:00:00 +0200"
author: teopost
version: 6.2
categories: [release]
---

### Anomalie

**_Problema di sovrascrittura degli ordini in Taglie&Colori_** - (rif: 10507)

Risolto un problema nel Taglie&Colori che permetteva, in alcuni casi, di sovrascrivere le testate ordine salvate

### Modifiche

**_Ottimizzata fase inizializzazione sincronizzazione_** - (rif: 10493)

Nella fase iniziale della sincronizzazione vengono cancellati i dati della precedente sincronizzazione.
Questa fase è stata enormemente velocizzata grazie all'adozione di una nuova funzionalità di iOS 9 (batch delete in core data).
