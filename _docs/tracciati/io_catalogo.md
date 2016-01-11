---
layout: docs
title: io_catalogo.dat
permalink: /docs/io_catalogo/
---

Tracciato per l'importazione di dati multimediali.</br>
All'interno dell'iPad, nella sezione catalogo, è possibile mostrare le fotografie degli articoli in una gerarchia di cartelle che rappresentano la struttura merceologica ( famiglia, gruppo, ecc).</br>
Questo tracciato descrive tale gerarchia.
La cartella con le immagini da importare deve rispcchiare questo criterio:

* Deve contenere tutte le fotografie da importare.
* Le fotografie devono essere tutte nella cartella principale
* Le fotografie devono contenere, nel nome, il codice dell'articolo.
* La cartella deve contenere il file tracciato del catalogo che descrive la struttura merceologica degli articoli

1. **NOMEFILE** - Character - Max Length: 25
  * *Nome del file da importare.*
2. **TITOLO** - Character - Max Length: 8000
  * *Nome descrittivo del file (es: Piatto in porcellana)*
3. **COD_ART** - Character - Max Length: 25
  * *Codice dell'articolo*
4. **L1** - Character - Max Length: 30
  * *Livello 1 (es: Piatti)*
5. **L2** - Character - Max Length: 30
  * *Livello 2 (es: Porcellane)*
6. **L3** - Character - Max Length: 30
  * *Livello 3*
7. **L4** - Character - Max Length: 30
  * *Livello 4*
8. **DAT_ULT_MOD** - DateTime - Max Length: 16
  * *Data di ultima modifica del record*

