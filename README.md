# iCommerce Website

Questo repository contiene il progetto sorgente, fatto con [jekyll](http://jekyllrb.com), del sito documentale di iCommerce.


## Funzionamento

I repository di github possono essere usati per pubblicare siti statici usando alcuni accorgimenti in fase di creazione.

Esistono vari modi per fare questo, ma nel caso di iCommerce, basta sapere che github espone come website tutti i branch chiamati gh-pages.

Il repository che state vedendo quindi, il cui branch di default è chiamato master, ha un repo chiamato appunto gh-pages in cui è pubblicato il sito statico generato da jekyll.

In sintesi. Jekyll è un tool che prende in input una struttura di cartelle composta da vari template, ne fonde il contenuto e, in una directory predefinita (_site) genera un sito statico.
Meglio leggersi la documentazione completa per approfondire l'argomento.

L'output di jekyll quindi (ovvero la cartella _site che nel repo non vedete perchè incluso nel .gitignore), viene pubblicato nel branch gh-pages nella root del progetto.

Per fare questo, dopo aver generato il sito, è presente uno script chiamato deploy.sh, che prende il contenuto di _site e lo pubblica nel branch remoto gh-pages.

## Installare jekyll

I più fortunati (Mac users), possono installare jekyll con:

```bash
$ gem install jekyll
```

## Clonare il sito

Come al solito, digitare il comando:

```
$ git clone https://github.com/Apex-net/icommerce-site
```

## Modificare i contenuti

I contenuti sono situati nella cartella _docs sotto forma di files in formato markdown. La visibilità di ogni documento nel menu sulla destra è possibile solo aggiornando il file _data/docs.yml

## Compilare il sito:

Eseguire il seguente comando

```bash
$ jekyll build
```
Per vedere localmente il contenuto eseguire il comando

```bash
$ jekyll serve
```
Questo comando effettua una ricompilazione automatica del sito ogni volta che viene modificato un qualunque file sorgente.

## Riferimenti

* https://help.github.com/articles/creating-project-pages-manually/
* https://github.com/X1011/git-directory-deploy
* https://gist.github.com/cobyism/4730490
