# FRAMEWORK NEXTJS

Nextjs è un FRAMEWORK per React.
Facilita la creazione di web application e supporta la generazione di siti statici e rendering lato server.
Si tratta di un framework, che rispetto alla semplice libreria React ci permette di creare delle applicazioni FULLSTACK.

Possiamo quindi utilizzare nextjs per creare file html che permettono di “trasportare” il tuo applicativo su un repository online
(su una CDN o un server condiviso).

## CARATTERISTICHE PRINCIPALi:

- Rendering lato server (SSR)
- Generazione di siti statici
- Ottimizzazione automatica delle prestazioni

## VANTAGGI;

- Migliore esperienza utente
- Sviluppo rapido con funzionalità hot-reload
  (essendo un framework, rispetto a react non dovrò installare librerie esterne)
- integrazione semplice con API e servizi web

## ROUTING

- Basato sul filesystem. Non è necessario configurare le rotte mediante il codice.
- Ottimizzazione automatica dei percorsi

## API ROUTES

- Creazione API con funzioni serveless → nextjs è un framework FULLSTACK. Permette di generare anche il backend.
- Supporto nativo per REST e GraphQL (nuovo pattern per la comunicazione tra client e backend).

## PERSONALIZZAZIONE E CONFIGURAZIONE

- Supporto nativo di SASS
- Estensibilità con plugin e pacchetti

## SEO

- Rispetto a React, che ha un routing virtuale, il routing è REALE.
- Rapida indicizzazione con il pre-rendering e maggiore supporto per meta-tag e ottimizzazione SEO.

## INTERNAZIONALIZZAZIONE

La creazione di pagine multilingua è facilitata. Per fare ciò, la documentazione di NextJs consiglia di usare la libreria next-translate.

## DEPLOY E HOSTING

Buona compatibilità con più piattaforme di hosting

### Vercel

Vercel è una piattaforma di hosting che rende molto facile e veloce pubblicare siti web e applicazioni web. Vercel, oltre a fornire i servizi di hosting è anche l'azienda che ha sviluppato nextjs. il comando per eseguire vercel da terminale è

- npx vercel

sarà necessario accedere con il proprio account (o crearne uno).

## ECOSISTEMA E COMUNITA’

Buona community e documentazione

Rispetto ad altri Framework

- Prestazioni migliori
- Miglior supporto seo
- Facilità di migrazione su altri framework

## INSTALLAZIONE

Per usare nextJs è necessario aver installato prima node js e Node Package Manager (NPM).

E' possibile verificarlo dai seguenti comandi:

- node -v
- npm -v

Se sono installati correttamente il comando per iniziare un nuovo progetto è:

- npx create-next-app@latest

## FILE PRINCIPALI

- "src"→ dove si trova il codice sorgente.
- "public"→ dove si trovano le risorse esterne (tipo le immagini).
- "node_modules"→ contiene tutti i pacchetti necessari al funzionamento del nostro applicativo.
- "next"→ generata in maniera automatica dall’applicativo. se la eliminiamo e poi facciamo run dev verrà ricreata. Si tratta della cartella che conterrà la build. dell’applicazione quando eseguiamo il comando npm run build
- "\_app.tsx"→ diciamo come è composto il nostro applicativo (lato react).
- "\_document.tsx"→diciamo come è impostata la pagina.
  (possiamo usarlo per inserire un class a TUTTE le pagine, o ad esempio il footer).

### TURBOPACK

Il pacchetto turbopack in Next.js è un nuovo bundler (un sistema che prepara il codice per la produzione, raggruppando e ottimizzando i file) ottimizzato sia per javascript che per typescrit. E' scritto in linguaggio rust, e può essere utilizzato sia con il "Pages router" che con "l'app router". Con l'ultima versione di nextjs( Febbraio 2025) è stabile, pur non supportando ancora alcune funzioni. come ad esempio il next build. (supporta solo next dev).

## PAGES ROUTER O APP ROUTER?

### Pages router

Il pages router è il metodo più vecchio con cui eseguire routing in nextjs.
E' considerato più stabile, ed è ancora usato in molti progetti next.
Il rotuting è basato sul file system. Quando si crea una nuova pagina nella directory "pages" questa diverrà automaticamente disponibile come rotta.

### App router

L'app router è invece un modo per fare routing molto più recente (introdotto in nextjs13).
Rispetto al pages router permette di utilizzare e supportare features più recenti come i "React Server" o i "Server actions".
Anche qui il routing è basato sul file system, MA in questo caso rotte vengono definte dalle cartelle e non dai file.
Nella cartella "app" ogni qualvolta creaiamo una cartella (dentro cui poi si troverà il file js o ts con la logica) questa diverrà automaticamente disponibile come rotta. Possiamo creare delle sottorotte creando cartelle una dentro l'altra.

## ROTTA API

Next.js consente di creare facilmente endpoint API direttamente all'interno della stessa applicazione. Per fare ciò è sufficente creare una cartella "api" all'interno della cartella "pages" o "app". Queste API possono essere usate per gestire richieste, interagire con database, inviare email, ecc., senza necessitare di un backend separato.

## SUPPORTO PER TYPESCRIPT

Next.js supporta nativamente TypeScript. E' possibile creare progetti quindi utilizzando sia javascript che il suo superset.

## SUPPORTO PER CSS E SASS

Next.js permette di usare CSS e Sass senza bisogno di configurazioni particolari.

- E' presente un file "globals.css" con gli stili globali.
- In Next.js, i CSS Modules sono un modo per scrivere stili CSS che sono locali a un determinato componente.
  Grazie a questa funzionalità, i selettori CSS sono automaticamente "scoped" (localizzati) al componente.

## MIDDLEWERE

Il middleware in Next.js è una funzionalità che ti permette di eseguire logica personalizzata prima che una richiesta raggiunga la rotta di destinazione. In altre parole, il middleware agisce come una sorta di "filtro" che e può eseguire operazioni come il controllo delle autorizzazioni, la gestione dei cookie, il reindirizzamento, l'analisi delle richieste, la gestione della sessione etc. Il file middleware fa inserito nella cartella principale del progetto "src".

## ROTTE DINAMICHE

In nextjs è possibile generare delle rotte dinamiche.
Se per esempio abbiamo un component "blog" al cui interno ci sono dei post, e vogliamo creare delle rotte per ciascun posto non è sostenibile creare un compoent per tutti i post. Possiamo, creare un unico component che aggiornerà la rotta in base al post selezionato. per fare ciò bastare creare una cartella il cui nome DEVE essere messo fra le quadre (esempio [slug] ), all'interno di Blog.

## ROTTE PARALLELE

Le rotte parallele si riferiscono a una funzionalità che consente di caricare diverse sezioni di una pagina in modo indipendente e parallelo, migliorando l’esperienza utente e le prestazioni del sito. Questo approccio fa parte del sistema di layout dinamici che sfrutta la gestione asincrona dei dati e il rendering lato server.

I nomi delle cartelle in cui si trovano queste rotte parallele DEVONO avere la "@" davanti.

## ROTTE CATCH ALL

Una rotta catch-all è una rotta che cattura tutti i parametri che seguono una parte fissa dell'URL, senza limitazioni sul numero di segmenti.
Usando [[...]], puoi avere una rotta che "cattura "anche quando non ci sono parametri, rendendo la parte della URL opzionale.

### Vantaggi

- Catch-all con [...]: Cattura ogni parte della URL successiva al percorso fisso. È obbligatorio passare almeno un parametro.
- Catch-all opzionale con [[...]]: Cattura ogni parte della URL ma è opzionale, quindi può essere usato anche per gestire percorsi vuoti.
- Puoi usarlo per creare rotte molto flessibili e dinamiche, come pagine di filtri, categorie, o qualsiasi tipo di URL variabile.

## ROUTES GROUPS

Le Route Groups consentono di suddividere le rotte in gruppi, raggruppando i file senza che la struttura delle cartelle influisca direttamente sulle URL. Questo è utile quando hai bisogno di gestire funzionalità specifiche senza dover cambiare la struttura delle rotte.
Si indetificano, rinominando una cartella fra le partensi tonde. ES: (nome-cartella);

## PAGE, LAYOUT E LOADING

### Page

Il file page.js è il file principale che definisce una pagina in Next.js nella cartella app/. Ogni volta che hai una pagina specifica (come una homepage, una pagina di prodotto o un blog post), creerai un file page.js per quella route.

### Layout

l file layout.js viene utilizzato per definire un layout condiviso per più pagine o sezioni dell'applicazione. È utile quando desideri avere una struttura comune (come intestazioni, piè di pagina, sidebar, ecc.) che venga ripetuta su diverse pagine. Il layout avvolge il contenuto delle pagine figlie.
In next è possibile creare Layout annidati. E' sufficiente creare il proprio Layout (come component) e aggiungerlo alle pagine in cui desideriamo sia presente--> per aggiungerlo a tutte le paggine basta inserirlo nella pagina principale di layout

### Loading

Il file loading.js viene utilizzato per gestire e mostrare un "loading state" (stato di caricamento) quando un componente o una pagina è in fase di caricamento. È utile per creare una migliore esperienza utente, mostrando un'indicazione visiva (come un spinner o un messaggio) mentre i dati o il componente sono in attesa di essere caricati.

## COMPONENTI

In nextjs esistono 2 tipologie di componenti:

- Server Component--> vengono eseguiti solo lato server
- Client Component

Nei progetti in vanilla React vengono usati i Client Component. Qui, react viene usata come libreria puramente lato client che esgue il codice nel browser SUL client.

Con Next questo cambia, perchè next a differenza di react vanilla è un framework FULLSTACK. Il codice viene eseguito anche lato server (quindi nel backend). in Next TUTTI i component (pagine, layout etc) per default vengono renderizzati SOLO lato server.
Proprio per questo, se eseguiamo un "console.log" in un component nextjs se guardiamo nella console dei devTools non vedremo nulla.

I client component, invece vengono solo PRE-RENDERIZZATI sul server, per poi venire potenzialmente anche renderizzati sul server.
Si tratta di component che il più delle volte contengono funzionalità disponibili solo dal client (esempio UseState o UseEffect o gli event Handler). Considerando che tutti i component sono di default server component per renderli client component dovviamo usare una direttiva:

- "use-client"

ATTENZIONE: questi tipi di component esistono entrambi in react, ma funzionano e posso essere usati solo quando si usa un framework come Nextjs

## SUSPENSE

In Next.js, Suspense è una funzionalità che permette di gestire il caricamento di dati asincroni e risorse in modo più elegante, migliorando l'esperienza utente. Risulta utile nella gestione del caricamento di componenti che dipendono da risorse esterne o dati che devono essere recuperati in modo asincrono (ad esempio, chiamate API).

## COMPONENT IMAGE

Utilizzando il component Image (nativo di nextJs) è possibile caricare immagini ottimizzate al meglio, anche grazie al LazyLoading.
le sue propietà obbligatorie sono:

- src-->Percorso dell'immagine
- alt-->Testo alternativo dell'immagine
- width--> width NON determina la grandezza in pixel dell'immagine in questo caso, ma serve a migliorare la qualità dell'immagine.
- height--> heigth NON determina la grandezza in pixel dell'immagine in questo caso, ma serve a migliorare la qualità dell'immagine.

## DATABASE

Nextjs ci permette anche di lavorare con i db. per prima cosa bisogna installare i pacchetti necessari con il comando:

- npm install better-sqlite3

Ci permetterà di lavorare su un db locale, senza necessità di utilizzare un server esterno

## CACHING

Il caching in Next.js serve per riutilizzare i dati, le pagine o le risorse per migliorare le prestazioni delle applicazioni web.
E' utile soprattutto in relazione alla generazione dinamica di pagine (SSR - Server-Side Rendering) e alla generazione statica di pagine (SSG - Static Site Generation), nonché alla gestione delle API.

### RevalidatePath()

revalidatePath() è utilizzata per "invalidare" la cache di una specifica pagina o percorso e forzare una rigenerazione istantanea della stessa da parte di Next.js. È particolarmente utile quando si vuole aggiornare il contenuto di una pagina a seguito di un'azione o di un cambiamento (per esempio, una modifica nel database o una richiesta da un'API).

## ROUTE HANDLER

Il route handler è un file, che va rinominato "route.js" in cui sono presenti delle funzioni da esportare per le CRUD. Funzioni che quindi devo essere chiamate con un metodi dell'HTML.
Questi file, NON restituiscono pagine da renderizzare bensì dei dati in formato JSON
