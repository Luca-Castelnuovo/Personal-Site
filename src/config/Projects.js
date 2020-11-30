import sluijterKappers from 'assets/projects/sluijterKappers.jpg';
import hetHakHout from 'assets/projects/hetHakHout.jpg';
import techAssistantsSoest from 'assets/projects/techAssistantsSoest.jpg';
import urinalTractinfectionAI from 'assets/projects/urinalTractinfectionAI.jpg';
import cubequence from 'assets/projects/cubequence.jpg';
import techAssistantsNuth from 'assets/projects/techAssistantsNuth.jpg';
import centrumInternationaleKinderontvoering from 'assets/projects/centrumInternationaleKinderontvoering.jpg';
import bvhBouwEnTimmerwerken from 'assets/projects/bvhBouwEnTimmerwerken.jpg';
import hblBetaSterren from 'assets/projects/hblBetaSterren.jpg';
import andAannemersbedrijf from 'assets/projects/andAannemersbedrijf.jpg';
import hblKerstmarkt from 'assets/projects/hblKerstmarkt.jpg';
import hblLustrum from 'assets/projects/hblLustrum.jpg';
import broodtNu from 'assets/projects/broodtNu.jpg';
import mailJS from 'assets/projects/mailJS.jpg';
import testingPlatform from 'assets/projects/testingPlatform.jpg';
import urlShortener from 'assets/projects/urlShortener.jpg';
import apps from 'assets/projects/apps.jpg';
import instakilo from 'assets/projects/instakilo.jpg';
import wiskundeSite from 'assets/projects/wiskundeSite.jpg';
import portfolio from 'assets/projects/portfolio.jpg';
import archive from 'assets/projects/archive.jpg';

const Projects = [
    {
        title: 'Sluijter Kappers',
        description:
            "Jan Sluijter werkt met de mooiste kleuringen van L'Oréal Professionnel en is onder andere gespecialiseerd in French Balayage.",
        image: sluijterKappers,
        tags: ['React', 'Bulma', 'CubeQuence'],
        demo_link: 'https://sluijterkappers.nl',
        github_link: null,
    },
    {
        title: 'Het Hak Hout',
        description:
            'Natuurervaring in een unieke omgeving, Een historisch landschap langs de Kromme Rijn. Een verborgen juweel van de provincie Utrecht. Ervaar Shinrin-Yuku, wandel langs kastelen en door het bos, traditioneel boogschieten, vogelspotten, Een stilte retraite of huur een cabin',
        image: hetHakHout,
        tags: ['React', 'Bulma', 'Directus'],
        demo_link: 'https://hethakhout.nl',
        github_link: null,
    },
    {
        title: 'TechAssistants Soest',
        description:
            'Wij zijn een bedrijf opgericht door 3 studenten van Het Baarnsch Lyceum. Ons doel is om mensen te helpen die problemen met computers hebben',
        image: techAssistantsSoest,
        tags: ['Eleventy', 'MaterializeCSS'],
        demo_link: 'https://ta-soest.nl',
        github_link: 'https://github.com/Luca-Castelnuovo/TA-Soest',
    },
    {
        title: 'Bigdata and Healthcare',
        description:
            'TensorFlow model created for our high-school thesis predicting the best UTI treatments',
        image: urinalTractinfectionAI,
        tags: ['TensorFlow', 'Python'],
        demo_link: '/pdf/pws.pdf',
        github_link:
            'https://github.com/Luca-Castelnuovo/Bigdata-and-Healthcare',
    },
    {
        title: 'CubeQuence',
        description: 'Ultra-Light custom php framework',
        image: cubequence,
        tags: ['PHP', 'Framework'],
        demo_link: null,
        github_link: 'https://github.com/Luca-Castelnuovo/CubeQuence',
    },
    {
        title: 'TechAssistants Nuth',
        description:
            'Heeft u moeite met computers, tablets, smartphones, TV, Wi-Fi, internet of een andere vraag? Maak dan snel een afspraak',
        image: techAssistantsNuth,
        tags: ['Eleventy', 'MaterializeCSS'],
        demo_link: 'https://ta-nuth.nl',
        github_link: 'https://github.com/Luca-Castelnuovo/TA-Nuth',
    },
    {
        title: 'Centrum Internationale Kinderontvoering',
        description:
            'Het juridisch expertise Centrum IKO staat een ieder die te maken krijgt met (dreigende) internationale kinderontvoering bij met advies, begeleiding, voorlichting en mediation',
        image: centrumInternationaleKinderontvoering,
        tags: ['HTML', 'CSS', 'JS'],
        demo_link:
            'https://www.kinderontvoering.org/uploads/stappenplan/index.html',
        github_link: null,
    },
    {
        title: 'BVH Bouw en Timmerwerken',
        description:
            'BVH Bouw en Timmerwerken is eenmanszaak in de omgeving Tiel. Wij staan klaar voor kwaliteit en klanttevredenheid',
        image: bvhBouwEnTimmerwerken,
        tags: ['CodeKit', 'MaterializeCSS', 'JS'],
        demo_link: 'https://bvhbouwentimmerwerken.nl',
        github_link:
            'https://github.com/Luca-Castelnuovo/BVH-Bouw-en-Timmerwerken',
    },
    {
        title: 'HBL: BetaSterren',
        description:
            'BetaSterrenOnline is jouw persoonlijke assistent tijdens je dagelijkse werkzaamheden op school en in de betasterren klas',
        image: hblBetaSterren,
        tags: ['PHP', 'MaterializeCSS', 'JS'],
        demo_link: 'https://betasterren.hetbaarnschlyceum.nl',
        github_link: 'https://github.com/Luca-Castelnuovo-Archive/BetaPlus',
    },
    {
        title: 'A.N.D. Aannemersbedrijf',
        description: null,
        image: andAannemersbedrijf,
        tags: ['HTML', 'Bootstrap', 'JS'],
        demo_link: 'http://and-aannemersbedrijf.nl/',
        github_link:
            'https://github.com/Luca-Castelnuovo/A.N.D.-Aannemersbedrijf',
    },
    {
        title: 'HBL: Kerstmarkt',
        description:
            'Online schedule for the christmas market event at my high-school',
        image: hblKerstmarkt,
        tags: ['WordPress'],
        demo_link: null,
        github_link: null,
    },
    {
        title: 'HBL: Lustrum',
        description:
            "Online schedule for the celebration of my high-school's 100th anniversary.",
        image: hblLustrum,
        tags: ['WordPress'],
        demo_link: null,
        github_link: null,
    },
    {
        title: 'Broodt Nu',
        description: 'REST API Backend for Broodt Nu',
        image: broodtNu,
        tags: ['Lumen', 'PHP'],
        demo_link: null,
        github_link: 'https://github.com/broodt-nu/backend',
    },
    {
        title: 'FormJS (MailJSv2)',
        description:
            'Backend for email submissions powering serverless applications',
        image: mailJS,
        tags: ['CubeQuence', 'MaterializeCSS', 'JS'],
        demo_link: 'https://form.castelnuovo.xyz',
        github_link: 'https://github.com/Luca-Castelnuovo/FormJS',
    },
    {
        title: 'MailJS',
        description:
            'Backend for email submissions powering serverless applications',
        image: mailJS,
        tags: ['CubeQuence', 'MaterializeCSS', 'JS'],
        demo_link: null,
        github_link: 'https://github.com/Luca-Castelnuovo-Archive/MailJS',
    },
    {
        title: 'Testing Platform',
        description: 'Centralized auth server for managing access to my apps',
        image: testingPlatform,
        tags: ['CubeQuence', 'MaterializeCSS', 'JS'],
        demo_link: 'https://test.castelnuovo.xyz/',
        github_link: 'https://github.com/Luca-Castelnuovo/TestingPlatform',
    },
    {
        title: 'URL Shortener',
        description:
            'URL shortener, with optional QR, confirmation page, password protection and expiring links',
        image: urlShortener,
        tags: ['CubeQuence', 'MaterializeCSS', 'JS'],
        demo_link: 'https://castelnuovo.xyz/',
        github_link: 'https://github.com/Luca-Castelnuovo/URL-Shortener',
    },
    {
        title: 'Apps',
        description: 'Centralized auth server for managing access to my apps',
        image: apps,
        tags: ['CubeQuence', 'MaterializeCSS', 'JS'],
        demo_link: null,
        github_link: 'https://github.com/Luca-Castelnuovo-Archive/Apps',
    },
    {
        title: 'InstaKilo',
        description: 'InstaGram clone that is a thousand times better',
        image: instakilo,
        tags: ['PHP', 'MaterializeCSS', 'JS'],
        demo_link: '/pdf/instakilo.pdf',
        github_link: 'https://github.com/Luca-Castelnuovo-Archive/InstaKilo',
    },
    {
        title: 'Wiskunde Site',
        description: 'REST API Backend for WiskundeSite',
        image: wiskundeSite,
        tags: ['Lumen', 'PHP'],
        demo_link: null,
        github_link: 'https://github.com/Luca-Castelnuovo-Archive/WiskundeSite',
    },
    {
        title: 'Portfolio',
        description: 'This site',
        image: portfolio,
        tags: ['React', 'Bulma'],
        demo_link: null,
        github_link: 'https://github.com/Luca-Castelnuovo/Personal-Site',
    },
    {
        title: 'Old Projects',
        description: 'Archive of all my old projects',
        image: archive,
        tags: [],
        demo_link: null,
        github_link: 'https://github.com/Luca-Castelnuovo-Archive',
    },
];

export default Projects;
