import hetHakHout from 'assets/images/hetHakHout.png';
import techAssistantsSoest from 'assets/images/techAssistantsSoest.png';
// import sluijterKappers from 'assets/images/NULL.png';
import urinalTractinfectionAI from 'assets/images/urinalTractinfectionAI.png';
import wiskundeSite from 'assets/images/wiskundeSite.png';
import techAssistantsNuth from 'assets/images/techAssistantsNuth.png';
import bvhBouwEnTimmerwerken from 'assets/images/bvhBouwEnTimmerwerken.png';
import hblBetaSterren from 'assets/images/hblBetaSterren.png';
import centrumInternationaleKinderontvoering from 'assets/images/centrumInternationaleKinderontvoering.png';
import testingPlatform from 'assets/images/testingPlatform.png';
import files from 'assets/images/files.png';
import instakilo from 'assets/images/NULL.png';
import accounts from 'assets/images/accounts.png';
import share from 'assets/images/NULL.png';
import api from 'assets/images/NULL.png';
import broodtNu from 'assets/images/broodtnu.png';
import deploy from 'assets/images/deploy.png';
import andAannemersbedrijf from 'assets/images/andAannemersbedrijf.png';
import hblKerstmarkt from 'assets/images/hblKerstmarkt.png';
import hblLustrum from 'assets/images/hbl.png';
import github from 'assets/images/github.png';

const Projects = [
    {
        title: 'Het Hak Hout',
        image: hetHakHout,
        description:
            'Natuurervaring in een unieke omgeving, Een historisch landschap langs de Kromme Rijn. Een verborgen juweel van de provincie Utrecht.  Ervaar Shinrin-Yuku, wandel langs kastelen en door het bos, traditioneel boogschieten, vogelspotten, Een stilte retraite of huur een cabin.',
        tags: ['React', 'Bulma'],
        // github_link: 'https://github.com/Luca-Castelnuovo/Het-Hak-Hout', // PRIVATE
        demo_link: 'https://hethakhout.nl'
    },
    {
        title: 'TechAssistants Soest',
        image: techAssistantsSoest,
        description:
            'Wij zijn een bedrijf opgericht door 3 studenten van Het Baarnsch Lyceum. Ons doel is om mensen te helpen die problemen met computers hebben.',
        tags: ['JS', 'MaterializeCSS'],
        github_link: 'https://github.com/Luca-Castelnuovo/TA-Soest',
        demo_link: 'https://ta-soest.nl/'
    },
    // {
    //     title: 'Sluijter Kappers',
    //     image: sluijterKappers,
    //     description:
    //         'SluijterKappers is een moderne en gezellige salon in Soest. Jij ontspant hier, terwijl een ervaren team van kappers je voorziet van een geweldige coupe.',
    //     tags: ['React', 'Bulma'],
    //     // github_link: 'https://github.com/Luca-Castelnuovo/SluijterKappers', // PRIVATE
    //     demo_link: 'https://sluijterkappers.nl/'
    // },
    {
        title: 'Urinaltractinfection-AI',
        image: urinalTractinfectionAI,
        description:
            'TensorFlow model created for our school thesis predicting the best UTI treatments.',
        tags: ['Python', 'TensorFlow'],
        github_link:
            'https://github.com/Luca-Castelnuovo/Urinaltractinfection-Medicineprediction-AI',
        demo_link:
            'https://cdn.lucacastelnuovo.nl/files/bigdata/pws.bf938df20099615d20d2fa3690684b718ac6da1c.pdf'
    },
    {
        title: 'WiskundeSite',
        image: wiskundeSite,
        description: 'REST API Backend for WiskundeSite',
        tags: ['PHP', 'Lumen'],
        github_link: 'https://github.com/Luca-Castelnuovo/WiskundeSite'
    },
    {
        title: 'TechAssistants Nuth',
        image: techAssistantsNuth,
        description:
            'Heeft u moeite met computers, tablets, smartphones, TV, Wi-Fi, internet of een andere vraag? Maak dan snel een afspraak.',
        tags: ['JS', 'MaterializeCSS'],
        github_link: 'https://github.com/Luca-Castelnuovo/TA-Nuth',
        demo_link: 'https://ta-nuth.nl/'
    },
    {
        title: 'BVH Bouw en Timmerwerken',
        image: bvhBouwEnTimmerwerken,
        description:
            'BVH Bouw en Timmerwerken is eenmanszaak in de omgeving Tiel. Wij staan klaar voor kwaliteit en klanttevredenheid.',
        tags: ['JS', 'MaterializeCSS'],
        github_link:
            'https://github.com/Luca-Castelnuovo/BVH-Bouw-en-Timmerwerken',
        demo_link: 'https://bvhbouwentimmerwerken.nl/'
    },
    {
        title: 'HBL: BetaSterren',
        image: hblBetaSterren,
        description:
            'BetaSterrenOnline is jouw persoonlijke assistent tijdens je dagelijkse werkzaamheden op school en in de betasterren klas.',
        tags: ['PHP', 'JS', 'MaterializeCSS'],
        github_link: 'https://github.com/Luca-Castelnuovo/BetaPlus',
        demo_link: 'https://betasterren.hetbaarnschlyceum.nl'
    },
    {
        title: 'Centrum Internationale Kinderontvoering',
        image: centrumInternationaleKinderontvoering,
        description:
            'Het juridisch expertise Centrum IKO staat een ieder die te maken krijgt met (dreigende) internationale kinderontvoering bij met advies, begeleiding, voorlichting en mediation.',
        tags: ['HTML', 'CSS', 'JS'],
        demo_link:
            'https://www.kinderontvoering.org/uploads/stappenplan/index.html'
    },
    {
        title: 'TestingPlatform',
        image: testingPlatform,
        description: 'System for quickly testing and hosting mock-ups.',
        tags: ['PHP', 'JS', 'MaterializeCSS'],
        github_link: 'https://github.com/Luca-Castelnuovo/TestingPlatform',
        demo_link: 'https://test.lucacastelnuovo.nl/'
    },
    {
        title: 'Files Manager',
        image: files,
        description: 'Auto pull repo for filestorage on my server.',
        tags: ['PHP', 'JS', 'MaterializeCSS'],
        github_link: 'https://github.com/Luca-Castelnuovo/FileStorage',
        demo_link: 'https://files.lucacastelnuovo.nl/'
    },
    {
        title: 'InstaKilo',
        image: instakilo,
        description: 'InstaGram clone that is a thousand times better.',
        tags: ['PHP', 'JS', 'MaterializeCSS'],
        github_link: 'https://github.com/Luca-Castelnuovo/InstaKilo'
    },
    {
        title: 'Accounts OAUTH',
        image: accounts,
        description:
            'OAuth Server for the authentication of my personal projects.',
        tags: ['PHP', 'JS', 'MaterializeCSS'],
        github_link: 'https://github.com/Luca-Castelnuovo/Accounts'
    },
    {
        title: 'Share Secrets',
        image: share,
        description: 'Easily share secrets, API accessible',
        tags: ['PHP', 'JS', 'MaterializeCSS'],
        github_link: 'https://github.com/Luca-Castelnuovo/Share'
    },
    {
        title: 'API',
        image: api,
        description: 'My personal API used for testing purposes.',
        tags: ['PHP'],
        github_link: 'https://github.com/Luca-Castelnuovo/API'
    },
    {
        title: 'Deploy',
        image: deploy,
        description: 'Auto-Deploy github repos to my server',
        tags: ['PHP', 'git-auto-deploy'],
        github_link: 'https://github.com/Luca-Castelnuovo/Deploy',
        demo_link: 'https://deploy.lucacastelnuovo.nl/'
    },
    {
        title: 'BroodtNu Backend',
        image: broodtNu,
        description: 'REST API Backend for Broodt Nu',
        tags: ['PHP', 'LUMEN'],
        github_link: 'https://github.com/broodt-nu/backend'
    },
    {
        title: 'A.N.D. Aannemersbedrijf',
        image: andAannemersbedrijf,
        // description: 'Description',
        tags: ['JS', 'Bootstrap'],
        github_link:
            'https://github.com/Luca-Castelnuovo/A.N.D.-Aannemersbedrijf',
        demo_link: 'http://and-aannemersbedrijf.nl/'
    },
    {
        title: 'HBL: Kerstmarkt',
        image: hblKerstmarkt,
        description: 'Schedule for the kerstmarkt event at our school.',
        tags: ['PHP', 'WordPress']
    },
    {
        title: 'HBL: Lustrum',
        image: hblLustrum,
        description:
            'Schedule for the celebration of our schools 100th anniversary.',
        tags: ['PHP', 'WordPress']
    },
    {
        title: 'View More',
        image: github,
        description: 'View all of my other projects GitHub.',
        tags: ['GitHub'],
        github_link: 'https://github.com/Luca-Castelnuovo?tab=repositories'
    }
];

export default Projects;
