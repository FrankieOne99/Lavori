# FRAMEWORK NEXTJS

Nextjs è un FRAMEWORK per React.
Facilita la creazione di web application e supporta la generazione di siti statici e rendering lato server.
Si tratta di un framework, che rispetto alla semplice libreria React ci permette di creare delle applicazioni FULLSTACK.
Si pone come obiettivo di rendere più semplice la costruzione di applicazioni react su larga, implementando funzionalità(come ad esempio il routing) che per essere realizzate in react classico necessiterebbero di liberie esterne.

### NOTA: LIBRERIA VS FRAMEWORK

Nextjs è un framework fullstack di react, che a sua volta è una libreria di javascript.
Una libreria è una raccolta di funzioni e codice già scritto che gli sviluppatori possono utilizzare per svolgere specifici compiti, come la gestione delle stringhe, l'accesso al database, o la manipolazione di dati. Mentre Un framework è un ambiente di sviluppo predefinito che fornisce una struttura e un set di regole per costruire un'applicazione intera.

## CARATTERISTICHE PRINCIPALi:

### Rendering lato server (SSR)

Quando si sviluppa una pagina utilizzando React, questa viene renderizzata lato client. Il contenuto inizialmente non è presente nell'HTML che viene caricato dal browser. In particolare, se ispezioniamo la pagina, noteremo che all'interno del div con id "root" non ci sarà nessun dato visibile, poiché il contenuto viene aggiunto dinamicamente tramite JavaScript solo successivamente. Questo comportamento può causare dei problemi, soprattutto se la pagina deve caricare dati da un server, (esempio un elenco di immagini con relative descrizioni). In questi casi, l'utente potrebbe vedere un "loading" prolungato, con la pagina che si carica lentamente. Questo rallentamento può compromettere l'esperienza utente (UX), dando l'impressione di un'applicazione poco performante.

Inoltre, il rendering lato client può rappresentare un ostacolo per l'ottimizzazione SEO (Search Engine Optimization). I motori di ricerca, infatti, durante la scansione di una pagina, vedono solo l'HTML iniziale, che non contiene i dati dinamici che vengono inseriti da JavaScript. Di conseguenza, il contenuto non viene ottimizzato al meglio.

Al contrario, Next.js risolve questi problemi grazie al rendering lato server (SSR - Server-Side Rendering). Qui, la pagina viene renderizzata completamente sul server prima di essere inviata al browser. Questo significa che, quando l'utente apre la pagina, vedrà subito il contenuto completo, riducendo il tempo di caricamento e migliorando significativamente l'esperienza utente. Inoltre, l'HTML che viene inviato ai motori di ricerca è già popolato con i dati, il che consente anche ai motori di ricerca di vedere il contenuto fin da subito, migliorando l'ottimizzazione SEO.

### File base routing

Con react noi relizziamo delle SPA (Single Page Application), ma con il routing diamo all'utente l'illusione di navigare fra più pagine
(Poichè c'è un cambiamento nell'URL). Nelle applicazioni in react, è necessario installare una libreria (React Router) e scrivere codice aggiuntivo. Con nextjs, tutto questo non è necessario poichè le rotte vengono definite direttamente dai file e dalle cartelle.

### Fullstack Capabilities

Abbiamo definito nextjs un framework fullstack, ovvero che facilita di molto l'aggiunta di un backend al nostro progetto. E' possibile quindi gestire API e connettersi ad un database senza dover creare un altro progetto, oppure aggiungendo librerie esterne.

## VANTAGGI

### Rispetto a React

- Migliore esperienza utente
- Sviluppo rapido con funzionalità hot-reload
  (essendo un framework, non dovrò installare librerie esterne)
- integrazione semplice con API e servizi web

### Personalizzazione e configurazione

- Supporto nativo di SASS
- Estensibilità con plugin e pacchetti

### SEO

- Rispetto a React, che ha un routing virtuale, il routing è REALE.
- Rapida indicizzazione con il pre-rendering e maggiore supporto per meta-tag e ottimizzazione SEO.

### Internazionalizzazione

La creazione di pagine multilingua è facilitata. Per fare ciò, la documentazione di NextJs consiglia di usare la libreria next-translate.

### Deploy e hosting

Buona compatibilità con più piattaforme di hosting

## VERCEL

Vercel è una piattaforma di hosting che rende molto facile e veloce pubblicare siti web e applicazioni web. Vercel, oltre a fornire i servizi di hosting è anche l'azienda che ha sviluppato nextjs. il comando per eseguire vercel da terminale è

- npx vercel

sarà necessario accedere con il proprio account (o crearne uno).

## INSTALLAZIONE

Per usare nextJs è necessario aver installato prima node js e Node Package Manager (NPM).

E' possibile verificarlo dai seguenti comandi:

- node -v
- npm -v

Se sono installati correttamente il comando per iniziare un nuovo progetto è:

- npx create-next-app@latest

### TURBOPACK

Il pacchetto turbopack in Next.js è un nuovo bundler (un sistema che prepara il codice per la produzione, raggruppando e ottimizzando i file) ottimizzato sia per javascript che per typescrit. E' scritto in linguaggio rust, e può essere utilizzato sia con il "Pages router" che con "l'app router". Con l'ultima versione di nextjs( Febbraio 2025) è stabile, pur non supportando ancora alcune funzioni. come ad esempio il next build. (supporta solo next dev).

## FILE PRINCIPALI

- "app" o "page (in base al tipo di router selezionato)--> dove si trova il nostro codice
- "public"→ dove si trovano le risorse esterne (tipo le immagini).
- "node_modules"→ contiene tutti i pacchetti necessari al funzionamento del nostro applicativo.
- "next"→ generata in maniera automatica dall’applicativo. se la eliminiamo e poi esguiamo il comando "run dev" verrà ricreata. Si tratta della cartella che conterrà la build. dell’applicazione quando eseguiamo il comando npm run build

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

## MIDDLEWARE

Il middleware in Next.js è una funzionalità che ti permette di eseguire logica personalizzata prima che una richiesta raggiunga la rotta di destinazione. In altre parole, il middleware agisce come una sorta di "filtro" che e può eseguire operazioni come il controllo delle autorizzazioni, la gestione dei cookie, il reindirizzamento, l'analisi delle richieste, la gestione della sessione etc. Il file middleware fa inserito nella cartella principale del progetto "src".

## NEXT AUTH

NextAuth.js, che coi prossimi aggiornamenti diverrà Auth.js (Febbraio 2025) è una libreria open source che rappresenta un ottima soluzione per gestire le autenticazioni con Next.js

### Caratteristiche principali:

- Sicurezza elevata: Fornisce una gestione robusta delle sessioni, crittografia dei cookie e supporto per i moderni standard di sicurezza come l'autenticazione basata su JWT e OAuth2.

- Scalabilità: Può supportare sia piccole applicazioni che progetti di grandi dimensioni.

- Integrazione facile con database e servizi esterni: Offre supporto per l'integrazione con diversi database come MongoDB, MySQL, PostgreSQL

- Supporto per più provider di autenticazione: Auth.js offre una vasta gamma di provider di autenticazione integrati, come Google, Facebook, Twitter, GitHub etc.

- Supporto per JWT (JSON Web Token): Oltre alla gestione delle sessioni, Auth.js può utilizzare JWT per l'autenticazione stateless per applicazioni che richiedono un autenticazione decentralizzata.

## ROTTE DINAMICHE

In nextjs è possibile generare delle rotte dinamiche.
Se per esempio abbiamo un component "blog" al cui interno ci sono dei post, e vogliamo creare delle rotte per ciascun post non è sostenibile creare un component per ogni singolo post. Possiamo, invece, creare un unico component che aggiornerà la rotta in base al post selezionato. per fare ciò bastare creare una cartella il cui nome DEVE essere messo fra le quadre (esempio [slug] ), all'interno di Blog.

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

## FILE NOMI SPECIALI:

### Page

Il file page.js è il file principale che definisce una pagina in Next.js nella cartella app/. Ogni volta che hai una pagina specifica (come una homepage, una pagina di prodotto o un blog post), creerai un file page.js per quella route.

### Layout

l file layout.js viene utilizzato per definire un layout condiviso per più pagine o sezioni dell'applicazione. È utile quando desideri avere una struttura comune (come intestazioni, piè di pagina, sidebar, ecc.) che venga ripetuta su diverse pagine. Il layout avvolge il contenuto delle pagine figlie.
In next è possibile creare Layout annidati. E' sufficiente creare il proprio Layout (come component) e aggiungerlo alle pagine in cui desideriamo sia presente--> per aggiungerlo a tutte le paggine basta inserirlo nella pagina principale di layout

### Loading

Il file loading.js viene utilizzato per gestire e mostrare un "loading state" (stato di caricamento) quando un componente o una pagina è in fase di caricamento. È utile per creare una migliore esperienza utente, mostrando un'indicazione visiva (come un spinner o un messaggio) mentre i dati o il componente sono in attesa di essere caricati.

### Not-found

Gestisce la pagina di errore "404" (pagina non trovata). Quando ad una rotta non corrisponde nessuna pagina, nextjs ci reinderizzerò su questo file che può quindi essere personalizzato.

### Error

Gestisce gli errori nell'applicazione. Se si verifica un errore in un component, nextjs ci reinderizza su questo file che può quindi essere personalizzato.

## COMPONENTI

In nextjs esistono 2 tipologie di componenti:

- Server Component--> vengono eseguiti solo lato server
- Client Component

Nei progetti in vanilla React vengono usati i Client Component. Qui, react viene usata come libreria puramente lato client che esgue il codice nel browser SUL client.

Con Next questo cambia, perchè next a differenza di react vanilla è un framework FULLSTACK. Il codice viene eseguito anche lato server (quindi nel backend). in Next TUTTI i component (pagine, layout etc) per default vengono renderizzati SOLO lato server.
Proprio per questo, se eseguiamo un "console.log" in un component nextjs se guardiamo nella console dei devTools non vedremo nulla.
Altro esempio è quando utilizziamo "fetch". possiamo utilizzare async e await direttamente all'interno del componente e quindi non abbiamo più necessità di usare useState o useEffect o librerie come redux, per recuperare dei dati.
Nei server componets, tuttavia NON è possibile usare hook e event handler(onClik, DoubleClick, etc).

I client component, invece vengono solo PRE-RENDERIZZATI sul server, per poi venire potenzialmente anche renderizzati sul server.
Si tratta di component che il più delle volte contengono funzionalità disponibili solo dal client (esempio UseState o UseEffect o gli event Handler). Considerando che tutti i component sono di default server component per renderli client component dovviamo usare una direttiva:

- "use-client"

ATTENZIONE: questi tipi di component esistono entrambi in react, ma funzionano e posso essere usati solo quando si usa un framework come Nextjs

## SERVER ACTION

Le Server Actions ti permettono di scrivere funzioni che vengono eseguite lato server, ma che possono essere invocate direttamente da un componente React lato client (senza bisogno di fare una richiesta HTTP o chiamare un'API separata).

## SUSPENSE

In Next.js, Suspense è una funzionalità che permette di gestire il caricamento di dati asincroni e risorse in modo più elegante, migliorando l'esperienza utente. Risulta utile nella gestione del caricamento di componenti che dipendono da risorse esterne o dati che devono essere recuperati in modo asincrono (ad esempio, chiamate API).

## COMPONENT IMAGE

Utilizzando il component Image (nativo di nextJs) è possibile caricare immagini ottimizzate al meglio, anche grazie al LazyLoading.
le sue propietà obbligatorie sono:

- src-->Percorso dell'immagine
- alt-->Testo alternativo dell'immagine
- width--> width NON determina la grandezza in pixel dell'immagine in questo caso, ma serve a migliorare la qualità dell'immagine.
- height--> heigth NON determina la grandezza in pixel dell'immagine in questo caso, ma serve a migliorare la qualità dell'immagine.

## CACHING

Il caching in Next.js serve per riutilizzare i dati, le pagine o le risorse per migliorare le prestazioni delle applicazioni web.
E' utile soprattutto in relazione alla generazione dinamica di pagine (SSR - Server-Side Rendering) e alla generazione statica di pagine (SSG - Static Site Generation), nonché alla gestione delle API.

### RevalidatePath()

revalidatePath() è utilizzata per "invalidare" la cache di una specifica pagina o percorso e forzare una rigenerazione istantanea della stessa da parte di Next.js. È particolarmente utile quando si vuole aggiornare il contenuto di una pagina a seguito di un'azione o di un cambiamento (per esempio, una modifica nel database o una richiesta da un'API).

## ROUTE HANDLER

Il route handler è un file, che va rinominato "route.js" in cui sono presenti delle funzioni da esportare per le CRUD. Funzioni che quindi devo essere chiamate con un metodi dell'HTML.
Questi file, NON restituiscono pagine da renderizzare bensì dei dati in formato JSON
