## Author 
IN0501395 - Alessio Sanda
## Course 
161IN - Reti di Calcolatori e introduzione alla Cybersecurity
## Professor
Alberto Bartoli
## Consegna
Per poter sostenere l’esame è necessario creare e rendere disponibile un sito web con le seguenti caratteristiche:

01 - Deve contenere una home page ed almeno due pagine.
02 - Lo style deve essere specificato mediante un file CSS (2025/2026: in questo anno accademico non ho fatto CSS, 
     quindi questo requisito può essere trascurato):
  02.A - Almeno un elemento di una pagina deve però avere uno stile ridefinito rispetto al file CSS.
  02.B - Utilizzando l’attributo style applicato a un elemento. Esempio: <h1 style="color:green">.
03 - Tutti gli URL alle pagine ed agli oggetti interni al sito devono essere relativi.
04 - Devono esserci almeno due immagini in ogni pagina.
05 - Una deve essere ospitata dal sito stesso, una prelevata dal web tramite un URL assoluto.
06 - Tutte le immagini devono essere diverse tra loro.
07 - Ogni pagina deve contenere uno script JavaScript. Si possono utilizzare gli script indicati in fondo al documento, 
     i quali mostrano un Privacy Banner. Alternativamente, si può usare uno script a piacere che alteri la pagina o mostri 
     qualcosa di visibile. Lo script può essere lo stesso per tutte le pagine.
08 - E' necessario scrivere autonomamente i file HTML e CSS. Non si possono usare template già fatti trovati in rete.
09 - Non occorre che il sito sia visualizzato correttamente anche su schermi di smartphone; è sufficiente che lo sia su schermi di PC.

Il contenuto del sito è a piacere. Può ad esempio descrivere l’attività di un atleta, cantante o attore.

## Corrispondenza alla Richiesta:
01 - Presenti: index.html (la pirma pagina a venir visualizzata che fa' da menu' per le altre tre), page00.html, page01.html e page02.html
     (tutte riccolegate da link tra loro);
02 - Creato e utilizzato file style.css;
  02.A - Cambi di font, colori, posizione, etc..
  02.B - ES: page00.html: line 27 ... <a style="color: white;" href="https://www.pbs.org/wgbh/nova/samurai/hist-nf.html">Pbs.org</a> ...
03 - Tutti i link alle altre pagine e alle immagini sono relativi:
     ES: index.html: line 7 ... <link rel="stylesheet" href="styles/style00.css"> ...
         index.html: line 20 ... <script src="scripts/script00.js"></script> ...
         style.css: line 121 ... background-image: url("../files/imgs/samurai.jpg"); ...
         page00.html: line 28 ... <a href="..//" class="redirect">Torna alla home page →</a> ...
04/05 - Index.html: tre immagini (due interne e una esterna), page00.html e page01.html: 2 immagini (una int. e una ext.) e page02.html (una int. e due ext.);
        ES: page02.html: line 23 ... <img src="../files/imgs/isettesamurai.jpg"> ...
                         line 25 ... <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.nme.com%2Fwp-content%2Fuploads%2F2023%2F05%2Frurouni-kenshin-2023%402000x1270-696x442.jpg&f=1&nofb=1&ipt=c61d641a8a892357fbbef78090fa2984e950ae3f90a83832b60a02b757839824">
06 - Tutte le immagini sono diverse tra loro.
07 - index.html contiene un script che rimanda a script00.js per la gestione dei coockies (line 20 <script src="scripts/script00.js"></script>), invece in page00.
     html, page01.html e page03.html c'è un piccolo scrip che anima le scritte e le immagini nelle "box";
08 - Non è stato usato nessun temeplate trovato online, è stato programmato in autonomia consultato siti (ES: stackoverflow.com, w3school.com, etc..) e con la 
     supervisione del co-pilot di github per eventuali errori/prlobelmatiche o automatismi.
09 - Non è stato fatto un lavoro soltanto per la visualizzazione da pc; quindi da cellulare ci protrebbero essere problemi.