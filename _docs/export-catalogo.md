---
layout: docs
title: Esportare le immagini
permalink: /docs/export-catalogo/
---
L' esportazione delle immagini per la creazione del catalogo, può essere effettuata in 2 diverse modalità:

  *  Modalità basata su tracciato record
  *  Modalità basata su struttura file system

Indipendentemente dal metodo adottato, i file da esportare devono essere copiati nella cartella multimedia di [dropbox](https://www.dropbox.com).

## Esportazione basata su tracciato

Questa metodologia prevede che tutti i files vengano copiati nella cartella principale multimedia. Non devono essere create sottocartelle.

Nell' iPad, per mostrare le immagini in una struttura gerarchica, viene utilizzato un apposito tracciato record in cui, per ogni immagine, può essere associata una specifica gerarchia di cartelle (max 4 livelli).

Un stesso file può essere presente  più volte in cartelle differenti senza necessariamente essere presente più volte nella cartella. E' sufficiente che venga inserito più volte nel tracciato record.

### Creare il tracciato io_catalogo.dat

Il tracciato io_catalogo.dat deve essere creato nella cartella principale in cui vengono messi i files multimediali.

La struttura gerarchica con cui vengono mostrati i dati del catalogo è definita dai campi L1, L2, L3, L4.

Il catalogo risultante nel dispositivo rispecchierà la struttura inserita nel tracciato tramite i nomi dei file e i livelli di appartenenza.

Esempio:

Il seguente tracciato, mostra 2 cartelle (Detersivi e Prodotti casa).
All' interno della cartella Detersivi viene mostrata la cartella Naturale.
ALl' interno della cartella Prodotti casa vengono mostrate 3 immagini.
Sotto la cartella Naturale vengono mostrate 2 immagini.

```
NOMEFILE     | TITOLO    | COD_ART | L1                   | L2       | L3 | L4 | DAT_ULT_MOD
Listino1.pdf | Listino 1 | COD001  | Detersivi            | Naturale |    |    | 01012010
Listino2.pdf | Listino 2 | COD002  | Detersivi            | Naturale |    |    | 01012010
Listino3.pdf | Listino 3 | COD003  | Prodotti per la casa |          |    |    | 01012010
Listino4.pdf | Listino 4 | COD004  | Prodotti per la casa |          |    |    | 01012010
```

<div class="note warning">
  <h5>Giustificazione delle colonne</h5>
  <p>Nell' esempio riportato, per comodità di lettura le colonne sono state allineate. Il file che deve essere creato NON DEVE contenere questi spazi.</p>
</div>

Visualizzazione risultante:

*  Cartella Detersivi
*  Cartella Naturale
* * File Listino 1
* * File Listino 2
*  Cartella Prodotti casa
*  File Listino 3
*  File Listino 4
*  File Listino 5


## Export basato su filesystem

L' export da filesystem, prevede che i file vengano copiati ed eventualmente raggruppati in cartelle e sottocartelle, all'interno della sopracitata cartella **multimedia**.

Il catalogo risultante nel dispositivo rispecchierà fedelmente la struttura dei file e cartelle desiderata.

Un stesso file può essere presente  più volte però ovviamente in cartelle differenti.
I nomi delle cartelle si visualizzeranno anche nel dispositivo.
I nomi dei file devono seguire le regole di nomenclatura descritte di seguito:

### Regole di nomenclatura di file e cartelle

Per collegare i files agli articoli, e poter aprire il form dell' ordine toccando l' immagine, non potendo utizzare (in questa modalità) un tracciato che descive il contenuto della cartella, l'unico modo è quello di riportare il codice articolo nella descrizione del file.

I nomi dei file e delle cartelle, devono soddisfare quindi le seguenti regole:

    nome[CodiceArticolo]{ordinamento}.estensione

Questo vuol dire che è possibile specificare un nome al file e associarlo ad un articolo mettendo il rispettivo codice tra parentesi quadre.
E' possibile specificare inoltre un eventuale ordinamento tra i file mettendo un numero tra parentesi graffe.

Esempi:

| Nome file                   | Descrizione
| -
| Listino.pdf                 | Documento con nome _Listino_ non associato ad alcun articolo e senza ordinamento specifico
| Libreria Kwaba \[kw07\].jpg | Immagine con nome _Libreria Kwaba_ associata all'articolo avente codice _kw07_ e senza ordinamento specifico
| Foresta {1}.png                    | Immagine con nome _Foresta_ non associata ad alcun articolo ma avente un ordinamento di valore 1
| Depliant \[0567\] {2}.avi   | Video con nome _Dépliant_ associato all'articolo avente codice _0567_ e con ordinamento di valore 2
| 123\[123\].jpg                  | immagine associata direttamente all'articolo avente codice _123_ e senza ordinamento specifico

## Tipi di file supportati

| Tipo | Estensioni supportate
|-
| Immagini  | jpg, jpeg, png, gif
| Video     | avi, mov, mpg, mpeg, m4v, mp4
| Documenti | pdf

Nota: Alcuni codec (es.xvid, divx), non sono nativamente supportati su iOs.

## Dimensione delle immagini

Tenendo in considerazione che le immagini devono essere visualizzate nei dispositivi mobile, occorre prestare attenzione anche alla dimensione delle immagini stesse.

Una dimensione molto elevata implica una mole maggiore di dati da spostare (quindi maggiore lentezza nella sincronizzazione).

Nei dispositivi (es. ipad) una dimensione in pixel maggiore della risoluzione gestita dal dispositivo farà si che l'immagine venga adattata automaticamente ridimensionandola perdendo qualche dettaglio (che verrà recuperato effettuando lo zoom).
Nel caso in cui invece la dimensione in pixel della foto risulti inferiore alla risoluzione gestita dal dispositivo, l'immagina viene lasciata invariata e quindi non si vedrà a schermo intero.

In fase di importazione del catalogo, dentro l'appmanager viene eseguito un ridimensionamento delle immagini che superano una determinata dimensione, esso si può modificare a piacimento entrando in appmanager e andando sul progetto (campo Max Pixel Foto).

Il default di tale parametro è 1028 (risoluzione ipad 2) ma è possibile cambiarlo ad esempio a 2048 (dimensione ipad retina, air, etc.).

Ogni immagine con larghezza o altezza massima superiore a questo valore verrà ridimensionata in base al valore del parametro.

## Anteprime cartelle

Le anteprime delle cartelle che contengono le immagini, vengono visualizzate secondo criteri casuali. Viene cioè mostrata una immagine a caso fra quelle contenute all' interno della cartella.
