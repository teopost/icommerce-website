---
layout: docs
title: Acquisizione dati
permalink: /docs/acquisizione-dati/
---

I files da inviare agli iPad, depositati nella cartella gestionale, vengono normalmente, verificati per l'import ogni 30 minuti.
Questo tempo però non è sempre uguale, ma dipende dalla coda di elaborazioni in corso in quell'istante.

Ogni volta che viene messo un file nella cartella, prima di effettuare l'import il server fa un controllo sul hash MD5 del file per verificare che sia stato effettivamente modificato dalla precedente sincronizzazione.
Nel caso l'hash corrisponda al file del precedente import, il file viene scartato (eliminato).
Dopo l'elaborazione, in ogni caso (import o scarto), il file viene cancellato dalla cartella.

<div class="note info">
  <h5>Hai esportato i dati ma ancora non li vedi negli iPad?</h5>
  <p>Se i dati sono ancora presenti nella cartella gestionale, significa che il server ancora non li ha elaborati.</p>
</div>
